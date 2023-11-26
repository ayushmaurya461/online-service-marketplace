import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environment/base';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-service-profile',
  templateUrl: './edit-service-profile.component.html',
  styleUrls: ['./edit-service-profile.component.css'],
})
export class EditServiceProfileComponent implements OnInit {
  private user: any;
  public base: any;
  serviceId: any;

  fields = {
    id: 0,
    serviceName: '',
    name: '',
    image: '',
    description: '',
    contact: {
      mobile: null,
      email: '',
      website: '',
      socialMediaLinks: [
        {
          platform: 'Facebook',
          url: '',
        },
        {
          platform: 'Twitter',
          url: '',
        },
        {
          platform: 'Instagram',
          url: '',
        },
      ],
    },
    address: {
      street: '',
      city: '',
      country: '',
      state: '',
      postalCode: '',
    },
    serviceCategories: [],
    businessHours: [
      { day: 'Monday', start: '', end: '' },
      { day: 'Tuesday', start: '', end: '' },
      { day: 'Wednesday', start: '', end: '' },
      { day: 'Thursday', start: '', end: '' },
      { day: 'Friday', start: '', end: '' },
      { day: 'Saturday', start: '', end: '' },
      { day: 'Sunday', start: '', end: '' },
    ],
    pricing: [{ serviceName: '', startsAt: '', description: '' }],
    paymentMethods: [],
    guaranteess: [{ name: '', description: '' }],
    serviceArea: '',
    tools: [],
    teamMembers: [{ name: '', role: '', mobile: '' }],
    overallPriceRange: '',
  };

  categoryOptions = [
    { name: 'Electrician', code: 'electrician' },
    { name: 'Plumber', code: 'plumber' },
    { name: 'Pest Control', code: 'pest-control' },
    { name: 'Gardner', code: 'gardner' },
    { name: 'Carpenter', code: 'carpenter' },
  ];

  constructor(
    private authService: AuthService,
    public messageService: MessageService,
    private http: HttpService,
    private route: Router,
    public confirmService: ConfirmationService
  ) {
    this.serviceId = this.route.url.split('/')[2];
    this.base = environment.baseUrl;
    this.authService.user.subscribe((res: any) => {
      this.user = res;
    });
  }

  ngOnInit(): void {
    if (this.serviceId != '0') {
      this.http.getServiceDetails(this.serviceId).subscribe({
        next: (res: any) => {
          this.fields = res.service;
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  saveDetails() {
    const patchData = {
      id: this.serviceId,
      service: this.fields,
    };
    this.http.postService(patchData).subscribe({
      next: (res: any) => {
        this.serviceId = res.id;
        this.http
          .updateServiceInUser({ id: this.user.id, service: res.id })
          .subscribe({
            next: (saved) => {
              console.log(saved);
            },
            error: (err) => {
              console.log('Something went wrong');
            },
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
