import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-layout',
  templateUrl: './list-layout.component.html',
  styleUrls: ['./list-layout.component.css'],
})
export class ListLayoutComponent {
  constructor(public services: ServicesService, private router: Router) {}

  navigateToFullDetails(id: any) {
    this.router.navigate(['service', id]);
  }
}
