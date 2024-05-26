import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CircularProgressBarComponent } from '../circular-progress-bar/circular-progress-bar.component';
import { SavedMeal, Meal } from '../../../../interfaces/savedMeals.interface';
import moment from 'moment';

@Component({
  selector: 'app-daily-calories',
  standalone: true,
  imports: [CommonModule, CircularProgressBarComponent],
  templateUrl: './daily-calories.component.html',
  styleUrl: './daily-calories.component.scss',
})
export class DailyCaloriesComponent {
  day = { name: '', date: '', calories: 0 };
  currentDate: string = '';
  currentDayName: string = '';
  nutrientData = {
    protein: 0,
    maxProtein: 175,
    carbs: 0,
    maxCarbs: 327,
    fat: 0,
    maxFat: 98,
  };
  calorieGoal=2500
  allUserSavedMeals: SavedMeal[] = [];
  currentDayMeals: SavedMeal[] = [];
  selectedDate: any;

  constructor() {
    this.getStorage();
    this.loadConfigFromLocalStorage()
  }

  loadConfigFromLocalStorage(){
    const item = localStorage.getItem('config')
    if(item){
      const config = JSON.parse(item)
      this.nutrientData.maxCarbs = config.macrosAmount.carbs.toFixed(0)
      this.nutrientData.maxFat = config.macrosAmount.fat.toFixed(0)
      this.nutrientData.maxProtein = config.macrosAmount.protein.toFixed(0)
      this.calorieGoal = config.dailyIntake.toFixed(0)
    }
  }

  filterMealsForCurrentDay(selectedDate: Date) {
    const currentDay = moment(selectedDate).startOf('day');
    this.currentDayMeals = this.allUserSavedMeals.filter((meal) =>
      moment(meal.day).isSame(currentDay, 'day')
    );
    this.day.date = currentDay.format('YYYY-MM-DD');
    this.day.name = currentDay.format('dddd');

    this.currentDate = currentDay.format('YYYY-MM-DD');
    this.currentDayName = currentDay.format('dddd');

    this.calculateDailyNutrients();
  }

  calculateDailyNutrients() {
    this.day.date = moment().format('YYYY-MM-DD');
    this.day.name = moment().format('dddd');

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    this.currentDayMeals.forEach((meal: SavedMeal) => {
      totalCalories += meal.meal.currentServing.calories;
      totalProtein += meal.meal.currentServing.protein;
      totalCarbs += meal.meal.currentServing.carbs;
      totalFat += meal.meal.currentServing.fat;
    });

    this.day.calories = Math.round(totalCalories);
    this.nutrientData.protein = Math.round(totalProtein);
    this.nutrientData.carbs = Math.round(totalCarbs);
    this.nutrientData.fat = Math.round(totalFat);
  }

  onDateSelected(selectedDate: Date) {
    this.selectedDate = selectedDate;
    this.filterMealsForCurrentDay(selectedDate);
  }
  itemDeleted(bool: boolean) {
    this.getStorage();
  }

  getStorage() {
    const ITEM = localStorage.getItem('AllUserSavedMeals');
    if (ITEM) {
      const allUserSavedMeals = JSON.parse(ITEM) as SavedMeal[];
      this.allUserSavedMeals = allUserSavedMeals.map((meal: SavedMeal) => ({
        ...meal,
        day: new Date(meal.day),
      }));
      if (this.selectedDate) {
        this.filterMealsForCurrentDay(this.selectedDate);
      } else this.filterMealsForCurrentDay(moment().toDate());
    } else {
      this.filterMealsForCurrentDay(moment().toDate());
    }
  }
}
