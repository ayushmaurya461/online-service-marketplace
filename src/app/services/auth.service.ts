import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/base';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from '../shared/user/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.baseUrl;
  public user = new BehaviorSubject<User | null>(null);
  public userType = 0;
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  signup(
    name: string,
    email: string,
    mobile: any,
    password: string
  ): Observable<any> {
    const body = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };

    return this.http.post(this.baseUrl + 'user/signup', body).pipe(
      tap((response: any) => {
        const newUser = new User(
          email,
          response.name,
          response.token,
          response.mobile,
          response.id,
          response.userType
        );
        this.user.next(newUser);
        this.userType = newUser.userType;
        localStorage.setItem('userData', JSON.stringify(newUser));
      })
    );
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return;
    }

    const loadedData = JSON.parse(userData);
    const { email, name, id, token, mobile, userType } = loadedData;

    const user = new User(email, name, token, mobile, id, userType);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    this.http.post(this.baseUrl + 'user/validate', {}, { headers }).subscribe({
      next: (res: any) => {
        if (res.token_verified) {
          this.isAuthenticated.next(true);
          this.user.next(user);
          this.userType = user.userType;
        } else {
          this.logoutAndRedirect();
        }
      },
      error: (err) => {
        this.logoutAndRedirect();
      },
    });
  }

  logoutAndRedirect() {
    this.logout();
    this.router.navigate(['home']);
  }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post(this.baseUrl + 'user/login', body).pipe(
      tap((response: any) => {
        const newUser = new User(
          email,
          response.name,
          response.token,
          response.mobile,
          response.id,
          response.userType
        );
        this.user.next(newUser);
        this.userType = newUser.userType;
        localStorage.setItem('userData', JSON.stringify(newUser));
      })
    );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.isAuthenticated.next(false);
    this.router.navigate(['home']);
  }
}
