import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Notification } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'OSM';

  constructor(
    private authService: AuthService,
    public notification: Notification
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
