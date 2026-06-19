import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Generated assets for the timeline
import timeline1978 from '../assets/timeline_1978.png';
import timeline2008 from '../assets/timeline_2008.png';
import timeline2012 from '../assets/timeline_2012.png';
import timeline2018 from '../assets/timeline_2018.png';
import timelinePresent from '../assets/timeline_present.png';

import skyscraperImg from '../assets/project_skyscraper.png';

const About = () => {
  const values = [
    { icon: 'military_tech', title: 'Uncompromising Quality', desc: 'Every batch of steel is refined through Ladle Refining Furnaces and tested in NABL labs to meet global standards.' },
    { icon: 'eco', title: 'Green Sustainability', desc: 'Pioneering clean energy with captive waste-heat recovery power plants and eco-friendly raw material recycling.' },
    { icon: 'psychology', title: 'Continuous Innovation', desc: 'Integrating robotic notching, scale-free rolling, and computerized quenching for advanced structural engineering.' },
    { icon: 'handshake', title: 'Customer Trust', desc: 'Building relationships forged in integrity, transparency, and timely deliveries across the country.' },
  ];

  return (
    <>
      <Header />
      <main className="bg-background text-primary pt-20">

        {/* Corporate Profile Section */}
        <section className="py-12 bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-secondary font-label-caps text-xs tracking-widest uppercase font-bold">WHO WE ARE</span>
                <h2 className="font-headline-lg text-2xl md:text-4xl text-primary font-bold">Pioneers of Modern Metallurgy</h2>
                <p className="text-on-surface-variant font-body-md text-sm leading-normal">
                  From our humble beginnings in 1978, Kamachi Group has grown into a major power in the Indian steel sector. By building integrated manufacturing plants and adopting advanced European and German technologies, we ensure that every steel bar carrying the Kamachi name represents trust, security, and endurance.
                </p>
                <p className="text-on-surface-variant font-body-md text-sm leading-normal">
                  Our flagship TMT steel bars are trusted by engineers and architects to build seismically active high-rises, high-salinity marine bridges, and massive public infrastructure. We don't just supply steel; we anchor the structural safety of the nation.
                </p>
                
                {/* Micro Stats Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="border-l-2 border-secondary pl-2.5">
                    <h4 className="text-xl font-bold text-primary">45+</h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Years of Legacy</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-2.5">
                    <h4 className="text-xl font-bold text-primary">18+</h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">States Reached</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-2.5">
                    <h4 className="text-xl font-bold text-primary">5M+</h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Tonnes Delivered</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] max-h-[360px] w-full">
                  <img src={skyscraperImg} alt="Skyscraper reinforced with Kamachi steel" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
                {/* Decorative absolute element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Vision & Mission */}
        <section className="py-10 bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding space-y-10">
            
            {/* Our Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="overflow-hidden shadow-sm border-2 border-white aspect-[16/10] max-h-[200px] w-full">
                <img src="/assets/vision.jpg" alt="Our Vision" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="text-secondary font-label-caps text-[10px] tracking-widest uppercase font-bold">FORWARD LOOKING</span>
                <h3 className="text-xl md:text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-on-surface-variant leading-relaxed text-xs md:text-sm">
                  To remain at the vanguard of the global steel industry by adopting zero-waste green manufacturing practices, expanding digital automation, and delivering heavy reinforcement solutions that ensure absolute safety for generations.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-2 order-2 md:order-1">
                <span className="text-secondary font-label-caps text-[10px] tracking-widest uppercase font-bold">OUR PURPOSE</span>
                <h3 className="text-xl md:text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-on-surface-variant leading-relaxed text-xs md:text-sm">
                  To supply superior quality, highly ductile, and corrosion-resistant TMT steel bars through scientific metallurgical methods. We commit ourselves to structural safety, eco-responsible production, and empowering developers with premium building components.
                </p>
              </div>
              <div className="overflow-hidden shadow-sm border-2 border-white aspect-[16/10] max-h-[200px] w-full order-1 md:order-2">
                <img src="/assets/mission.jpg" alt="Our Mission" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-10 bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="text-center mb-8">
              <span className="text-secondary font-label-caps text-sm md:text-base tracking-widest uppercase font-extrabold block mb-1">OUR PILLARS</span>
              <h2 className="font-headline-lg text-2xl md:text-4xl text-primary font-bold mt-1">Values That Strengthen Us</h2>
              <p className="text-on-surface-variant mt-2 max-w-xl mx-auto font-body-md text-xs md:text-sm">
                Our operations are guided by key principles that ensure our partners receive the best products and sustainable corporate practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white p-4.5 rounded-2xl border border-outline-variant shadow-sm hover:border-secondary hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2.5 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">{val.icon}</span>
                  </div>
                  <h4 className="text-sm md:text-base font-bold mb-1.5 text-primary leading-snug">{val.title}</h4>
                  <p className="text-gray-700 text-xs md:text-[13px] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staggered Interactive Timeline Section */}
        <section className="py-10 bg-surface-container-low border-t border-outline-variant relative overflow-hidden">
          {/* Watermark background text */}
          <div className="absolute left-6 bottom-44 select-none pointer-events-none opacity-5 hidden lg:block">
            <span className="font-display-lg text-7xl font-black text-primary text-outline-thin tracking-widest block uppercase">STEELING</span>
            <span className="font-display-lg text-7xl font-black text-primary text-outline-thin tracking-widest block uppercase">THE FUTURE</span>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding relative">
            
            {/* Centered Header */}
            <div className="text-center mb-8 space-y-2">
              <span className="text-secondary font-label-caps text-xs md:text-sm tracking-widest uppercase font-bold relative after:content-[''] after:inline-block after:w-8 after:h-[2px] after:bg-secondary after:ml-2 after:align-middle">THE JOURNEY</span>
              <h2 className="font-display-lg text-2xl md:text-4xl font-bold text-primary leading-tight">Milestones of <span className="text-secondary">Progress</span></h2>
              <p className="text-on-surface-variant font-body-md text-xs leading-relaxed max-w-xl mx-auto">
                From humble beginnings to a national legacy, our journey is built on innovation, quality and unwavering trust.
              </p>
            </div>

            {/* Desktop timeline vertical line */}
            <div className="absolute left-[30px] md:left-1/2 top-28 bottom-24 w-1 bg-gradient-to-b from-primary via-primary/80 to-secondary transform md:-translate-x-1/2 z-0 rounded-full"></div>
            
            {/* Arrowhead at the bottom of the timeline line */}
            <div className="absolute left-[28px] md:left-1/2 bottom-24 w-2 h-2 border-r-2 border-b-2 border-secondary rotate-45 transform md:-translate-x-1 z-10"></div>

            {/* Timeline Rows */}
            <div className="space-y-3 relative z-10">
              
              {/* Row 1: 1978 Card (Right) */}
              <div className="relative flex flex-col md:flex-row items-center w-full">
                {/* Timeline node */}
                <div className="absolute left-[30px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center shadow z-20 hover:scale-110 hover:border-secondary transition-all">
                  <span className="material-symbols-outlined text-[10px]">handshake</span>
                </div>
                
                {/* Card container */}
                <div className="w-full md:w-1/2 ml-auto pl-16 md:pl-2 flex justify-start">
                  <div className="bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-full max-w-[340px] w-full">
                    <div className="w-full sm:w-[100px] h-24 sm:h-auto shrink-0 overflow-hidden">
                      <img src={timeline1978} alt="Kamachi Genesis 1978" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-2.5 flex-1 flex flex-col justify-center">
                      <span className="text-primary font-display-lg text-sm font-black mb-0.5">1978</span>
                      <h4 className="text-xs font-bold text-primary mb-0.5">The Genesis</h4>
                      <p className="text-on-surface-variant text-[10px] leading-snug">
                        Inception of the Kamachi Group as a trading entity, laying down values of trust and transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: 2008 Card (Left) */}
              <div className="relative flex flex-col md:flex-row items-center w-full">
                {/* Timeline node */}
                <div className="absolute left-[30px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center shadow z-20 hover:scale-110 hover:border-secondary transition-all">
                  <span className="material-symbols-outlined text-[10px]">factory</span>
                </div>

                {/* Card container */}
                <div className="w-full md:w-1/2 mr-auto pr-0 pl-16 md:pr-2 md:pl-0 flex justify-start md:justify-end">
                  <div className="bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-full max-w-[340px] w-full">
                    <div className="p-2.5 flex-1 flex flex-col justify-center order-2 sm:order-1">
                      <span className="text-primary font-display-lg text-sm font-black mb-0.5">2008</span>
                      <h4 className="text-xs font-bold text-primary mb-0.5">Integrated Steel Plant</h4>
                      <p className="text-on-surface-variant text-[10px] leading-snug">
                        Established a massive, state-of-the-art integrated steel plant in South India, stepping into direct manufacturing.
                      </p>
                    </div>
                    <div className="w-full sm:w-[100px] h-24 sm:h-auto shrink-0 overflow-hidden order-1 sm:order-2">
                      <img src={timeline2008} alt="Kamachi Integrated Steel Plant" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: 2012 Card (Right) */}
              <div className="relative flex flex-col md:flex-row items-center w-full">
                {/* Timeline node */}
                <div className="absolute left-[30px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center shadow z-20 hover:scale-110 hover:border-secondary transition-all">
                  <span className="material-symbols-outlined text-[10px]">settings</span>
                </div>

                {/* Card container */}
                <div className="w-full md:w-1/2 ml-auto pl-16 md:pl-2 flex justify-start">
                  <div className="bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-full max-w-[340px] w-full">
                    <div className="p-2.5 flex-1 flex flex-col justify-center order-2 sm:order-1">
                      <span className="text-primary font-display-lg text-sm font-black mb-0.5">2012</span>
                      <h4 className="text-xs font-bold text-primary mb-0.5">German Automated Mills</h4>
                      <p className="text-on-surface-variant text-[10px] leading-snug">
                        Introduced fully automated PLC-controlled German rolling mills to ensure unmatched structural precision.
                      </p>
                    </div>
                    <div className="w-full sm:w-[100px] h-24 sm:h-auto shrink-0 overflow-hidden order-1 sm:order-2">
                      <img src={timeline2012} alt="German Automated Mills" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: 2018 Card (Left) */}
              <div className="relative flex flex-col md:flex-row items-center w-full">
                {/* Timeline node */}
                <div className="absolute left-[30px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center shadow z-20 hover:scale-110 hover:border-secondary transition-all">
                  <span className="material-symbols-outlined text-[10px]">trending_up</span>
                </div>

                {/* Card container */}
                <div className="w-full md:w-1/2 mr-auto pr-0 pl-16 md:pr-2 md:pl-0 flex justify-start md:justify-end">
                  <div className="bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-full max-w-[340px] w-full">
                    <div className="p-2.5 flex-1 flex flex-col justify-center order-2 sm:order-1">
                      <span className="text-primary font-display-lg text-sm font-black mb-0.5">2018</span>
                      <h4 className="text-xs font-bold text-primary mb-0.5">LRF Technology Upgrade</h4>
                      <p className="text-on-surface-variant text-[10px] leading-snug">
                        Installed Ladle Refining Furnaces (LRF) to master precision steel chemistry and produce higher grade TMT bars.
                      </p>
                    </div>
                    <div className="w-full sm:w-[100px] h-24 sm:h-auto shrink-0 overflow-hidden order-1 sm:order-2">
                      <img src={timeline2018} alt="LRF Technology" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Present Card (Right) */}
              <div className="relative flex flex-col md:flex-row items-center w-full">
                {/* Timeline node */}
                <div className="absolute left-[30px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center shadow z-20 hover:scale-110 hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-[10px]">domain</span>
                </div>

                {/* Card container */}
                <div className="w-full md:w-1/2 ml-auto pl-16 md:pl-2 flex justify-start">
                  <div className="bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-full max-w-[340px] w-full">
                    <div className="p-2.5 flex-1 flex flex-col justify-center order-2 sm:order-1">
                      <span className="text-secondary font-display-lg text-sm font-black mb-0.5">Present</span>
                      <h4 className="text-xs font-bold text-primary mb-0.5">National Legacy</h4>
                      <p className="text-on-surface-variant text-[10px] leading-snug">
                        Supplying over 5 million tonnes of high-performance steel across 18+ states, reinforcing India’s iconic landmarks.
                      </p>
                    </div>
                    <div className="w-full sm:w-[100px] h-24 sm:h-auto shrink-0 overflow-hidden order-1 sm:order-2">
                      <img src={timelinePresent} alt="Kamachi Steel TMT Rebars Present" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Horizontal Panel */}
            <div className="mt-16 bg-white border border-outline-variant rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0 items-center relative z-20 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
              {/* Item 1 */}
              <div className="flex items-center gap-3.5 py-4 md:py-1.5 px-4 md:px-3 lg:px-6 w-full justify-start md:justify-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polygon points="12 7.5 13.5 10.5 16.5 10.5 14 12.5 15 15.5 12 13.5 9 15.5 10 12.5 7.5 10.5 10.5 10.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-display-lg text-lg md:text-xl font-extrabold text-secondary leading-tight">45+</h4>
                  <p className="text-[10px] md:text-[11px] text-on-surface-variant font-medium leading-tight whitespace-nowrap">Years of Excellence</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3.5 py-4 md:py-1.5 px-4 md:px-3 lg:px-6 w-full justify-start md:justify-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 21h20" />
                    <path d="M3 21V10l4.5-3v3l4.5-3v3l4.5-3v11H3z" />
                    <line x1="6" y1="14" x2="6" y2="17" />
                    <line x1="10" y1="14" x2="10" y2="17" />
                    <path d="M17 21V6l-1-1h2.5l-1 1v16" />
                    <path d="M20 21V4l-1-1h2.5l-1 1v17" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display-lg text-lg md:text-xl font-extrabold text-secondary leading-tight">5M+</h4>
                  <p className="text-[10px] md:text-[11px] text-on-surface-variant font-medium leading-tight whitespace-nowrap">Tonnes of Steel Produced</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3.5 py-4 md:py-1.5 px-4 md:px-3 lg:px-6 w-full justify-start md:justify-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" y1="3" x2="9" y2="18" />
                    <line x1="15" y1="6" x2="15" y2="21" />
                    <path d="M12 5c-1.8 0-3 1.5-3 3.5C9 11 12 14.5 12 14.5s3-3.5 3-6C15 6.5 13.8 5 12 5z" />
                    <circle cx="12" cy="8.5" r="1.2" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display-lg text-lg md:text-xl font-extrabold text-secondary leading-tight">18+</h4>
                  <p className="text-[10px] md:text-[11px] text-on-surface-variant font-medium leading-tight whitespace-nowrap">States Across India</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-3.5 py-4 md:py-1.5 px-4 md:px-3 lg:px-6 w-full justify-start md:justify-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 14c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                    <path d="M1 14.5h22" />
                    <path d="M3 14.5c0 1.2 1 2.2 2.2 2.2h13.6c1.2 0 2.2-1 2.2-2.2" />
                    <path d="M12 4v4" />
                    <path d="M9 5.5v2.5" />
                    <path d="M15 5.5v2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display-lg text-lg md:text-xl font-extrabold text-secondary leading-tight">1000+</h4>
                  <p className="text-[10px] md:text-[11px] text-on-surface-variant font-medium leading-tight whitespace-nowrap">Projects Delivered</p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-center gap-3.5 py-4 md:py-1.5 px-4 md:px-3 lg:px-6 w-full justify-start md:justify-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M12 5.5l1 2.2h2.2l-1.8 1.4 0.7 2.2-1.9-1.4-1.9 1.4 0.7-2.2-1.8-1.4h2.2z" fill="currentColor" />
                    <path d="M9.5 14.5l-2.5 6.5 3-1.5 3 1.5-1.5-4" />
                    <path d="M14.5 14.5l2.5 6.5-3-1.5-3 1.5 1.5-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display-lg text-lg md:text-xl font-extrabold text-secondary leading-tight">Premium</h4>
                  <p className="text-[10px] md:text-[11px] text-on-surface-variant font-medium leading-tight whitespace-nowrap">Quality Assured</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white border-t border-outline-variant text-center">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <h2 className="font-display-lg text-3xl md:text-4xl text-primary font-bold mb-6">
              Partner with the Strength of Kamachi
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Have questions about our manufacturing standards or need custom structural components? Get in touch with our engineering team today.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-md">
                Talk to an Expert
              </Link>
              <Link to="/products" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                View Specifications
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
