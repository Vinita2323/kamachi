import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup(formData);
    // Navigate to the return URL if it exists, otherwise to home
    const from = location.state?.from?.pathname || '/';
    navigate(from);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-surface flex items-center justify-center">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-outline-variant w-full max-w-md my-8">
          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-3xl text-primary font-bold mb-2">Create Account</h1>
            <p className="text-on-surface-variant">Join to request and manage premium TMT bar quotes.</p>
          </div>
          
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div>
              <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-secondary text-on-secondary mt-4 py-4 rounded-lg font-headline-md font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors shadow-md"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-on-surface-variant">
            Already have an account?{' '}
            <Link to="/login" state={{ from: location.state?.from }} className="text-primary font-bold hover:underline">
              Log In here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
