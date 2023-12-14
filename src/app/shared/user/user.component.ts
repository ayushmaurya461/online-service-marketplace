import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Loader } from 'src/app/services/loader.service';
import { Notification } from 'src/app/services/notification.service';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  mobile = '';
  login = true;
  isAuthenticated = false;
  @Output() loggedIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private loader: Loader,
    private notification: Notification
  ) {}

  submitCredentials() {}

  changeMethod() {
    this.email = '';
    this.password = '';
    this.name = '';
    this.mobile = '';
    this.login = !this.login;
  }

  onSubmit(form: NgForm) {
    let userSubscription: Subscription;

    if (form.valid) {
      this.loader.show();
      if (this.login) {
        userSubscription = this.authService
          .login(this.email, this.password)
          .subscribe({
            next: (res) => {
              this.notification.success('Logged In');
              this.router.navigate(['/home']);
              this.loggedIn.emit(true);
              this.loader.hide();
            },
            error: (err) => {
              console.log(err);
              this.notification.error('Incorrect Email or Password');
              this.loader.hide();
            },
          });
      } else {
        userSubscription = this.authService
          .signup(this.name, this.email, this.mobile, this.password)
          .subscribe({
            next: (res) => {
              this.router.navigate(['/home']);
              this.loggedIn.emit(true);
              this.loader.hide();
            },
            error: (err) => {
              console.log(err);
              this.loader.hide();
            },
          });
      }
    }
  }
}
