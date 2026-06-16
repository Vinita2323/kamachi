import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 bg-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-section-padding">
          
          <div className="bg-white rounded-2xl shadow-md border border-outline-variant overflow-hidden mb-8">
            <div className="bg-primary p-8 text-white flex justify-between items-end">
              <div>
                <h1 className="font-display-lg text-3xl mb-1 font-bold">My Profile</h1>
                <p className="text-white/80 font-body-md">Manage your account and view your quote history.</p>
              </div>
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold uppercase shadow-lg">
                {user.name.charAt(0)}
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="font-bold text-xl text-primary border-b border-outline-variant pb-2 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-label-caps text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Full Name</p>
                  <p className="font-body-lg font-medium text-primary">{user.name}</p>
                </div>
                <div>
                  <p className="font-label-caps text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Email Address</p>
                  <p className="font-body-lg font-medium text-primary">{user.email}</p>
                </div>
                <div>
                  <p className="font-label-caps text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Phone Number</p>
                  <p className="font-body-lg font-medium text-primary">+91 98765 43210</p>
                </div>
                <div>
                  <p className="font-label-caps text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Company</p>
                  <p className="font-body-lg font-medium text-primary">Kamachi Partner Ltd.</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button className="bg-primary/10 text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary/20 transition-colors">Edit Profile</button>
                <button onClick={logout} className="border border-outline-variant text-on-surface-variant px-6 py-2 rounded-lg font-bold hover:border-primary hover:text-primary transition-colors">Logout</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-outline-variant overflow-hidden">
            <div className="p-8">
              <h3 className="font-bold text-xl text-primary border-b border-outline-variant pb-2 mb-6">Recent Quotes</h3>
              
              <div className="space-y-4">
                <div className="border border-outline-variant rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-primary transition-colors group cursor-pointer">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-primary text-lg">QT-2024-001</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded font-bold uppercase">Approved</span>
                    </div>
                    <p className="text-on-surface-variant text-sm">500 Tonnes • Kamachi Fe 500D • Chennai Metro Project</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-sm text-on-surface-variant mb-1">Requested on Oct 12, 2024</p>
                    <button className="text-secondary font-bold text-sm hover:underline group-hover:text-primary transition-colors">View Details</button>
                  </div>
                </div>

                <div className="border border-outline-variant rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-primary transition-colors group cursor-pointer">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-primary text-lg">QT-2024-002</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-bold uppercase">Pending Review</span>
                    </div>
                    <p className="text-on-surface-variant text-sm">1200 Tonnes • Kamachi Fe 550 • Coastal Highway</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-sm text-on-surface-variant mb-1">Requested on Oct 14, 2024</p>
                    <button className="text-secondary font-bold text-sm hover:underline group-hover:text-primary transition-colors">View Details</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
