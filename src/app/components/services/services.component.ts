import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Loader } from 'src/app/services/loader.service';
import { Notification } from 'src/app/services/notification.service';
import { environment } from 'src/environment/base';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  public services: any;
  query = '';
  constructor(
    private http: HttpService,
    private router: Router,
    private loader: Loader,
    private notification: Notification
  ) {}

  ngOnInit() {
    this.loader.show();
    this.http.getAllServices().subscribe({
      next: (res: any) => {
        this.loader.hide();
        this.services = res.data;
      },
      error: () => {
        this.loader.hide();
        this.notification.error('Failed to load services');
      },
    });
  }

  search() {
    this.loader.show();
    this.http.searchServices(this.query).subscribe({
      next: (res) => {
        this.services = res.data;
        this.loader.hide();
      },
      error: () => {
        this.loader.hide();
        this.notification.error('Something went wrong');
      },
    });
  }
}
