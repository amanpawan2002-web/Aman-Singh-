import { TravelItem } from '../types';

export const travelItems: TravelItem[] = [
  // HOTELS - Europe
  {
    id: 'h1',
    category: 'hotels',
    title: 'Hotel Ritz Paris',
    location: 'Paris, France',
    price: 1200,
    priceRange: 'expensive',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&q=80&w=1000',
    description: 'The pinnacle of French luxury. Experience historic elegance in the heart of Paris.',
    tags: ['Luxury', 'Historic', 'Spa'],
    expertTip: 'Book the Hemingway Bar for a legendary cocktail experience.'
  },
  {
    id: 'h2',
    category: 'hotels',
    title: 'CitizenM Amsterdam',
    location: 'Amsterdam, Netherlands',
    price: 180,
    priceRange: 'medium',
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
    description: 'Modern, tech-savvy rooms with a vibrant social atmosphere.',
    tags: ['Modern', 'Central', 'Tech'],
    expertTip: 'The communal living room is great for meeting fellow travelers.'
  },
  {
    id: 'h3',
    category: 'hotels',
    title: 'Generator Hostel Berlin',
    location: 'Berlin, Germany',
    price: 45,
    priceRange: 'economical',
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1555854816-802f1f428f1f?auto=format&fit=crop&q=80&w=1000',
    description: 'Stylish budget accommodation in the trendy Mitte district.',
    tags: ['Budget', 'Social', 'Design'],
    expertTip: 'Join the weekly walking tours organized by the staff.'
  },

  // HOTELS - SE Asia
  {
    id: 'h4',
    category: 'hotels',
    title: 'Amanpuri Phuket',
    location: 'Phuket, Thailand',
    price: 950,
    priceRange: 'expensive',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000',
    description: 'A sanctuary of peace overlooking the Andaman Sea.',
    tags: ['Beachfront', 'Wellness', 'Private'],
    expertTip: 'The holistic wellness center is world-class.'
  },
  {
    id: 'h5',
    category: 'hotels',
    title: 'Alila Ubud',
    location: 'Bali, Indonesia',
    price: 250,
    priceRange: 'medium',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    description: 'Hillside retreat with a stunning infinity pool over the Ayung River valley.',
    tags: ['Jungle', 'Infinity Pool', 'Nature'],
    expertTip: 'Request a valley view room for the best sunrise experience.'
  },
  {
    id: 'h6',
    category: 'hotels',
    title: 'Lub d Bangkok Siam',
    location: 'Bangkok, Thailand',
    price: 35,
    priceRange: 'economical',
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000',
    description: 'Award-winning hostel in the heart of Bangkoks shopping district.',
    tags: ['Budget', 'Vibrant', 'Central'],
    expertTip: 'The Siam Square location is unbeatable for street food access.'
  },

  // ADVENTURES
  {
    id: 'a1',
    category: 'adventures',
    title: 'Swiss Alps Paragliding',
    location: 'Interlaken, Switzerland',
    price: 220,
    priceRange: 'medium',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1533551284048-232191c4961d?auto=format&fit=crop&q=80&w=1000',
    description: 'Soar above the Eiger, Mönch, and Jungfrau peaks.',
    tags: ['Extreme', 'Scenic', 'Mountains'],
    expertTip: 'Go in the morning for the clearest views and calmest winds.'
  },
  {
    id: 'a2',
    category: 'adventures',
    title: 'Ha Giang Loop Motorbike Tour',
    location: 'Ha Giang, Vietnam',
    price: 150,
    priceRange: 'economical',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000',
    description: 'The ultimate road trip through northern Vietnams dramatic karst mountains.',
    tags: ['Road Trip', 'Cultural', 'Rugged'],
    expertTip: 'Hire a local guide (Easy Rider) if you are not an experienced rider.'
  },

  // EXPERIENCES
  {
    id: 'e1',
    category: 'experiences',
    title: 'Tuscan Wine Estate Tour',
    location: 'Tuscany, Italy',
    price: 120,
    priceRange: 'medium',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=1000',
    description: 'Private tasting and lunch at a family-owned vineyard.',
    tags: ['Wine', 'Food', 'Culture'],
    expertTip: 'The Brunello di Montalcino is a must-try here.'
  },
  {
    id: 'e2',
    category: 'experiences',
    title: 'Angkor Wat Sunrise Tour',
    location: 'Siem Reap, Cambodia',
    price: 40,
    priceRange: 'economical',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=1000',
    description: 'Witness the sun rising behind the iconic spires of Angkor Wat.',
    tags: ['History', 'Photography', 'Ancient'],
    expertTip: 'Arrive at 4:30 AM to secure a spot by the reflecting pond.'
  },

  // RESTAURANTS
  {
    id: 'r1',
    category: 'restaurants',
    title: 'Osteria Francescana',
    location: 'Modena, Italy',
    price: 450,
    priceRange: 'expensive',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000',
    description: 'Three-Michelin-star dining by Chef Massimo Bottura.',
    tags: ['Fine Dining', 'Michelin', 'Artistic'],
    expertTip: 'Book exactly 6 months in advance at midnight CET.'
  },
  {
    id: 'r2',
    category: 'restaurants',
    title: 'Jay Fai Street Food',
    location: 'Bangkok, Thailand',
    price: 60,
    priceRange: 'medium',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000',
    description: 'The world-famous Michelin-starred street food stall.',
    tags: ['Street Food', 'Michelin', 'Seafood'],
    expertTip: 'The crab omelet is expensive for street food but worth every penny.'
  }
];
