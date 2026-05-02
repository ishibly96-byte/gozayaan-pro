import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function DiscoveryPage() {
  const getFilteredAgents = useAppStore(state => state.getFilteredAgents);
  const filteredAgents = getFilteredAgents();
  const filters = useAppStore(state => state.filters);
  const setFilter = useAppStore(state => state.setFilter);

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-20 min-h-screen bg-[#F5F2ED]">
      {/* Header Section */}
      <section className="mb-10 text-center md:text-left">
        <h1 className="font-headline-sm text-4xl md:text-5xl text-[#2D2926] mb-4">Travel with the Best</h1>
        <p className="text-gray-600 text-lg max-w-3xl">Find verified local experts to curate your next sophisticated adventure across Bangladesh.</p>
      </section>

      {/* Filter Bar */}
      <section className="bg-white rounded-[24px] p-6 mb-12 border border-outline flex flex-wrap gap-4 items-center shadow-sm">
        <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
          <label className="text-xs font-bold uppercase tracking-widest text-[#008080]">Language</label>
          <div className="relative">
            <select 
              value={filters.language}
              onChange={(e) => setFilter('language', e.target.value)}
              className="w-full bg-gray-50 border border-outline rounded-xl py-3 px-4 appearance-none focus:outline-none focus:border-[#008080] focus:ring-1 focus:ring-[#008080] text-sm text-[#2D2926] font-medium transition-colors">
              <option>All Languages</option>
              <option>Bengali</option>
              <option>English</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
          <label className="text-xs font-bold uppercase tracking-widest text-[#008080]">Specialty</label>
          <div className="relative">
            <select 
              value={filters.specialty}
              onChange={(e) => setFilter('specialty', e.target.value)}
              className="w-full bg-gray-50 border border-outline rounded-xl py-3 px-4 appearance-none focus:outline-none focus:border-[#008080] focus:ring-1 focus:ring-[#008080] text-sm text-[#2D2926] font-medium transition-colors">
              <option>All Specialties</option>
              <option>Food</option>
              <option>Nature</option>
              <option>History</option>
              <option>Culture</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
          <label className="text-xs font-bold uppercase tracking-widest text-[#008080]">Location</label>
          <div className="relative">
            <select className="w-full bg-gray-50 border border-outline rounded-xl py-3 px-4 appearance-none focus:outline-none focus:border-[#008080] focus:ring-1 focus:ring-[#008080] text-sm text-[#2D2926] font-medium transition-colors">
              <option>Anywhere</option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Khulna</option>
              <option>Chattogram</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
          </div>
        </div>
      </section>

      {filteredAgents.length === 0 ? (
        <div className="bg-white rounded-[32px] p-16 flex flex-col items-center justify-center border border-outline shadow-sm text-center">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[40px] text-[#E2725B]">search_off</span>
          </div>
          <h2 className="text-2xl font-headline-sm text-[#2D2926] mb-2">No agents found</h2>
          <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          <button onClick={() => { setFilter('language', 'All Languages'); setFilter('specialty', 'All Specialties'); }} className="mt-6 border border-[#008080] text-[#008080] px-6 py-2 rounded-full font-bold hover:bg-[#008080]/5 transition-colors">Clear Filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map(agent => (
            <div key={agent.id} className="bg-white rounded-[32px] border border-outline overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-[#008080]/30 flex flex-col h-full">
              {/* Banner & Avatar */}
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img src={agent.bannerImage} alt={`${agent.location} surroundings`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-end gap-3">
                   <div className="relative">
                      <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full border-2 border-white object-cover shadow-md" />
                      {agent.isVerified && (
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                           <span className="material-symbols-outlined text-blue-500 text-[18px] fill-icon">verified</span>
                        </div>
                      )}
                   </div>
                   <div className="mb-1 text-white shadow-sm">
                      <h3 className="font-bold text-lg leading-tight">{agent.name.split(' ')[0]}</h3>
                      <p className="text-xs opacity-90 flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">location_on</span> {agent.location}</p>
                   </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 font-bold text-sm text-[#2D2926]">
                  <span className="material-symbols-outlined text-yellow-500 text-[16px]">star</span> {agent.rating}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                 <h4 className="font-bold text-[#008080] text-sm mb-2 uppercase tracking-widest">{agent.title}</h4>
                 <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{agent.bio}</p>
                 
                 {/* Specializations Tags */}
                 <div className="flex flex-wrap gap-2 mb-6">
                    {agent.expertises?.slice(0, 3).map((exp, i) => (
                      <span key={i} className="bg-orange-50 text-[#E2725B] px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest border border-orange-100">
                        {exp}
                      </span>
                    ))}
                    {agent.expertises && agent.expertises.length > 3 && (
                      <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest border border-outline">
                        +{agent.expertises.length - 3} more
                      </span>
                    )}
                 </div>
                 
                 {/* Footer & Action */}
                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">Base Rate</span>
                      <span className="font-bold text-[#2D2926]">৳{agent.baseRate}<span className="text-xs text-gray-500 font-normal">/day</span></span>
                    </div>
                    <Link to={`/agent/${agent.id}`} className="bg-[#008080]/10 text-[#008080] font-bold px-4 py-2 rounded-full text-sm hover:bg-[#008080] hover:text-white transition-colors">
                      View Profile
                    </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
