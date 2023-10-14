import { Address } from './service.model';

export interface SearchServices {
  id: number;
  images: any[];
  name: string;
  tags: string[];
  overallRating: number | string;
  priceRange: string;
  description: string;
  contact: number;
  address: Address;
}
