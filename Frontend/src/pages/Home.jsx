import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroBg from '../assets/Hero copy.png';
import promoVideo from '../assets/video.mp4';
import fe550Img from '../assets/products/Fe550.jpg';
import fe500dImg from '../assets/products/Fe550D.jpg';
import hcrmImg from '../assets/products/Fe33.jpg';
import fe600Img from '../assets/products/Fe66.jpg';
import moneySaversImg from '../assets/products/Fe44.jpg';
import steelMakingVideo from '../assets/SteelMaking.mp4';

const convinceCards = [
  { id: 1, title: 'Fe 550', img: fe550Img, borderClass: '' },
  { id: 2, title: 'Fe 500 D', img: fe500dImg, borderClass: '' },
  { id: 3, title: 'HCRM', img: hcrmImg, borderClass: '' },
  { id: 4, title: 'Fe 600', img: fe600Img, borderClass: '' },
  { id: 5, title: 'Money Savers', img: moneySaversImg, borderClass: '' },
];

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen text-white font-body-md selection:bg-primary selection:text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-4 overflow-hidden">
          {/* Background & Overlays */}
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-0"></div>

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-section-padding w-full flex flex-col lg:flex-row items-center gap-8">

            {/* Left Content */}
            <div className="w-full lg:w-1/2" ref={el => sectionsRef.current[0] = el}>
              <span className="inline-block bg-[#1d4ed8] text-white px-3 py-1 font-bold text-[10px] rounded mb-4 tracking-widest uppercase">ESTABLISHED 1980</span>
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Strength That <br /> Builds <span className="text-[#FF3B30]">Nations</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg mb-6 max-w-lg leading-relaxed">
                Premium TMT Bars engineered for unmatched strength, durability and a better tomorrow.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-5 py-2.5 font-bold rounded flex items-center gap-2 transition-colors text-sm">
                  Explore Products
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-5 py-2.5 font-bold rounded flex items-center gap-2 transition-colors text-sm">
                  Watch Factory Tour
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>
                </button>
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="w-full lg:w-1/2" ref={el => sectionsRef.current[1] = el}>
              <div className="glass-panel p-0 rounded-2xl overflow-hidden border border-white/10 bg-[#1e293b]/40 backdrop-blur-md">
                <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                  {/* Stat 1 */}
                  <div className="p-6 flex flex-col items-start gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20 mt-1">
                        <span className="material-symbols-outlined text-white text-xs">toll</span>
                      </div>
                      <div>
                        <div className="font-headline-md text-2xl font-bold text-white leading-none">15.6</div>
                        <div className="text-xs font-bold text-white mt-1">MTPA</div>
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-[11px] leading-tight ml-10">Steel Making<br />Capacity</p>
                  </div>
                  {/* Stat 2 */}
                  <div className="p-6 flex flex-col items-start gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20 mt-1">
                        <span className="material-symbols-outlined text-white text-xs">factory</span>
                      </div>
                      <div>
                        <div className="font-headline-md text-2xl font-bold text-white leading-none">2,684</div>
                        <div className="text-xs font-bold text-white mt-1">MW</div>
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-[11px] leading-tight ml-10">Captive Power<br />Capacity</p>
                  </div>
                  {/* Stat 3 */}
                  <div className="p-6 flex flex-col items-start gap-3 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20">
                        <span className="material-symbols-outlined text-white text-xs">groups</span>
                      </div>
                      <div className="font-headline-md text-xl font-bold text-white leading-none">50,000+</div>
                    </div>
                    <p className="text-on-surface-variant text-[11px] leading-tight ml-10">Workforce<br />Across the Globe</p>
                  </div>
                  {/* Stat 4 */}
                  <div className="p-6 flex flex-col items-start gap-3 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20">
                        <span className="material-symbols-outlined text-white text-xs">volunteer_activism</span>
                      </div>
                      <div className="font-headline-md text-xl font-bold text-white leading-none">14+ Million</div>
                    </div>
                    <p className="text-on-surface-variant text-[11px] leading-tight ml-10">Lives Impacted<br />Through CSR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bar */}
        <section className="relative z-20 px-margin-mobile md:px-section-padding max-w-container-max mx-auto -mt-24 mb-16">
          <div className="bg-[#0b1325] border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#2563EB] text-sm">architecture</span>
              </div>
              <div>
                <h4 className="text-white font-medium text-xs mb-0.5">High Strength</h4>
                <p className="text-on-surface-variant text-[10px] leading-relaxed">Superior load bearing capacity for strong constructions.</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10 shrink-0"></div>
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#2563EB] text-sm">ac_unit</span>
              </div>
              <div>
                <h4 className="text-white font-medium text-xs mb-0.5">Corrosion Resistant</h4>
                <p className="text-on-surface-variant text-[10px] leading-relaxed">Advanced Thermex technology for long lasting life.</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10 shrink-0"></div>
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#2563EB] text-sm">shield</span>
              </div>
              <div>
                <h4 className="text-white font-medium text-xs mb-0.5">Earthquake Resistant</h4>
                <p className="text-on-surface-variant text-[10px] leading-relaxed">Designed to withstand seismic forces and ensure safety.</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10 shrink-0"></div>
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#2563EB] text-sm">verified</span>
              </div>
              <div>
                <h4 className="text-white font-medium text-xs mb-0.5">Quality Assured</h4>
                <p className="text-on-surface-variant text-[10px] leading-relaxed">Tested at every stage to meet global quality standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 relative overflow-hidden bg-background">
          <div className="w-full max-w-[1600px] 2xl:max-w-full mx-auto px-4 md:px-8 xl:px-12 mb-6" ref={el => sectionsRef.current[2] = el}>
            <div className="flex justify-between items-end mb-4">
              <div>
                <span className="inline-block text-[#2563EB] font-bold text-[10px] tracking-widest uppercase mb-2">OUR PRODUCTS</span>
                <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-white">Built for Strength. Made for India.</h2>
              </div>
              <button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors group text-sm">
                View All Products
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="w-full pb-6 max-w-[1600px] 2xl:max-w-full mx-auto px-4 md:px-8 xl:px-12 overflow-hidden" ref={el => sectionsRef.current[3] = el}>
            <div className="flex w-max animate-marquee">
              <div className="flex gap-6 pr-6">
                {convinceCards.map((card, idx) => (
                  <div key={idx} className="w-[280px] sm:w-[320px] shrink-0 glass-card group h-[340px] flex flex-col overflow-hidden">
                    <div className="flex-1 w-full relative z-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-5 relative z-20 bg-surface border-t border-outline-variant">
                      <h3 className="text-white font-bold text-xl mb-1.5">{card.title}</h3>
                      <p className="text-on-surface-variant text-xs mb-3 line-clamp-2">High-performance thermo-mechanically treated bars engineered for superior seismic resistance and structural integrity.</p>
                      <button className="text-primary font-semibold text-xs flex items-center gap-1.5 group-hover:text-white transition-colors">
                        Learn More <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 pr-6">
                {convinceCards.map((card, idx) => (
                  <div key={'dup-' + idx} className="w-[280px] sm:w-[320px] shrink-0 glass-card group h-[340px] flex flex-col overflow-hidden">
                    <div className="flex-1 w-full relative z-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-5 relative z-20 bg-surface border-t border-outline-variant">
                      <h3 className="text-white font-bold text-xl mb-1.5">{card.title}</h3>
                      <p className="text-on-surface-variant text-xs mb-3 line-clamp-2">High-performance thermo-mechanically treated bars engineered for superior seismic resistance and structural integrity.</p>
                      <button className="text-primary font-semibold text-xs flex items-center gap-1.5 group-hover:text-white transition-colors">
                        Learn More <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Steel Making Process */}
        <section className="py-12 bg-[#0f172a] relative overflow-hidden border-y border-white/5">
          <div className="w-full max-w-[1600px] 2xl:max-w-full mx-auto px-4 md:px-8 xl:px-12 relative z-10" ref={el => sectionsRef.current[4] = el}>
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 items-center justify-between">

              {/* Left Side: Content */}
              <div className="w-full xl:w-1/3 text-left shrink-0">
                <span className="inline-block text-[#2563EB] font-bold text-[10px] tracking-widest uppercase mb-3">OUR PROCESS</span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white font-bold mb-4 leading-tight">
                  From Raw Material<br />To Reliable Strength
                </h2>
                <p className="text-on-surface-variant text-xs mb-6 leading-relaxed max-w-sm">
                  Every bar undergoes a strict manufacturing process to ensure unmatched quality.
                </p>
                <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-5 py-2.5 font-bold rounded flex items-center gap-2 transition-colors text-xs w-fit">
                  Explore Process
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Right Side: Horizontal Timeline */}
              <div className="w-full xl:w-2/3 relative mt-8 xl:mt-0 pb-2">
                <div className="w-full relative">
                  {/* Connecting Line */}
                  <div className="absolute top-[24px] left-6 right-6 border-t border-dashed border-white/20 z-0 hidden sm:block"></div>

                  <div className="flex flex-wrap sm:flex-nowrap justify-between relative z-10 gap-2">
                    {[
                      { title: "Raw Material", icon: "precision_manufacturing", desc: "Selected high grade iron ore." },
                      { title: "Melting & Refining", icon: "local_fire_department", desc: "Melting in induction furnaces." },
                      { title: "Continuous Casting", icon: "view_stream", desc: "Molten steel cast into billets." },
                      { title: "Hot Rolling", icon: "settings", desc: "Billets rolled to size." },
                      { title: "Thermex Quenching", icon: "ac_unit", desc: "Quenching for stronger bars." },
                      { title: "Quality Inspection", icon: "verified", desc: "Rigorous testing at every stage." },
                    ].map((step, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center text-center group min-w-[80px]">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors border relative z-10 ${idx === 0 ? 'bg-[#2563EB] border-[#2563EB]' : 'bg-[#0f172a] border-white/20 group-hover:border-[#2563EB] group-hover:bg-[#2563EB]/10'}`}>
                          <span className="material-symbols-outlined text-white text-xl">{step.icon}</span>
                        </div>
                        <div className={`font-bold mb-2 text-xs ${idx === 0 ? 'text-[#2563EB]' : 'text-white/40'}`}>0{idx + 1}</div>
                        <h3 className="text-white font-bold text-[11px] mb-1.5 px-0.5 leading-tight h-8 flex items-center justify-center">{step.title}</h3>
                        <p className="text-on-surface-variant text-[9px] leading-relaxed px-0.5">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-[#0f172a] relative z-10 border-t border-white/5">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-8" ref={el => sectionsRef.current[5] = el}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <span className="inline-block text-[#2563EB] font-bold text-xs tracking-widest uppercase mb-3">OUR PROJECTS</span>
                <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-white leading-tight">Building Iconic <br />Structures Together</h2>
              </div>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group text-sm font-bold">
                View All Projects
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                { title: "Metro Rail Projects", icon: "train", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9s7yn3tUdnswhYzP4GRjZdcjjYs6ynhrz7ktKAn1gZMF9eWLm0_PcM85XnKuZUf4NrDrjptBeAR5MIfa4iA9odDt9Unl1UOIoKHlJ6pkqnOmUg3H0ZDdJqvOE4ZmDb9Fa1f1a1LPUXScKpXB7YAffKAfSGiWiIc6hhpkr5RvnhQSu8t7M8NPS_Ta51bcMfD-6Vqx2gDHefWDO6eouEsAm99Z6Kww2vTwyalUQHtcK2Nf8RwIsw38xTGwsiixWs1UBiiFtXrDniroT" },
                { title: "Bridges & Flyovers", icon: "architecture", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdD5XjUOsRUUZ9ALkHOnWMA5RRiIgSSIMin37LkV6PZSSy091tt0VSkR7kKQVqADnig6rRl4USBsZXBYhZSlUgs8p9istnZCGE_1nR-wWBiPFG0C1vWGfDeL-YMVDjurDXppS4-d-9m26rJUlRD1am_KGN8_kOiWp1e_rcTexEliapnUmMUJVu0GK9_gAEFKTaNmgEjwp9SjjpJTBel7dh8Y1K1xkrj3o-m5dxVdqIM31dviMQNmMlp-SCeNU4oAXadzoVKzVsU91" },
                { title: "Airports & Terminals", icon: "flight_takeoff", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUQuQb0bd3fAUyATHGUPW-A20NZVsRwzh64rqY7RScs2ayvwMYqUx5lSZsrAWKPAa6t8QYgC5aLuXabidIgouhYe_zpFBm4fRXvZ2uGFTk1HO3TWKdAEXrptdM1qevpxlLVHrdhrxyf3jzEXuj2MV_eBr-r63yyRtzNxXl8Xo9PLjtAOhKqH2-0m32nJQylmVqY4iIdHtky10jF104it5d7WyY_Jm2zbNVuyApqG1We_H_toDBVMKGH-DHJFiKHk8pDX5OSRp-UlUY" },
                { title: "Industrial Structures", icon: "factory", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9s7yn3tUdnswhYzP4GRjZdcjjYs6ynhrz7ktKAn1gZMF9eWLm0_PcM85XnKuZUf4NrDrjptBeAR5MIfa4iA9odDt9Unl1UOIoKHlJ6pkqnOmUg3H0ZDdJqvOE4ZmDb9Fa1f1a1LPUXScKpXB7YAffKAfSGiWiIc6hhpkr5RvnhQSu8t7M8NPS_Ta51bcMfD-6Vqx2gDHefWDO6eouEsAm99Z6Kww2vTwyalUQHtcK2Nf8RwIsw38xTGwsiixWs1UBiiFtXrDniroT" },
                { title: "Residential Townships", icon: "apartment", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdD5XjUOsRUUZ9ALkHOnWMA5RRiIgSSIMin37LkV6PZSSy091tt0VSkR7kKQVqADnig6rRl4USBsZXBYhZSlUgs8p9istnZCGE_1nR-wWBiPFG0C1vWGfDeL-YMVDjurDXppS4-d-9m26rJUlRD1am_KGN8_kOiWp1e_rcTexEliapnUmMUJVu0GK9_gAEFKTaNmgEjwp9SjjpJTBel7dh8Y1K1xkrj3o-m5dxVdqIM31dviMQNmMlp-SCeNU4oAXadzoVKzVsU91" },
                { title: "Dams & Infra Projects", icon: "water_drop", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUQuQb0bd3fAUyATHGUPW-A20NZVsRwzh64rqY7RScs2ayvwMYqUx5lSZsrAWKPAa6t8QYgC5aLuXabidIgouhYe_zpFBm4fRXvZ2uGFTk1HO3TWKdAEXrptdM1qevpxlLVHrdhrxyf3jzEXuj2MV_eBr-r63yyRtzNxXl8Xo9PLjtAOhKqH2-0m32nJQylmVqY4iIdHtky10jF104it5d7WyY_Jm2zbNVuyApqG1We_H_toDBVMKGH-DHJFiKHk8pDX5OSRp-UlUY" },
              ].map((proj, idx) => (
                <div key={idx} className="group cursor-pointer rounded-2xl overflow-hidden relative h-[200px] md:h-[280px] border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent z-10 opacity-90"></div>
                  <img alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={proj.img} />

                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d47a1] flex items-center justify-center shrink-0 border border-blue-400/30 group-hover:bg-[#1565c0] transition-colors">
                      <span className="material-symbols-outlined text-white text-[20px]">{proj.icon}</span>
                    </div>
                    <h4 className="text-white font-bold text-xs md:text-sm leading-tight pr-2">{proj.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-10 md:py-12 bg-[#0f172a] relative z-10 border-t border-[#0f172a]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-0">

              {/* Certifications */}
              <div className="flex-1 flex flex-col pr-0 md:pr-10 md:border-r border-[#0f172a]">
                <span className="inline-block text-[#2563EB] font-bold text-[10px] tracking-widest uppercase mb-2">CERTIFICATIONS</span>
                <h3 className="text-white font-bold text-2xl mb-2 leading-tight">Quality You<br />Can Trust</h3>
                <p className="text-on-surface-variant text-xs mb-5 leading-relaxed max-w-[250px]">
                  Our products are certified and tested to meet international standards.
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-transparent shrink-0 hover:border-white/30 transition-colors">
                    <span className="text-white font-bold text-[11px]">ISI</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-transparent shrink-0 hover:border-white/30 transition-colors">
                    <span className="text-white font-bold text-[9px] text-center leading-tight">ISO<br />9001</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-transparent shrink-0 hover:border-white/30 transition-colors">
                    <span className="text-white font-bold text-[9px] text-center leading-tight">ISO<br />14001</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-transparent shrink-0 hover:border-white/30 transition-colors">
                    <span className="text-white font-bold text-[12px]">CE</span>
                  </div>
                </div>
              </div>

              {/* Our Clients */}
              <div className="flex-1 flex flex-col px-0 md:px-10 md:border-r border-[#0f172a]">
                <span className="inline-block text-[#2563EB] font-bold text-[10px] tracking-widest uppercase mb-2">OUR CLIENTS</span>
                <h3 className="text-white font-bold text-2xl mb-5 leading-tight">Partners in<br />Progress</h3>
                <div className="flex gap-3 items-center overflow-x-auto hide-scrollbar pt-1 pb-3">
                  <div className="h-10 px-3 rounded-[16px] border-x border-white/10 flex items-center justify-center shrink-0 min-w-[70px]">
                    <span className="text-white font-bold text-xs tracking-wider">L&T</span>
                  </div>
                  <div className="h-10 px-3 rounded-[16px] border-x border-white/10 flex items-center justify-center shrink-0 min-w-[70px]">
                    <span className="text-white font-bold text-xs tracking-wider">DILIP</span>
                  </div>
                  <div className="h-10 px-3 rounded-[16px] border-x border-white/10 flex items-center justify-center shrink-0 min-w-[70px]">
                    <span className="text-white font-bold text-xs tracking-wider">JBM</span>
                  </div>
                  <div className="h-10 px-3 rounded-[16px] border-x border-white/10 flex items-center justify-center shrink-0 min-w-[70px]">
                    <span className="text-white font-bold text-xs tracking-wider">adani</span>
                  </div>
                </div>
                <div className="flex gap-1.5 mt-auto items-center justify-center pb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="flex-1 flex flex-col pl-0 md:pl-10 relative">
                <span className="inline-block text-[#2563EB] font-bold text-[10px] tracking-widest uppercase mb-1">TESTIMONIALS</span>
                <div className="text-[#2563EB] text-5xl font-serif leading-none h-10 flex items-start justify-start mb-1">“</div>
                <p className="text-white text-xs mb-5 leading-relaxed pr-6">
                  Kamachi TMT bars have exceptional strength and quality. They are our preferred choice for every project.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e293b] overflow-hidden flex shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Ramesh+Patel&background=2563EB&color=fff" alt="Ramesh Patel" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs">Ramesh Patel</h4>
                      <p className="text-on-surface-variant text-[9px]">Project Head, L&T Construction</p>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-white text-[12px]">chevron_right</span>
                  </button>
                </div>
                <div className="flex gap-1.5 mt-6 items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 relative overflow-hidden min-h-[360px] flex items-center" ref={el => sectionsRef.current[6] = el}>
          <div className="absolute inset-0 z-0 bg-[#0f172a]">
            <img src="/assets/BuildStrong.png" alt="Steel Manufacturing" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
          </div>

          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16">
            <div className="text-left shrink-0">
              <h2 className="font-headline-lg text-3xl md:text-4xl text-white font-bold mb-2 leading-tight">Ready to build <br /> something strong?</h2>
              <p className="text-white/80 text-xs md:text-sm">Let's build a stronger and safer tomorrow together.</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 md:pt-0">
              <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 md:px-8 py-3 font-bold rounded flex items-center gap-2 transition-colors text-xs md:text-sm">
                Contact Sales Team
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 md:px-8 py-3 font-bold rounded flex items-center gap-2 transition-colors text-xs md:text-sm">
                Download Brochure
                <span className="material-symbols-outlined text-[16px]">download</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

