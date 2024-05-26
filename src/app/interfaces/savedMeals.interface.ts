import { Food } from './food.interface';
import { Serving } from './serving.interface';


export interface SavedMeal {
  day: Date;
  meal: Meal;
}

export interface Meal {
  currentServing: CurrentServing;
  food: Food;
  mealEntryPlace: 'Breakfast' | 'Lunch' | 'Dinner';
  serving: Serving;
  servingSize: string;
  selectedDate?:string
}

export interface CurrentServing {
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
}
