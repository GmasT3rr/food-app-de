import { Component } from '@angular/core';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SearchDrawerComponent } from './components/search-drawer/search-drawer.component';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { ConfigDialogComponent } from './config-dialog/config-dialog.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, SearchDrawerComponent, ItemListComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent {
  constructor(public dialog: Dialog) {
    const item = localStorage.getItem('config');
    if (!item) this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(ConfigDialogComponent, {
      width: '100%',
      height:'100vh'
    });

    dialogRef.closed.subscribe((result: any) => {
      console.log('closed without data');
    });
  }
}
