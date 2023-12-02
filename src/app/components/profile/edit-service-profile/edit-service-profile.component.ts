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
import { Loader } from 'src/app/services/loader.service';
import { Notification } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-service-profile',
  templateUrl: './edit-service-profile.component.html',
  styleUrls: ['./edit-service-profile.component.css'],
})
export class EditServiceProfileComponent implements OnInit {
  private user: any;
  public base: any;
  private serviceId: any;

  fields = {
    id: 0,
    serviceName: '',
    name: '',
    image: '',
    description: '',
    contact: {
      mobile: null,
      email: '',
      whatsapp: '',
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
    license: [{ name: '', issuedBy: '', date: '' }],
    pricing: [{ serviceName: '', startsAt: '', description: '' }],
    paymentMethods: [],
    guaranteess: [{ name: '', description: '' }],
    serviceArea: '',
    faq: [{ que: '', ans: '' }],
    tools: '',
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
    public confirmService: ConfirmationService,
    private loader: Loader,
    private notification: Notification
  ) {
    this.serviceId = this.route.url.split('/')[2];
    this.base = environment.baseUrl;
    this.authService.user.subscribe((res: any) => {
      this.user = res;
    });
  }

  ngOnInit(): void {
    if (this.serviceId != '0') {
      this.loader.show();
      this.http.getServiceDetails(this.serviceId).subscribe({
        next: (res: any) => {
          this.loader.hide();
          this.fields = res.service;
        },
        error: (error) => {
          this.loader.hide();
          this.notification.error('Failed to load details.');
          console.error(error);
        },
      });
    }
  }

  triggerImageUpload() {
    const dpElement = document.getElementById('dp') as HTMLInputElement;
    dpElement.click();
  }

  onfileChange(evnt: any) {
    this.loader.show();
    const file = evnt.target.files[0];
    if (file) {
      this.http
        .updateServiceProfileImage({ id: this.serviceId, file: file })
        .subscribe({
          next: (res: any) => {
            this.loader.hide();
            this.fields.image = res.image;
            this.notification.success('Image uploaded Successfully');
          },
          error: (err) => {
            this.loader.hide();
            this.notification.error('Failed to upload the image.');
          },
        });
    }
  }

  addMorePricing() {
    this.fields.pricing.push({
      serviceName: '',
      startsAt: '',
      description: '',
    });
  }

  removeLastPricing() {
    this.fields.pricing.pop();
  }

  addLicense() {
    this.fields.license.push({
      name: '',
      issuedBy: '',
      date: '',
    });
  }

  removeLicense() {
    this.fields.license.pop();
  }

  addMorefaq() {
    this.fields.faq.push({ que: '', ans: '' });
  }

  removeLastfaq() {
    this.fields.faq.pop();
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
