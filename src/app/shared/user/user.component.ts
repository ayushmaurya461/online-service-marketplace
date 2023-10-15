import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  login = true;
  isAuthenticated = false;
  @Output() loggedIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthService, private router: Router) {}

  submitCredentials() {}

  changeMethod() {
    this.email = '';
    this.password = '';
    this.name = '';
    this.login = !this.login;
  }

  onSubmit(form: NgForm) {
    let userSubscription: Subscription;

    if (form.valid) {
      if (this.login) {
        userSubscription = this.authService
          .login(this.email, this.password)
          .subscribe({
            next: (res) => {
              this.router.navigate(['/home']);
              this.loggedIn.emit(true);
            },
            error: (err) => {
              console.log(err);
            },
          });
      } else {
        userSubscription = this.authService
          .signup(this.name, this.email, this.password)
          .subscribe({
            next: (res) => {
              this.router.navigate(['/home']);
              this.loggedIn.emit(true);
            },
            error: (err) => {
              console.log(err);
            },
          });
      }
    }
  }
}
