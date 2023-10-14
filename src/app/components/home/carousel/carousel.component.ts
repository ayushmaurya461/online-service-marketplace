import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  public activeItem: any;
  private count = 0;

  images = [
    {
      itemImageSrc: 'assets/services/carpenter.jpg',
      description:
        'Browse and choose from a variety of local carpenters offering their woodworking and furniture services. Find the perfect carpenter for custom furniture, repairs, or installations in your area.',
      title: 'Carpenter',
    },
    {
      itemImageSrc: 'assets/services/electrician.jpg',
      description:
        'Discover skilled local electricians on our platform who are ready to assist with your electrical needs. From wiring to lighting, connect with professionals for electrical work in your town.',
      title: 'Electrician',
    },
    {
      itemImageSrc: 'assets/services/gardening.jpg',
      description:
        'Explore local gardening experts who can transform your outdoor spaces. From landscape design to lawn care, choose from professionals to make your garden flourish in your community.',
      title: 'Gardening',
    },
    {
      itemImageSrc: 'assets/services/plumber.jpg',
      description: `'Connect with local plumbers in your town to address plumbing issues promptly. Whether it's leaks, clogs, or installations, discover skilled professionals for your plumbing needs.`,
      title: 'Plumber',
    },
    {
      itemImageSrc: 'assets/services/pest-control.jpg',
      description:
        'Find local pest control experts on our platform who are dedicated to eliminating unwanted intruders from your home or business. Choose professionals from your town for effective pest control solutions.',
      title: 'Pest Control',
    },
  ];

  ngOnInit() {
    this.activeItem = this.images[0];
    setInterval(() => {
      this.count++;
      this.activeItem = this.images[this.count];
    }, 5000);
  }

  navigateLeft() {
    if (this.count == 0) {
      this.count = 4;
    } else {
      this.count = this.count - 1;
    }
    this.activeItem = this.images[this.count];
  }

  navigateRight() {
    if (this.count == 5) {
      this.count = 0;
    } else {
      this.count = this.count + 1;
    }
    this.activeItem = this.images[this.count];
  }

  ngOnDestroy(): void {}
}
