import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent {
  constructor(public services: ServicesService) {}
}
