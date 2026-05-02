import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HostOnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2ED] text-[#2D2926] font-body-ui antialiased">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596895111956-bf5763bdccc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Travel background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D2926]/60 to-[#2D2926]/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo.jpg" alt="GoZayaan Logo" className="h-12 mx-auto mb-8 rounded-lg" />
            <h1 className="text-5xl md:text-7xl font-headline-sm mb-6 leading-tight">Empower Your Local <br/><span className="text-[#008080]">Travel Business</span></h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join Bangladesh's most premium community of local experts and turn your passion into a thriving career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#008080] text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:brightness-110 transition-all">Start Your Application</button>
              <Link to="/" className="text-white font-bold hover:underline underline-offset-8">Explore the platform</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E2725B] mb-4">Why GoZayaan Pro?</h2>
          <h3 className="text-4xl font-headline-sm text-[#2D2926]">Everything you need to succeed</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'payments', title: '0% Commission', desc: 'Keep 100% of your earnings for the first year. No hidden fees, no catches.' },
            { icon: 'verified_user', title: 'Premium Branding', desc: 'Get featured as a Pro Agent and gain instant trust from global travelers.' },
            { icon: 'support_agent', title: '24/7 Priority Support', desc: 'Dedicated account managers to help you grow your business and handle logistics.' },
            { icon: 'insights', title: 'Data Insights', desc: 'Advanced analytics to understand traveler trends and optimize your experiences.' },
            { icon: 'shield', title: 'Insurance Coverage', desc: 'Liability insurance for all your bookings up to ৳100,000 per experience.' },
            { icon: 'language', title: 'Global Reach', desc: 'Connect with travelers from over 50+ countries looking for authentic experiences.' },
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] border border-outline shadow-sm hover:shadow-xl transition-all"
            >
              <div className="bg-[#008080]/10 text-[#008080] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px]">{benefit.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-[#2D2926] mb-3">{benefit.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Wizard Placeholder */}
      <section className="bg-white py-24 border-y border-outline">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline-sm text-[#2D2926] mb-4">Ready to start?</h3>
            <p className="text-gray-500">The application takes less than 10 minutes. Tell us about your expertise.</p>
          </div>
          
          <div className="bg-[#F5F2ED] rounded-[40px] p-10 border border-outline">
            <div className="flex justify-between mb-10 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
              {[1, 2, 3].map((step) => (
                <div key={step} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 ${step === 1 ? 'bg-[#008080] text-white' : 'bg-white border border-outline text-gray-400'}`}>
                  {step}
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-2">Full Legal Name</label>
                <input type="text" placeholder="As it appears on your NID" className="w-full bg-white border border-outline rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#008080]/10 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-2">Primary Expertise</label>
                <select className="w-full bg-white border border-outline rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#008080]/10 outline-none transition-all appearance-none">
                  <option>Select your specialty</option>
                  <option>Nature & Wildlife</option>
                  <option>History & Heritage</option>
                  <option>Food & Culinary</option>
                  <option>Photography</option>
                </select>
              </div>
              <button className="w-full bg-[#008080] text-white py-5 rounded-2xl font-bold text-lg mt-4 shadow-lg hover:brightness-110 transition-all">Continue Application</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#2D2926] rounded-[48px] p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#008080]/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-[64px] text-[#008080] mb-8">format_quote</span>
            <p className="text-2xl md:text-3xl font-medium italic mb-10 leading-relaxed max-w-4xl mx-auto">
              "Joining as a Pro Host allowed me to share my family's heritage with travelers from around the world, completely transforming my small guiding business."
            </p>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1622646270417-6490ce0fc12c?auto=format&fit=crop&w=150&q=80" alt="Tanvir Hasan" className="w-20 h-20 rounded-full border-4 border-[#008080] object-cover mb-4" />
              <h5 className="text-xl font-bold">Tanvir Hasan</h5>
              <p className="text-[#008080] font-bold uppercase tracking-widest text-[10px]">Sundarbans Photography Expert</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-outline text-center text-gray-400 text-xs">
        © 2024 GoZayaan Pro • Become an Agent Program
      </footer>
    </main>
  );
}
