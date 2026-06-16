import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequestQuote = () => {
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  // Protected route logic
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would normally send the data to an API
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-section-padding mt-8">
          
          <div className="bg-white rounded-2xl shadow-xl border border-outline-variant overflow-hidden">
            <div className="bg-primary p-8 md:p-12 text-white">
              <h1 className="font-display-lg text-4xl mb-4 font-bold">Request a Quote</h1>
              <p className="text-white/80 max-w-2xl font-body-lg">
                Welcome, {user.name}! Please fill out the details below, and our sales team will get back to you with a competitive quote for your project.
              </p>
            </div>

            {submitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Quote Request Submitted!</h2>
                <p className="text-on-surface-variant max-w-md mx-auto mb-8">
                  Thank you for choosing Kamachi TMT. Our team is reviewing your requirements and will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Company Details */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-xl text-primary border-b border-outline-variant pb-2">Company Details</h3>
                    <div>
                      <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Company Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Project Location (City, State)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-xl text-primary border-b border-outline-variant pb-2">Product Requirements</h3>
                    <div>
                      <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Primary Grade Required</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required>
                        <option value="">Select a Grade...</option>
                        <option value="fe500d">Kamachi Fe 500D</option>
                        <option value="fe550">Kamachi Fe 550</option>
                        <option value="hcrm">HCRM (Corrosion Resistant)</option>
                        <option value="fe600">Kamachi Fe 600</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Estimated Quantity (in Tonnes)</label>
                      <input type="number" min="1" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">Additional Requirements or Comments</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                </div>

                <div className="flex justify-end pt-6 border-t border-outline-variant">
                  <button 
                    type="submit" 
                    className="bg-primary text-on-primary px-12 py-4 rounded-lg font-headline-md font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-md"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RequestQuote;
