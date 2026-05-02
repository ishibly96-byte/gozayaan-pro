import { useParams, Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const getAgent = useAppStore(state => state.getAgent);
  const agent = getAgent(id || '');

  if (!agent) {
    return (
      <div className="flex-col min-h-screen flex items-center justify-center bg-surface">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-2">Agent Not Found</h1>
        <p className="font-body-ui text-body-ui text-on-surface-variant mb-6">We couldn't find the local expert you're looking for.</p>
        <Link to="/discover" className="bg-[#008080] text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-colors text-sm">
          Browse Agents
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full">
      <header className="w-full h-[400px] relative">
        <img src={agent.bannerImage} alt={`${agent.location} surroundings`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-[1280px] mx-auto px-6 pb-12 flex items-end gap-6 translate-y-12">
            <div className="relative shrink-0">
              <img src={agent.avatar} alt={agent.name} className="w-32 h-32 rounded-full object-cover border-4 border-surface" />
              {agent.isVerified && (
                <div className="absolute bottom-0 right-0 bg-[#008080] text-white rounded-full p-1 shadow-sm" title="Verified Expert">
                  <span className="material-symbols-outlined text-xl fill-icon">verified</span>
                </div>
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E2725B] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full">Top Rated</span>
                <span className="bg-white/90 text-[#008080] text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full backdrop-blur-sm">{agent.title}</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-1">{agent.name}</h1>
              <p className="font-body-ui text-body-ui text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {agent.location} Expert • Speaks {agent.languages.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-20 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-20">
          <section className="max-w-3xl">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">About {agent.name.split(' ')[0]}</h2>
            <div className="font-story-body text-story-body text-on-surface-variant space-y-6 whitespace-pre-wrap">
              {agent.fullBio}
            </div>

            {(agent.certifications?.length > 0 || agent.expertises?.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-outline">
                {agent.certifications?.length > 0 && (
                  <div>
                    <h3 className="text-[12px] font-bold tracking-widest text-[#008080] uppercase mb-4">Certifications</h3>
                    <ul className="space-y-3">
                      {agent.certifications.map((cert, i) => (
                        <li key={i} className="flex items-start gap-2 text-on-surface">
                          <span className="material-symbols-outlined text-[18px] text-[#008080] shrink-0 mt-0.5">verified</span>
                          <span className="font-body-ui text-sm">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {agent.expertises?.length > 0 && (
                  <div>
                    <h3 className="text-[12px] font-bold tracking-widest text-[#E2725B] uppercase mb-4">Core Expertises</h3>
                    <div className="flex flex-wrap gap-2">
                      {agent.expertises.map((exp, i) => (
                        <span key={i} className="bg-gray-50 border border-outline px-3 py-1.5 rounded-xl text-sm font-medium text-slate-700">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {agent.experiences && agent.experiences.length > 0 && (
            <section>
              <div className="flex justify-between items-end mb-6">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Curated Experiences</h2>
                <a href="#" className="font-body-ui text-body-ui text-[#008080] hover:underline flex items-center gap-1">View all <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {agent.experiences.map(exp => (
                  <Link to={`/experience/${exp.id}`} key={exp.id} className="group relative h-[300px] rounded-[24px] overflow-hidden border border-outline hover:shadow-md transition-shadow bg-white block">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full">
                      <span className="bg-white/20 text-white text-[10px] uppercase font-bold tracking-widest w-fit px-2 py-0.5 rounded-full mb-3 backdrop-blur-md self-start">{exp.category}</span>
                      <h3 className="font-headline-sm text-headline-sm text-white mb-1 group-hover:text-blue-100 transition-colors">{exp.title}</h3>
                      <p className="font-body-ui text-white/80 flex items-center gap-2">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {exp.duration}</span>
                        <span className="font-bold text-white text-sm bg-[#E2725B] px-2 py-0.5 rounded-full">৳{exp.price}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-6">Reputation &amp; Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-6 bg-white rounded-[24px] border border-outline shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-body-ui text-body-ui text-on-surface-variant">Overall Rating</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">{agent.rating}<span className="text-sm text-outline">/5</span></span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E2725B] rounded-full" style={{ width: `${(agent.rating / 5) * 100}%` }}></div>
                </div>
                <p className="font-label-caps text-label-caps text-outline mt-1">{agent.reviewCount} total reviews</p>
              </div>
            </div>

            <div className="space-y-3">
              {agent.reviews && agent.reviews.map(review => (
                <div key={review.id} className="p-6 bg-white rounded-[24px] border border-outline shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-on-surface font-bold text-sm">
                      {review.userName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-body-ui text-body-ui font-semibold text-on-surface">{review.userName}</h4>
                      <p className="font-label-caps text-label-caps text-outline">{review.date}</p>
                    </div>
                  </div>
                  <p className="font-story-body text-story-body text-on-surface-variant text-[16px]">
                    {review.comment}
                  </p>
                </div>
              ))}
              {(!agent.reviews || agent.reviews.length === 0) && (
                <p className="font-body-ui text-on-surface-variant">No reviews yet.</p>
              )}
            </div>
          </section>
        </div>

        {/* Right Sidebar Booking Widget */}
        <aside className="lg:col-span-4 relative">
          <div className="sticky top-[100px] bg-white rounded-[24px] border border-outline p-6 shadow-sm">
            <div className="mb-12">
              <p className="font-label-caps text-label-caps text-outline mb-1 uppercase tracking-widest">Base Rate</p>
              <div className="flex items-end gap-1">
                <span className="font-display-lg text-display-lg text-on-surface leading-none">৳{agent.baseRate.toLocaleString()}</span>
                <span className="font-body-ui text-body-ui text-on-surface-variant mb-1">/ person</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-[#008080] mb-3">Availability Calendar</label>
              <div className="border border-outline rounded-2xl p-3 bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                  <span className="font-body-ui text-body-ui font-semibold text-on-surface">November 2024</span>
                  <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-1">
                  <div className="font-label-caps text-label-caps text-outline">S</div>
                  <div className="font-label-caps text-label-caps text-outline">M</div>
                  <div className="font-label-caps text-label-caps text-outline">T</div>
                  <div className="font-label-caps text-label-caps text-outline">W</div>
                  <div className="font-label-caps text-label-caps text-outline">T</div>
                  <div className="font-label-caps text-label-caps text-outline">F</div>
                  <div className="font-label-caps text-label-caps text-outline">S</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-body-ui text-body-ui text-sm">
                  <div className="text-outline-variant">29</div><div className="text-outline-variant">30</div><div className="text-outline-variant">31</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">1</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">2</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">3</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">4</div>
                  <div className="py-1 bg-surface-container-high rounded-sm text-outline line-through cursor-not-allowed">5</div>
                  <div className="py-1 bg-surface-container-high rounded-sm text-outline line-through cursor-not-allowed">6</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">7</div>
                  <div className="py-1 bg-primary/10 text-primary font-semibold rounded-sm cursor-pointer border border-primary/20">8</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">9</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">10</div>
                  <div className="py-1 hover:bg-surface-variant rounded-sm cursor-pointer text-on-surface">11</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#008080] text-white font-semibold py-3 rounded-full hover:brightness-110 transition-colors shadow-sm text-sm">
                Book Experience
              </button>
              <button className="w-full bg-transparent border border-[#008080] text-[#008080] font-semibold py-3 rounded-full hover:bg-gray-50 transition-colors text-sm">
                Contact {agent.name.split(' ')[0]}
              </button>
            </div>
            
            <div className="mt-3 text-center">
              <span className="font-label-caps text-label-caps text-outline flex justify-center items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">bolt</span> Instant booking available
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
