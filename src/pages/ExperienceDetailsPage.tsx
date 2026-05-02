import { useParams, Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { getAssetPath } from '../utils/path';

export default function ExperienceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const agents = useAppStore(state => state.agents);
  
  // Find the required experience across all agents
  let experience = null;
  let agent = null;
  for (const a of agents) {
    const foundExp = a.experiences.find(e => e.id === id);
    if (foundExp) {
      experience = foundExp;
      agent = a;
      break;
    }
  }

  if (!experience || !agent) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#F5F2ED]">
        <h2 className="text-2xl font-bold text-[#2D2926] mb-4">Experience Not Found</h2>
        <Link to="/" className="text-[#008080] hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F2ED] pb-32 font-body-ui">
      {/* Hero Gallery */}
      <div className="w-full h-[60vh] relative flex">
        <div className="w-2/3 h-full relative">
          <img src={getAssetPath(experience.images[0])} alt={experience.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="w-1/3 h-full flex flex-col">
          <img src={getAssetPath(experience.images[1] || experience.image)} alt="Detail view" className="w-full h-1/2 object-cover border-l border-b border-white/20" />
          <img src={getAssetPath(experience.image)} alt="Detail view" className="w-full h-1/2 object-cover border-l border-white/20" />
        </div>
        <div className="absolute top-6 left-6 z-10 hidden md:block">
          <Link to={`/agent/${agent.id}`} className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Agent
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Info */}
          <div className="flex-1 bg-white p-8 rounded-[32px] shadow-sm border border-outline">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#008080]/10 text-[#008080] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{experience.category}</span>
              <span className="bg-[#E2725B]/10 text-[#E2725B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{experience.duration}</span>
            </div>
            <h1 className="font-headline-sm text-4xl text-[#2D2926] mb-6">{experience.title}</h1>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{experience.description}</p>
            
            <div className="h-px bg-gray-200 w-full mb-8"></div>
            
            <h3 className="font-headline-sm text-2xl mb-6 text-[#2D2926]">Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {experience.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#008080] shrink-0 mt-0.5">check_circle</span>
                  <span className="text-gray-700">{h}</span>
                </li>
              ))}
            </ul>

            <div className="h-px bg-gray-200 w-full mb-8"></div>

            <h3 className="font-headline-sm text-2xl mb-6 text-[#2D2926]">Itinerary</h3>
            <div className="space-y-6 mb-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#008080]/20 before:to-transparent">
              {experience.itinerary.map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#008080] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-outline bg-gray-50 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[#008080]">{item.time}</div>
                    </div>
                    <div className="text-slate-700 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px bg-gray-200 w-full mb-8"></div>

            <h3 className="font-headline-sm text-2xl mb-6 text-[#2D2926]">What's Included</h3>
            <ul className="flex flex-wrap gap-3 mb-8">
              {experience.included.map((item, i) => (
                <li key={i} className="bg-gray-100 flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 text-sm font-medium">
                  <span className="material-symbols-outlined text-[16px] opacity-70">done</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="bg-orange-50 border border-orange-200 rounded-[24px] p-6 flex items-start gap-4">
              <span className="material-symbols-outlined text-[#E2725B] text-2xl">location_on</span>
              <div>
                <h4 className="font-bold text-[#2D2926] mb-1">Meeting Point</h4>
                <p className="text-sm text-gray-700">{experience.meetingPoint}</p>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="sticky top-28 bg-white p-6 rounded-[32px] shadow-lg border border-[#008080]/10 flex flex-col">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-headline-sm text-[#2D2926]">৳{experience.price}</span>
                <span className="text-gray-500 mb-1">/ person</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl border border-outline bg-gray-50">
                <img src={getAssetPath(agent.avatar)} alt={agent.name} className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Hosted by</p>
                  <Link to={`/agent/${agent.id}`} className="font-bold text-[#008080] hover:underline">{agent.name}</Link>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input type="date" className="w-full border border-outline rounded-xl p-3 outline-none focus:border-[#008080] focus:ring-1 focus:ring-[#008080]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select className="w-full border border-outline rounded-xl p-3 outline-none focus:border-[#008080] focus:ring-1 focus:ring-[#008080]">
                    <option>1 traveler</option>
                    <option>2 travelers</option>
                    <option>3 travelers</option>
                    <option>4 travelers</option>
                    <option>5+ travelers</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-[#008080] text-white py-4 rounded-full font-bold text-lg hover:brightness-110 transition-colors shadow-md mb-4">
                Request to Book
              </button>
              <p className="text-center text-sm text-gray-500">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
