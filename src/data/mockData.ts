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
  traveler1: { id: 'traveler1', name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'traveler', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  agent1: { id: 'tanvir', name: 'Tanvir H.', email: 'tanvir@example.com', role: 'agent', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
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
    avatar: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1580214611598-c17822d56a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1580214611598-c17822d56a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1580214611598-c17822d56a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
        id: 'exp2',
        agentId: 'tanvir',
        title: 'Street Food at Chawkbazar',
        description: 'Taste the best culinary delights of Old Dhaka in this evening walking tour through the bustling, chaotic streets of Chawkbazar. Sample Mughal-inspired dishes from vendors whose families have been cooking the same recipes for over a century.',
        category: 'Culinary',
        duration: '3 hours',
        price: 1500,
        currency: 'BDT',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '05:00 PM', description: 'Meet at Dhaka University TSC.' },
          { time: '05:30 PM', description: 'Rickshaw ride into old Dhaka.' },
          { time: '06:00 PM', description: 'Begin food tasting (Boti Kebab, Bakarkhani, etc.).' },
          { time: '08:00 PM', description: 'End tour with traditional sweet tea and misti.' }
        ],
        highlights: ['Taste 8-10 authentic local dishes', 'Learn the history of Mughal cuisine', 'Navigate the alleys safely with a local'],
        meetingPoint: 'Dhaka University TSC',
        included: ['All food tastings', 'Rickshaw fare during the tour', 'Guide services']
      },
      {
        id: 'exp6',
        agentId: 'tanvir',
        title: 'Sunset Boat Ride at Buriganga',
        description: 'Experience the heartbeat of old Dhaka from the water. We\'ll take a traditional wooden nouka (boat) during the golden hour to watch the chaotic beauty of the city unfold from the Buriganga river, ending with a visit to Ahsan Manzil.',
        category: 'Relaxing',
        duration: '2.5 hours',
        price: 1800,
        currency: 'BDT',
        image: 'https://images.unsplash.com/photo-1550974955-46aa1a3f01ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1550974955-46aa1a3f01ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1589578139886-f8319e71fd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '04:00 PM', description: 'Meet at Sadarghat terminal.' },
          { time: '04:30 PM', description: 'Board the traditional wooden boat.' },
          { time: '05:30 PM', description: 'Sunset views over the river while sipping local tea.' },
          { time: '06:00 PM', description: 'Disembark and brief walk to Ahsan Manzil.' }
        ],
        highlights: ['Golden hour photography', 'Private boat ride', 'Local tea on the water'],
        meetingPoint: 'Sadarghat Terminal',
        included: ['Boat rental', 'Tea/Snacks', 'Guide services']
      }
    ],
    reviews: [
      {
        id: 'rev1',
        userId: 'traveler1',
        userName: 'Sarah Jenkins',
        userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 5,
        comment: 'Tanvir provided an incredibly safe and enriching experience. His knowledge of the architecture in Panam City was extensive, but his storytelling made it truly memorable. Highly recommend booking with him if you want an authentic view of the city.',
        date: 'October 2023'
      },
      {
        id: 'rev2',
        userId: 'traveler2',
        userName: 'Michael T.',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 5,
        comment: 'The food tour was spectacular! I would never have found those hidden kebab spots without Tanvir.',
        date: 'September 2023'
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
    fullBio: 'I grew up surrounded by the rolling, emerald hills of Sylhet. My childhood was spent wandering through the seemingly endless tea estates and learning the local flora and fauna. Sylhet isn\'t just a place to me; it\'s a feeling of tranquility that I want every traveler to experience.\n\nFrom the crystal-clear waters of Lalakhal to the lush greenery of Ratargul Swamp Forest, I specialize in curating experiences that allow you to disconnect and embrace nature. I know the best times to visit specific spots to avoid the crowds, and I have deep connections with the local Khasi communities, offering an authentic glimpse into their sustainable way of life.',
    certifications: ['Wilderness First Responder', 'Sustainable Tourism Certificate'],
    expertises: ['Eco-Tourism', 'Photography', 'Local Cultures'],
    rating: 4.9,
    reviewCount: 95,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isVerified: true,
    baseRate: 3000,
    experiences: [
      {
        id: 'exp3',
        agentId: 'anika',
        title: 'Ratargul Swamp Forest Canoe Trip',
        description: 'Glide silently through the only freshwater swamp forest in Bangladesh. We will use a traditional wooden canoe to navigate the submerged trees, observing local birds and enjoying the surreal tranquility of the flooded forest.',
        category: 'Nature',
        duration: '4 hours',
        price: 3500,
        currency: 'BDT',
        image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1582650390886-35db2df5ce96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '08:00 AM', description: 'Pick up from Sylhet town.' },
          { time: '09:30 AM', description: 'Arrive at Ratargul and board private canoe.' },
          { time: '11:00 AM', description: 'Climb the watchtower for panoramic views.' },
          { time: '12:00 PM', description: 'Return journey.' }
        ],
        highlights: ['Private canoe with a quiet local boatman', 'Birdwatching opportunities', 'High-quality photography tips'],
        meetingPoint: 'Sylhet Zindabazar Point',
        included: ['Transport', 'Boat rental', 'Watchtower fees']
      },
      {
        id: 'exp7',
        agentId: 'anika',
        title: 'Traditional Tea Plucking Experience',
        description: 'Immerse yourself in the iconic tea culture of Sylhet. Join the local tea pluckers early in the morning in a scenic, undulating tea estate. Learn the delicate art of plucking two leaves and a bud, discover the journey from leaf to cup, and enjoy a fresh brew right at the estate.',
        category: 'Culinary',
        duration: '3.5 hours',
        price: 2500,
        currency: 'BDT',
        image: 'https://images.unsplash.com/photo-1583095333552-3db31fbccfe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583095333552-3db31fbccfe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1520202685718-4e8c5dc2afac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        itinerary: [
          { time: '07:30 AM', description: 'Pick up from hotel and head to the tea estate.' },
          { time: '08:00 AM', description: 'Meet the workers and learn plucking techniques.' },
          { time: '09:30 AM', description: 'Hands-on tea plucking experience.' },
          { time: '10:30 AM', description: 'Fresh tea tasting and breakfast.' }
        ],
        highlights: ['Hands-on plucking experience', 'Interact with local workers', 'Fresh tea tasting'],
        meetingPoint: 'Sylhet City Center',
        included: ['Transport', 'Estate entry', 'Breakfast & Tea']
      }
    ],
    reviews: [
      {
        id: 'rev3',
        userId: 'traveler3',
        userName: 'David L.',
        userAvatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 5,
        comment: 'Anika organized a breathtaking trip. Meticulous planning and profound local knowledge.',
        date: 'August 2023'
      }
    ]
  },
  {
    id: 'arif',
    name: 'Arif Ahmed',
    title: 'Sundarbans Explorer',
    location: 'Khulna',
    languages: ['Bengali', 'English'],
    bio: 'Expert navigation and wildlife tracking deep within the mangrove forests.',
    fullBio: 'The Sundarbans is not just a forest; it is a complex, tidal ecosystem that demands respect and intimate knowledge. I have spent 15 years guiding researchers, photographers, and adventurers deep into the heart of the world\'s largest continuous mangrove forest.\n\nMy expertise lies in tracking wildlife—from the elusive Bengal Tiger to the diverse birdlife—using techniques handed down by local honey-gatherers and fishermen. Safety is my utmost priority, but so is delivering an awe-inspiring experience that leaves you with a profound understanding of this delicate and wild frontier.',
    certifications: ['Advanced Survival Training', 'Forestry Department Approved Guide'],
    expertises: ['Wildlife Tracking', 'Bird Watching', 'Survival Skills'],
    rating: 4.8,
    reviewCount: 156,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1582650390886-35db2df5ce96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isVerified: true,
    baseRate: 4500,
    experiences: [
      {
        id: 'exp4',
        agentId: 'arif',
        title: 'Deep Sundarbans Wildlife Tracking',
        description: 'A full-day robust exploration deep into the narrow creeks of the Sundarbans. We will track animal footprints, observe the tidal biosphere, and try our luck at spotting some of the rarest wildlife on the planet from the safety of a specialized silent boat.',
        category: 'Active',
        duration: 'Full day',
        price: 8000,
        currency: 'BDT',
        image: 'https://images.unsplash.com/photo-1582650390886-35db2df5ce96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1582650390886-35db2df5ce96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
    fullBio: 'Cox\'s Bazar is famous for its long beach, but the true magic happens away from the main tourist hubs. I grew up surfing these waves and exploring the hidden coves down the marine drive.\n\nWhether you want to learn how to surf, find the most secluded spots for a serene subset, or taste the freshest seafood cooked in local, fiery spices, I\'ve got you covered. My experiences combine adrenaline with pure relaxation.',
    certifications: ['ISA Surf Instructor', 'Lifeguard Certified'],
    expertises: ['Surfing', 'Seafood Cuisine', 'Beach Photography'],
    rating: 5.0,
    reviewCount: 88,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isVerified: true,
    baseRate: 3500,
    experiences: [
      {
        id: 'exp5',
        agentId: 'elena',
        title: 'Beginner Surf Camp & Sunset BBQ',
        description: 'Spend an afternoon learning the basics of surfing in a safe, uncrowded spot down the Marine Drive. Finish the day with a private beach BBQ featuring the fresh catch of the day as the sun sets over the Bay of Bengal.',
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

