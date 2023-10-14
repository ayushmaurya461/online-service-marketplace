import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'list-layout',
  templateUrl: './list-layout.component.html',
  styleUrls: ['./list-layout.component.css'],
})
export class ListLayoutComponent {
  constructor(public services: ServicesService) {}
}
