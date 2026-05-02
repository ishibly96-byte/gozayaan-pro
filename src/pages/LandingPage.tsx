import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function LandingPage() {
  const agents = useAppStore(state => state.agents);

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[819px] flex items-center justify-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDAqaptHmOcNkOSCQGBz7AHPN5AWJyclCO154iS3HQn8T-lUPf5-eu9H61lUP16kwE_XNGwiiDMK0i-QV88GClTpcH0xDYGPo7LRcwxzO9NWG2Ane2_37S8G_UrczE2gSkYSPE4AfKu5I8nVYPpXVCHACIlkSQYTJ5n712PSxSYH93y2tkBgCiHnCng0l0pUNTcNDc-1IG9cfG2BsJwJzwB4Fz2m6nnFrpNeYbAnppJYXOGz0LC4107EhSDG-TIxl3AVRe7oIUaLk')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg text-on-primary mb-6 drop-shadow-md">Sophisticated Adventure Awaits</h1>
          <p className="font-story-quote text-story-quote text-on-primary mb-12 max-w-2xl drop-shadow-md">Discover the heart of Bangladesh with our premium local agents guiding your journey.</p>
          
          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row items-center border border-outline w-full max-w-4xl mt-6">
            <div className="px-6 py-2 border-r border-gray-100 flex-1 relative flex flex-col w-full">
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Your Vibe</p>
              <input type="text" placeholder="Who are you looking for?" className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium text-on-surface placeholder-on-surface-variant outline-none p-0" />
            </div>
            <div className="px-6 py-2 border-r border-gray-100 flex-1 relative flex flex-col w-full">
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Location</p>
              <select className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium text-on-surface appearance-none outline-none p-0">
                <option value="">Where to?</option>
                <option value="sylhet">Sylhet</option>
                <option value="sajek">Sajek</option>
                <option value="coxs-bazar">Cox's Bazar</option>
                <option value="khulna">Khulna</option>
              </select>
            </div>
            <Link to="/discover" className="bg-[#E2725B] text-white px-8 py-3 rounded-xl ml-2 font-semibold hover:brightness-110 transition-colors flex items-center justify-center whitespace-nowrap mt-2 md:mt-0 w-full md:w-auto">
              Search Experts
            </Link>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-surface-container py-6 border-b border-surface-variant">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center gap-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">verified_user</span>
            <span className="font-body-ui text-body-ui text-on-surface-variant">NID Verified Agents</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">support_agent</span>
            <span className="font-body-ui text-body-ui text-on-surface-variant">24/7 Premium Support</span>
          </div>
        </div>
      </section>

      {/* Meet the Locals Grid */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Meet the Locals</h2>
          <p className="font-story-body text-story-body text-on-surface-variant">Authentic guides for your sophisticated adventure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.slice(0, 4).map(agent => (
            <div key={agent.id} className="bg-white rounded-[24px] p-5 shadow-sm border border-outline flex flex-col group">
              <div className="relative aspect-[4/3] rounded-2xl bg-gray-200 mb-4 overflow-hidden">
                <img src={agent.bannerImage} alt={agent.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#008080] text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{agent.title.split(' ')[0]} PRO</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-on-surface">{agent.name}</h3>
                  <p className="text-xs text-gray-500">{agent.location} • {agent.title}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-[#E2725B]">
                    <span className="text-sm font-bold">{agent.rating}</span>
                    <span className="text-[10px] ml-1 opacity-70">({agent.reviewCount})</span>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-3 text-gray-600 line-clamp-2">"{agent.bio}"</p>
              <div className="mt-auto pt-4 flex justify-between items-center">
                <span className="text-sm font-bold">৳{agent.baseRate.toLocaleString()} <span className="text-[10px] font-normal text-gray-400">/ hour</span></span>
                <Link to={`/agent/${agent.id}`} className="text-[#008080] text-xs font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">View Profile →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences Section (Bento Grid) */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Curated Experiences</h2>
            <p className="font-story-body text-story-body text-on-surface-variant">Immerse yourself in authentic local activities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[600px]">
            {/* Experience 1 */}
            <div className="md:col-span-8 rounded-[24px] overflow-hidden relative group shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-XXDO8VW87Ljsg-HHU_oRFv9nVOgZlxC0dOEAYsMyTO-QQ4AkecbPWq0uKVrXn9zxFALU4qVQuurJmDWMHuzDUAa17VvB5Xb-f0E8gFJo4zwG6oioHjjfteuCxmL-f9HBp-5_9Dgepye3-0i74XucP_vSONDV8O65nKpLWOZtDSC9U0bReY3zeTHn8y1OICyUQRugJldKMUnVCLBuLlLhYl2HHFuRQCjGeqruC1gS0vDuuYzb1yY760FwohE-n-dwGS9-lEMZk6Q" alt="Tea Plucking in Sylhet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                <div className="bg-secondary/40 text-on-primary font-label-caps text-label-caps px-3 py-1 rounded-sm w-fit mb-3 backdrop-blur-sm border border-white/20">Active</div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Tea Plucking in Sylhet</h3>
                <p className="font-story-body text-story-body text-surface-container-low max-w-md">Join local tea artisans in the rolling hills of Sylhet to learn the delicate process of harvesting premium tea leaves.</p>
              </div>
            </div>
            
            {/* Experience 2 */}
            <div className="md:col-span-4 rounded-[24px] overflow-hidden relative group shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr4BRACpFfA-a0uO50qKR_EyFNTAeLF1fWw2bCrBRo2dIM1NM6T1pRY281Mc3SlD7EGQTAUvEZZuX46l4kq9UPnBcFDC5gjRF0tFYgZFJcAFUDreYoqM2p1lhPMuZ1nx4ydXO6Y_QJsNXS4z6zFipOHNzh0w0txPyWUjIhmN_mgR61X1GQfZd_AM_qiBBpXTGc2UZEoJIIsNDL_tSsRET_m1t8if-9U5k-AulJoP7M0Y7y-H8BUT2JXT0dn8oQ0TgdkcrNkmoqm_o" alt="Evening Boat Ride on the Buriganga" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="bg-tertiary-container/80 text-on-tertiary-container font-label-caps text-label-caps px-2 py-1 rounded-sm w-fit mb-3">Relaxing</div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary text-xl mb-1 leading-tight">Evening Boat Ride on the Buriganga</h3>
                <p className="font-story-body text-story-body text-surface-container-low text-sm">Experience the vibrant pulse of Dhaka from the serene vantage point of a traditional boat at sunset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
