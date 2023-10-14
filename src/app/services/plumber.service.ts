import { Injectable } from '@angular/core';
import { ServiceProvider } from '../shared/model/service.model';

@Injectable({
  providedIn: 'root',
})
export class PlumberService {
  plumberServiceProvider: ServiceProvider[] = [
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
    {
      id: 3,
      name: 'Flowmaster Plumbing',
      images: ['assets/featured/plumber.jpg'],
      description: 'Your reliable plumber for all plumbing needs.',
      contact: {
        mobile: '555-123-4567',
        email: 'contact@flowmasterplumbing.com',
        website: 'https://www.flowmasterplumbing.com',
        socialMediaLinks: [
          {
            platform: 'Facebook',
            url: 'https://www.facebook.com/flowmasterplumbing',
          },
          { platform: 'Twitter', url: 'https://www.twitter.com/flowplumber' },
        ],
      },
      address: {
        street: '789 Pipe Avenue',
        city: 'Waterford',
        state: 'Plumbington',
        postalCode: '54321',
      },
      serviceCategories: [
        'Plumbing Services',
        'Pipe Repairs',
        'Drain Cleaning',
      ],
      businessHours: [
        { dayOfWeek: 'Monday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Tuesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Wednesday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Thursday', startTime: '8:00 AM', endTime: '5:00 PM' },
        { dayOfWeek: 'Friday', startTime: '8:00 AM', endTime: '5:00 PM' },
      ],
      pricing: [
        { serviceName: 'Pipe Repair', price: 120, currency: 'USD' },
        { serviceName: 'Drain Cleaning', price: 80, currency: 'USD' },
        { serviceName: 'Faucet Installation', price: 60, currency: 'USD' },
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
        { name: 'Licensed Plumber', issuingAuthority: 'Plumbing Board' },
      ],
      insurance: true,
      portfolio: [
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project1.jpg',
          description: 'Pipe Repair',
        },
        {
          imageUrl: 'https://www.flowmasterplumbing.com/images/project2.jpg',
          description: 'Drain Cleaning',
        },
      ],
      paymentMethods: ['Credit Card', 'Cash', 'Venmo'],
      bookingOptions: {
        acceptsOnlineBooking: true,
        bookingLink: 'https://www.flowmasterplumbing.com/book',
      },
      serviceGuarantees: [
        {
          name: 'Quick Response',
          description: 'We respond promptly to all plumbing service requests.',
        },
      ],
      serviceArea: 'Waterford and nearby areas',
      equipmentAndTools: ['Pipe Wrench', 'Plunger', 'Sewer Camera'],
      teamMembers: [
        { name: 'Mark Plumber', role: 'Master Plumber' },
        { name: 'Lisa Plumbing Technician', role: 'Plumbing Technician' },
      ],
      reviews: [
        {
          reviewerName: 'Satisfied Customer',
          reviewText:
            'Flowmaster Plumbing fixed my plumbing issue efficiently. Highly recommended!',
          rating: 5,
          reviewDate: new Date('2023-09-25'),
        },
        {
          reviewerName: 'Happy Homeowner',
          reviewText:
            'Great service and fair pricing. Will call them again if needed.',
          rating: 4,
          reviewDate: new Date('2023-09-27'),
        },
      ],
      termsAndConditions:
        'Please read our terms and conditions on our website.',
      cancellationPolicy:
        'Cancellations must be made at least 24 hours in advance.',
      customerSupportContact: {
        mobile: '555-987-6543',
        email: 'support@flowmasterplumbing.com',
      },
      frequentlyAskedQuestions: [
        {
          question: 'What types of plumbing issues do you handle?',
          answer:
            'We handle a wide range of plumbing problems, including leaks, clogs, and repairs.',
        },
        {
          question: 'Do you offer emergency plumbing services?',
          answer:
            'Yes, we provide 24/7 emergency plumbing services for urgent issues.',
        },
      ],
      overallRating: 4.2,
      priceRange: '800-2000',
    },
  ];

  constructor() {}
}
