import { CommonModule } from '@angular/common';
import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import moment from 'moment';
import { SavedMeal } from '../../../../interfaces/savedMeals.interface';
import { RouterModule } from '@angular/router';
import { EntryPlaceService } from '../../../shared/services/entry-place.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-meal-entry',
  standalone: true,
  imports: [CommonModule, MatIcon, RouterModule],
  templateUrl: './meal-entry.component.html',
  styleUrl: './meal-entry.component.scss',
})
export class MealEntryComponent {
  allUserSavedMeals: SavedMeal[] = [];
  currentDayMeals: SavedMeal[] = [];
  totalNutrients: { [key: string]: { kcal: number; protein: number; carbs: number; fat: number } } = {};

  mealEntries = [
    { name: 'Breakfast' },
    { name: 'Morning Snack' },
    { name: 'Lunch' },
    { name: 'Afternoon Snack' },
    { name: 'Dinner' },
  ];
  constructor(private _entryService: EntryPlaceService,private _snackBar: MatSnackBar) {
    const ITEM = localStorage.getItem('AllUserSavedMeals');
    if (ITEM) {
      const allUserSavedMeals = JSON.parse(ITEM) as SavedMeal[];
      this.allUserSavedMeals = allUserSavedMeals.map((meal: SavedMeal) => ({
        ...meal,
        day: new Date(meal.day),
      }));
      this.filterMealsForCurrentDay(moment().toDate());
    }
  }

  filterMealsForCurrentDay(selectedDate: Date) {
    const currentDay = moment(selectedDate).startOf('day');
    this.currentDayMeals = this.allUserSavedMeals.filter((meal) =>
      moment(meal.day).isSame(currentDay, 'day')
    );
    this.calculateTotalNutrients()
  }

  onDateSelected(selectedDate: Date) {
    this.filterMealsForCurrentDay(selectedDate);
  }
  setMealEntryPlace(entry:string){
    this._entryService.setMealEntryPlace(entry)
  }

  openSnackBar(message: string, action: string, config:MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }
  calculateTotalNutrients() {
    this.totalNutrients = {};
    for (const entry of this.mealEntries) {
      const mealsForEntry = this.currentDayMeals.filter((meal) => meal.meal.mealEntryPlace === entry.name);
      const totalKcal = mealsForEntry.reduce((acc, meal) => acc + meal.meal.currentServing.calories, 0);
      const totalProtein = mealsForEntry.reduce((acc, meal) => acc + meal.meal.currentServing.protein, 0);
      const totalCarbs = mealsForEntry.reduce((acc, meal) => acc + meal.meal.currentServing.carbs, 0);
      const totalFat = mealsForEntry.reduce((acc, meal) => acc + meal.meal.currentServing.fat, 0);
  
      // Redondeo de los valores de nutrientes hacia abajo a números enteros
      const roundedProtein = Math.floor(totalProtein);
      const roundedCarbs = Math.floor(totalCarbs);
      const roundedFat = Math.floor(totalFat);
  
      this.totalNutrients[entry.name] = {
        kcal: totalKcal,
        protein: roundedProtein,
        carbs: roundedCarbs,
        fat: roundedFat
      };
    }
  }
  
  deleteMeal(index: number) {
    this.allUserSavedMeals.splice(index, 1);
    localStorage.setItem('AllUserSavedMeals', JSON.stringify(this.allUserSavedMeals));
    this.filterMealsForCurrentDay(moment().toDate()); // Para actualizar la lista de comidas mostrada después de eliminar
    this.openSnackBar('Removed successfully.','Close',{
      duration:5000,
    })
  }
  
  
}
