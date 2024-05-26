import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import moment from 'moment';
import { CircularProgressBarComponent } from '../circular-progress-bar/circular-progress-bar.component';
import { FormsModule } from '@angular/forms';
import { Meal, SavedMeal } from '../../../../interfaces/savedMeals.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CircularProgressBarComponent,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIcon,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  @Output() dateSelected = new EventEmitter<Date>(); // Add this line
  daysOfWeek: { day: string; date: number }[] = [];
  selectedMonth: number = new Date().getMonth();
  calorieGoal=2500
  months = [
    { name: 'January', value: 0 },
    { name: 'February', value: 1 },
    { name: 'March', value: 2 },
    { name: 'April', value: 3 },
    { name: 'May', value: 4 },
    { name: 'June', value: 5 },
    { name: 'July', value: 6 },
    { name: 'August', value: 7 },
    { name: 'September', value: 8 },
    { name: 'October', value: 9 },
    { name: 'November', value: 10 },
    { name: 'December', value: 11 },
  ];

  days!: { name: string; date: Date; calories: number }[];
  currentWeek: { name: string; date: Date; calories: number }[] = [];
  allUserSavedMeals: SavedMeal[] = [];

  constructor() {
    this.getStorage();
    this.loadConfigFromLocalStorage()
  }

  ngOnInit(): void {
    this.generateDaysOfMonth();
  }

  loadConfigFromLocalStorage(){
    const item = localStorage.getItem('config')
    if(item){
      const config = JSON.parse(item)
      this.calorieGoal = config.dailyIntake.toFixed(0)
    }
  }
  onChangeMonth(): void {
    // Crear una nueva fecha con el mes seleccionado
    const selectedDate = new Date();
    selectedDate.setMonth(this.selectedMonth);

    // Obtener el primer día del mes seleccionado
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      this.selectedMonth,
      1
    );

    // Retroceder al primer día de la semana del mes seleccionado (domingo)
    const firstDayOfWeek = new Date(firstDayOfMonth);
    firstDayOfWeek.setDate(
      firstDayOfMonth.getDate() - firstDayOfMonth.getDay()
    );

    // Generar los días de la primera semana del mes seleccionado
    this.currentWeek = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      const dayOfWeekIndex = date.getDay();
      const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'][dayOfWeekIndex]; // Array con los nombres de los días
      const calories = this.getCaloriesForDay(date);

      this.currentWeek.push({
        name: dayOfWeek,
        date: date,
        calories: calories,
      });
    }

    // Actualizar selectedMonth
    this.selectedMonth = selectedDate.getMonth();
  }

  generateDaysOfMonth(): void {
    const year = new Date().getFullYear(); // Asumiendo el año actual
    const daysInMonth = new Date(year, this.selectedMonth + 1, 0).getDate(); // Obtiene el número de días en el mes seleccionado
    this.days = [];
    // let currentWeek = []; // Arreglo para almacenar los días de la semana actual
    let currentDate = new Date(); // Fecha actual

    const firstDayOfWeek = 0; // Domingo
    const lastDayOfWeek = 6; // Sábado
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, this.selectedMonth, i);
      const dayOfWeekIndex = date.getDay();
      const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'][dayOfWeekIndex]; // Array con los nombres de los días

      // Puedes incluir aquí la lógica para obtener las calorías para cada día si es necesario
      // Ejemplo: const calories = this.getCaloriesForDay(date);

      const calories = this.getCaloriesForDay(date);

      this.days.push({ name: dayOfWeek, date: date, calories: calories }); // Cambia 0 con el valor real de calorías si es necesario
    }
    // Retroceder al primer día de la semana actual (domingo)
    while (currentDate.getDay() !== firstDayOfWeek) {
      currentDate.setDate(currentDate.getDate() - 1);
    }

    // Agregar los días de la semana actual al arreglo currentWeek
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);

      // Puedes incluir aquí la lógica para obtener las calorías para cada día si es necesario
      // Ejemplo: const calories = this.getCaloriesForDay(date);
      const calories = this.getCaloriesForDay(date);

      this.currentWeek.push({
        name: ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()],
        date: date,
        calories: calories,
      });
    }
  }
  getCaloriesForDay(date: Date): number {
    // Filtrar las comidas guardadas para el día especificado y sumar las calorías
    const dayMeals = this.allUserSavedMeals.filter((meal: any) => {
      const mealDate = new Date(meal.day);
      return mealDate.toDateString() === date.toDateString();
    });

    const totalCalories = dayMeals.reduce((total, meal: any) => {
      return total + meal?.meal.currentServing.calories;
      // return total + meal.caloriesConsumed;
    }, 0);

    return totalCalories;
  }
  // Función para obtener el número de semana de una fecha
  getWeekNumber(date: Date): number {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const week = Math.ceil(
      ((date.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
    );
    return week;
  }

  selectDay(day: { name: string; date: Date; calories: number }): void {
    this.dateSelected.emit(day.date);
  }
  navigateWeek(week: number): void {
    // Obtener la fecha del primer día de la semana actual (domingo)
    const firstDayOfWeek = this.currentWeek[0].date;

    // Calcular el número de días a desplazar
    const daysToShift = week * 7;

    // Obtener la fecha objetivo
    const targetDate = new Date(
      firstDayOfWeek.getTime() + daysToShift * 24 * 60 * 60 * 1000
    );

    // Obtener el primer día de la semana objetivo (domingo)
    const targetFirstDayOfWeek = new Date(targetDate);
    targetFirstDayOfWeek.setDate(targetDate.getDate() - targetDate.getDay());

    // Generar los días de la semana objetivo
    this.currentWeek = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(targetFirstDayOfWeek);
      date.setDate(targetFirstDayOfWeek.getDate() + i);
      const dayOfWeekIndex = date.getDay();
      const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'][dayOfWeekIndex]; // Array con los nombres de los días
      const calories = this.getCaloriesForDay(date);

      this.currentWeek.push({
        name: dayOfWeek,
        date: date,
        calories: calories,
      });
    }
    // Actualizar selectedMonth basado en el mes de cualquier día dentro de la semana actual
    this.selectedMonth = this.currentWeek[0].date.getMonth();
  }

  getStorage() {
    const ITEM = localStorage.getItem('AllUserSavedMeals');
    if (ITEM) {
      const allUserSavedMeals = JSON.parse(ITEM);
      this.allUserSavedMeals = allUserSavedMeals;
    } else {
      this.allUserSavedMeals = [];
    }
  }

  itemDeleted(bool: boolean) {
    this.getStorage();
    this.navigateWeek(1)
    this.navigateWeek(-1)
  }
}
