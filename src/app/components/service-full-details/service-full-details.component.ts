import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  rating: any;
  review: any;
  serviceRating: any;
  visible = false;
  baseUrl = '';
  sameUser = false;
  constructor(
    private http: HttpService,
    private router: Router,
    private notification: Notification,
    private loader: Loader,
    private user: AuthService
  ) {}

  ngOnInit(): void {
    this.loader.show();
    this.baseUrl = environment.baseUrl;
    this.id = this.router.url.split('/')[2];
    this.http.getServiceDetails(this.id).subscribe({
      next: (res: any) => {
        this.loader.hide();
        this.details = res.service;
        this.serviceRating = res.rating;
        this.user.user.subscribe((res) => {
          this.http.getUserDetails(res?.id).subscribe({
            next: (response: any) => {
              if (this.id === response.service) {
                this.sameUser = true;
              }
            },
          });
        });
      },
      error: (err) => {
        this.loader.hide();
        this.notification.error('Something went wrong. Try reloading the page');
      },
    });
  }

  submitReview() {
    this.loader.show();
    this.user.user.subscribe((res) => {
      let body = {
        rating: this.rating,
        review: this.review,
        id: this.id,
        userId: res?.id,
      };
      this.http.postReview(body).subscribe({
        next: () => {
          this.loader.hide();
          this.visible = false;
          this.rating = null;
          this.review = '';
          this.notification.success('Review submitted');
        },
        error: () => {
          this.loader.hide();
          this.visible = false;
          this.rating = null;
          this.review = '';
          this.notification.error('Something went wrong. Try again later.');
        },
      });
    });
  }

  triggerReviewModal() {
    this.rating = null;
    this.visible = true;
  }
}
