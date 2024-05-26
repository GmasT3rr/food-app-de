import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getToken() {
    const res = this._http.get(`${this.baseUrl}/token`);

    res.subscribe((res: any) => {      
      const expiresIn = res.expires_in;
      // const expiresIn = 20;
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

      localStorage.setItem('token', res.access_token);
      localStorage.setItem('token_expiration', expirationDate.toString());
      console.log('Done');
      
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
