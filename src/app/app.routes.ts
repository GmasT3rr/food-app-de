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
    path: 'api/foods/plan',
    loadChildren: () =>
      import('./modules/plan/plan.module').then((m) => m.PlanModule),
  },
   {
     path: 'api/foods/plan/settings',
     loadChildren: () =>
       import('./modules/settings/settings.module').then((m) => m.SettingsModule),
   },
  {
    path:'**', pathMatch:'full', redirectTo:'api/foods/search'
  }
];
