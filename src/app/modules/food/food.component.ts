import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../interfaces/food.interface';
import { Serving } from '../../interfaces/serving.interface';
import { FoodListComponent } from '../food-list/food-list.component';
import { SearchService } from '../food-list/services/search.service';
import { NutrientCircleComponent } from '../shared/components/nutrient-circle/nutrient-circle.component';
import { FoodInfoComponent } from './components/food-info/food-info.component';
import { NutriInfoComponent } from './components/nutri-info/nutri-info.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [NutrientCircleComponent, MatIcon, FoodListComponent,FoodInfoComponent, NutriInfoComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  private _searchService = inject(SearchService);
  private route = inject(ActivatedRoute);
  public loading: boolean = true;
  public food?: Food;
  public serving?: Serving;
  public nutrientsPercentage!: {
    protein: number;
    carbs: number;
    fats: number;
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;
      this._searchService.getFoodById(id).subscribe((food: Food) => {
        this.food = food;
        const Servings = food.servings?.serving;
        const usesGrams = Servings?.find((serving: Serving) => {
          return serving.measurement_description == 'g';
        });
        if (usesGrams) this.serving = usesGrams;
        else this.serving = Servings?.find((serving: Serving) => serving);
        this.calculateNutrientPercentages();
        this.loading = false;
      });
    });
  }

  private calculateNutrientPercentages() {
    if (this.food && this.serving) {
      const totalProtein = Number(this.serving?.protein);
      const totalCarbs = Number(this.serving?.carbohydrate);
      const totalFats = Number(this.serving?.fat);
      const totalNutrients = totalProtein + totalCarbs + totalFats;

      this.nutrientsPercentage = {
        protein: parseFloat(((totalProtein / totalNutrients) * 100).toFixed(2)),
        carbs: parseFloat(((totalCarbs / totalNutrients) * 100).toFixed(2)),
        fats: parseFloat(((totalFats / totalNutrients) * 100).toFixed(2)),
      };
    }
  }
}
