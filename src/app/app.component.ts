import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  template: `<app-layout></app-layout>`,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _authService = inject(AuthService);

  ngOnInit(): void {
    // this._authService.clearToken();
    this.startTokenCheck();
  }

  startTokenCheck() {
    this._authService.getToken();
    setInterval(() => {
      if (this._authService.isTokenExpired()) {
        console.log('Token expired, fetching new token...');
        this._authService.getToken();
      }
    }, 5000);
  }
}
