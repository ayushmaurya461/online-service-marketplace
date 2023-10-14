import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CarpenterService } from 'src/app/services/carpenter.service';
import { ServiceProvider } from 'src/app/shared/model/service.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  layout: string = 'grid';
  sortOptions: any;
  sortby: any;

  constructor() {}

  ngOnInit() {
    this.sortOptions = [
      { name: 'Price, Low to High', code: 'LH' },
      { name: 'Price, High to Low', code: 'HL' },
      { name: 'Rating', code: 'Rating' },
    ];
  }

  toggleView(layout: string) {
    this.layout = layout;
  }
}
