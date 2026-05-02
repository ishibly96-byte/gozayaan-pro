import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi Arif! I wanted to check if there are any specific clothes we should bring for the Sundarbans trip?", sender: 'user', time: '10:35 AM' },
    { id: 2, text: "Hello Sarah! Yes, please bring light, breathable cotton clothes in neutral colors (olive, brown, grey). Avoid bright colors to blend in with nature. Also, a light windbreaker for the evening boat ride is recommended.", sender: 'host', time: '10:42 AM' }
  ]);

  const startFreshChat = () => {
    setChatMessages([]);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-body-ui text-body-ui antialiased">
      {/* TopNavBar for Dashboard */}
      <nav className="docked full-width top-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline shadow-sm fixed w-full h-20">
        <div className="flex justify-between items-center px-4 md:px-8 h-full max-w-7xl mx-auto w-full absolute left-0 right-0">
          <Link to="/" className="flex items-center space-x-2 shrink-0 z-10 hidden md:flex">
            <img src="/logo.jpg" alt="GoZayaan Logo" className="h-8 object-contain" />
          </Link>
          <div className="hidden md:flex items-center space-x-8 font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight opacity-80 flex-1 justify-center">
             <span className="font-bold text-[#2D2926]">Dashboard</span>
          </div>
          <div className="flex items-center shrink-0 z-10 w-full justify-between md:w-auto">
            <Link to="/" className="flex items-center space-x-2 md:hidden">
              <img src="/logo.jpg" alt="GoZayaan Logo" className="h-6 object-contain" />
            </Link>
             <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-800 hidden md:block mr-4">Back to Home</Link>
             <img src="/pic5.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover border border-outline" />
          </div>
        </div>
      </nav>

      {/* SideNavBar (Desktop Only) */}
      <div className="hidden md:flex flex-col h-screen w-64 border-r border-[#E6E1D6] bg-[#F5F2ED] fixed left-0 top-0 pt-20 pb-8 z-40 transition-all duration-300 ease-in-out">
        <div className="px-6 py-6 border-b border-[#E6E1D6]">
          <div className="flex items-center gap-4">
            <img src="/pic5.jpg" alt="Anika Rahman" className="w-12 h-12 rounded-full border-2 border-[#008080] object-cover" />
            <div>
              <h2 className="text-lg font-bold text-[#008080]">Anika R.</h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-widest text-[#E2725B] mt-0.5">Traveler</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 mt-4">
          {[
            { id: 'overview', icon: 'dashboard', label: 'Overview' },
            { id: 'bookings', icon: 'luggage', label: 'My Bookings' },
            { id: 'experiences', icon: 'map', label: 'Experiences' },
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
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-3xl font-headline-sm text-[#2D2926] mb-8">Hello, Anika!</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-white p-6 rounded-[24px] border border-outline shadow-sm">
                      <div className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Total Trips</div>
                      <div className="text-4xl font-headline-sm text-[#2D2926]">12</div>
                   </div>
                   <div className="bg-white p-6 rounded-[24px] border border-outline shadow-sm">
                      <div className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Active Bookings</div>
                      <div className="text-4xl font-headline-sm text-[#008080]">2</div>
                   </div>
                   <div className="bg-white p-6 rounded-[24px] border border-outline shadow-sm">
                      <div className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Earnings Credit</div>
                      <div className="text-4xl font-headline-sm text-[#E2725B]">৳4,500</div>
                   </div>
                </div>
                
                <div className="bg-white p-8 rounded-[32px] border border-outline shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-[#2D2926] mb-6">Recent Activity</h3>
                  <div className="space-y-6">
                    {[
                      { title: 'Booked Sundarbans Wildlife Tracking', date: '2 days ago', status: 'Confirmed' },
                      { title: 'Saved "Tea Plucking in Sylhet"', date: '5 days ago', status: 'Saved' },
                      { title: 'Completed Boat Ride at Buriganga', date: '1 week ago', status: 'Completed' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="font-bold text-[#2D2926]">{activity.title}</p>
                          <p className="text-xs text-gray-400">{activity.date}</p>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#008080] bg-[#008080]/10 px-2 py-1 rounded">{activity.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </motion.div>
          )}

          {activeTab === 'bookings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-headline-sm text-[#2D2926]">My Bookings</h1>
                <div className="flex gap-2">
                  <button className="bg-[#008080] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Upcoming</button>
                  <button className="bg-white text-gray-600 border border-outline px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">Past</button>
                </div>
              </div>

              <div className="space-y-8">
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
                          <img src="/pic2.png" alt="Arif Ahmed" className="w-10 h-10 rounded-full object-cover" />
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
            </motion.div>
          )}

          {activeTab === 'experiences' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-3xl font-headline-sm text-[#2D2926] mb-8">My Experiences</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Tea Plucking in Sylhet', img: 'https://images.unsplash.com/photo-1594142465967-e11666878271?auto=format&fit=crop&w=800&q=80', status: 'Published' },
                  { title: 'Old Dhaka Food Tour', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80', status: 'Draft' }
                ].map((exp, i) => (
                  <div key={i} className="bg-white rounded-[24px] border border-outline overflow-hidden shadow-sm group">
                    <div className="h-48 overflow-hidden relative">
                      <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#008080]">
                        {exp.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2D2926] mb-4">{exp.title}</h3>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#008080] text-white py-2 rounded-full text-sm font-bold">Edit</button>
                        <button className="flex-1 border border-outline text-gray-600 py-2 rounded-full text-sm font-bold">Preview</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'earnings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-3xl font-headline-sm text-[#2D2926] mb-8">Earnings</h1>
              <div className="bg-white p-8 rounded-[32px] border border-outline shadow-sm mb-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Available Balance</p>
                    <h2 className="text-5xl font-headline-sm text-[#008080] mt-1">৳12,450</h2>
                  </div>
                  <button className="bg-[#E2725B] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition-all">Withdraw</button>
                </div>
                <div className="h-48 flex items-end justify-between gap-2 px-4 border-b border-outline pb-4">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#008080]/20 rounded-t-lg hover:bg-[#008080] transition-all cursor-pointer relative group" style={{ height: `${h}%` }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2D2926] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">৳{h * 100}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-3xl font-headline-sm text-[#2D2926] mb-8">Settings</h1>
              <div className="bg-white rounded-[32px] border border-outline overflow-hidden shadow-sm">
                <div className="p-8 border-b border-gray-100 flex items-center gap-6">
                  <img src="/pic5.jpg" alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-[#008080]/10" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2926]">Anika Rahman</h3>
                    <p className="text-gray-500">anika.rahman@example.com</p>
                    <button className="mt-2 text-[#008080] text-sm font-bold hover:underline">Change Photo</button>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-2">Display Name</label>
                      <input type="text" defaultValue="Anika Rahman" className="w-full bg-gray-50 border border-outline rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#008080]/10 outline-none" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-2">Language</label>
                      <select className="w-full bg-gray-50 border border-outline rounded-2xl px-4 py-3.5 focus:bg-white outline-none">
                        <option>English (US)</option>
                        <option>Bengali</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button className="bg-[#008080] text-white px-8 py-3 rounded-full font-bold">Save Changes</button>
                    <button className="border border-outline text-gray-500 px-8 py-3 rounded-full font-bold">Cancel</button>
                  </div>
                </div>
              </div>
            </motion.div>
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
                     <img src="/pic2.png" alt="Arif Ahmed" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                     <div>
                       <h3 className="font-bold text-sm">Arif Ahmed</h3>
                       <p className="text-xs text-white/70">Online</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-1">
                      <button 
                        onClick={startFreshChat}
                        title="Start Fresh Chat"
                        className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">refresh</span>
                      </button>
                      <button onClick={() => setIsChatOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                  </div>
               </div>
               
               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                  {chatMessages.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                      <span className="material-symbols-outlined text-[48px] mb-2">forum</span>
                      <p className="text-sm">Start a new conversation with Arif</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Today</span>
                      </div>
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className={`flex gap-2 text-sm max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
                          <div className={`p-3 rounded-2xl shadow-sm ${msg.sender === 'user' ? 'bg-[#008080] text-white rounded-tr-sm' : 'bg-white border border-outline text-[#2D2926] rounded-tl-sm'}`}>
                            {msg.text}
                            <span className={`text-[10px] block mt-1 ${msg.sender === 'user' ? 'text-white/60 text-right' : 'text-gray-400 text-right'}`}>
                              {msg.time} {msg.sender === 'user' && <span className="material-symbols-outlined text-[12px] align-middle">done_all</span>}
                            </span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
               </div>

               {/* Input */}
               <div className="p-3 bg-white border-t border-outline flex items-center gap-2 shrink-0">
                 <input 
                   type="text" 
                   placeholder="Type a message..." 
                   className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-[#008080]"
                   onKeyPress={(e) => {
                     if (e.key === 'Enter') {
                       const val = e.currentTarget.value;
                       if (val) {
                         setChatMessages([...chatMessages, { id: Date.now(), text: val, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
                         e.currentTarget.value = '';
                       }
                     }
                   }}
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
