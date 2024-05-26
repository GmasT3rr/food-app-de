import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatIcon,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatSliderModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  isLinear = false;
  userCalculatedTMB = 0;
  userCaloriesToConsume = 0;
  //
  healthProfileForm = this._formBuilder.group({
    birthday: [null, Validators.required, this.birthdayValidator()],
    gender: [null, Validators.required],
    height: [null, Validators.required],
    weight: [null, Validators.required],
  });
  goalsProfileForm = this._formBuilder.group({
    goal: [null, Validators.required],
    goalSpeed: ['Normal', Validators.required],
    activityLevel: [null, Validators.required],
    dietType: ['Balanced', Validators.required],
  });

  proteinPercentage = 0.25;
  fatPercentage = 0.275;
  carbPercentage = 0.475;

  fatToConsume = {
    calories: 0,
    percentage: 0,
    amount: 0,
  };
  proteinToConsume = {
    calories: 0,
    percentage: 0,
    amount: 0,
  };
  carbsToConsume = {
    calories: 0,
    percentage: 0,
    amount: 0,
  };

  constructor(
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    // Obtener el archivo config del localStorage
    const item = localStorage.getItem('config');

    // Si hay un archivo config almacenado
    if (item) {
      const config = JSON.parse(item);
      // Establecer los valores de los formularios basados en el archivo config
      this.healthProfileForm = this._formBuilder.group({
        birthday: [config.profile.birthday],
        gender: [config.profile.gender],
        height: [config.profile.height],
        weight: [config.profile.weight],
      });

      this.goalsProfileForm = this._formBuilder.group({
        goal: [config.goal.goal],
        goalSpeed: [config.goal.goalSpeed],
        activityLevel: [config.goal.activityLevel],
        dietType: [config.goal.dietType],
      });

      this.proteinPercentage = config.macrosPercentage.protein;
      this.fatPercentage = config.macrosPercentage.fat;
      this.carbPercentage = config.macrosPercentage.carbs;
      this.userCalculatedTMB = config.tmb;
      this.userCaloriesToConsume = config.dailyIntake;

      // Calcula la distribución de macronutrientes basada en los valores establecidos
      this.calculateMacronutrientDistribution(this.userCaloriesToConsume);
    }
  }
  //
  logForm(form: FormGroup) {
    // console.log(form.value);
  }

  openSnackBar(message: string, action: string, config: MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }

  saveSettings() {
    // console.log(
    //   this.goalsProfileForm.value,
    //   this.healthProfileForm.value,
    //   this.fatToConsume,
    //   this.carbsToConsume,
    //   this.proteinToConsume
    // );
    const config = {
      profile: this.healthProfileForm.value,
      goal: this.goalsProfileForm.value,
      macrosPercentage: {
        protein: this.proteinPercentage,
        fat: this.fatPercentage,
        carbs: this.carbPercentage,
      },
      macrosAmount: {
        protein: this.proteinToConsume.amount,
        fat: this.fatToConsume.amount,
        carbs: this.carbsToConsume.amount,
      },
      tmb: this.userCalculatedTMB,
      dailyIntake: this.userCaloriesToConsume,
    };
    localStorage.setItem('config', JSON.stringify(config));
    this.openSnackBar('Saved successfully.', 'Close', {
      duration: 5000,
    });
  }
  resetField(form: FormGroup, field: string) {
    form.get(field)?.setValue(null); // Establecer el valor del campo en null
  }

  calculateTMB() {
    if (this.goalsProfileForm.valid && this.healthProfileForm.valid) {
      const { gender, height, weight, birthday } = this.healthProfileForm.value;
      const { goal, goalSpeed } = this.goalsProfileForm.value;

      // Verificar si la fecha de nacimiento es válida
      if (!birthday) {
        console.error('Fecha de nacimiento no válida');
        return;
      }

      const age = this.calculateAge(birthday);
      const activityLevel = this.goalsProfileForm.value.activityLevel;

      let baseTMB = 0;
      if (gender && weight && height) {
        if (gender === 'Male') {
          baseTMB = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === 'Female') {
          baseTMB = 10 * weight + 6.25 * height - 5 * age - 161;
        }
      }

      let adjustedTMB = 0;
      if (activityLevel) {
        switch (activityLevel) {
          case 'Sedentary':
            adjustedTMB = baseTMB * 1.2;
            break;
          case 'Lightly Active':
            adjustedTMB = baseTMB * 1.375;
            break;
          case 'Moderately Active':
            adjustedTMB = baseTMB * 1.55;
            break;
          case 'Very Active':
            adjustedTMB = baseTMB * 1.725;
            break;
          case 'Extremely Active':
            adjustedTMB = baseTMB * 1.9;
            break;
        }
      }

      let adjustedCalories = adjustedTMB;
      if (goal) {
        switch (goal) {
          case 'Lose weight':
            adjustedCalories -= 400;
            break;
          case 'Gain weight':
            adjustedCalories += 400;
            break;
        }
      }

      let caloriesToConsume = adjustedCalories;

      if (goalSpeed && goal) {
        switch (goal) {
          case 'Lose weight':
            if (goalSpeed === 'Slow') {
              caloriesToConsume += 250;
            } else if (goalSpeed === 'Fast') {
              caloriesToConsume -= 250;
            } else {
              caloriesToConsume = adjustedCalories;
            }
            break;
          case 'Gain weight':
            if (goalSpeed === 'Slow') {
              caloriesToConsume -= 250;
            } else if (goalSpeed === 'Fast') {
              caloriesToConsume += 250;
            } else {
              caloriesToConsume = adjustedCalories;
            }
            break;
        }
      }

      this.userCalculatedTMB = adjustedTMB;
      this.userCaloriesToConsume = caloriesToConsume;
      this.calculateMacronutrientDistribution(caloriesToConsume);
    }
  }

  calculateAge(birthdate: string): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  birthdayValidator(): ValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve, reject) => {
        const birthday = control.value;
        const today = new Date();
        const birthdate = new Date(birthday);

        if (birthdate > today) {
          resolve({ invalidBirthday: true });
        } else {
          resolve(null);
        }
      });
    };
  }

  calculateMacrosPercentage() {
    const dietType = this.goalsProfileForm.value.dietType;
    if (dietType) {
      switch (dietType) {
        case 'Balanced':
          this.proteinPercentage = 0.25;
          this.fatPercentage = 0.275;
          this.carbPercentage = 0.475;
          break;
        case 'Ketogenic':
          this.proteinPercentage = 0.2;
          this.fatPercentage = 0.7;
          this.carbPercentage = 0.1;
          break;
        case 'Paleo':
          this.proteinPercentage = 0.3;
          this.fatPercentage = 0.425;
          this.carbPercentage = 0.275;
          break;
        case 'High Protein':
          this.proteinPercentage = 0.4;
          this.fatPercentage = 0.3;
          this.carbPercentage = 0.3;
          break;
        case 'High Carbs':
          this.proteinPercentage = 0.2;
          this.fatPercentage = 0.3;
          this.carbPercentage = 0.5;
          break;
        default:
          // Si se selecciona una opción no reconocida, se pueden mantener los valores predeterminados
          break;
      }
    }
  }

  // Función para calcular la distribución de macronutrientes
  calculateMacronutrientDistribution(
    totalCalories: number,
    fromSlider?: boolean
  ) {
    if (!fromSlider) this.calculateMacrosPercentage();

    const proteinCalories = totalCalories * this.proteinPercentage;
    const fatCalories = totalCalories * this.fatPercentage;
    const carbCalories = totalCalories * this.carbPercentage;

    this.proteinToConsume.calories = proteinCalories;
    this.proteinToConsume.percentage = this.proteinPercentage * 100;
    this.proteinToConsume.amount = proteinCalories / 4;

    this.fatToConsume.calories = fatCalories;
    this.fatToConsume.percentage = this.fatPercentage * 100;
    this.fatToConsume.amount = fatCalories / 9;

    this.carbsToConsume.calories = carbCalories;
    this.carbsToConsume.percentage = this.carbPercentage * 100;
    this.carbsToConsume.amount = carbCalories / 4;
  }

  onSliderChange(event: Event, name: string) {
    const newValue = parseFloat((event.target as HTMLInputElement).value) / 100;
    let oldValue = 0;
    switch (name) {
      case 'P':
        oldValue = this.proteinPercentage;
        this.adjustMacronutrientPercentages('P', newValue, oldValue);
        break;
      case 'C':
        oldValue = this.carbPercentage;

        this.adjustMacronutrientPercentages('C', newValue, oldValue);
        break;
      case 'F':
        oldValue = this.fatPercentage;

        this.adjustMacronutrientPercentages('F', newValue, oldValue);
        break;

      default:
        break;
    }
  }

  adjustMacronutrientPercentages(
    updated: string,
    newValue: number,
    oldValue: number
  ) {
    const difference = newValue - oldValue;

    switch (updated) {
      case 'P':
        this.proteinPercentage = newValue;
        this.carbPercentage = round(this.carbPercentage - difference / 2);
        this.fatPercentage = round(this.fatPercentage - difference / 2);
        break;
      case 'C':
        this.carbPercentage = newValue;

        this.proteinPercentage = round(this.proteinPercentage - difference / 2);
        this.fatPercentage = round(this.fatPercentage - difference / 2);
        break;
      case 'F':
        this.fatPercentage = newValue;

        this.proteinPercentage = round(this.proteinPercentage - difference / 2);
        this.carbPercentage = round(this.carbPercentage - difference / 2);
        break;

      default:
        break;
    }

    // Ajustar los valores si alguno se vuelve negativo
    if (this.proteinPercentage < 0) {
      const overflow = Math.abs(this.proteinPercentage);
      this.proteinPercentage = 0;
      this.carbPercentage = round(this.carbPercentage - overflow / 2);
      this.fatPercentage = round(this.fatPercentage - overflow / 2);
    }
    if (this.carbPercentage < 0) {
      const overflow = Math.abs(this.carbPercentage);
      this.carbPercentage = 0;
      this.proteinPercentage = round(this.proteinPercentage - overflow / 2);
      this.fatPercentage = round(this.fatPercentage - overflow / 2);
    }
    if (this.fatPercentage < 0) {
      const overflow = Math.abs(this.fatPercentage);
      this.fatPercentage = 0;
      this.proteinPercentage = round(this.proteinPercentage - overflow / 2);
      this.carbPercentage = round(this.carbPercentage - overflow / 2);
    }

    const macros = {
      F: this.fatPercentage,
      P: this.proteinPercentage,
      C: this.carbPercentage,
    };

    // Función para redondear un número a dos decimales
    function round(num: number): number {
      return Math.round((num + Number.EPSILON) * 1000) / 1000;
    }

    this.calculateMacronutrientDistribution(this.userCaloriesToConsume, true);
  }
}
