import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-profile',
  templateUrl: './service-profile.component.html',
  styleUrls: ['./service-profile.component.css'],
})
export class ServiceProfileComponent {
  constructor(private router: Router) {}
  editDetails() {
    this.router.navigate(['edit-service-profile']);
  }
}
