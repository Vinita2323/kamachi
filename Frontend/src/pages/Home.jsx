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
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-start pt-32 md:pt-48 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-surface/30 z-0"></div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-section-padding w-full">
            <div className="max-w-3xl" ref={el => sectionsRef.current[0] = el}>
              <span className="inline-block bg-primary text-on-primary px-4 py-1 font-label-caps text-label-caps mb-6">ESTABLISHED 1980</span>
              <h1 className="font-display-lg text-display-lg text-white mb-8 leading-none">Strength That Builds <span className="block text-red-600">Nations</span></h1>

              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 font-headline-md text-base font-bold rounded-lg industrial-shadow transition-all hover:-translate-y-1">Explore Products</button>
                <button className="bg-white border-2 border-secondary text-secondary px-8 py-4 font-headline-md text-base font-bold rounded-lg transition-all hover:bg-secondary hover:text-on-secondary">Contact Sales</button>
              </div>
            </div>
          </div>
          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant py-12">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-secondary">toll</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-xl md:text-2xl font-bold text-primary">15.6 MTPA</span>
                  <span className="text-on-surface-variant text-sm md:text-base leading-tight">Steel Making<br/>Capacity</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-secondary">factory</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-xl md:text-2xl font-bold text-primary">2,684 MW</span>
                  <span className="text-on-surface-variant text-sm md:text-base leading-tight">Captive Power<br/>Capacity</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-secondary">groups</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-xl md:text-2xl font-bold text-primary">50,000 +</span>
                  <span className="text-on-surface-variant text-sm md:text-base leading-tight">Workforce Across<br/>The Globe</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-secondary">volunteer_activism</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-xl md:text-2xl font-bold text-primary">14 + Million</span>
                  <span className="text-on-surface-variant text-sm md:text-base leading-tight">Lives Impacted<br/>Through CSR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convince Me Cards - Marquee */}
        <section className="py-12 bg-surface overflow-hidden">
          <div className="w-full" ref={el => sectionsRef.current[1] = el}>
            <div className="flex w-max animate-marquee">
              <div className="flex gap-6 pr-6">
                {convinceCards.map((card, idx) => (
                  <div key={idx} className={`w-[280px] sm:w-[320px] shrink-0 bg-white ${card.borderClass} shadow-lg rounded-xl hover:-translate-y-1 transition-all relative group h-64 flex flex-col overflow-hidden`}>
                    <div className="flex-1 w-full relative z-0 overflow-hidden">
                      <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="bg-white py-3 flex justify-center z-10 relative">
                      <h3 className="text-primary font-bold text-lg">{card.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 pr-6">
                {convinceCards.map((card, idx) => (
                  <div key={'dup-'+idx} className={`w-[280px] sm:w-[320px] shrink-0 bg-white ${card.borderClass} shadow-lg rounded-xl hover:-translate-y-1 transition-all relative group h-64 flex flex-col overflow-hidden`}>
                    <div className="flex-1 w-full relative z-0 overflow-hidden">
                      <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="bg-white py-3 flex justify-center z-10 relative">
                      <h3 className="text-primary font-bold text-lg">{card.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Steel Making Process */}
        <section className="py-12 bg-surface-container-low border-y border-outline-variant relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10" ref={el => sectionsRef.current[2] = el}>
            <div className="text-center mb-10">
              <span className="inline-block text-red-600 font-label-caps text-label-caps mb-1 tracking-widest font-bold">OUR EXPERTISE</span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary font-bold">The Steel Making Process</h2>
              <p className="text-on-surface-variant mt-2 max-w-2xl mx-auto">From raw materials to the finest TMT bars, every step is strictly monitored for uncompromising quality.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Side: Video */}
              <div className="w-full lg:w-5/12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative min-h-[350px] lg:min-h-full">
                <video 
                  src={steelMakingVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Step 1 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">precision_manufacturing</span>
                    </div>
                    <h3 className="text-base font-bold text-primary">1. Raw Material</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-snug">We select only the highest grade iron ore and scrap to ensure impeccable chemistry.</p>
                </div>
                
                {/* Step 2 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">local_fire_department</span>
                    </div>
                    <h3 className="text-base font-bold text-primary">2. Melting & Refining</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-snug">Materials are melted in advanced induction furnaces, followed by strict ladle refining.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">view_stream</span>
                    </div>
                    <h3 className="text-base font-bold text-primary">3. Continuous Casting</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-snug">The pure molten steel is continuously cast into high-quality uniform billets.</p>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">settings</span>
                    </div>
                    <h3 className="text-base font-bold text-primary">4. Hot Rolling</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-snug">Billets are reheated and passed through automated mills for precise dimensions.</p>
                </div>

                {/* Step 5 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">ac_unit</span>
                    </div>
                    <h3 className="text-base font-bold text-primary">5. Thermex Quenching</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-snug">Rapid water quenching creates a tough outer layer while keeping the core ductile.</p>
                </div>

                {/* Step 6 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white transition-colors">verified</span>
                    </div>
                    <h3 className="text-base font-bold text-primary">6. Quality Inspection</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-snug">Rigorous physical and chemical tests guarantee global safety standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-section-padding bg-blue-50 text-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding" ref={el => sectionsRef.current[3] = el}>
            <div className="flex justify-between items-center mb-16">
              <h2 className="font-headline-lg text-headline-lg font-bold">National Landmarks</h2>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="group cursor-pointer">
                <div className="h-64 md:h-72 mb-3.5 overflow-hidden relative rounded-2xl shadow-md">
                  <img alt="Skyline Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQuQb0bd3fAUyATHGUPW-A20NZVsRwzh64rqY7RScs2ayvwMYqUx5lSZsrAWKPAa6t8QYgC5aLuXabidIgouhYe_zpFBm4fRXvZ2uGFTk1HO3TWKdAEXrptdM1qevpxlLVHrdhrxyf3jzEXuj2MV_eBr-r63yyRtzNxXl8Xo9PLjtAOhKqH2-0m32nJQylmVqY4iIdHtky10jF104it5d7WyY_Jm2zbNVuyApqG1We_H_toDBVMKGH-DHJFiKHk8pDX5OSRp-UlUY" />
                  <div className="absolute top-3.5 left-3.5 bg-secondary text-white px-2.5 py-0.5 font-label-caps text-[10px] rounded-md shadow-sm z-10 tracking-wider">SKYSCRAPERS</div>
                </div>
                <h4 className="text-lg md:text-xl mb-1 font-bold text-primary group-hover:text-secondary transition-colors duration-300">Nexus Global Center</h4>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">50,000 Tonnes of Fe 500D used for vertical integrity.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="h-64 md:h-72 mb-3.5 overflow-hidden relative rounded-2xl shadow-md">
                  <img alt="Metro Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9s7yn3tUdnswhYzP4GRjZdcjjYs6ynhrz7ktKAn1gZMF9eWLm0_PcM85XnKuZUf4NrDrjptBeAR5MIfa4iA9odDt9Unl1UOIoKHlJ6pkqnOmUg3H0ZDdJqvOE4ZmDb9Fa1f1a1LPUXScKpXB7YAffKAfSGiWiIc6hhpkr5RvnhQSu8t7M8NPS_Ta51bcMfD-6Vqx2gDHefWDO6eouEsAm99Z6Kww2vTwyalUQHtcK2Nf8RwIsw38xTGwsiixWs1UBiiFtXrDniroT" />
                  <div className="absolute top-3.5 left-3.5 bg-secondary text-white px-2.5 py-0.5 font-label-caps text-[10px] rounded-md shadow-sm z-10 tracking-wider">INFRASTRUCTURE</div>
                </div>
                <h4 className="text-lg md:text-xl mb-1 font-bold text-primary group-hover:text-secondary transition-colors duration-300">City Metro Phase III</h4>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Seismic-grade reinforcement for transit reliability.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="h-64 md:h-72 mb-3.5 overflow-hidden relative rounded-2xl shadow-md">
                  <img alt="Cable Stayed Bridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDdD5XjUOsRUUZ9ALkHOnWMA5RRiIgSSIMin37LkV6PZSSy091tt0VSkR7kKQVqADnig6rRl4USBsZXBYhZSlUgs8p9istnZCGE_1nR-wWBiPFG0C1vWGfDeL-YMVDjurDXppS4-d-9m26rJUlRD1am_KGN8_kOiWp1e_rcTexEliapnUmMUJVu0GK9_gAEFKTaNmgEjwp9SjjpJTBel7dh8Y1K1xkrj3o-m5dxVdqIM31dviMQNmMlp-SCeNU4oAXadzoVKzVsU91" />
                  <div className="absolute top-3.5 left-3.5 bg-secondary text-white px-2.5 py-0.5 font-label-caps text-[10px] rounded-md shadow-sm z-10 tracking-wider">BRIDGES</div>
                </div>
                <h4 className="text-lg md:text-xl mb-1 font-bold text-primary group-hover:text-secondary transition-colors duration-300">Coastal Expressway Bridge</h4>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Corrosion-resistant steel for marine environments.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding relative z-10 text-center" ref={el => sectionsRef.current[5] = el}>
            <h2 className="font-display-lg text-headline-lg text-primary mb-8">Build with Unyielding Integrity</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-secondary text-on-secondary px-12 py-5 font-headline-md text-lg font-bold rounded-2xl industrial-shadow transition-all hover:scale-105 active:scale-95">REQUEST A QUOTE</button>
              <button className="bg-transparent border-2 border-primary text-primary px-12 py-5 font-headline-md text-lg font-bold rounded-2xl transition-all hover:bg-primary hover:text-on-primary">LOCATE DEALER</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
