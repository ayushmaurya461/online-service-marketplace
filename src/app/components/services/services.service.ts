import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SearchServices } from 'src/app/shared/model/searchService.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  services: SearchServices[] = [
    {
      name: 'Ayush Maurya',
      contact: 424324423,
      id: 234,
      tags: ['Electrician'],
      description:
        'Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
      },
      priceRange: '2000-5000',
      overallRating: 4.5,
      images: ['assets/featured/electric.jpeg'],
    },
    {
      name: 'Ayush Maurya',
      contact: 424324423,
      id: 234,
      tags: ['Electrician'],
      description:
        'Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
      },
      priceRange: '2000-5000',
      overallRating: 4.5,
      images: ['assets/featured/electric.jpeg'],
    },
    {
      name: 'Ayush Maurya',
      contact: 424324423,
      id: 234,
      tags: ['Electrician'],
      description:
        'Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
      },
      priceRange: '2000-5000',
      overallRating: 4.5,
      images: ['assets/featured/electric.jpeg'],
    },
    {
      name: 'Ayush Maurya',
      contact: 424324423,
      id: 234,
      tags: ['Electrician'],
      description:
        'Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.Your trusted electrician for all electrical needs.',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
      },
      priceRange: '2000-5000',
      overallRating: 4.5,
      images: ['assets/featured/electric.jpeg'],
    },
  ];

  constructor(private http: HttpService) {}

  getAllServices() {
    this.http.getServices().subscribe((res) => {
      this.services = res.response.data;
    });
  }
}
