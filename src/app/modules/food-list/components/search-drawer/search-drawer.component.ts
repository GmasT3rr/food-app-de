import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon, MatIconButton, MatInputModule],
  templateUrl: './search-drawer.component.html',
  styleUrl: './search-drawer.component.scss',
})
export class SearchDrawerComponent {
  _searchService = inject(SearchService)
  value = '';

  search(value: any) {
    this._searchService.setSearchTerm(value)
  }
  clearValue() {
    this._searchService.setSearchTerm('')
    this.value = '';
  }
}
