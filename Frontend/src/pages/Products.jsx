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

const Products = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <video 
              src="/assets/heroProducts.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-80"
            ></video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-0"></div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-section-padding w-full">
            <div className="max-w-3xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              <span className="inline-block bg-primary text-on-primary px-4 py-1 font-label-caps text-label-caps mb-6">PRODUCT CATALOGUE</span>
              <h1 className="font-display-lg text-display-lg text-white mb-6 leading-none">Engineered for <span className="block text-red-600">Ultimate Strength</span></h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">Discover our range of premium TMT bars and steel solutions manufactured to the highest international safety and durability standards.</p>
            </div>
          </div>
        </section>

        {/* Quality of Product Section */}
        <section className="py-section-padding bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="text-center mb-16">
            <span className="text-lg font-bold text-secondary mb-2 block tracking-widest uppercase">Why Choose Kamachi</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary font-bold">Uncompromising Quality</h2>
            <p className="mt-4 max-w-2xl mx-auto text-on-surface-variant font-body-md">Our TMT bars are manufactured using advanced European technology to ensure the highest standards of safety, strength, and durability for your construction projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg border border-outline/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={ExtraStrongImg} alt="Extra Strong" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Extra Strong</h3>
                <p className="text-sm text-on-surface-variant leading-snug">Engineered for higher yield strength and load-bearing capacity, significantly reducing the quantity of steel required without compromising structural integrity.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg border border-outline/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={EarthquakeSafeImg} alt="Earthquake Safe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Earthquake Safe</h3>
                <p className="text-sm text-on-surface-variant leading-snug">High ductility and elongation properties make our TMT bars capable of absorbing immense energy, making them ideal for earthquake-prone zones.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg border border-outline/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={RustProofImg} alt="Rust Proof" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Rust Proof</h3>
                <p className="text-sm text-on-surface-variant leading-snug">Advanced thermo-mechanical treatment ensures uniform microstructure and minimal residual stress, offering exceptional resistance against rust and corrosion.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg border border-outline/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={FireResistantImg} alt="Fire Resistant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Fire Resistant</h3>
                <p className="text-sm text-on-surface-variant leading-snug">Exceptional fire resistance capabilities allow our steel to maintain its structural properties even at elevated temperatures during fire hazards.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-lg border border-outline/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={StrongGripImg} alt="Strong Grip" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Strong Grip</h3>
                <p className="text-sm text-on-surface-variant leading-snug">Precision-engineered rib patterns maximize the gripping strength with concrete, ensuring a flawless monolithic structure that lasts generations.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-lg border border-outline/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="w-full h-40 overflow-hidden">
                <img src={CertifiedQualityImg} alt="Certified Quality" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Certified Quality</h3>
                <p className="text-sm text-on-surface-variant leading-snug">Manufactured in state-of-the-art facilities and rigorously tested to surpass domestic IS 1786 and international quality certifications.</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="py-8 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="mb-6 text-center">
              <h2 className="font-headline-md text-3xl font-bold text-primary mb-2">Technical Specifications</h2>
              <p className="font-body-md text-sm text-on-surface-variant max-w-2xl mx-auto">Our products are tested in NABL accredited labs to meet and exceed global engineering standards.</p>
            </div>
            <div className="overflow-x-auto border border-outline-variant bg-white rounded-lg">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-2 font-label-caps text-xs">PROPERTIES</th>
                    <th className="px-4 py-2 font-label-caps text-xs">IS 1786 SPEC</th>
                    <th className="px-4 py-2 font-label-caps text-xs">KAMACHI FE 500D</th>
                    <th className="px-4 py-2 font-label-caps text-xs">KAMACHI FE 550</th>
                    <th className="px-4 py-2 font-label-caps text-xs">KAMACHI FE 600</th>
                  </tr>
                </thead>
                <tbody className="font-data-table">
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-4 py-2 font-bold text-primary">Yield Stress (N/mm²)</td>
                    <td className="px-4 py-2 text-on-surface-variant">Min 500</td>
                    <td className="px-4 py-2 font-bold">525 - 540</td>
                    <td className="px-4 py-2">Min 550</td>
                    <td className="px-4 py-2">Min 600</td>
                  </tr>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-4 py-2 font-bold text-primary">Elongation (%)</td>
                    <td className="px-4 py-2 text-on-surface-variant">Min 16.0</td>
                    <td className="px-4 py-2 font-bold">18 - 22</td>
                    <td className="px-4 py-2">Min 10.0</td>
                    <td className="px-4 py-2">Min 10.0</td>
                  </tr>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-4 py-2 font-bold text-primary">Carbon (%)</td>
                    <td className="px-4 py-2 text-on-surface-variant">Max 0.25</td>
                    <td className="px-4 py-2 font-bold">0.18 - 0.22</td>
                    <td className="px-4 py-2">Max 0.25</td>
                    <td className="px-4 py-2">Max 0.25</td>
                  </tr>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="px-4 py-2 font-bold text-primary">Sulphur &amp; Phosphorus (%)</td>
                    <td className="px-4 py-2 text-on-surface-variant">Max 0.040</td>
                    <td className="px-4 py-2 font-bold">Max 0.035</td>
                    <td className="px-4 py-2">Max 0.040</td>
                    <td className="px-4 py-2">Max 0.040</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Application Guide & Downloads */}
        <section className="py-section-padding bg-blue-50">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white border border-outline-variant p-gutter industrial-shadow rounded-2xl">
              <h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-4">Application Guide</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-error/10 rounded flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-error">home</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Residential &amp; Commercial</h4>
                    <p className="text-on-surface-variant font-body-md">Recommended: Fe 500D or Fe 550. Ideal for high-rise buildings, urban complexes, and single-family homes in seismic areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-error/10 rounded flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-error">foundation</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Heavy Infrastructure</h4>
                    <p className="text-on-surface-variant font-body-md">Recommended: Fe 600 or HCRM. Optimized for dams, highways, bridges, and industrial foundations requiring maximum strength-to-volume.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-highest border border-outline-variant p-gutter industrial-shadow rounded-2xl">
              <h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-4">Resource Center</h3>
              <div className="space-y-4">
                <a className="group flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-all" href="/downloads/technical-product-brochure.pdf" download="Technical_Product_Brochure.pdf">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">picture_as_pdf</span>
                    <div>
                      <p className="font-bold">Technical Product Brochure</p>
                      <p className="text-[10px] text-on-surface-variant">PDF, 4.2 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
                </a>
                <a className="group flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-all" href="/downloads/quality-compliance-certificates.pdf" download="Quality_Compliance_Certificates.pdf">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">picture_as_pdf</span>
                    <div>
                      <p className="font-bold">Quality Compliance Certificates</p>
                      <p className="text-[10px] text-on-surface-variant">PDF, 1.8 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
                </a>
                <a className="group flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-all" href="/downloads/sustainability-report-2024.pdf" download="Sustainability_Report_2024.pdf">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">picture_as_pdf</span>
                    <div>
                      <p className="font-bold">Sustainability Report 2024</p>
                      <p className="text-[10px] text-on-surface-variant">PDF, 5.5 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
                </a>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Comparison Tool Placeholder Interaction */}
        <section className="py-section-padding bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Precision Engineering Tool</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">Not sure which grade suits your specific architectural requirement? Use our interactive grade selector.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/grade-selector" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold font-label-caps text-label-caps hover:scale-105 transition-transform inline-block">Launch Grade Selector</Link>
              <Link to="/contact" className="border border-outline text-primary px-8 py-4 rounded-lg font-bold font-label-caps text-label-caps hover:bg-error hover:text-white transition-colors inline-block">Talk to an Engineer</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
