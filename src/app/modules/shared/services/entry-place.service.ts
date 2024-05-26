import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntryPlaceService {
  private mealEntryPlace = '';

  setMealEntryPlace(entry: string) {
    this.mealEntryPlace = entry;
  }

  getMealEntryPlace() {
    return this.mealEntryPlace;
  }

  constructor() {}
}
