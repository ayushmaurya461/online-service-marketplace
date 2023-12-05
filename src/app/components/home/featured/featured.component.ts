import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Notification } from 'src/app/services/notification.service';
import { environment } from 'src/environment/base';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  @Input() serviceName!: string;
  services!: any;
  responsiveOptions!: any[];
  loading = false;
  public baseUrl = '';

  constructor(private http: HttpService, private notification: Notification) {}

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl;
    this.loading = true;
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.http.getFeatured(this.serviceName).subscribe({
      next: (res: any) => {
        this.services = res.data;
        this.loading = false;
      },
      error: () => {},
    });
  }
}
