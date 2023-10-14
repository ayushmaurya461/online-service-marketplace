import { Injectable } from '@angular/core';
import { ServiceProvider } from '../shared/model/service.model';

@Injectable({
  providedIn: 'root',
})
export class CarpenterService {
  carpenterServiceProvider: ServiceProvider[] = [
    {
      id: 1,
      images: ['assets/featured/carpenter-1.jpg'],
      name: 'Crafty Carpentry',
      description: 'Expert carpentry services for all your woodworking needs.',
      contact: {
        mobile: '123-456-7890',
        email: 'contact@craftycarpentry.com',
        website: 'https://www.craftycarpentry.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/craftycarpentry',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/craftycarpentry',
          },
        ],
      },
      address: {
        street: '123 Woodland Avenue',
        city: 'Carpenterville',
        state: 'Timberland',
        postalCode: '54321',
      },
      serviceCategories: ['Carpentry', 'Woodworking'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Custom Furniture', price: 150, currency: 'USD' },
        { serviceName: 'Cabinet Installation', price: 100, currency: 'USD' },
        { serviceName: 'Wood Repairs', price: 80, currency: 'USD' },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['9:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        {
          name: 'Certified Carpenter',
          issuingAuthority: 'Carpentry Association',
        },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project1.jpg',
          description: 'Custom Dining Table',
        },
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project2.jpg',
          description: 'Kitchen Cabinet Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.craftycarpentry.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quality Workmanship',
          description: 'We guarantee top-notch craftsmanship in every project.',
        },
      ],
      serviceArea: 'Carpenterville and surrounding areas',
      equipmentAndTools: ['Table Saw', 'Chisels', 'Router'],
      teamMembers: [
        { name: 'John Carpenter', role: 'Master Carpenter' },
        { name: 'Jane Craftsman', role: 'Apprentice Carpenter' },
      ],
      reviews: [
        {
          reviewerName: 'Happy Customer',
          reviewText:
            'Crafty Carpentry did an excellent job on our custom furniture. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-15'),
        },
        {
          reviewerName: 'Satisfied Client',
          reviewText:
            'Prompt service and great attention to detail. Will hire again!',
          rating: 4,
          reviewDate: new Date('2023-09-16'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '123-789-4560',
        email: 'support@craftycarpentry.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'How long does a typical project take?',
          answer:
            'The duration depends on the complexity of the project, but we aim for timely completion.',
        },
        {
          question: 'What types of wood do you work with?',
          answer:
            'We work with a variety of woods, including oak, maple, and pine.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
    {
      id: 1,
      images: ['assets/featured/carpenter-1.jpg'],
      name: 'Crafty Carpentry',
      description: 'Expert carpentry services for all your woodworking needs.',
      contact: {
        mobile: '123-456-7890',
        email: 'contact@craftycarpentry.com',
        website: 'https://www.craftycarpentry.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/craftycarpentry',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/craftycarpentry',
          },
        ],
      },
      address: {
        street: '123 Woodland Avenue',
        city: 'Carpenterville',
        state: 'Timberland',
        postalCode: '54321',
      },
      serviceCategories: ['Carpentry', 'Woodworking'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Custom Furniture', price: 150, currency: 'USD' },
        { serviceName: 'Cabinet Installation', price: 100, currency: 'USD' },
        { serviceName: 'Wood Repairs', price: 80, currency: 'USD' },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['9:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        {
          name: 'Certified Carpenter',
          issuingAuthority: 'Carpentry Association',
        },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project1.jpg',
          description: 'Custom Dining Table',
        },
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project2.jpg',
          description: 'Kitchen Cabinet Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.craftycarpentry.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quality Workmanship',
          description: 'We guarantee top-notch craftsmanship in every project.',
        },
      ],
      serviceArea: 'Carpenterville and surrounding areas',
      equipmentAndTools: ['Table Saw', 'Chisels', 'Router'],
      teamMembers: [
        { name: 'John Carpenter', role: 'Master Carpenter' },
        { name: 'Jane Craftsman', role: 'Apprentice Carpenter' },
      ],
      reviews: [
        {
          reviewerName: 'Happy Customer',
          reviewText:
            'Crafty Carpentry did an excellent job on our custom furniture. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-15'),
        },
        {
          reviewerName: 'Satisfied Client',
          reviewText:
            'Prompt service and great attention to detail. Will hire again!',
          rating: 4,
          reviewDate: new Date('2023-09-16'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '123-789-4560',
        email: 'support@craftycarpentry.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'How long does a typical project take?',
          answer:
            'The duration depends on the complexity of the project, but we aim for timely completion.',
        },
        {
          question: 'What types of wood do you work with?',
          answer:
            'We work with a variety of woods, including oak, maple, and pine.',
        },
      ],
      overallRating: 3.1,
      priceRange: '800-2000',
    },
    {
      id: 1,
      images: ['assets/featured/carpenter-1.jpg'],
      name: 'Crafty Carpentry',
      description: 'Expert carpentry services for all your woodworking needs.',
      contact: {
        mobile: '123-456-7890',
        email: 'contact@craftycarpentry.com',
        website: 'https://www.craftycarpentry.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/craftycarpentry',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/craftycarpentry',
          },
        ],
      },
      address: {
        street: '123 Woodland Avenue',
        city: 'Carpenterville',
        state: 'Timberland',
        postalCode: '54321',
      },
      serviceCategories: ['Carpentry', 'Woodworking'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Custom Furniture', price: 150, currency: 'USD' },
        { serviceName: 'Cabinet Installation', price: 100, currency: 'USD' },
        { serviceName: 'Wood Repairs', price: 80, currency: 'USD' },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['9:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        {
          name: 'Certified Carpenter',
          issuingAuthority: 'Carpentry Association',
        },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project1.jpg',
          description: 'Custom Dining Table',
        },
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project2.jpg',
          description: 'Kitchen Cabinet Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.craftycarpentry.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quality Workmanship',
          description: 'We guarantee top-notch craftsmanship in every project.',
        },
      ],
      serviceArea: 'Carpenterville and surrounding areas',
      equipmentAndTools: ['Table Saw', 'Chisels', 'Router'],
      teamMembers: [
        { name: 'John Carpenter', role: 'Master Carpenter' },
        { name: 'Jane Craftsman', role: 'Apprentice Carpenter' },
      ],
      reviews: [
        {
          reviewerName: 'Happy Customer',
          reviewText:
            'Crafty Carpentry did an excellent job on our custom furniture. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-15'),
        },
        {
          reviewerName: 'Satisfied Client',
          reviewText:
            'Prompt service and great attention to detail. Will hire again!',
          rating: 4,
          reviewDate: new Date('2023-09-16'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '123-789-4560',
        email: 'support@craftycarpentry.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'How long does a typical project take?',
          answer:
            'The duration depends on the complexity of the project, but we aim for timely completion.',
        },
        {
          question: 'What types of wood do you work with?',
          answer:
            'We work with a variety of woods, including oak, maple, and pine.',
        },
      ],
      overallRating: 4.3,
      priceRange: '800-2000',
    },
    {
      id: 1,
      images: ['assets/featured/carpenter-1.jpg'],
      name: 'Crafty Carpentry',
      description: 'Expert carpentry services for all your woodworking needs.',
      contact: {
        mobile: '123-456-7890',
        email: 'contact@craftycarpentry.com',
        website: 'https://www.craftycarpentry.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/craftycarpentry',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/craftycarpentry',
          },
        ],
      },
      address: {
        street: '123 Woodland Avenue',
        city: 'Carpenterville',
        state: 'Timberland',
        postalCode: '54321',
      },
      serviceCategories: ['Carpentry', 'Woodworking'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Custom Furniture', price: 150, currency: 'USD' },
        { serviceName: 'Cabinet Installation', price: 100, currency: 'USD' },
        { serviceName: 'Wood Repairs', price: 80, currency: 'USD' },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['9:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        {
          name: 'Certified Carpenter',
          issuingAuthority: 'Carpentry Association',
        },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project1.jpg',
          description: 'Custom Dining Table',
        },
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project2.jpg',
          description: 'Kitchen Cabinet Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.craftycarpentry.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quality Workmanship',
          description: 'We guarantee top-notch craftsmanship in every project.',
        },
      ],
      serviceArea: 'Carpenterville and surrounding areas',
      equipmentAndTools: ['Table Saw', 'Chisels', 'Router'],
      teamMembers: [
        { name: 'John Carpenter', role: 'Master Carpenter' },
        { name: 'Jane Craftsman', role: 'Apprentice Carpenter' },
      ],
      reviews: [
        {
          reviewerName: 'Happy Customer',
          reviewText:
            'Crafty Carpentry did an excellent job on our custom furniture. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-15'),
        },
        {
          reviewerName: 'Satisfied Client',
          reviewText:
            'Prompt service and great attention to detail. Will hire again!',
          rating: 4,
          reviewDate: new Date('2023-09-16'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '123-789-4560',
        email: 'support@craftycarpentry.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'How long does a typical project take?',
          answer:
            'The duration depends on the complexity of the project, but we aim for timely completion.',
        },
        {
          question: 'What types of wood do you work with?',
          answer:
            'We work with a variety of woods, including oak, maple, and pine.',
        },
      ],
      overallRating: 3.1,
      priceRange: '800-2000',
    },
    {
      id: 1,
      images: ['assets/featured/carpenter-1.jpg'],
      name: 'Crafty Carpentry',
      description: 'Expert carpentry services for all your woodworking needs.',
      contact: {
        mobile: '123-456-7890',
        email: 'contact@craftycarpentry.com',
        website: 'https://www.craftycarpentry.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/craftycarpentry',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/craftycarpentry',
          },
        ],
      },
      address: {
        street: '123 Woodland Avenue',
        city: 'Carpenterville',
        state: 'Timberland',
        postalCode: '54321',
      },
      serviceCategories: ['Carpentry', 'Woodworking'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Custom Furniture', price: 150, currency: 'USD' },
        { serviceName: 'Cabinet Installation', price: 100, currency: 'USD' },
        { serviceName: 'Wood Repairs', price: 80, currency: 'USD' },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['9:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        {
          name: 'Certified Carpenter',
          issuingAuthority: 'Carpentry Association',
        },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project1.jpg',
          description: 'Custom Dining Table',
        },
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project2.jpg',
          description: 'Kitchen Cabinet Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.craftycarpentry.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quality Workmanship',
          description: 'We guarantee top-notch craftsmanship in every project.',
        },
      ],
      serviceArea: 'Carpenterville and surrounding areas',
      equipmentAndTools: ['Table Saw', 'Chisels', 'Router'],
      teamMembers: [
        { name: 'John Carpenter', role: 'Master Carpenter' },
        { name: 'Jane Craftsman', role: 'Apprentice Carpenter' },
      ],
      reviews: [
        {
          reviewerName: 'Happy Customer',
          reviewText:
            'Crafty Carpentry did an excellent job on our custom furniture. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-15'),
        },
        {
          reviewerName: 'Satisfied Client',
          reviewText:
            'Prompt service and great attention to detail. Will hire again!',
          rating: 4,
          reviewDate: new Date('2023-09-16'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '123-789-4560',
        email: 'support@craftycarpentry.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'How long does a typical project take?',
          answer:
            'The duration depends on the complexity of the project, but we aim for timely completion.',
        },
        {
          question: 'What types of wood do you work with?',
          answer:
            'We work with a variety of woods, including oak, maple, and pine.',
        },
      ],
      overallRating: 4.6,
      priceRange: '800-2000',
    },
    {
      id: 1,
      images: ['assets/featured/carpenter-1.jpg'],
      name: 'Crafty Carpentry',
      description: 'Expert carpentry services for all your woodworking needs.',
      contact: {
        mobile: '123-456-7890',
        email: 'contact@craftycarpentry.com',
        website: 'https://www.craftycarpentry.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/craftycarpentry',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/craftycarpentry',
          },
        ],
      },
      address: {
        street: '123 Woodland Avenue',
        city: 'Carpenterville',
        state: 'Timberland',
        postalCode: '54321',
      },
      serviceCategories: ['Carpentry', 'Woodworking'],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Custom Furniture', price: 150, currency: 'USD' },
        { serviceName: 'Cabinet Installation', price: 100, currency: 'USD' },
        { serviceName: 'Wood Repairs', price: 80, currency: 'USD' },
      ],
      availability: [
        {
          dayOfWeek: 'Monday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Tuesday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        { dayOfWeek: 'Wednesday', availableTimes: ['9:00 AM - 12:00 PM'] },
        {
          dayOfWeek: 'Thursday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
        {
          dayOfWeek: 'Friday',
          availableTimes: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],
        },
      ],
      licensesAndCertifications: [
        {
          name: 'Certified Carpenter',
          issuingAuthority: 'Carpentry Association',
        },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project1.jpg',
          description: 'Custom Dining Table',
        },
        {
          imageUrl: 'https://www.craftycarpentry.com/images/project2.jpg',
          description: 'Kitchen Cabinet Installation',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'PayPal'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.craftycarpentry.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quality Workmanship',
          description: 'We guarantee top-notch craftsmanship in every project.',
        },
      ],
      serviceArea: 'Carpenterville and surrounding areas',
      equipmentAndTools: ['Table Saw', 'Chisels', 'Router'],
      teamMembers: [
        { name: 'John Carpenter', role: 'Master Carpenter' },
        { name: 'Jane Craftsman', role: 'Apprentice Carpenter' },
      ],
      reviews: [
        {
          reviewerName: 'Happy Customer',
          reviewText:
            'Crafty Carpentry did an excellent job on our custom furniture. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-15'),
        },
        {
          reviewerName: 'Satisfied Client',
          reviewText:
            'Prompt service and great attention to detail. Will hire again!',
          rating: 4,
          reviewDate: new Date('2023-09-16'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '123-789-4560',
        email: 'support@craftycarpentry.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'How long does a typical project take?',
          answer:
            'The duration depends on the complexity of the project, but we aim for timely completion.',
        },
        {
          question: 'What types of wood do you work with?',
          answer:
            'We work with a variety of woods, including oak, maple, and pine.',
        },
      ],
      overallRating: 3.4,
      priceRange: '800-2000',
    },
  ];
  constructor() {}
}
