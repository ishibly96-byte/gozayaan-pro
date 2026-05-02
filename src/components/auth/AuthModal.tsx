import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppStore } from '../../store/useAppStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const login = useAppStore(state => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (!email || !password || (!isLogin && !name)) {
        setError('Please fill in all required fields.');
        return;
      }
      
      login('traveler1');
      onClose();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login('traveler1');
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2D2926]/70 z-50 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[900px] h-auto max-h-[90vh] bg-white rounded-[32px] shadow-2xl z-50 overflow-hidden border border-outline flex"
          >
            {/* Left Side - Image & Branding */}
            <div className="hidden md:block w-1/2 relative bg-[#F5F2ED]">
              <img 
                src="https://images.unsplash.com/photo-1596895111956-bf5763bdccc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Bangladesh scenery" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#008080]/90 via-[#008080]/40 to-transparent flex flex-col justify-between p-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-2xl p-2 shadow-lg">
                    <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white font-headline-sm text-2xl drop-shadow-lg">GoZayaan Pro</span>
                </div>
                
                <div className="text-white">
                  <h3 className="text-4xl font-headline-sm mb-4 leading-tight drop-shadow-lg">Sophisticated<br/>Adventure Awaits</h3>
                  <p className="text-white/90 text-lg font-medium drop-shadow-md">Join the most exclusive network of travelers and local experts in Bangladesh.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col justify-center">
              <div className="flex justify-between items-center mb-6">
                <div className="md:hidden flex items-center gap-3">
                  <img src="/logo.jpg" alt="Logo" className="h-8" />
                  <span className="text-[#008080] font-headline-sm text-xl">GoZayaan Pro</span>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors ml-auto">
                  <span className="material-symbols-outlined text-[28px]">close</span>
                </button>
              </div>

              <div className="max-w-sm mx-auto w-full">
                <h2 className="text-2xl font-headline-sm text-[#2D2926] mb-1">
                  {isLogin ? 'Welcome back' : 'Create an account'}
                </h2>
                <p className="text-gray-500 text-xs mb-6">
                  {isLogin ? 'Sign in to access your bookings and messages.' : 'Start your journey with GoZayaan Pro today.'}
                </p>

                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm mb-6 flex items-start gap-2 border border-red-100">
                    <span className="material-symbols-outlined text-[18px]">error</span>
                    <p>{error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#F5F2ED] border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all text-[#2D2926]"
                        placeholder="John Doe"
                      />
                    </motion.div>
                  )}
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F5F2ED] border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all text-[#2D2926]"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-gray-700">Password</label>
                      {isLogin && (
                        <a href="#" className="text-xs text-[#008080] hover:underline">Forgot password?</a>
                      )}
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-[#F5F2ED] border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all text-[#2D2926]"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#008080] text-white rounded-xl py-3 font-bold text-sm hover:bg-[#006666] transition-colors flex items-center justify-center gap-2 mt-4 shadow-md"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      isLogin ? 'Sign In' : 'Sign Up'
                    )}
                  </button>
                </form>

                <div className="my-5 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Or</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="w-full border border-gray-200 rounded-xl py-2.5 font-bold text-sm text-[#2D2926] hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4 h-4" />
                  Continue with Google
                </button>

                <div className="mt-6 text-center text-xs text-gray-500">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-[#008080] font-bold hover:underline"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
