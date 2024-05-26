import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, OnInit, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { skip } from 'rxjs';
import { ItemComponent } from '../item/item.component';
import { FoodList } from '../../../../interfaces/foodList.interface';
import { Food } from '../../../../interfaces/food.interface';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemComponent, MatPaginator, MatPaginatorModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnInit {
  _searchService = inject(SearchService);
  searchTerm: string | undefined = undefined;
  loadingFoodList: boolean = true;
  loadingPaginator: boolean = true;
  foodList!: FoodList;
  originalFoodList!: FoodList;
  maxResults: number = 10;
  totalResults!: number;
  pageNumber = 0;

  pageChanged(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.maxResults = event.pageSize;
    this.loadingFoodList = true;
    this.getFoodList(
      this.searchTerm as string,
      this.pageNumber,
      this.maxResults
    );
  }

  //
  ngOnInit(): void {
    this._searchService.search$.pipe(skip(1)).subscribe((res: string) => {
      this.searchTerm = res;
      if (res) {
        this.getFoodList(this.searchTerm, this.pageNumber, this.maxResults);
      } else {
        this.loadingFoodList = true;
        this.loadingPaginator = true;
        this.foodList = this.originalFoodList;
      }
    });
  }

  getFoodList(searchTerm: string, page: number, maxResutls: number) {
    this._searchService
      .getFoods(searchTerm, page, maxResutls)
      .subscribe((foodList: FoodList) => {
        //
        this.maxResults = Number(foodList.max_results);
        this.totalResults = Number(foodList.total_results);
        this.pageNumber = Number(foodList.page_number);
        //

        this.foodList = foodList;
        this.parseFoodDescriptions();
        this.loadingFoodList = false;
        this.loadingPaginator = false;
      });
  }

  filterFood(food: any, searchTerm: string): boolean {
    if (!searchTerm) return true;
    searchTerm = searchTerm.toLowerCase();
    return food.name.toLowerCase().includes(searchTerm);
  }

  //Hello there curious DEV!
  //The following code was courtesy of my close friend Chat GPT
  //It breaks down food_description:"Per 100g - Calories: 60kcal | Fat: 3.25g | Carbs: 4.52g | Protein: 3.22g"
  //Into serving_size, kcals, fat, carbs & protein
  parseFoodDescriptions() {
    this.foodList.food.forEach((food: Food) => {
      if (food.food_description) {
        const description = food.food_description.trim();
        const parts = description.split('|');
        parts.forEach((part) => {
          const [key, value] = part.trim().split(':');
          let keyTrimmed = key.trim();
          let valueTrimmed = value.trim();

          // Handle special case for "Per"
          if (keyTrimmed.startsWith('Per')) {
            const perParts = keyTrimmed.split('-');
            if (perParts.length > 1) {
              food.serving_size = perParts[0].trim();
              // Assuming kcal is always the first entry after Per
              food.kcals = valueTrimmed
                .substring(0, valueTrimmed.indexOf('kcal'))
                .trim();
            }
          } else if (keyTrimmed === 'Calories') {
            food.kcals = valueTrimmed;
          } else {
            switch (keyTrimmed) {
              case 'Fat':
                food.fat = valueTrimmed;
                break;
              case 'Carbs':
                food.carbs = valueTrimmed;
                break;
              case 'Protein':
                food.protein = valueTrimmed;
                break;
            }
          }
        });
      }
    });
  }
}
