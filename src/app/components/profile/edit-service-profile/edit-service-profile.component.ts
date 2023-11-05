import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-service-profile',
  templateUrl: './edit-service-profile.component.html',
  styleUrls: ['./edit-service-profile.component.css'],
})
export class EditServiceProfileComponent implements OnInit {
  private user: any;
  fields = {
    id: '',
    serviceName: '',
    name: '',
    image: '',
    description: '',
    contact: {
      mobile: '',
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
    public confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((res: any) => {
      this.user = res;
    });
  }

  saveDetails() {
    const patchData = {
      id: this.user.id,
      service: this.fields,
    };
    this.http.updateUserDetails(patchData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
