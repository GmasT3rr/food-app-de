import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { BehaviorSubject, catchError, of, finalize } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private isRefreshingToken = false;
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  getToken() {
    if (this.isRefreshingToken) {
      return this.tokenSubject.asObservable();
    }

    this.isRefreshingToken = true;

    return this._http.get(`${this.baseUrl}/token`).pipe(
      catchError((error) => {
        this.clearToken();
        return of(null);
      }),
      finalize(() => {
        this.isRefreshingToken = false;
      })
    ).subscribe((res: any) => {
      if (res) {
        const expiresIn = res.expires_in;
        // const expiresIn = 5;
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

        localStorage.setItem('token', res.access_token);
        localStorage.setItem('token_expiration', expirationDate.toString());
        this.tokenSubject.next(res.access_token);
      } else {
        this.tokenSubject.next(null);
      }
    });
  }

  token(): string | null {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('token_expiration');

    if (token && expiration) {
      const expirationDate = new Date(expiration);

      if (expirationDate > new Date()) {
        return token;
      } else {        
        this.clearToken();
        return null;
      }
    }

    return null;
  }

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
  }

  isTokenExpired(): boolean {
    const expiration = localStorage.getItem('token_expiration');
    if (expiration) {
      const expirationDate = new Date(expiration);
      return expirationDate <= new Date();
    }
    return true;
  }
}
