import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex flex-col font-body-ui text-body-ui antialiased">
      {/* TopNavBar for Dashboard */}
      <nav className="docked full-width top-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline shadow-sm fixed w-full h-20">
        <div className="flex justify-between items-center px-4 md:px-8 h-full max-w-7xl mx-auto w-full absolute left-0 right-0">
          <Link to="/" className="flex items-center space-x-2 shrink-0 z-10 hidden md:flex">
            <img src="https://asset.gozayaan.com/general/gozayaan-logo-new.svg" alt="GoZayaan Logo" className="h-8 object-contain" />
          </Link>
          <div className="hidden md:flex items-center space-x-8 font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight opacity-80 flex-1 justify-center">
             {/* Centered nav */}
             <span className="font-bold text-[#2D2926]">Dashboard</span>
          </div>
          <div className="flex items-center shrink-0 z-10 w-full justify-between md:w-auto">
            <Link to="/" className="flex items-center space-x-2 md:hidden">
              <img src="https://asset.gozayaan.com/general/gozayaan-logo-new.svg" alt="GoZayaan Logo" className="h-6 object-contain" />
            </Link>
             <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-800 hidden md:block mr-4">Back to Home</Link>
             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-10 h-10 rounded-full object-cover border border-outline" />
          </div>
        </div>
      </nav>

      {/* SideNavBar (Desktop Only) */}
      <div className="hidden md:flex flex-col h-screen w-64 border-r border-[#E6E1D6] bg-[#F5F2ED] fixed left-0 top-0 pt-20 pb-8 z-40 transition-all duration-300 ease-in-out">
        <div className="px-6 py-6 border-b border-[#E6E1D6]">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="User Profile" className="w-12 h-12 rounded-full border-2 border-[#008080] object-cover" />
            <div>
              <h2 className="text-lg font-bold text-[#008080]">Sarah J.</h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-widest text-[#E2725B] mt-0.5">Traveler</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 mt-4">
          {[
            { id: 'overview', icon: 'dashboard', label: 'Overview' },
            { id: 'bookings', icon: 'luggage', label: 'My Bookings' },
            { id: 'experiences', icon: 'map', label: 'Saved Experiences' },
            { id: 'messages', icon: 'mail', label: 'Messages' },
            { id: 'earnings', icon: 'payments', label: 'Earnings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left py-4 px-6 flex items-center gap-3 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-[11px] font-bold transition-colors ${
                activeTab === item.id 
                  ? 'bg-[#008080]/10 text-[#008080] border-r-4 border-[#008080]' 
                  : 'text-slate-500 hover:bg-black/5'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto border-t border-[#E6E1D6] pt-2">
           <button
              onClick={() => setActiveTab('settings')}
              className={`w-full text-left py-4 px-6 flex items-center gap-3 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-[11px] font-bold transition-colors ${
                activeTab === 'settings' ? 'bg-[#008080]/10 text-[#008080] border-r-4 border-[#008080]' : 'text-slate-500 hover:bg-black/5'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">settings</span> Settings
            </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="md:ml-64 pt-20 h-screen bg-[#F5F2ED] overflow-y-auto pb-24 relative">
        <div className="max-w-5xl mx-auto px-6 py-10">
          
          {activeTab === 'overview' && (
             <div>
                <h1 className="text-3xl font-headline-sm text-[#2D2926] mb-8">Hello, Sarah!</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-white p-6 rounded-[24px] border border-outline shadow-sm">
                      <div className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Total Trips</div>
                      <div className="text-4xl font-headline-sm text-[#2D2926]">4</div>
                   </div>
                   <div className="bg-white p-6 rounded-[24px] border border-outline shadow-sm">
                      <div className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Upcoming</div>
                      <div className="text-4xl font-headline-sm text-[#008080]">1</div>
                   </div>
                   <div className="bg-white p-6 rounded-[24px] border border-outline shadow-sm">
                      <div className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Saved</div>
                      <div className="text-4xl font-headline-sm text-[#E2725B]">12</div>
                   </div>
                </div>
             </div>
          )}

          {activeTab === 'bookings' && (
            <>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-headline-sm text-[#2D2926]">My Bookings</h1>
                <div className="flex gap-2">
                  <button className="bg-[#008080] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Upcoming</button>
                  <button className="bg-white text-gray-600 border border-outline px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">Past</button>
                </div>
              </div>

              <div className="space-y-8">
                {/* Upcoming Trip Card */}
                <div>
                  <h2 className="text-xl font-bold text-[#2D2926] mb-4">Upcoming Trips</h2>
                  <div className="bg-white rounded-[32px] border border-outline p-6 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:border-[#008080]/30 transition-colors">
                    <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shrink-0 relative">
                      <img src="https://images.unsplash.com/photo-1582650390886-35db2df5ce96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sundarbans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center gap-1 font-label-caps text-[10px] tracking-widest text-[#008080] font-bold">
                        Active
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <span className="text-sm font-bold text-[#E2725B] uppercase tracking-widest block mb-1">Nov 12 - Nov 14, 2024</span>
                            <h3 className="text-2xl font-headline-sm text-[#2D2926] mb-2">Deep Sundarbans Wildlife Tracking</h3>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">location_on</span>
                              Khulna, Bangladesh
                            </p>
                          </div>
                          <span className="bg-[#008080]/10 text-[#008080] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">Confirmed</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-6 border-t border-gray-100 gap-4">
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Arif" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <p className="text-xs text-gray-500">Your Host</p>
                            <p className="font-bold text-sm text-[#2D2926]">Arif Ahmed</p>
                          </div>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                          <button className="flex-1 sm:flex-none border border-outline text-[#2D2926] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">View Itinerary</button>
                          <button 
                            onClick={() => setIsChatOpen(true)}
                            className="flex-1 sm:flex-none bg-[#008080] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                          >
                            <span className="material-symbols-outlined text-[18px]">chat</span> Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {(activeTab !== 'overview' && activeTab !== 'bookings') && (
            <div className="bg-white rounded-[32px] p-16 flex flex-col items-center justify-center border border-outline shadow-sm text-center">
              <span className="material-symbols-outlined text-[48px] text-gray-300 mb-4">construction</span>
              <h2 className="text-xl font-headline-sm text-[#2D2926] mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section</h2>
              <p className="text-gray-500">This section is currently under development.</p>
            </div>
          )}

        </div>

        {/* Floating Chat Box UI */}
        <AnimatePresence>
          {isChatOpen && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 20 }}
               className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-white rounded-[24px] shadow-2xl border border-outline flex flex-col overflow-hidden z-50"
             >
               {/* Header */}
               <div className="bg-[#008080] text-white p-4 flex justify-between items-center shrink-0">
                  <div className="flex items-center gap-3">
                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Arif" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                     <div>
                       <h3 className="font-bold text-sm">Arif Ahmed</h3>
                       <p className="text-xs text-white/70">Online</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-1">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                      </button>
                      <button onClick={() => setIsChatOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                  </div>
               </div>
               
               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                  <div className="text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Today</span>
                  </div>
                  
                  <div className="flex gap-2 text-sm max-w-[85%] self-end flex-row-reverse">
                     <div className="bg-[#008080] text-white p-3 rounded-2xl rounded-tr-sm">
                       Hi Arif! I wanted to check if there are any specific clothes we should bring for the Sundarbans trip? 
                       <span className="text-[10px] text-white/60 block mt-1 text-right">10:35 AM <span className="material-symbols-outlined text-[12px] align-middle">done_all</span></span>
                     </div>
                  </div>

                  <div className="flex gap-2 text-sm max-w-[85%]">
                     <div className="bg-white border border-outline p-3 rounded-2xl rounded-tl-sm text-[#2D2926] shadow-sm">
                       Hello Sarah! Yes, please bring light, breathable cotton clothes in neutral colors (olive, brown, grey). Avoid bright colors to blend in with nature. Also, a light windbreaker for the evening boat ride is recommended.
                       <span className="text-[10px] text-gray-400 block mt-1 text-right">10:42 AM</span>
                     </div>
                  </div>
               </div>

               {/* Input */}
               <div className="p-3 bg-white border-t border-outline flex items-center gap-2 shrink-0">
                 <input 
                   type="text" 
                   placeholder="Type a message..." 
                   className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-[#008080]"
                 />
                 <button className="w-10 h-10 bg-[#008080] text-white rounded-full flex items-center justify-center hover:brightness-110 shrink-0 shadow-sm">
                   <span className="material-symbols-outlined text-[20px] ml-1">send</span>
                 </button>
               </div>
             </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
