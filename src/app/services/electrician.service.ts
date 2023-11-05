import { Injectable } from '@angular/core';
import { ServiceProvider } from '../shared/model/service.model';

@Injectable({
  providedIn: 'root',
})
export class ElectricianService {
  electricianServiceProvider: ServiceProvider[] = [
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/services/electrician.jpg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'assets/featured/electric.jpeg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'assets/featured/electric.jpeg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'assets/featured/electric.jpeg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'assets/featured/electric.jpeg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'assets/featured/electric.jpeg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'assets/featured/electric.jpeg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 2,
      name: 'Eco Electric Solutions',
      images: ['assets/featured/electric.jpeg'],
      description: 'Your trusted electrician for all electrical needs.',
      contact: {
        mobile: '987-654-3210',
        email: 'contact@ecoelectricsolutions.com',
        website: 'https://www.ecoelectricsolutions.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/ecoelectricsolutions',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/ecoelectric' },
        ],
      },
      address: {
        street: '456 Watt Street',
        city: 'Electroville',
        state: 'Powerland',
        postalCode: '98765',
      },
      serviceCategories: ['Electrical Services', 'Wiring', 'Lighting'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '7:30 AM', endTime: '6:00 PM' },
        { dayOfWeek: 'Friday', startTime: '7:30 AM', endTime: '6:00 PM' },
      ],
      pricing: [
        { serviceName: 'Electrical Inspection', price: 75, currency: 'USD' },
        { serviceName: 'Wiring Installation', price: 150, currency: 'USD' },
        {
          serviceName: 'Lighting Fixture Installation',
          price: 100,
          currency: 'USD',
        },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['8:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['8:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        { name: 'Licensed Electrician', issuingAuthority: 'Electrical Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project1.jpg',
          description: 'Electrical Panel Upgrade',
        },
        {
          imageUrl: 'https://www.ecoelectricsolutions.com/images/project2.jpg',
          description: 'LED Lighting Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.ecoelectricsolutions.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Safety First',
          description: 'We prioritize safety in all our electrical work.',
        },
      ],
      serviceArea: 'Electroville and neighboring areas',
      equipmentAndTools: ['Voltage Tester', 'Wire Strippers', 'Multimeter'],
      teamMembers: [
        { name: 'James Electrician', role: 'Master Electrician' },
        { name: 'Emily Wireman', role: 'Electrical Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Eco Electric Solutions provided top-notch electrical services. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-20'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Prompt and professional service. Will use them again for sure.',
          rating: 4,
          reviewDate: new Date('2023-09-22'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '987-654-0000',
        email: 'support@ecoelectricsolutions.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of electrical work do you specialize in?',
          answer:
            'We specialize in a wide range of electrical services, including wiring, lighting, and more.',
        },
        {
          question: 'Do you offer emergency electrical services?',
          answer:
            'Yes, we provide 24/7 emergency electrical services for urgent issues.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
  ];

  constructor() {}
}
