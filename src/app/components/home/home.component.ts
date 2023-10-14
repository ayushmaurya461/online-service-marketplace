import { Component, OnInit } from '@angular/core';
import { CarpenterService } from 'src/app/services/carpenter.service';
import { ElectricianService } from 'src/app/services/electrician.service';
import { GardeningService } from 'src/app/services/gardening.service';
import { PlumberService } from 'src/app/services/plumber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredCarpenters: any;
  featuredElecticians: any;
  featuredGardeners: any;
  featuredPlumbers: any;

  constructor(
    private plumber: PlumberService,
    private electrician: ElectricianService,
    private gardener: GardeningService,
    private carpenter: CarpenterService
  ) {}

  ngOnInit(): void {
    this.featuredCarpenters = this.carpenter.carpenterServiceProvider;
    this.featuredElecticians = this.electrician.electricianServiceProvider;
    this.featuredPlumbers = this.plumber.plumberServiceProvider;
    this.featuredGardeners = this.gardener;
  }
}
