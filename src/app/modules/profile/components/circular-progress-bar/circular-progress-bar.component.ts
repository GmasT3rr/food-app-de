import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circular-progress-bar.component.html',
  styleUrl: './circular-progress-bar.component.scss'
})
export class CircularProgressBarComponent implements OnChanges {
  @Input() caloriesConsumed: number = 0;
  @Input() calorieGoal: number = 2500;
  @Input() day?: Date;
  @Input() isForDailyCalories: boolean = false
  circumference: number = 2 * Math.PI * 47;
  progress: number = 0;
  circleClass: string = '';

  ngOnChanges(changes: SimpleChanges): void {    
     if (changes) {
       this.updateProgress();
       this.updateCircleClass();
     }
  }

  updateProgress(): void {
    const percent = Math.min(this.caloriesConsumed / this.calorieGoal, 1);
    this.progress = percent * this.circumference;
  }

  updateCircleClass(): void {    
    const difference = Math.abs(this.caloriesConsumed - this.calorieGoal);
    if(this.isForDailyCalories) return
    if (difference <= 250) {
      this.circleClass = 'good';
    } else if (difference <= 500) {
      this.circleClass = 'almost';
    } else {
      this.circleClass = 'bad';
    }
  }
  
}
