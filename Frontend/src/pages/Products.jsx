import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHeroImage from '../assets/ProductsHero.png';

const Products = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-inverse-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <img alt="Kamachi Industrial Steel" className="w-full h-full object-cover" src={ProductsHeroImage} />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-section-padding w-full">
            <div className="inline-block p-6 md:p-8">
              <h1 className="font-display-lg text-3xl md:text-4xl text-primary font-bold mb-2 drop-shadow-md">Premium TMT Range</h1>
              <p className="font-body-md text-white font-medium drop-shadow-md">The backbone of Asia's most ambitious infrastructure.</p>
            </div>
          </div>
        </section>

        {/* Product Grid (Bento Style) */}
        <section className="py-section-padding px-margin-mobile md:px-section-padding max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-gutter">
            <div>
              <span className="font-label-caps text-label-caps text-primary mb-2 block">OUR PORTFOLIO</span>
              <h2 className="font-headline-lg text-headline-lg">TMT Product Range</h2>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline text-primary font-bold rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">compare_arrows</span>
                Compare Products
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Fe 500D - The Flagship */}
            <div className="md:col-span-8 group relative overflow-hidden bg-white border border-outline-variant p-gutter industrial-shadow flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 right-0 p-gutter opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined !text-9xl">architecture</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary text-on-primary px-3 py-1 text-label-caps font-bold">PREMIUM GRADE</span>
                  <span className="text-on-surface-variant font-data-table text-data-table">IS 1786:2008</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-4">Fe 500D</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">The industry standard for ductile reinforcement. Specifically engineered for seismic zones, ensuring high elongation and structural safety under extreme loads.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-label-caps font-label-caps text-primary">Yield Strength</p>
                    <p className="font-headline-md text-headline-md">500 MPa</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-label-caps font-label-caps text-secondary">Elongation</p>
                    <p className="font-headline-md text-headline-md">Min 16%</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold font-label-caps text-label-caps hover:scale-105 transition-transform">Bulk Inquiry</button>
                <button className="text-primary font-bold px-6 py-3 border border-primary rounded-lg hover:bg-primary/5 transition-colors">Technical Data</button>
              </div>
            </div>

            {/* HCRM Steel - High Corrosion */}
            <div className="md:col-span-4 bg-white border border-outline-variant p-gutter industrial-shadow flex flex-col justify-between">
              <div>
                <span className="text-primary font-label-caps text-label-caps mb-2 block">SPECIALIZED</span>
                <h3 className="font-headline-md text-headline-md mb-2">HCRM Steel</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">High Corrosion Resistant Steel for coastal infrastructure and marine environments.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 font-data-table text-data-table"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Superior Salt Spray Resistance</li>
                  <li className="flex items-center gap-2 font-data-table text-data-table"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Longer Structural Life</li>
                  <li className="flex items-center gap-2 font-data-table text-data-table"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Low Maintenance Cost</li>
                </ul>
              </div>
              <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-lg font-bold font-label-caps text-label-caps">Bulk Inquiry</button>
            </div>

            {/* Fe 550 */}
            <div className="md:col-span-6 bg-white border border-outline-variant p-gutter industrial-shadow flex flex-col md:flex-row gap-gutter">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-2">Fe 550</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Enhanced load-bearing capacity for multi-story residential developments and commercial complexes.</p>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold font-label-caps text-label-caps">Bulk Inquiry</button>
              </div>
              <div className="flex-1 bg-surface-container-low p-4 rounded border border-outline-variant">
                <p className="text-label-caps font-label-caps text-on-surface-variant mb-2">KEY SPEC</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-bold">TENSILE STRENGTH</p>
                    <div className="h-2 w-full bg-outline-variant rounded-full mt-1">
                      <div className="h-2 w-[85%] bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-bold">DUCTILITY</p>
                    <div className="h-2 w-full bg-outline-variant rounded-full mt-1">
                      <div className="h-2 w-[70%] bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fe 600 */}
            <div className="md:col-span-6 bg-inverse-surface text-white p-gutter industrial-shadow flex flex-col md:flex-row gap-gutter">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-2">Fe 600</h3>
                <p className="font-body-md text-body-md text-surface-container-low mb-6">Extreme strength for bridges, dams, and industrial foundations where structural volume reduction is key.</p>
                <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold font-label-caps text-label-caps">Bulk Inquiry</button>
              </div>
              <div className="flex-1 border border-outline/30 p-4 rounded bg-surface/5 flex flex-col justify-center items-center">
                <span className="material-symbols-outlined !text-5xl text-primary-fixed mb-2">badge</span>
                <p className="font-label-caps text-label-caps text-center">Infrastructure Grade</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
            <div className="mb-12 text-center">
              <h2 className="font-headline-lg text-headline-lg mb-4">Technical Specifications</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Our products are tested in NABL accredited labs to meet and exceed global engineering standards.</p>
            </div>
            <div className="overflow-x-auto border border-outline-variant bg-white rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-tertiary text-white">
                    <th className="p-4 font-label-caps text-label-caps">PROPERTIES</th>
                    <th className="p-4 font-label-caps text-label-caps">IS 1786 SPEC</th>
                    <th className="p-4 font-label-caps text-label-caps">KAMACHI FE 500D</th>
                    <th className="p-4 font-label-caps text-label-caps">KAMACHI FE 550</th>
                    <th className="p-4 font-label-caps text-label-caps">KAMACHI FE 600</th>
                  </tr>
                </thead>
                <tbody className="font-data-table text-data-table">
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-bold text-primary">Yield Stress (N/mm²)</td>
                    <td className="p-4 text-on-surface-variant">Min 500</td>
                    <td className="p-4 font-bold">525 - 540</td>
                    <td className="p-4">Min 550</td>
                    <td className="p-4">Min 600</td>
                  </tr>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-bold text-primary">Elongation (%)</td>
                    <td className="p-4 text-on-surface-variant">Min 16.0</td>
                    <td className="p-4 font-bold">18 - 22</td>
                    <td className="p-4">Min 10.0</td>
                    <td className="p-4">Min 10.0</td>
                  </tr>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-bold text-primary">Carbon (%)</td>
                    <td className="p-4 text-on-surface-variant">Max 0.25</td>
                    <td className="p-4 font-bold">0.18 - 0.22</td>
                    <td className="p-4">Max 0.25</td>
                    <td className="p-4">Max 0.25</td>
                  </tr>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-bold text-primary">Sulphur &amp; Phosphorus (%)</td>
                    <td className="p-4 text-on-surface-variant">Max 0.040</td>
                    <td className="p-4 font-bold">Max 0.035</td>
                    <td className="p-4">Max 0.040</td>
                    <td className="p-4">Max 0.040</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Application Guide & Downloads */}
        <section className="py-section-padding px-margin-mobile md:px-section-padding max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white border border-outline-variant p-gutter industrial-shadow">
              <h3 className="font-headline-md text-headline-md mb-6 border-b border-outline-variant pb-4">Application Guide</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">home</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Residential &amp; Commercial</h4>
                    <p className="text-on-surface-variant font-body-md">Recommended: Fe 500D or Fe 550. Ideal for high-rise buildings, urban complexes, and single-family homes in seismic areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">foundation</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Heavy Infrastructure</h4>
                    <p className="text-on-surface-variant font-body-md">Recommended: Fe 600 or HCRM. Optimized for dams, highways, bridges, and industrial foundations requiring maximum strength-to-volume.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-highest border border-outline-variant p-gutter industrial-shadow">
              <h3 className="font-headline-md text-headline-md mb-6 border-b border-outline-variant pb-4">Resource Center</h3>
              <div className="space-y-4">
                <a className="group flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-all" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">picture_as_pdf</span>
                    <div>
                      <p className="font-bold">Technical Product Brochure</p>
                      <p className="text-[10px] text-on-surface-variant">PDF, 4.2 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
                </a>
                <a className="group flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-all" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">picture_as_pdf</span>
                    <div>
                      <p className="font-bold">Quality Compliance Certificates</p>
                      <p className="text-[10px] text-on-surface-variant">PDF, 1.8 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
                </a>
                <a className="group flex items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-all" href="#">
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
        </section>

        {/* Comparison Tool Placeholder Interaction */}
        <section className="py-section-padding bg-inverse-surface text-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center">
            <h2 className="font-headline-lg text-headline-lg mb-4">Precision Engineering Tool</h2>
            <p className="font-body-md text-body-md text-surface-container-low mb-8 max-w-2xl mx-auto">Not sure which grade suits your specific architectural requirement? Use our interactive grade selector.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold font-label-caps text-label-caps hover:scale-105 transition-transform">Launch Grade Selector</button>
              <button className="border border-outline px-8 py-4 rounded-lg font-bold font-label-caps text-label-caps hover:bg-white/5 transition-colors">Talk to an Engineer</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
