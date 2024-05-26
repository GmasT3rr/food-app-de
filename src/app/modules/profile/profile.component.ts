import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailyCaloriesComponent } from './components/daily-calories/daily-calories.component';
import { MealEntryComponent } from './components/meal-entry/meal-entry.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,CalendarComponent,DailyCaloriesComponent,MealEntryComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
