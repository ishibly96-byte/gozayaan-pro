import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';
import { useAppStore } from '../../store/useAppStore';

export default function MainLayout() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const currentUser = useAppStore(state => state.currentUser);
  const logout = useAppStore(state => state.logout);

  return (
    <>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      
      {/* TopNavBar */}
      <nav className="docked full-width top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm fixed w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://asset.gozayaan.com/general/gozayaan-logo-new.svg" alt="GoZayaan Logo" className="h-8 object-contain" />
          </Link>
          <div className="hidden md:flex items-center space-x-8 font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight opacity-80">
            <Link to="/" className="text-[#008080] border-b-2 border-[#008080] pb-1 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200">Explore</Link>
            <Link to="/discover" className="text-slate-600 dark:text-slate-400 hover:text-[#008080] transition-all duration-200">Find Agents</Link>
            <Link to="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-[#008080] transition-all duration-200">My Bookings</Link>
            <Link to="/host" className="text-slate-600 dark:text-slate-400 hover:text-[#008080] transition-all duration-200">Become an Agent</Link>
          </div>
          <div className="flex items-center space-x-6">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <span className="font-medium text-sm text-gray-700 hidden sm:block">Hi, {currentUser.name.split(' ')[0]}</span>
                <button onClick={() => logout()} className="text-sm font-medium text-gray-500 hover:text-gray-800">Logout</button>
                <img src={currentUser.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
              </div>
            ) : (
              <>
                <button onClick={() => setIsAuthModalOpen(true)} className="text-sm font-medium hover:text-[#008080] transition-colors">Login</button>
                <button onClick={() => setIsAuthModalOpen(true)} className="bg-[#008080] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:brightness-110 transition-all">Get Started</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main content, padding top to offset fixed navbar */}
      <div className="pt-20 min-h-screen">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#E6E1D6]">
          <div className="text-lg font-bold text-[#008080] font-['Plus_Jakarta_Sans'] flex items-center space-x-2">
            <img src="https://asset.gozayaan.com/general/gozayaan-logo-new.svg" alt="GoZayaan Logo" className="h-6 object-contain grayscale opacity-60" />
          </div>
          <div className="flex space-x-6 font-['Plus_Jakarta_Sans'] text-sm">
            <Link to="/about" className="text-slate-500 hover:text-[#008080] hover:underline underline-offset-4 opacity-100 hover:opacity-80 transition-all">About Us</Link>
            <Link to="/safety" className="text-slate-500 hover:text-[#008080] hover:underline underline-offset-4 opacity-100 hover:opacity-80 transition-all">Safety</Link>
            <Link to="/terms" className="text-slate-500 hover:text-[#008080] hover:underline underline-offset-4 opacity-100 hover:opacity-80 transition-all">Terms</Link>
            <Link to="/privacy" className="text-slate-500 hover:text-[#008080] hover:underline underline-offset-4 opacity-100 hover:opacity-80 transition-all">Privacy</Link>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="font-label-caps text-slate-500 font-bold">842 Agents Online</span>
            </div>
            <div className="font-label-caps text-slate-400">
              © 2024 GoZayaan Pro
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
