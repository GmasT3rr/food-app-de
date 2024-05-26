import { Component } from '@angular/core';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SearchDrawerComponent } from './components/search-drawer/search-drawer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, SearchDrawerComponent, ItemListComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {

}
