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
export class AppComponent implements OnInit, OnDestroy{
  private _authService = inject(AuthService);
  private tokenCheckInterval: any;

  ngOnInit(): void {
    this._authService.getToken();
    this.startTokenCheck();
  }

  ngOnDestroy(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }
  }

  startTokenCheck() {
    this.tokenCheckInterval = setInterval(() => {
      if (this._authService.isTokenExpired()) {
        console.log('Token expired, fetching new token...');
        this._authService.getToken();
      }
    }, 5000);
  }
}
