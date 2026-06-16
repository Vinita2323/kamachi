import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-primary/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-section-padding px-margin-mobile md:px-section-padding max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <img src="/Logo (7).png" alt="Kamachi TMT" className="h-12 md:h-14 w-auto mb-4 md:mb-6 bg-white rounded p-1" />
          <p className="text-white/80 font-body-md pr-4 mb-4 md:mb-0">Leading the steel industry through innovative manufacturing and sustainable growth since 1980.</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-white mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Sustainability Report</a></li>
            <li><a className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Global Locations</a></li>
            <li><a className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-white mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</a></li>
            <li><a className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-white mb-6">Contact</h4>
          <p className="text-white/80 mb-4">Kamachi Towers, Industrial Area,<br />Chennai, TN - 600001</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
            <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-8 px-margin-mobile text-center">
        <p className="text-white/60 font-label-caps text-[10px] tracking-widest uppercase">© 2024 Kamachi Industries. All rights reserved. Precise Engineering, Sustainable Strength.</p>
      </div>
    </footer>
  );
};

export default Footer;
