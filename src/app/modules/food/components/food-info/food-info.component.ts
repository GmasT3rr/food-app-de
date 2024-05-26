import { Component, Input } from '@angular/core';
import { Serving } from '../../../../interfaces/serving.interface';
import { CommonModule } from '@angular/common';
import { NutrientCircleComponent } from '../../../shared/components/nutrient-circle/nutrient-circle.component';
import { Food } from '../../../../interfaces/food.interface';
import { ButtonAddToComponent } from '../button-add-to/button-add-to.component';

@Component({
  selector: 'app-food-info',
  standalone: true,
  imports: [CommonModule, NutrientCircleComponent,ButtonAddToComponent],
  templateUrl: './food-info.component.html',
  styleUrl: './food-info.component.scss'
})
export class FoodInfoComponent {
  @Input() loading?:boolean
  @Input() food?:Food
  @Input() serving?:Serving
  @Input() nutrientsPercentage!:any
}
