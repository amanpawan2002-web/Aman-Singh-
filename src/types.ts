export type Category = 'flights' | 'hotels' | 'experiences' | 'packages' | 'restaurants' | 'adventures';

export type PriceRange = 'economical' | 'medium' | 'expensive';

export interface TravelItem {
  id: string;
  category: Category;
  title: string;
  location: string;
  price: number;
  priceRange: PriceRange;
  rating: number;
  imageUrl: string;
  description: string;
  tags: string[];
  expertTip?: string;
}

export interface FlightItem extends TravelItem {
  airline: string;
  duration: string;
  stops: number;
}

export interface HotelItem extends TravelItem {
  amenities: string[];
  stars: number;
}
