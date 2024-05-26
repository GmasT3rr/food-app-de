import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'api/foods/search',
    loadChildren: () =>
      import('./modules/food-list/food-list.module').then((m) => m.FoodListModule),
  },
  {
    path: 'api/foods/search/:id',
    loadChildren: () =>
      import('./modules/food/food.module').then((m) => m.FoodModule),
  },
  {
    path: 'api/foods/profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path:'**', pathMatch:'full', redirectTo:'api/foods/search'
  }
];
