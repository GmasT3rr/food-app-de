import { Component, Input } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { Food } from '../../../../interfaces/food.interface';
import { Serving } from '../../../../interfaces/serving.interface';
import { Meal, SavedMeal } from '../../../../interfaces/savedMeals.interface';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

import moment, { duration } from 'moment';

@Component({
  selector: 'app-button-add-to',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './button-add-to.component.html',
  styleUrl: './button-add-to.component.scss',
})
export class ButtonAddToComponent {
  @Input() food?: Food;
  @Input() serving?: Serving;
  meal!: Meal;
  savedMeal: SavedMeal = {
    day: new Date(),
    meal: this.meal,
  };
  allUserSavedMeals: SavedMeal[];

  constructor(public dialog: Dialog, private _snackBar: MatSnackBar) {
    const ITEM = localStorage.getItem('AllUserSavedMeals');

    if (ITEM) {
      const allUserSavedMeals = JSON.parse(ITEM);
      this.allUserSavedMeals = allUserSavedMeals;
    } else {
      this.allUserSavedMeals = [];
    }
  }

  openSnackBar(message: string, action: string, config:MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(ActionDialogComponent, {
      width: '100%',
      data: {
        food: this.food,
        serving: this.serving,
      },
    });

    dialogRef.closed.subscribe((result: any) => {
      if (result) {
        const meal = result as Meal;
        this.saveMeal(meal);
        this.openSnackBar('Added successfully.','Close',{
          duration:5000,
        })
      } else {
        console.log('closed without data');
      }
    });
  }

  saveMeal(meal: Meal) {
    const savedMeal: SavedMeal = {
      day: moment().startOf('day').toDate(),
      meal: meal,
    };

    if (meal.selectedDate) {
      savedMeal.day = moment(meal.selectedDate).startOf('day').toDate();
    } else {
      savedMeal.day = moment().startOf('day').toDate();
    }

    this.allUserSavedMeals.push(savedMeal);

    localStorage.setItem(
      'AllUserSavedMeals',
      JSON.stringify(this.allUserSavedMeals)
    );
  }
}
