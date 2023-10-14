import { Component } from '@angular/core';
import { ServiceProvider } from 'src/app/shared/model/service.model';
import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  layout: string = 'list';

  products!: ServiceProvider[];

  constructor() {}

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.layout = 'list';
    }
  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}