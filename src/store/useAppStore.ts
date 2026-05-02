import { create } from 'zustand';
import { User, mockUsers, mockAgents, Agent } from '../data/mockData';

interface AppState {
  currentUser: User | null;
  agents: Agent[];
  isMobileMenuOpen: boolean;
  filters: {
    language: string;
    specialty: string;
  };
  
  // Actions
  login: (userId: string) => void;
  logout: () => void;
  toggleMobileMenu: () => void;
  getAgent: (id: string) => Agent | undefined;
  setFilter: (key: keyof AppState['filters'], value: string) => void;
  getFilteredAgents: () => Agent[];
}

export const useAppStore = create<AppState>((set, get) => ({
  currentUser: null,
  agents: mockAgents,
  isMobileMenuOpen: false,
  filters: {
    language: 'All Languages',
    specialty: 'All Specialties'
  },

  login: (userId: string) => {
    const user = mockUsers[userId];
    if (user) {
      set({ currentUser: user });
    }
  },
  
  logout: () => set({ currentUser: null }),
  
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  
  getAgent: (id: string) => {
    return get().agents.find(a => a.id === id);
  },

  setFilter: (key, value) => set(state => ({
    filters: { ...state.filters, [key]: value }
  })),

  getFilteredAgents: () => {
    const { agents, filters } = get();
    return agents.filter(agent => {
      const langMatch = filters.language === 'All Languages' || agent.languages.includes(filters.language);
      
      const specialtyMatch = filters.specialty === 'All Specialties' ||
        agent.experiences.some(exp => exp.category === filters.specialty) || 
        // Fallback since not all agents have experiences defined in mock yet
        (filters.specialty === 'Food' && agent.id === 'sumaiya') ||
        (filters.specialty === 'History' && agent.id === 'tanvir') ||
        (filters.specialty === 'Nature' && (agent.id === 'arif' || agent.id === 'anika'));

      return langMatch && specialtyMatch;
    });
  }
}));

