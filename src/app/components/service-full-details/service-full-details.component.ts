import { Component, OnInit } from '@angular/core';
import { ElectricianService } from 'src/app/services/electrician.service';
import { ServiceProvider } from 'src/app/shared/model/service.model';

@Component({
  selector: 'app-service-full-details',
  templateUrl: './service-full-details.component.html',
  styleUrls: ['./service-full-details.component.css'],
})
export class ServiceFullDetailsComponent implements OnInit {
  details!: ServiceProvider;
  constructor(private es: ElectricianService) {}
  ngOnInit(): void {
    this.details = this.es.electricianServiceProvider[0];
  }
}
