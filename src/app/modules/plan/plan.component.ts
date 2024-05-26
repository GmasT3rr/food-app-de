import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailyCaloriesComponent } from './components/daily-calories/daily-calories.component';
import { MealEntryComponent } from './components/meal-entry/meal-entry.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    DailyCaloriesComponent,
    MealEntryComponent,
  ],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent {}
