import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExtraStrongImg from '../assets/extra_strong_tmt.png';
import EarthquakeSafeImg from '../assets/earthquake_safe_tmt.png';
import RustProofImg from '../assets/rust_proof_tmt.png';
import FireResistantImg from '../assets/fire_resistant_tmt.png';
import StrongGripImg from '../assets/strong_grip_tmt.png';
import CertifiedQualityImg from '../assets/certified_quality_tmt.png';
import HeroProductsImg from '../assets/heroproducts.png';

const Products = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex items-center overflow-hidden bg-[#050b14] p-4 md:p-6 lg:p-8">
          <div className="relative w-full h-full min-h-[550px] flex flex-col justify-center border border-white/10 rounded-2xl overflow-hidden p-8 md:p-16">
            {/* Background Image/Video with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={HeroProductsImg}
                alt="Kamachi TMT Products"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/80 to-transparent"></div>
              {/* Bottom Blue Glow */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-blue-500/50 shadow-[0_0_50px_20px_rgba(59,130,246,0.4)]"></div>
            </div>

            <div className="relative z-10 max-w-4xl">
              <span className="inline-block text-[#3b82f6] font-bold uppercase tracking-wider text-sm mb-4">PRODUCT CATALOGUE</span>
              <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Engineered for <br />
                <span className="text-[#3b82f6]">Ultimate Strength</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12">
                Discover our range of premium TMT bars and steel solutions manufactured to the highest international safety and durability standards.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#3b82f6] text-3xl opacity-90">shield</span>
                  <span className="text-gray-200 text-sm font-medium">High Strength</span>
                </div>
                
                <div className="hidden sm:block w-px h-10 bg-white/10"></div>
                
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#3b82f6] text-3xl opacity-90">domain</span>
                  <span className="text-gray-200 text-sm font-medium leading-tight">Earthquake<br/>Resistant</span>
                </div>
                
                <div className="hidden sm:block w-px h-10 bg-white/10"></div>
                
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#3b82f6] text-3xl opacity-90">water_drop</span>
                  <span className="text-gray-200 text-sm font-medium leading-tight">Corrosion<br/>Resistant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality of Product Section */}
        <section className="pt-24 pb-8 bg-[#050b14]">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[2px] w-8 bg-[#3b82f6]/70"></div>
                <span className="text-sm font-bold text-[#3b82f6] tracking-[0.15em] uppercase">Why Choose Kamachi</span>
                <div className="h-[2px] w-8 bg-[#3b82f6]/70"></div>
              </div>
              <h2 className="font-display-md text-3xl md:text-5xl text-white font-bold mb-6">Built to Perform. Built to Last.</h2>
              <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg">
                Our TMT bars are manufactured using advanced European technology to ensure the highest standards of safety, strength, and durability for your construction projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Feature 1 */}
              <div className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                <div className="relative h-44 md:h-48 overflow-hidden shrink-0">
                  <img src={ExtraStrongImg} alt="Extra Strong" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 md:left-5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center backdrop-blur-md">
                      <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">shield</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 pt-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1.5">Extra Strong</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug">
                    Engineered for higher yield strength and load-bearing capacity, significantly reducing the quantity of steel required without compromising structural integrity.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                <div className="relative h-44 md:h-48 overflow-hidden shrink-0">
                  <img src={EarthquakeSafeImg} alt="Earthquake Safe" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 md:left-5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center backdrop-blur-md">
                      <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">domain</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 pt-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1.5">Earthquake Safe</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug">
                    High ductility and elongation properties make our TMT bars capable of absorbing immense energy, making them ideal for earthquake-prone zones.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                <div className="relative h-44 md:h-48 overflow-hidden shrink-0">
                  <img src={RustProofImg} alt="Rust Proof" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 md:left-5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center backdrop-blur-md">
                      <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">water_drop</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 pt-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1.5">Rust Proof</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug">
                    Advanced thermo-mechanical treatment ensures uniform microstructure and minimal residual stress, offering exceptional resistance against rust and corrosion.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                <div className="relative h-44 md:h-48 overflow-hidden shrink-0">
                  <img src={FireResistantImg} alt="Fire Resistant" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 md:left-5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center backdrop-blur-md">
                      <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">local_fire_department</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 pt-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1.5">Fire Resistant</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug">
                    Exceptional fire resistance capabilities allow our steel to maintain its structural properties even at elevated temperatures during fire hazards.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                <div className="relative h-44 md:h-48 overflow-hidden shrink-0">
                  <img src={StrongGripImg} alt="Strong Grip" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 md:left-5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center backdrop-blur-md">
                      <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">architecture</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 pt-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1.5">Strong Grip</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug">
                    Precision-engineered rib patterns maximize the gripping strength with concrete, ensuring a flawless monolithic structure that lasts generations.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                <div className="relative h-44 md:h-48 overflow-hidden shrink-0">
                  <img src={CertifiedQualityImg} alt="Certified Quality" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 md:left-5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center backdrop-blur-md">
                      <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">verified</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 pt-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1.5">Certified Quality</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug">
                    Manufactured in state-of-the-art facilities and rigorously tested to surpass domestic IS 1786 and international quality certifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications & Application Guide */}
        <section className="pt-8 pb-24 bg-[#050b14]">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            
            {/* Technical Specifications Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[2px] w-8 bg-[#3b82f6]/70"></div>
                <span className="text-sm font-bold text-[#3b82f6] tracking-[0.15em] uppercase">Technical Specifications</span>
                <div className="h-[2px] w-8 bg-[#3b82f6]/70"></div>
              </div>
              <h2 className="font-display-md text-3xl md:text-5xl text-white font-bold mb-6">Tested. Trusted. Certified.</h2>
              <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg">
                Our products are tested in NABL accredited labs to meet and exceed global engineering standards.
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="overflow-x-auto border border-white/10 bg-[#0a101d] rounded-2xl mb-12">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 bg-white/5">
                    <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider">PROPERTIES</th>
                    <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-center">IS 1786 SPEC</th>
                    <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-center">KAMACHI FE 500D</th>
                    <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-center">KAMACHI FE 550</th>
                    <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-center">KAMACHI FE 600</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 font-data-table">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#3b82f6]">Yield Stress (N/mm²)</td>
                    <td className="px-6 py-5 text-center">Min 500</td>
                    <td className="px-6 py-5 text-center">500</td>
                    <td className="px-6 py-5 text-center">550</td>
                    <td className="px-6 py-5 text-center">600</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-[#0a101d]/50">
                    <td className="px-6 py-5 font-bold text-[#3b82f6]">Elongation (%)</td>
                    <td className="px-6 py-5 text-center">Min 16.0</td>
                    <td className="px-6 py-5 text-center">16.0</td>
                    <td className="px-6 py-5 text-center">16.0</td>
                    <td className="px-6 py-5 text-center">16.0</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#3b82f6]">Carbon (%)</td>
                    <td className="px-6 py-5 text-center">Max 0.25</td>
                    <td className="px-6 py-5 text-center">0.22</td>
                    <td className="px-6 py-5 text-center">0.23</td>
                    <td className="px-6 py-5 text-center">0.24</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors bg-[#0a101d]/50">
                    <td className="px-6 py-5 font-bold text-[#3b82f6]">Sulphur & Phosphorus (%)</td>
                    <td className="px-6 py-5 text-center">Max 0.040</td>
                    <td className="px-6 py-5 text-center">0.035</td>
                    <td className="px-6 py-5 text-center">0.035</td>
                    <td className="px-6 py-5 text-center">0.035</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Application Guide & Downloads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Recommended Applications Card */}
              <div className="bg-[#0a101d] border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#3b82f6] text-2xl">domain</span>
                  <h3 className="font-bold text-[#3b82f6] uppercase tracking-wider text-sm">RECOMMENDED APPLICATIONS</h3>
                </div>
                
                <p className="text-gray-300 text-base md:text-lg mb-8 pr-12 relative z-10 leading-relaxed">
                  Not sure which grade suits your specific architectural requirement?
                </p>
                
                <p className="text-gray-400 text-sm mb-4 relative z-10">Recommended:</p>
                
                <ul className="space-y-5 text-gray-300 text-sm md:text-base relative z-10 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3b82f6] mt-0.5">•</span>
                    <span><strong className="text-white font-bold">Fe 500D or Fe 550</strong> — Ideal for high-rise buildings, urban complexes, and single-family homes in seismic areas.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3b82f6] mt-0.5">•</span>
                    <span><strong className="text-white font-bold">Fe 600 or HCRM</strong> — Optimized for dams, highways, bridges, and industrial foundations requiring maximum strength-to-volume.</span>
                  </li>
                </ul>

                {/* Building graphic bottom right */}
                <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[200px] text-white/[0.03] rotate-6 pointer-events-none group-hover:scale-105 transition-transform duration-700">location_city</span>
              </div>

              {/* Resource Center Card */}
              <div className="bg-[#0a101d] border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="material-symbols-outlined text-[#3b82f6] text-2xl">local_library</span>
                  <h3 className="font-bold text-[#3b82f6] uppercase tracking-wider text-sm">RESOURCE CENTER</h3>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <a className="group/btn flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all cursor-pointer" href="/downloads/technical-product-brochure.pdf" download="Technical_Product_Brochure.pdf">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20 shrink-0">
                        <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest">PDF</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm md:text-base mb-0.5">Technical Product Brochure</p>
                        <p className="text-xs text-gray-500 tracking-wide">PDF, 4.2 MB</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#3b82f6] group-hover/btn:-translate-y-1 transition-transform">download</span>
                  </a>

                  <a className="group/btn flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all cursor-pointer" href="/downloads/quality-compliance-certificates.pdf" download="Quality_Compliance_Certificates.pdf">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20 shrink-0">
                        <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest">PDF</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm md:text-base mb-0.5">Quality Compliance Certificates</p>
                        <p className="text-xs text-gray-500 tracking-wide">PDF, 1.8 MB</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#3b82f6] group-hover/btn:-translate-y-1 transition-transform">download</span>
                  </a>

                  <a className="group/btn flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all cursor-pointer" href="/downloads/sustainability-report-2024.pdf" download="Sustainability_Report_2024.pdf">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20 shrink-0">
                        <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest">PDF</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm md:text-base mb-0.5">Sustainability Report 2024</p>
                        <p className="text-xs text-gray-500 tracking-wide">PDF, 5.5 MB</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#3b82f6] group-hover/btn:-translate-y-1 transition-transform">download</span>
                  </a>
                </div>

                <span className="material-symbols-outlined absolute -bottom-10 -right-6 text-[220px] text-white/[0.02] -rotate-12 pointer-events-none group-hover:scale-105 transition-transform duration-700">menu_book</span>
              </div>

            </div>
          </div>
        </section>

        {/* Need Help / Comparison Tool Section */}
        <section className="pt-10 pb-16 bg-[#050b14] relative overflow-hidden border-t border-white/5">
          {/* Subtle radial glow background to mimic the waves in the design */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/20 via-[#050b14] to-[#050b14]"></div>
          
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center">
            
            <div className="mb-3 inline-flex items-center justify-center text-[#3b82f6]">
              <span className="material-symbols-outlined text-3xl">architecture</span>
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">Need help choosing the right grade?</h2>
            
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Use our interactive grade selector or talk to our steel expert.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link to="/grade-selector" className="bg-[#3b82f6] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-[#2563eb] hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2">
                Launch Grade Selector
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link to="/contact" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2">
                Talk to an Engineer
                <span className="material-symbols-outlined text-sm">headset_mic</span>
              </Link>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
