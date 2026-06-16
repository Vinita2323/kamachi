import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    // Navigate to the return URL if it exists, otherwise to home
    const from = location.state?.from?.pathname || '/';
    navigate(from);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-surface flex items-center justify-center">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-outline-variant w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-3xl text-primary font-bold mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant">Log in to manage your Kamachi quotes.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-secondary hover:underline font-bold">Forgot Password?</a>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-md font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-on-surface-variant">
            Don't have an account?{' '}
            <Link to="/signup" state={{ from: location.state?.from }} className="text-secondary font-bold hover:underline">
              Sign Up here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
