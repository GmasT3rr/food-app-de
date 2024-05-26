import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { Food } from '../../../../interfaces/food.interface';
import { Serving } from '../../../../interfaces/serving.interface';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import moment from 'moment';
import { EntryPlaceService } from '../../../shared/services/entry-place.service';

@Component({
  selector: 'app-action-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIcon,
    MatSelect,
    MatOption,
    MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  templateUrl: './action-dialog.component.html',
  styleUrl: './action-dialog.component.scss',
})
export class ActionDialogComponent implements OnInit {
  @ViewChild(MatSelect) mySelector!: MatSelect;
  mealEntryPlace: string | undefined;
  servingSize: string = '1';
  // notInGrams: boolean = false;
  originalServing = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };
  currentServing = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };
  selectedDate: string;

  //TODO
  //Interface for dialogref??
  constructor(
    private _entryService: EntryPlaceService,
    public dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: { food: Food; serving: Serving }
  ) {
    this.servingSize = this.isGrams() ? "100" : "1";
    this.selectedDate = moment().format('YYYY-MM-DD');
    //
    this.mealEntryPlace = this._entryService.getMealEntryPlace()

    
  }

  ngOnInit(): void {
    const calories = Number(this.data.serving.calories);
    const protein = Number(this.data.serving.protein);
    const carbs = Number(this.data.serving.carbohydrate);
    const fat = Number(this.data.serving.fat);
    if (this.originalServing) {
      this.originalServing.calories = calories;
      this.originalServing.protein = protein;
      this.originalServing.carbs = carbs;
      this.originalServing.fat = fat;
      //
      this.currentServing.calories = calories;
      this.currentServing.protein = protein;
      this.currentServing.carbs = carbs;
      this.currentServing.fat = fat;
    }
  }

  isGrams(): boolean {
    return this.data.serving.measurement_description === 'g';
  }


  openSelector() {
    this.mySelector.open();
  }
  calculateNutritionalValues(): void {
    // Multiplicar los valores originales por el tamaño de la porción
    this.currentServing.calories =
      this.originalServing.calories * Number(this.servingSize);
    this.currentServing.protein =
      this.originalServing.protein * Number(this.servingSize);
    this.currentServing.carbs =
      this.originalServing.carbs * Number(this.servingSize);
    this.currentServing.fat =
      this.originalServing.fat * Number(this.servingSize);

    // Obtener la cantidad de porción métrica como un número
    const metricServingAmount = parseFloat(
      this.data.serving.metric_serving_amount || '1'
    );
    if (this.data.serving.measurement_description === 'g') {
      // Verificar si metricServingAmount es un número válido antes de dividir
      if (!isNaN(metricServingAmount) && metricServingAmount !== 0) {
        this.currentServing.calories /= metricServingAmount;
        this.currentServing.protein /= metricServingAmount;
        this.currentServing.carbs /= metricServingAmount;
        this.currentServing.fat /= metricServingAmount;
      } else {
        // Manejar el caso cuando metricServingAmount no es un número válido
        console.error(
          'Invalid metric serving amount:',
          this.data.serving.metric_serving_amount
        );
      }
    }
    // Limitar los valores a dos decimales
    this.currentServing.calories = parseFloat(
      this.currentServing.calories.toFixed(2)
    );
    this.currentServing.protein = parseFloat(
      this.currentServing.protein.toFixed(2)
    );
    this.currentServing.carbs = parseFloat(
      this.currentServing.carbs.toFixed(2)
    );
    this.currentServing.fat = parseFloat(this.currentServing.fat.toFixed(2));

  }
}
