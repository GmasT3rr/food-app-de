import { Servings } from './serving.interface';

export interface Food {
  food_id: string;
  food_name: string;
  food_type: string;
  food_url: string;
  serving_size?: string;
  brand_name?: string;
  kcals?: string;
  carbs?: string;
  fat?: string;
  protein?: string;
  servings?: Servings;
  food_description?: string;
}
