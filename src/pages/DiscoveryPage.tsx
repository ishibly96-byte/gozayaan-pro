import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Link } from 'react-router-dom';

export default function DiscoveryPage() {
  const { filters, setFilter, getFilteredAgents } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredAgents = getFilteredAgents().filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-headline-sm text-[#2D2926] mb-2">Find your expert</h1>
            <p className="text-gray-500 font-medium">842 verified local guides ready to show you the real Bangladesh.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input 
                type="text" 
                placeholder="Search by name or location..." 
                className="pl-12 pr-6 py-3 bg-white border border-outline rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#008080] transition-all w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <select 
              className="px-6 py-3 bg-white border border-outline rounded-2xl text-sm font-bold text-[#2D2926] outline-none"
              value={filters.specialty}
              onChange={(e) => setFilter('specialty', e.target.value)}
            >
              <option>All Specialties</option>
              <option>History</option>
              <option>Nature</option>
              <option>Culinary</option>
              <option>Photography</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map(agent => (
            <Link to={`/agent/${agent.id}`} key={agent.id} className="bg-white rounded-[32px] overflow-hidden border border-outline hover:shadow-xl transition-all group">
              <div className="relative h-48">
                <img src={agent.bannerImage} alt="Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute -bottom-10 left-8">
                  <img src={agent.avatar} alt={agent.name} className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg" />
                </div>
                {agent.isVerified && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-blue-500 fill-icon">verified</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Verified</span>
                  </div>
                )}
              </div>
              <div className="pt-14 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2926] group-hover:text-[#008080] transition-colors">{agent.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">{agent.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#E2725B]">
                    <span className="material-symbols-outlined text-[18px] fill-icon">star</span>
                    <span className="font-bold">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-6">
                  {agent.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {agent.languages.map(lang => (
                    <span key={lang} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md">{lang}</span>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Base Rate</span>
                    <span className="text-lg font-bold text-[#2D2926]">৳{agent.baseRate.toLocaleString()} <span className="text-xs font-normal text-gray-400">/ hr</span></span>
                  </div>
                  <span className="bg-[#008080] text-white px-6 py-3 rounded-2xl text-xs font-bold hover:brightness-110 transition-all shadow-md">View Profile</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredAgents.length === 0 && (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">search_off</span>
            <h3 className="text-xl font-bold text-gray-400">No agents found matching your criteria</h3>
            <button 
              onClick={() => {setSearchQuery(''); setFilter('specialty', 'All Specialties');}}
              className="mt-4 text-[#008080] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
