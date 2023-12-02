import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.css'],
})
export class ServiceOptionsComponent implements OnInit {
  userType = 0;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userType = this.authService.userType;
    console.log(this.authService.userType);
  }
}
