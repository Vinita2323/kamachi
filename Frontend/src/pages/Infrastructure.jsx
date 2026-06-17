import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Images
import InfraHeroImg from '../assets/infra_hero.png';
import EafImg from '../assets/infra_eaf.png';
import CcmImg from '../assets/infra_ccm.png';
import RollingMillImg from '../assets/infra_rolling_mill.png';
import QuenchingImg from '../assets/infra_tmt_quenching.png';
import QualityLabImg from '../assets/infra_quality_lab.png';
import SustainabilityImg from '../assets/infra_sustainability.png';

const Infrastructure = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 w-full h-full">
            <img src={InfraHeroImg} alt="State-of-the-Art Infrastructure" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile md:px-section-padding max-w-container-max mx-auto text-white">
            <span className="font-label-caps text-label-caps tracking-widest uppercase mb-4 block text-secondary">World-Class Facilities</span>
            <h1 className="font-headline-lg text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">State-of-the-Art Infrastructure</h1>
            <p className="font-body-lg text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">Building the future of steel with advanced European technology, ensuring unparalleled strength, precision, and sustainability at an immense scale.</p>
            <a href="#facilities" className="inline-block bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">Explore Facilities</a>
          </div>
        </section>

        {/* Capacity & Scale Section */}
        <section className="py-12 bg-surface-container-low border-b border-outline/20">
          <div className="max-w-5xl mx-auto px-margin-mobile md:px-section-padding">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white py-6 px-4 rounded-2xl shadow-sm border border-primary text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-3">factory</span>
                <h3 className="text-3xl font-black text-primary mb-1">500+</h3>
                <p className="text-on-surface-variant text-sm font-medium">Acres of Integrated Facility</p>
              </div>
              <div className="bg-white py-6 px-4 rounded-2xl shadow-sm border border-primary text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-3">conveyor_belt</span>
                <h3 className="text-3xl font-black text-primary mb-1">2.5M</h3>
                <p className="text-on-surface-variant text-sm font-medium">Metric Tons Per Annum</p>
              </div>
              <div className="bg-white py-6 px-4 rounded-2xl shadow-sm border border-primary text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-3">engineering</span>
                <h3 className="text-3xl font-black text-primary mb-1">5,000+</h3>
                <p className="text-on-surface-variant text-sm font-medium">Skilled Engineers & Staff</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Facilities Interactive Cards */}
        <section id="facilities" className="py-section-padding bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary font-bold mb-4">Advanced Manufacturing Process</h2>
              <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">From raw scrap to the final ribbed bar, our fully automated process guarantees precise chemical composition and structural integrity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div className="group rounded-xl overflow-hidden shadow-xl border border-outline/10 bg-surface-container-lowest">
                <div className="h-40 md:h-48 w-full overflow-hidden relative">
                  <img src={EafImg} alt="Electric Arc Furnace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-md">Electric Arc Furnace (EAF)</h3>
                </div>
                <div className="p-5">
                  <p className="text-on-surface-variant text-[13px] leading-snug">Our high-capacity Electric Arc Furnaces melt premium scrap metal at intense temperatures, ensuring optimal purification and the perfect foundational chemistry for high-grade steel.</p>
                </div>
              </div>

              <div className="group rounded-xl overflow-hidden shadow-xl border border-outline/10 bg-surface-container-lowest">
                <div className="h-40 md:h-48 w-full overflow-hidden relative">
                  <img src={CcmImg} alt="Continuous Casting Machine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-md">Continuous Casting Machine</h3>
                </div>
                <div className="p-5">
                  <p className="text-on-surface-variant text-[13px] leading-snug">Molten steel is seamlessly transformed into solid billets through our automated CCM. This rapid cooling process locks in the desired micro-structure, preventing impurities.</p>
                </div>
              </div>

              <div className="group rounded-xl overflow-hidden shadow-xl border border-outline/10 bg-surface-container-lowest">
                <div className="h-40 md:h-48 w-full overflow-hidden relative">
                  <img src={RollingMillImg} alt="Automated Rolling Mill" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-md">Automated Rolling Mill</h3>
                </div>
                <div className="p-5">
                  <p className="text-on-surface-variant text-[13px] leading-snug">Red-hot billets are rolled into uniform bars at high speeds. Our computerized systems guarantee absolute dimensional accuracy and perfect rib patterns for optimal concrete bonding.</p>
                </div>
              </div>

              <div className="group rounded-xl overflow-hidden shadow-xl border border-outline/10 bg-surface-container-lowest">
                <div className="h-40 md:h-48 w-full overflow-hidden relative">
                  <img src={QuenchingImg} alt="Advanced TMT Quenching" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-md">Advanced TMT Quenching</h3>
                </div>
                <div className="p-5">
                  <p className="text-on-surface-variant text-[13px] leading-snug">The Thermo Mechanical Treatment rapidly cools the outer layer of the bar while leaving the core hot. This creates a hard martensite outer ring and a ductile ferrite-pearlite core.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NABL Accredited Quality Lab */}
        <section className="py-section-padding bg-blue-50 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary font-bold mb-6">NABL Accredited Quality Control</h2>
              <p className="text-on-surface-variant font-body-lg mb-6 leading-relaxed">Perfection is not an accident; it is engineered. Our on-site, NABL accredited laboratories run 24/7, conducting rigorous tests on every batch of steel produced.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-medium text-primary">Advanced Optical Emission Spectrometers for chemical analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-medium text-primary">Computerized Universal Testing Machines for yield and tensile strength.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-medium text-primary">Stringent bend, re-bend, and elongation testing protocols.</span>
                </li>
              </ul>
              <Link to="/products" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors">View Technical Specs</Link>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img src={QualityLabImg} alt="Quality Control Lab" className="relative w-full rounded-3xl shadow-2xl object-cover h-[500px]" />
            </div>
          </div>
        </section>

        {/* Green & Sustainable Operations */}
        <section className="py-section-padding relative overflow-hidden text-white">
          <div className="absolute inset-0 w-full h-full bg-black">
            <img src={SustainabilityImg} alt="Sustainable Steel Plant" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-primary/40"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center">
            <span className="material-symbols-outlined text-6xl text-secondary mb-6">eco</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">Green & Sustainable Operations</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-90 mb-12 leading-relaxed">We believe in building the future responsibly. Kamachi is dedicated to achieving net-zero emissions through massive investments in green technology, wind farms, and solar arrays. Our facilities operate on a Zero Liquid Discharge (ZLD) policy, ensuring environmental harmony.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-secondary mb-2">30%</h4>
                <p className="text-sm uppercase tracking-wider font-medium">Reduction in Carbon Footprint</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-secondary mb-2">100%</h4>
                <p className="text-sm uppercase tracking-wider font-medium">Water Recycling (ZLD)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-secondary mb-2">200 MW</h4>
                <p className="text-sm uppercase tracking-wider font-medium">Captive Renewable Energy</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Infrastructure;
