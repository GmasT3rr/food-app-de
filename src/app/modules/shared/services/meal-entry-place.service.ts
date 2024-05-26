import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealEntryService {
  private mealEntryPlace = '';
  private selectedDate!:Date;

  setMealEntryPlace(entry: string) {
    this.mealEntryPlace = entry;
  }

  getMealEntryPlace() {
    return this.mealEntryPlace;
  }
  ///
  setSelectedDate(selectedDate: Date) {
    this.selectedDate = selectedDate;
  }

  getSelectedDate() {
    return this.selectedDate;
  }

  constructor() {}
}
