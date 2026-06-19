import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Banner background images
import steelLeft from '../assets/clients_left_steel.png';
import bridgeRight from '../assets/clients_right_bridge.png';

const Clients = () => {
  // Row 1 Logos
  const row1Logos = [
    { name: 'Adani', logo: <span className="font-extrabold text-base md:text-lg tracking-tight"><span className="text-[#0080ff]">ada</span><span className="text-[#ff8000]">ni</span></span> },
    { name: 'BHEL', logo: <div className="border-2 border-[#003399] px-2 py-0.5 font-black text-xs text-[#003399] tracking-wider rounded-sm">BHEL</div> },
    { name: 'Jindal Steel & Power', logo: <div className="flex flex-col items-start leading-none"><span className="font-extrabold text-xs text-slate-800 tracking-tighter">JINDAL</span><span className="text-[6px] text-green-600 font-bold uppercase tracking-wider mt-0.5">Steel & Power</span></div> },
    { name: 'Essar Steel', logo: <div className="flex items-center gap-0.5"><span className="font-extrabold text-xs text-black">ESSAR</span><span className="text-[#ea580c] text-xs">★</span><span className="text-red-600 font-bold text-[8px] uppercase tracking-tighter mt-1">Steel</span></div> },
    { name: 'Tata Steel', logo: <span className="font-black text-xs text-blue-900 tracking-wider uppercase">Tata Steel</span> },
    { name: 'L&T', logo: <div className="flex flex-col items-center"><span className="text-[10px] font-black text-primary tracking-tight">LARSEN & TOUBRO</span><span className="text-[5px] text-gray-500 uppercase tracking-widest font-semibold">It's all about engineering</span></div> },
  ];

  // Row 2 Logos
  const row2Logos = [
    { name: 'Primetals', logo: <div className="flex items-center gap-1"><span className="text-orange-500 font-bold text-sm">◯</span><span className="font-black text-[9px] text-gray-600 tracking-tighter uppercase">Primetals</span></div> },
    { name: 'SMS Group', logo: <div className="flex items-center gap-1 font-bold text-[10px] text-black"><span>SMS</span><span className="w-2.5 h-2.5 rounded-full bg-red-600 flex items-center justify-center text-[5px] text-white">⚙</span><span>group</span></div> },
    { name: 'Danieli', logo: <span className="font-black text-xs italic text-gray-900 tracking-tighter border-r-4 border-yellow-500 pr-1.5 uppercase">Danieli</span> },
    { name: 'Tenova', logo: <div className="flex items-center gap-0.5 font-bold text-xs text-blue-950 lowercase"><span>tenova</span><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span></div> },
    { name: 'Siemens', logo: <span className="font-extrabold text-xs md:text-sm text-[#008b8b] tracking-wider uppercase">Siemens</span> },
    { name: 'Supreme', logo: <div className="flex items-center gap-0.5 font-black text-[10px] text-blue-800 tracking-tighter"><span>S</span><span className="text-[7px] text-blue-600 uppercase font-bold tracking-tight">Supreme</span></div> },
  ];

  // Row 3 Logos
  const row3Logos = [
    { name: 'Fomra', logo: <span className="font-extrabold text-xs md:text-sm text-cyan-600 tracking-wider uppercase">Fomra</span> },
    { name: 'Meinhardt', logo: <span className="font-black text-[10px] text-blue-900 tracking-tighter uppercase italic">Meinhardt</span> },
    { name: 'Lapp', logo: <div className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-orange-600 rounded-full"></span><span className="font-black text-xs text-gray-900 uppercase">Lapp</span></div> },
    { name: 'Jusco', logo: <div className="bg-[#eab308] px-3 py-1 text-[9px] font-black text-blue-950 uppercase tracking-tighter rounded-sm">Jusco</div> },
    { name: 'Urban Tree', logo: <span className="font-extrabold text-xs text-gray-950 tracking-tighter">Urban Tree</span> },
    { name: 'Rites', logo: <span className="font-black text-xs italic text-blue-950 tracking-wider uppercase">Rites</span> },
  ];

  return (
    <>
      <Header />
      <main className="bg-background text-primary pt-20">
        
        {/* Banner Section */}
        <section className="bg-white py-14 border-b border-outline-variant relative overflow-hidden flex items-center min-h-[220px]">
          {/* Left Steel Image with fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 h-full hidden lg:block select-none pointer-events-none z-0">
            <img src={steelLeft} alt="" className="h-full w-full object-cover object-left" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white"></div>
          </div>

          {/* Right Bridge Image with fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 h-full hidden lg:block select-none pointer-events-none z-0">
            <img src={bridgeRight} alt="" className="h-full w-full object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white"></div>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center relative z-10 w-full">
            <span className="text-secondary font-label-caps text-xs md:text-sm tracking-widest uppercase font-extrabold block mb-1">OUR PARTNERS</span>
            <h1 className="font-display-lg text-2xl md:text-4xl font-bold tracking-tight text-primary">
              Trusted by <span className="text-secondary">Industry Leaders</span>
            </h1>
            
            {/* Double red line separator */}
            <div className="flex justify-center items-center gap-1 my-3">
              <div className="w-6 h-[2px] bg-secondary"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <div className="w-6 h-[2px] bg-secondary"></div>
            </div>

            <p className="text-on-surface-variant max-w-xl mx-auto font-body-md text-xs md:text-sm leading-relaxed mt-2">
              Our association with world-class organizations reflects our commitment to quality, innovation, and delivering excellence in every product.
            </p>
          </div>
        </section>

        {/* Dynamic Partner Categories Rows */}
        <section className="py-14 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
            
            {/* ROW 1: Steel Plants */}
            <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch">
              {/* Left Label Tag */}
              <div className="bg-[#f1f3f6] lg:w-60 p-4 shrink-0 flex items-center gap-3 relative border-b lg:border-b-0 lg:border-r border-outline-variant/60">
                {/* Red Wedge */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-base">workspace_premium</span>
                </div>
                <span className="font-bold text-[10px] md:text-xs text-primary leading-tight tracking-wider uppercase">
                  Steel Plants<br/>& Manufacturers
                </span>
              </div>

              {/* Middle Logo List */}
              <div className="flex-1 flex gap-3.5 items-center overflow-x-auto py-4 px-6 scrollbar-none">
                {row1Logos.map((item, idx) => (
                  <div key={idx} className="w-32 md:w-36 h-14 bg-white border border-outline-variant/40 rounded shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex items-center justify-center shrink-0 hover:border-secondary hover:shadow transition-all duration-300 px-3">
                    {item.logo}
                  </div>
                ))}
              </div>

              {/* Right Tag */}
              <div className="border-t lg:border-t-0 lg:border-l border-outline-variant/60 bg-white lg:w-40 p-4 shrink-0 flex items-center justify-center gap-1.5">
                <span className="text-secondary font-black text-xs">»</span>
                <span className="text-[10px] md:text-xs font-bold text-primary tracking-tight border-b border-secondary pb-0.5">
                  They make us proud
                </span>
              </div>
            </div>

            {/* ROW 2: Equipment Partners */}
            <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch">
              {/* Left Label Tag */}
              <div className="bg-[#f1f3f6] lg:w-60 p-4 shrink-0 flex items-center gap-3 relative border-b lg:border-b-0 lg:border-r border-outline-variant/60">
                {/* Red Wedge */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-base">precision_manufacturing</span>
                </div>
                <span className="font-bold text-[10px] md:text-xs text-primary leading-tight tracking-wider uppercase">
                  Equipment &<br/>Technology Partners
                </span>
              </div>

              {/* Middle Logo List */}
              <div className="flex-1 flex gap-3.5 items-center overflow-x-auto py-4 px-6 scrollbar-none">
                {row2Logos.map((item, idx) => (
                  <div key={idx} className="w-32 md:w-36 h-14 bg-white border border-outline-variant/40 rounded shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex items-center justify-center shrink-0 hover:border-secondary hover:shadow transition-all duration-300 px-3">
                    {item.logo}
                  </div>
                ))}
              </div>

              {/* Right Tag */}
              <div className="border-t lg:border-t-0 lg:border-l border-outline-variant/60 bg-white lg:w-40 p-4 shrink-0 flex items-center justify-center gap-1.5">
                <span className="text-secondary font-black text-xs">»</span>
                <span className="text-[10px] md:text-xs font-bold text-primary tracking-tight border-b border-secondary pb-0.5">
                  They make us proud
                </span>
              </div>
            </div>

            {/* ROW 3: Solutions Partners */}
            <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch">
              {/* Left Label Tag */}
              <div className="bg-[#f1f3f6] lg:w-60 p-4 shrink-0 flex items-center gap-3 relative border-b lg:border-b-0 lg:border-r border-outline-variant/60">
                {/* Red Wedge */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-base">handshake</span>
                </div>
                <span className="font-bold text-[10px] md:text-xs text-primary leading-tight tracking-wider uppercase">
                  Solutions &<br/>Service Partners
                </span>
              </div>

              {/* Middle Logo List */}
              <div className="flex-1 flex gap-3.5 items-center overflow-x-auto py-4 px-6 scrollbar-none">
                {row3Logos.map((item, idx) => (
                  <div key={idx} className="w-32 md:w-36 h-14 bg-white border border-outline-variant/40 rounded shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex items-center justify-center shrink-0 hover:border-secondary hover:shadow transition-all duration-300 px-3">
                    {item.logo}
                  </div>
                ))}
              </div>

              {/* Right Tag */}
              <div className="border-t lg:border-t-0 lg:border-l border-outline-variant/60 bg-white lg:w-40 p-4 shrink-0 flex items-center justify-center gap-1.5">
                <span className="text-secondary font-black text-xs">»</span>
                <span className="text-[10px] md:text-xs font-bold text-primary tracking-tight border-b border-secondary pb-0.5">
                  They make us proud
                </span>
              </div>
            </div>

            {/* Bottom Dark Blue Strip */}
            <div className="mt-12 bg-[#002f6c] rounded-xl shadow-lg py-8 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 items-center justify-items-stretch divide-y md:divide-y-0 md:divide-x divide-white/20 text-white">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3 px-4 py-3 md:py-0">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl text-white">shield</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Strong Partnerships</h4>
                  <p className="text-[10px] text-white/70 mt-0.5 leading-snug">Collaborating with the best to build a stronger tomorrow.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3 px-4 py-3 md:py-0">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl text-white">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Quality Assured</h4>
                  <p className="text-[10px] text-white/70 mt-0.5 leading-snug">Every partnership upholds our commitment to quality.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3 px-4 py-3 md:py-0">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl text-white">lightbulb</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Innovation Driven</h4>
                  <p className="text-[10px] text-white/70 mt-0.5 leading-snug">Working together to bring innovative solutions.</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center gap-3 px-4 py-3 md:py-0">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl text-white">groups</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Growth Together</h4>
                  <p className="text-[10px] text-white/70 mt-0.5 leading-snug">Growing together to create a greater impact.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Clients;
