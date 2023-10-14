export interface ServiceProvider {
  id: number; // Unique identifier for the service provider
  images: any[];
  name: string; // Name of the service provider
  description: string; // Description of the services offered
  contact: ContactDetails; // Contact details of the service provider
  address: Address; // Physical address of the service provider
  serviceCategories: string[]; // Categories of services offered (e.g., Plumbing, Electrical, etc.)
  businessHours: BusinessHour[]; // Business hours including days and times of operation
  pricing: ServicePricing[]; // Pricing details for services offered
  availability?: ServiceAvailability[]; // Availability schedule for booking services
  licensesAndCertifications?: Certification[]; // Licenses and certifications held by the provider
  insurance?: boolean; // Indicates whether the provider has liability insurance
  portfolio?: PortfolioItem[]; // Portfolio showcasing previous work
  paymentMethods?: string[]; // Accepted payment methods (e.g., Credit Card, Cash)
  bookingOptions?: BookingOptions; // Booking and scheduling options
  serviceGuarantees?: ServiceGuarantee[]; // Guarantees or warranties for services
  serviceArea?: string; // Geographical area where services are offered
  equipmentAndTools?: string[]; // Specialized equipment or tools used for services
  teamMembers?: TeamMember[]; // List of team members (if applicable)
  reviews?: Review[]; // Customer reviews and ratings
  termsAndConditions?: string; // Terms and conditions for using services
  cancellationPolicy?: string; // Policy for canceling or rescheduling appointments
  customerSupportContact?: ContactDetails; // Contact information for customer support
  frequentlyAskedQuestions?: FAQ[]; // Frequently asked questions and answers
  overallRating: number | string;
  priceRange: string;
}

export interface ContactDetails {
  mobile: string;
  email: string;
  website?: string;
  socialMediaLinks?: SocialMediaLink[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface BusinessHour {
  dayOfWeek: string; // Day of the week (e.g., Monday, Tuesday, etc.)
  startTime: string; // Opening time (e.g., "9:00 AM")
  endTime: string; // Closing time (e.g., "5:00 PM")
}

export interface ServicePricing {
  serviceName: string;
  price: number;
  currency: string; // Currency code (e.g., USD)
}

export interface ServiceAvailability {
  dayOfWeek: string; // Day of the week (e.g., Monday, Tuesday, etc.)
  availableTimes: string[]; // Available time slots on that day
}

export interface Certification {
  name: string;
  issuingAuthority: string;
  expirationDate?: Date;
}

export interface PortfolioItem {
  imageUrl: string;
  description: string;
}

export interface BookingOptions {
  acceptsOnlineBooking: boolean;
  bookingLink?: string;
  bookingPhoneNumber?: string;
}

export interface ServiceGuarantee {
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

export interface Review {
  reviewerName: string;
  reviewText: string;
  rating: number; // Rating on a scale (e.g., 1 to 5)
  reviewDate: Date;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
