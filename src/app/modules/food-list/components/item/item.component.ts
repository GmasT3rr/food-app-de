import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { NutrientCircleComponent } from '../../../shared/components/nutrient-circle/nutrient-circle.component';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Food } from '../../../../interfaces/food.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, NutrientCircleComponent, MatIcon],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() food!: Food;
  private _router = inject(Router);

  goToFood() {
    if (this.food && this.food.food_id) {
      this._router.navigateByUrl(`api/foods/search/${this.food.food_id}`);
    }
  }
}
