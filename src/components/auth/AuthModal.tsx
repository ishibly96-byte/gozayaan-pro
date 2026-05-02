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

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (!name || !email || !password) {
        setError('Please fill in all fields (Name, Email, and Password).');
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
            className="fixed inset-0 bg-[#2D2926]/40 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-[32px] shadow-2xl z-50 overflow-hidden border border-outline"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-headline-sm text-[#2D2926]">
                  {isLogin ? 'Welcome back' : 'Get Started'}
                </h2>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm mb-6 flex items-start gap-2 border border-red-100">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-outline rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] outline-none transition-all text-[#2D2926]"
                    placeholder="e.g. Sarah Jenkins"
                  />
                </div>
                
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-outline rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] outline-none transition-all text-[#2D2926]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#008080]">Password</label>
                    {isLogin && (
                      <a href="#" className="text-xs text-gray-500 hover:text-[#008080] transition-colors">Forgot password?</a>
                    )}
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-50 border border-outline rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] outline-none transition-all text-[#2D2926]"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#008080] text-white rounded-2xl py-4 font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-8 shadow-lg"
                >
                  {isLoading ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-outline"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Or continue with</span>
                <div className="flex-1 h-px bg-outline"></div>
              </div>

              <button
                onClick={handleGoogleLogin}
                type="button"
                className="w-full border border-outline rounded-2xl py-3.5 font-bold text-[#2D2926] hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 shadow-sm"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                Sign in with Google
              </button>

              <div className="mt-8 text-center text-sm text-gray-500">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#E2725B] font-bold hover:underline"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
