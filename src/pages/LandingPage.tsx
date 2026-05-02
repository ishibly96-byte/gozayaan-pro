import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { getAssetPath } from '../utils/path';

export default function LandingPage() {
  const agents = useAppStore(state => state.agents);

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden" >
        <div className="absolute inset-0">
          <img 
            src={getAssetPath('panam-city.jpg')} 
            alt="Panam City Adventure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/90 via-[#2D2926]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img src={getAssetPath('logo.jpg')} alt="GoZayaan Logo" className="h-12 rounded-lg" />
            <span className="text-white text-3xl font-headline-sm tracking-wider drop-shadow-md">GoZayaan Pro</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-headline-sm text-white mb-6 drop-shadow-2xl leading-tight">Sophisticated <br/>Adventure Awaits</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl drop-shadow-lg font-medium">Discover the hidden soul of Bangladesh with curated experiences led by premium local experts.</p>
          
          {/* Search Bar */}
          <div className="bg-white p-3 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center border border-outline w-full max-w-4xl mt-6">
            <div className="px-8 py-3 border-r border-gray-100 flex-1 relative flex flex-col w-full text-left">
              <p className="text-[10px] uppercase font-bold text-[#008080] mb-1 tracking-widest">Experience</p>
              <input type="text" placeholder="What's your vibe?" className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-[#2D2926] placeholder-gray-400 outline-none p-0" />
            </div>
            <div className="px-8 py-3 border-r border-gray-100 flex-1 relative flex flex-col w-full text-left">
              <p className="text-[10px] uppercase font-bold text-[#008080] mb-1 tracking-widest">Destination</p>
              <select className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-[#2D2926] appearance-none outline-none p-0">
                <option value="">Anywhere</option>
                <option value="sylhet">Sylhet</option>
                <option value="khulna">Sundarbans</option>
                <option value="coxs-bazar">Cox's Bazar</option>
                <option value="dhaka">Old Dhaka</option>
              </select>
            </div>
            <Link to="/discover" className="bg-[#E2725B] text-white px-10 py-4 rounded-[20px] ml-2 font-bold hover:brightness-110 transition-all flex items-center justify-center whitespace-nowrap mt-4 md:mt-0 w-full md:w-auto shadow-lg">
              Search Experts
            </Link>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-white py-10 border-b border-outline">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12">
          {[
            { icon: 'verified_user', label: 'NID Verified Agents' },
            { icon: 'support_agent', label: '24/7 Premium Support' },
            { icon: 'payments', label: 'Secure Payments' },
            { icon: 'star', label: 'Top Rated Experiences' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#008080]">{item.icon}</span>
              <span className="font-bold text-[11px] uppercase tracking-widest text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Locals Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E2725B] mb-4">The Curators</h2>
          <h3 className="text-4xl font-headline-sm text-[#2D2926]">Meet your local experts</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.slice(0, 4).map(agent => (
            <div key={agent.id} className="bg-white rounded-[32px] p-6 shadow-sm border border-outline flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square rounded-[24px] bg-gray-200 mb-6 overflow-hidden">
                <img src={getAssetPath(agent.avatar)} alt={agent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#008080] text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    {agent.location}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-[#2D2926]">{agent.name}</h3>
                  <div className="flex items-center text-[#E2725B] gap-1">
                    <span className="material-symbols-outlined text-[16px] fill-icon">star</span>
                    <span className="text-sm font-bold">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium mb-4">{agent.title}</p>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2 italic mb-6 leading-relaxed">"{agent.bio}"</p>
              <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                <span className="text-sm font-bold text-[#2D2926]">৳{agent.baseRate.toLocaleString()} <span className="text-[10px] font-normal text-gray-400">/ hr</span></span>
                <Link to={`/agent/${agent.id}`} className="bg-[#008080]/10 text-[#008080] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#008080] hover:text-white transition-all">Profile</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E2725B] mb-4">Curated Moments</h2>
            <h3 className="text-4xl font-headline-sm text-[#2D2926]">Experiences worth sharing</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[650px]">
            {/* Experience 1 */}
            <Link to="/experience/exp7" className="lg:col-span-8 rounded-[40px] overflow-hidden relative group shadow-lg">
              <img src={getAssetPath('tea-plucking.jpg')} alt="Tea Plucking in Sylhet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/95 via-[#2D2926]/60 to-[#2D2926]/10 flex flex-col justify-end p-12">
                <div className="bg-[#008080] text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-4">Culinary Heritage</div>
                <h3 className="text-4xl md:text-5xl font-headline-sm text-white mb-4">Tea Plucking in Sylhet</h3>
                <p className="text-white/80 text-lg max-w-xl leading-relaxed">Join local tea artisans in the emerald hills of Sylhet. Learn the ancient art of \"two leaves and a bud\" followed by an organic tasting.</p>
                <span className="mt-8 text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Explore Experience <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </Link>
            
            {/* Experience 2 */}
            <Link to="/experience/exp6" className="lg:col-span-4 rounded-[40px] overflow-hidden relative group shadow-lg">
              <img src={getAssetPath('sunset-boat.png')} alt="Sunset Boat Ride" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/95 via-[#2D2926]/50 to-transparent flex flex-col justify-end p-10">
                <div className="bg-[#E2725B] text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-4">Relaxing</div>
                <h3 className="text-3xl font-headline-sm text-white mb-4 leading-tight">Sunset Boat Ride at Buriganga</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">Experience the heartbeat of old Dhaka from a traditional wooden boat as the city turns golden.</p>
                <span className="text-white font-bold flex items-center gap-2 text-sm">Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
