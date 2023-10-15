import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent {
  constructor(public services: ServicesService, private router: Router) {}

  navigateToFullDetails(id: any) {
    this.router.navigate(['service', id]);
  }
}
