import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  sortOptions: any;

  constructor() {}

  ngOnInit() {
    this.sortOptions = [
      { name: 'Price, Low to High', code: 'LH' },
      { name: 'Price, High to Low', code: 'HL' },
      { name: 'Rating', code: 'Rating' },
    ];
  }
}
