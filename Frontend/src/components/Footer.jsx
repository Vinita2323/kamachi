import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 md:gap-12 py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Logo & Description */}
        <div className="flex flex-col pr-0 lg:pr-8 md:border-r border-white/5">
          <Link to="/" className="inline-block mb-6">
            <img src="/Logo (7).png" alt="Kamachi TMT" className="h-12 w-auto" />
          </Link>
          <p className="text-white/60 text-xs mb-8 leading-relaxed max-w-[280px]">
            Kamachi TMT Bars are engineered for unmatched strength and crafted for a stronger tomorrow.
          </p>
          <div className="flex gap-3">
            {['facebook', 'linkedin', 'youtube', 'instagram'].map((social) => (
              <a key={social} className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#2563EB] text-white/80 hover:text-white transition-colors" href="#">
                {/* SVG placeholders for social icons if material symbols don't match exactly */}
                <span className="material-symbols-outlined text-[14px]">
                  {social === 'facebook' ? 'public' : social === 'linkedin' ? 'work' : social === 'youtube' ? 'play_arrow' : 'photo_camera'}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="pl-0 lg:pl-4">
          <h4 className="text-[15px] font-bold text-white mb-6">Products</h4>
          <ul className="space-y-3.5">
            {['Fe 500D', 'Fe 550', 'Fe 600', 'CRS', 'TMT Bars'].map((item) => (
              <li key={item}>
                <Link to="/products" className="text-white/60 hover:text-white transition-colors text-xs">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[15px] font-bold text-white mb-6">Company</h4>
          <ul className="space-y-3.5">
            {['About Us', 'Infrastructure', 'Projects', 'Our Clients', 'Careers'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white transition-colors text-xs">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-[15px] font-bold text-white mb-6">Resources</h4>
          <ul className="space-y-3.5">
            {['Brochure', 'Quality Policy', 'Sustainability', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <a className="text-white/60 hover:text-white transition-colors text-xs" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-[15px] font-bold text-white mb-6">Contact Us</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-white/60 text-[16px] mt-0.5">location_on</span>
              <p className="text-white/60 text-xs leading-relaxed">
                Kamachi Industries Limited,<br/>Durgapur, West Bengal, India
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/60 text-[16px]">call</span>
              <p className="text-white/60 text-xs">1800 345 0000</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/60 text-[16px]">mail</span>
              <p className="text-white/60 text-xs">info@kamachitmt.com</p>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-white/60 text-[11px]">© 2024 Kamachi Industries Limited. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white text-[11px] transition-colors">Privacy Policy</a>
              <span className="text-white/20 text-[11px]">|</span>
              <a href="#" className="text-white/60 hover:text-white text-[11px] transition-colors">Terms & Conditions</a>
            </div>
            
            {/* Scroll to top button */}
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-[#1e293b] border border-white/5 flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors md:absolute md:right-0 md:-top-12"
              aria-label="Scroll to top"
            >
              <span className="material-symbols-outlined text-white/80 text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

