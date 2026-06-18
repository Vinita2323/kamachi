import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import local assets
import skyscraperImg from '../assets/project_skyscraper.png';
import metroImg from '../assets/project_metro.png';
import bridgeImg from '../assets/project_bridge.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Skyscrapers', 'Infrastructure', 'Bridges'];

  const projectsData = [
    {
      id: 1,
      title: 'Nexus Global Center',
      category: 'Skyscrapers',
      location: 'Mumbai, Maharashtra',
      steelUsed: '50,000 Tonnes (Fe 500D)',
      year: '2023',
      image: skyscraperImg,
      description: 'A 72-story commercial skyscraper requiring high-tensile strength and superior bendability to withstand wind pressure and structural load at extreme heights.',
      badge: 'Iconic Landmark'
    },
    {
      id: 2,
      title: 'City Metro Phase III',
      category: 'Infrastructure',
      location: 'Chennai, Tamil Nadu',
      steelUsed: '35,000 Tonnes (Fe 550D & HCRM)',
      year: '2024',
      image: metroImg,
      description: 'Massive elevated viaducts and underground transit corridors constructed using corrosion-resistant steel to counter coastal humidity and ensure long-term concrete durability.',
      badge: 'Public Transit'
    },
    {
      id: 3,
      title: 'Coastal Expressway Bridge',
      category: 'Bridges',
      location: 'Goa',
      steelUsed: '20,000 Tonnes (HCRM / Corrosion Resistant)',
      year: '2022',
      image: bridgeImg,
      description: 'A 4.2 km multi-lane cable-stayed bridge spanning high-salinity marine environments, built with specialized HCRM bars to prevent rust and structural degradation.',
      badge: 'Marine Engineering'
    },
    {
      id: 4,
      title: 'Signature Heights',
      category: 'Skyscrapers',
      location: 'Bengaluru, Karnataka',
      steelUsed: '28,000 Tonnes (Fe 550 & Fe 600)',
      year: '2023',
      image: skyscraperImg, // reuse with different styling/info
      description: 'Luxury residential towers featuring high-strength reinforcement to optimize pillar dimensions, offering maximum floor space without compromising seismic safety.',
      badge: 'Premium Living'
    },
    {
      id: 5,
      title: 'National Highway Flyover Network',
      category: 'Infrastructure',
      location: 'Hyderabad, Telangana',
      steelUsed: '18,000 Tonnes (Fe 500D)',
      year: '2023',
      image: metroImg, // reuse
      description: 'A complex web of arterial flyovers and underpasses designed for heavy commercial vehicle traffic and continuous load-bearing capacity.',
      badge: 'De-congestion'
    },
    {
      id: 6,
      title: 'Riverfront Link Bridge',
      category: 'Bridges',
      location: 'Kolkata, West Bengal',
      steelUsed: '15,000 Tonnes (Fe 550D)',
      year: '2024',
      image: bridgeImg, // reuse
      description: 'Connecting twin cities over a major river, this bridge uses seismic-resistant TMT steel designed to withstand extreme thermal variations and seismic activity.',
      badge: 'City Connect'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-primary/80 text-white">
          <div className="absolute inset-0 w-full h-full">
            <img src={skyscraperImg} alt="Kamachi Projects Hero" className="w-full h-full object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-primary/85"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile md:px-section-padding max-w-container-max mx-auto">
            <span className="font-label-caps text-label-caps tracking-widest uppercase mb-2 block text-secondary">PROJECT PORTFOLIO</span>
            <h1 className="font-headline-lg text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
              Building Landmarks <span className="text-secondary">of Tomorrow</span>
            </h1>
            <p className="font-body-lg text-base md:text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              Explore how Kamachi's premium TMT bars empower India's most ambitious infrastructural, commercial, and residential engineering marvels.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-10 bg-background text-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full font-bold transition-all duration-300 text-sm ${
                    activeFilter === category
                      ? 'bg-secondary text-white shadow-lg scale-105'
                      : 'bg-white border border-outline/20 text-on-surface-variant hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid of Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col border border-outline/10 hover:-translate-y-1"
                >
                  {/* Image & Badge */}
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                    <span className="absolute top-3 left-3 bg-secondary text-white px-2 py-0.5 font-label-caps text-[10px] rounded shadow-md z-10 uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-white/95 text-primary px-2 py-0.5 text-[10px] font-bold rounded shadow z-10">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-md text-lg font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant text-[13px] leading-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Metadata Table */}
                    <div className="border-t border-outline/10 pt-3 mt-auto space-y-1.5">
                      <div className="flex justify-between text-[11px] font-medium">
                        <span className="text-on-surface-variant">Location:</span>
                        <span className="text-primary font-semibold">{project.location}</span>
                      </div>
                      <div className="flex justify-between text-[11px] font-medium">
                        <span className="text-on-surface-variant">Steel Quality:</span>
                        <span className="text-primary font-semibold">{project.steelUsed}</span>
                      </div>
                      <div className="flex justify-between text-[11px] font-medium">
                        <span className="text-on-surface-variant">Completed:</span>
                        <span className="text-primary font-semibold">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-surface-container-low border-y border-outline/10 text-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              
              <div className="bg-white p-3.5 rounded-xl border border-outline/10 shadow-sm flex flex-col items-center text-center hover:border-secondary hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2 shrink-0">
                  <span className="material-symbols-outlined text-xl">domain</span>
                </div>
                <h3 className="text-xl font-black text-primary leading-tight mb-0.5">150+</h3>
                <p className="text-on-surface-variant text-[9px] font-bold uppercase tracking-wider leading-tight">Major Landmarks Built</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-outline/10 shadow-sm flex flex-col items-center text-center hover:border-secondary hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2 shrink-0">
                  <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
                </div>
                <h3 className="text-xl font-black text-primary leading-tight mb-0.5">5M+</h3>
                <p className="text-on-surface-variant text-[9px] font-bold uppercase tracking-wider leading-tight">Tonnes Steel Supplied</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-outline/10 shadow-sm flex flex-col items-center text-center hover:border-secondary hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2 shrink-0">
                  <span className="material-symbols-outlined text-xl">public</span>
                </div>
                <h3 className="text-xl font-black text-primary leading-tight mb-0.5">18+</h3>
                <p className="text-on-surface-variant text-[9px] font-bold uppercase tracking-wider leading-tight">States Covered</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-outline/10 shadow-sm flex flex-col items-center text-center hover:border-secondary hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2 shrink-0">
                  <span className="material-symbols-outlined text-xl">thumb_up</span>
                </div>
                <h3 className="text-xl font-black text-primary leading-tight mb-0.5">100%</h3>
                <p className="text-on-surface-variant text-[9px] font-bold uppercase tracking-wider leading-tight">Structural Integrity Record</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white relative overflow-hidden text-center border-t border-outline/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding relative z-10">
            <h2 className="font-display-lg text-3xl md:text-4xl text-primary font-bold mb-4">
              Ready to Secure Your Structural Future?
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-6 text-base leading-relaxed">
              Get in touch with our technical experts and sales team to specify Kamachi TMT bars for your next high-rise, bridge, or infrastructure project.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/request-quote" className="bg-secondary text-on-secondary px-6 py-3 font-headline-md text-sm font-bold rounded-lg shadow-md hover:scale-105 transition-transform">
                Request a Quote
              </Link>
              <Link to="/contact" className="border-2 border-primary text-primary px-6 py-3 font-headline-md text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Projects;
