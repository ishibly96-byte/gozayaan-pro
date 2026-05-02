import { Link } from 'react-router-dom';

export default function HostOnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-[#F5F2ED] text-[#2D2926] font-body-ui antialiased">
      {/* Left Side: Form Content */}
      <section className="w-full lg:w-1/2 flex flex-col pt-12 pb-20 px-6 lg:px-12 overflow-y-auto h-screen custom-scrollbar">
        <div className="max-w-xl mx-auto w-full flex flex-col gap-10">
          {/* Branding / Exit */}
          <div className="flex items-center justify-between">
            <Link to="/" className="font-headline-sm flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://asset.gozayaan.com/general/gozayaan-logo-new.svg" alt="GoZayaan Logo" className="h-8 object-contain" />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-gray-800 transition-colors flex items-center gap-1 bg-white border border-outline px-3 py-1.5 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-[18px]">close</span>
              <span className="text-xs font-bold uppercase tracking-widest">Exit</span>
            </Link>
          </div>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-headline-sm text-[#2D2926]">Become a Host</h1>
            <p className="text-lg text-gray-700 leading-relaxed">Join our premium community of local experts. Turn your passion for your city into a thriving business, backed by GoZayaan.</p>
          </header>
          
          <div className="flex gap-4 p-4 bg-orange-50 border border-orange-200 rounded-[24px]">
             <div className="bg-[#E2725B] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
               <span className="material-symbols-outlined text-[20px]">verified_user</span>
             </div>
             <div>
                <h4 className="font-bold text-[#2D2926]">Why Host with GoZayaan Pro?</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2 items-start"><span className="material-symbols-outlined text-[16px] text-[#008080] shrink-0">check</span> <b>0% Commission</b> for your first year.</li>
                  <li className="flex gap-2 items-start"><span className="material-symbols-outlined text-[16px] text-[#008080] shrink-0">check</span> <b>Dedicated Support</b> 24/7 priority line.</li>
                  <li className="flex gap-2 items-start"><span className="material-symbols-outlined text-[16px] text-[#008080] shrink-0">check</span> <b>Liability Insurance</b> covering up to ৳100,000.</li>
                </ul>
             </div>
          </div>

          {/* Onboarding Steps */}
          <div className="flex flex-col gap-6">
            <h3 className="font-headline-sm text-2xl text-[#2D2926]">Application Process</h3>
            
            {/* Step 1 */}
            <div className="bg-white rounded-[24px] border border-outline p-6 shadow-sm flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008080]"></div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#008080]/10 text-[#008080] font-bold flex items-center justify-center text-sm shrink-0">1</div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="font-headline-sm text-xl text-[#2D2926]">Identity & Requirements Verification</h3>
                  <p className="text-gray-500 text-sm">Upload your National ID (NID) and a short introductory video describing your expertise.</p>
                </div>
              </div>
              <div className="mt-3 border-2 border-dashed border-outline hover:border-[#008080]/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-white transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-[32px] text-[#008080] group-hover:-translate-y-1 transition-transform">cloud_upload</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2926]">Upload NID & Video</span>
                <span className="text-xs text-gray-400">JPG, PNG, MP4 up to 50MB</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/60 rounded-[24px] border border-outline p-6 flex flex-col gap-6 opacity-60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm shrink-0">2</div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="font-headline-sm text-xl text-gray-700">Experience Design</h3>
                  <p className="text-gray-500 text-sm">e.g., 'Traditional Pitha Making' or 'Sundarban Photography Tour'</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/60 rounded-[24px] border border-outline p-6 flex flex-col gap-6 opacity-60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm shrink-0">3</div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="font-headline-sm text-xl text-gray-700">Pricing & Calendar setup</h3>
                  <p className="text-gray-500 text-sm">Set your rates, available dates, and group size limits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4 pb-12">
            <button className="w-full bg-[#008080] text-white py-4 px-6 rounded-full font-bold text-lg hover:brightness-110 transition-colors shadow-lg flex items-center justify-center gap-2">
              Start Application
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
              <span className="material-symbols-outlined text-[16px] text-green-600">verified</span>
              <span className="text-[11px] uppercase font-bold tracking-widest">SSL Encrypted Secure Upload</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Visual Preview */}
      <section className="hidden lg:flex w-1/2 relative bg-[#F5F2ED] items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1596895111956-bf5763bdccc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/90 via-[#2D2926]/40 to-transparent"></div>
        
        {/* Floating UI Elements matching theme */}
        <div className="absolute top-24 right-12 bg-white p-4 rounded-[24px] shadow-2xl flex items-center gap-4 animate-[bounce_4s_infinite] hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-[32px] text-[#008080] fill-icon">verified</span>
          <div>
            <p className="font-bold text-[#2D2926]">Pro Verified</p>
            <p className="text-xs text-gray-500 mt-0.5">Stand out securely.</p>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-12 bg-white p-4 rounded-[24px] shadow-2xl flex items-center gap-4 animate-[bounce_5s_infinite] hover:scale-105 transition-transform">
          <div className="bg-[#E2725B] text-white w-12 h-12 rounded-[16px] flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <div>
            <p className="font-bold text-[#2D2926]">Zero Commission</p>
            <p className="text-xs text-gray-500 mt-0.5">Keep 100% of your earnings.</p>
          </div>
        </div>

        <div className="absolute bottom-16 left-12 right-12 z-10 flex flex-col">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[32px]">
             <p className="text-[20px] text-white leading-relaxed font-medium italic">"Joining as a Pro Host allowed me to share my family's heritage with travelers from around the world, completely transforming my small guiding business."</p>
             <div className="mt-4 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/20 flex flex-center items-center justify-center text-white font-bold">AJ</div>
               <div>
                  <div className="text-white font-bold text-sm">Alamin J.</div>
                  <div className="text-white/60 text-xs text-[10px] uppercase tracking-widest mt-0.5">Dhaka History Guide</div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
