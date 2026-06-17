const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'downloads');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function createPDF(filename, title, content) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(path.join(dir, filename)));
    
    doc.fontSize(25).text(title, { align: 'center' });
    doc.moveDown();
    
    doc.fontSize(12).text(content, {
        align: 'justify'
    });
    
    doc.end();
}

createPDF('technical-product-brochure.pdf', 'Kamachi Technical Product Brochure', 'Kamachi TMT bars are manufactured using advanced European technology to ensure the highest standards of safety, strength, and durability for your construction projects.\n\nTechnical Specifications:\n- Yield Stress: Min 500 N/mm2 to Min 600 N/mm2\n- Elongation: 10% to 22%\n- Carbon: Max 0.25%\n\nApplication Guide:\nResidential & Commercial: Recommended Fe 500D or Fe 550. Ideal for high-rise buildings and single-family homes.\nHeavy Infrastructure: Recommended Fe 600 or HCRM. Optimized for dams, highways, bridges.');

createPDF('quality-compliance-certificates.pdf', 'Quality Compliance Certificates', 'This document certifies that Kamachi TMT bars are manufactured in state-of-the-art facilities and rigorously tested to surpass domestic IS 1786 and international quality certifications.\n\nOur products are tested in NABL accredited labs to meet and exceed global engineering standards.\n\nCertifications Include:\n- IS 1786 Compliance\n- NABL Laboratory Accreditation\n- ISO 9001 Quality Management System');

createPDF('sustainability-report-2024.pdf', 'Kamachi Sustainability Report 2024', 'Kamachi is committed to pioneering sustainable practices in the steel manufacturing industry. Our 2024 sustainability goals focus on reducing our carbon footprint and integrating renewable energy into our production cycle.\n\nKey Achievements:\n- 30% reduction in greenhouse gas emissions.\n- 50% increase in the use of recycled scrap metal.\n- Implementation of advanced water treatment and zero liquid discharge systems.\n\nWe build the future, responsibly.');

console.log('PDFs generated successfully.');
