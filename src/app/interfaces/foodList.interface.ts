import { Food } from './food.interface';

export interface FoodList {
  food: Food[];
  max_results: string;
  page_number: string;
  total_results: string;
}
