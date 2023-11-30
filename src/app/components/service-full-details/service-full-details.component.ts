import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Loader } from 'src/app/services/loader.service';
import { Notification } from 'src/app/services/notification.service';
import { environment } from 'src/environment/base';

@Component({
  selector: 'app-service-full-details',
  templateUrl: './service-full-details.component.html',
  styleUrls: ['./service-full-details.component.css'],
})
export class ServiceFullDetailsComponent implements OnInit {
  details!: any;
  id: any;
  baseUrl = '';
  constructor(
    private http: HttpService,
    private router: Router,
    private notification: Notification,
    private loader: Loader
  ) {}

  ngOnInit(): void {
    this.loader.show();
    this.baseUrl = environment.baseUrl;
    this.id = this.router.url.split('/')[2];
    this.http.getServiceDetails(this.id).subscribe({
      next: (res: any) => {
        this.loader.hide();
        this.details = res.service;
      },
      error: (err) => {
        this.loader.hide();
        this.notification.error('Something went wrong. Try reloading the page');
      },
    });
  }
}
