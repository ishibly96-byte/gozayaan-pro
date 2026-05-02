export type Role = 'traveler' | 'agent' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Experience {
  id: string;
  agentId: string;
  title: string;
  description: string;
  category: 'History' | 'Nature' | 'Culinary' | 'Photography' | 'Active' | 'Relaxing';
  duration: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  itinerary: { time: string; description: string }[];
  highlights: string[];
  meetingPoint: string;
  included: string[];
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  location: string;
  languages: string[];
  bio: string;
  fullBio: string;
  certifications: string[];
  expertises: string[];
  rating: number;
  reviewCount: number;
  avatar: string;
  bannerImage: string;
  isVerified: boolean;
  baseRate: number;
  experiences: Experience[];
  reviews: Review[];
}

export const mockUsers: Record<string, User> = {
  traveler1: { id: 'traveler1', name: 'Anika Rahman', email: 'anika.rahman@example.com', role: 'traveler', avatar: '/pic5.jpg' },
  agent1: { id: 'tanvir', name: 'Tanvir Hasan', email: 'tanvir@example.com', role: 'agent', avatar: '/pic3.jpg' }
};

export const mockAgents: Agent[] = [
  {
    id: 'tanvir',
    name: 'Tanvir Hasan',
    title: 'Dhaka Heritage Expert',
    location: 'Dhaka',
    languages: ['Bengali', 'English', 'Hindi'],
    bio: 'Tracing the faded terracotta of colonial mansions and understanding the rhythms of old Dhaka.',
    fullBio: 'Walking through the narrow, serpentine alleys of Old Dhaka is like stepping through a portal in time. For generations, my family has called these vibrant, chaotic streets home. I\'ve spent my life tracing the faded terracotta of colonial mansions and understanding the intricate rhythms of neighborhoods that have pulsed with life for centuries.\n\nMy approach to guiding isn\'t just about reciting historical facts; it\'s about sensory immersion. We\'ll trace the aroma of slow-cooked biryani back to centuries-old eateries in Chawkbazar, and we\'ll decode the architectural whispers of Panam City, where history seems suspended in the dust motes dancing in the afternoon sun. I aim to offer a sophisticated adventure—one that connects you authentically to the tactile warmth and enduring spirit of Bangladesh.',
    certifications: ['Certified Tour Guide (Govt. of Bangladesh)', 'First Aid & CPR Certified'],
    expertises: ['Mughal Architecture', 'Street Food History', 'Urban Photography'],
    rating: 4.9,
    reviewCount: 120,
    avatar: '/pic3.jpg',
    bannerImage: '/panam-city.jpg',
    isVerified: true,
    baseRate: 2500,
    experiences: [
      {
        id: 'exp1',
        agentId: 'tanvir',
        title: 'Guided Walk through Panam City',
        description: 'Explore the abandoned historic city of Panam, a mesmerizing ghost town that was once a thriving center for the wealthy Hindu merchants of the 19th century. We will walk through the single street lined with over 50 dilapidated, beautifully intricate mansions, learning about the rise and fall of the Bengali cotton trade.',
        category: 'History',
        duration: '5 hours',
        price: 2500,
        currency: 'BDT',
        image: '/panam-city.jpg',
        images: [
          '/panam-city.jpg',
          'https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '09:00 AM', description: 'Meet at your hotel and drive to Sonargaon.' },
          { time: '10:30 AM', description: 'Enter Panam City and begin the historical architectural tour.' },
          { time: '01:00 PM', description: 'Traditional Bengali lunch at a local heritage restaurant.' },
          { time: '02:00 PM', description: 'Visit the Folk Art and Craft Museum.' }
        ],
        highlights: ['Exclusive access to certain manors', 'Private A/C Transport', 'Deep architectural history'],
        meetingPoint: 'Your hotel in Dhaka',
        included: ['Transport', 'Entry Tickets', 'Lunch', 'Bottled Water']
      },
      {
        id: 'exp6',
        agentId: 'tanvir',
        title: 'Sunset Boat Ride at Buriganga',
        description: 'Experience the heartbeat of old Dhaka from the water. We\'ll take a traditional wooden nouka (boat) during the golden hour to watch the chaotic beauty of the city unfold from the Buriganga river. This is not just a ride; it\'s an interactive journey where you can try rowing, interact with passing boatmen, and photograph the iconic Sadarghat terminal from a unique perspective.',
        category: 'Relaxing',
        duration: '2.5 hours',
        price: 1800,
        currency: 'BDT',
        image: '/sunset-boat.png',
        images: [
          '/sunset-boat.png',
          'https://images.unsplash.com/photo-1589578139886-f8319e71fd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '04:00 PM', description: 'Meet at Sadarghat terminal and brief safety orientation.' },
          { time: '04:30 PM', description: 'Board the traditional wooden boat. Learn about the boat\'s construction and history.' },
          { time: '05:00 PM', description: 'Golden hour navigation. Participate in a traditional tea-making session on the boat.' },
          { time: '05:30 PM', description: 'Sunset views. Interactive session with local boatmen sharing river legends.' },
          { time: '06:00 PM', description: 'Disembark and walk through the bustling evening market to Ahsan Manzil.' }
        ],
        highlights: ['Hands-on rowing opportunity', 'Private heritage wooden boat', 'Sunset river photography session', 'Interactive river life storytelling'],
        meetingPoint: 'Sadarghat Terminal main gate',
        included: ['Private boat charter', 'Local snacks & organic tea', 'Life vests', 'Guide services']
      }
    ],
    reviews: [
      {
        id: 'rev1',
        userId: 'traveler1',
        userName: 'Anika Rahman',
        userAvatar: '/pic5.jpg',
        rating: 5,
        comment: 'Tanvir provided an incredibly safe and enriching experience. His knowledge of the architecture in Panam City was extensive, but his storytelling made it truly memorable.',
        date: 'October 2023'
      }
    ]
  },
  {
    id: 'anika',
    name: 'Anika Rahman',
    title: 'Sylhet Nature Guide',
    location: 'Sylhet',
    languages: ['Bengali', 'English', 'Sylheti'],
    bio: 'Discover the soul of Sylhet in its tea gardens and quiet pathways.',
    fullBio: 'I grew up surrounded by the rolling, emerald hills of Sylhet. My childhood was spent wandering through the seemingly endless tea estates and learning the local flora and fauna. Sylhet isn\'t just a place to me; it\'s a feeling of tranquility that I want every traveler to experience.',
    certifications: ['Wilderness First Responder', 'Sustainable Tourism Certificate'],
    expertises: ['Eco-Tourism', 'Photography', 'Local Cultures'],
    rating: 4.9,
    reviewCount: 95,
    avatar: '/pic5.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isVerified: true,
    baseRate: 3000,
    experiences: [
      {
        id: 'exp7',
        agentId: 'anika',
        title: 'Traditional Tea Plucking Experience',
        description: 'Immerse yourself in the iconic tea culture of Sylhet. Join the local tea pluckers early in the morning in a scenic, undulating tea estate. You will learn the delicate art of plucking two leaves and a bud, discover the journey from leaf to cup through an interactive demonstration, and enjoy a traditional meal prepared by the estate community.',
        category: 'Culinary',
        duration: '3.5 hours',
        price: 2500,
        currency: 'BDT',
        image: '/tea-plucking.jpg',
        images: [
          '/tea-plucking.jpg',
          'https://images.unsplash.com/photo-1520202685718-4e8c5dc2afac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '07:30 AM', description: 'Pick up from hotel and head to the organic tea estate.' },
          { time: '08:00 AM', description: 'Welcome ceremony and orientation on tea varieties.' },
          { time: '08:30 AM', description: 'Hands-on tea plucking. Learn the technical "two leaves and a bud" technique.' },
          { time: '10:00 AM', description: 'Interactive processing demo: See how leaves are dried and rolled.' },
          { time: '10:30 AM', description: 'Gourmet tea tasting session with local heritage snacks.' }
        ],
        highlights: ['Authentic hands-on plucking', 'Direct interaction with plantation workers', 'Comprehensive leaf-to-cup masterclass', 'Photography access in restricted zones'],
        meetingPoint: 'Sylhet City Center Hotel Pick-up',
        included: ['Private transport', 'Estate access permits', 'Full breakfast & premium tea tasting', 'Traditional plucking basket']
      }
    ],
    reviews: []
  },
  {
    id: 'arif',
    name: 'Arif Ahmed',
    title: 'Sundarbans Explorer',
    location: 'Khulna',
    languages: ['Bengali', 'English'],
    bio: 'Expert navigation and wildlife tracking deep within the mangrove forests.',
    fullBio: 'The Sundarbans is not just a forest; it is a complex, tidal ecosystem that demands respect and intimate knowledge. I have spent 15 years guiding researchers, photographers, and adventurers deep into the heart of the world\'s largest mangrove forest.',
    certifications: ['Advanced Survival Training', 'Forestry Department Approved Guide'],
    expertises: ['Wildlife Tracking', 'Bird Watching', 'Survival Skills'],
    rating: 4.8,
    reviewCount: 156,
    avatar: '/pic2.png',
    bannerImage: '/sundarbans.png',
    isVerified: true,
    baseRate: 4500,
    experiences: [
      {
        id: 'exp4',
        agentId: 'arif',
        title: 'Deep Sundarbans Wildlife Tracking',
        description: 'A full-day robust exploration deep into the narrow creeks of the Sundarbans. Track animal footprints and observe the tidal biosphere from a specialized silent boat.',
        category: 'Active',
        duration: 'Full day',
        price: 8000,
        currency: 'BDT',
        image: '/sundarbans.png',
        images: [
          '/sundarbans.png',
          'https://images.unsplash.com/photo-1490718898115-373a62024de8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '06:00 AM', description: 'Depart from Mongla port.' },
          { time: '09:00 AM', description: 'Enter deep forest silently on a country boat.' },
          { time: '01:00 PM', description: 'Extensive tracking and forest walk (safe zones).' },
          { time: '05:00 PM', description: 'Return to Mongla.' }
        ],
        highlights: ['Expert tracking instruction', 'Silent boat navigation', 'Intimate knowledge of animal behavior'],
        meetingPoint: 'Mongla Port, Khulna',
        included: ['Boat Charter', 'Permits & Forest Guards', 'Meals on boat']
      }
    ],
    reviews: []
  },
  {
    id: 'elena',
    name: 'Elena Sarker',
    title: 'Cox\'s Bazar Surf & Stay',
    location: 'Cox\'s Bazar',
    languages: ['Bengali', 'English', 'Chittagonian'],
    bio: 'Discover the thrill of the waves and the secret sunset spots of the longest sea beach.',
    fullBio: 'Cox\'s Bazar is famous for its long beach, but the true magic happens away from the main tourist hubs.',
    certifications: ['ISA Surf Instructor', 'Lifeguard Certified'],
    expertises: ['Surfing', 'Seafood Cuisine', 'Beach Photography'],
    rating: 5.0,
    reviewCount: 88,
    avatar: '/pic1.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isVerified: true,
    baseRate: 3500,
    experiences: [
      {
        id: 'exp5',
        agentId: 'elena',
        title: 'Beginner Surf Camp & Sunset BBQ',
        description: 'Spend an afternoon learning the basics of surfing in a safe, uncrowded spot down the Marine Drive. Finish the day with a private beach BBQ.',
        category: 'Active',
        duration: '6 hours',
        price: 5500,
        currency: 'BDT',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1513220557451-b84742a8b98b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '02:00 PM', description: 'Meet at Kalatali and drive south.' },
          { time: '03:00 PM', description: 'Surf instruction and practice.' },
          { time: '05:30 PM', description: 'Relaxation and sunset prep.' },
          { time: '06:30 PM', description: 'Beach BBQ.' }
        ],
        highlights: ['Private surf lesson', 'Secluded beach spot', 'Amazing local seafood'],
        meetingPoint: 'Kalatali Beach Point',
        included: ['Surfboard rental', 'Instruction', 'BBQ Dinner', 'Transport']
      }
    ],
    reviews: []
  }
];
