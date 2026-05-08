const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('import T from')) {
    content = content.replace(/import type { Metadata } from "next";/, 'import type { Metadata } from "next";\nimport T from "@/components/T";');
  }
  
  // Home Page
  if (filePath.includes('page.tsx') && !filePath.includes('contact')) {
    content = content.replace(/Logistics Data Analyst <br \/>/g, '<T id="hero.title.1">Logistics Data Analyst</T> <br />');
    content = content.replace(/<span className="text-gray-400 font-light">& Operations Research<\/span>/g, '<span className="text-gray-400 font-light"><T id="hero.title.2">& Operations Research</T></span>');
    content = content.replace(/Based in Germany/g, '<T id="hero.badge">Based in Germany</T>');
  }

  // Contact Page
  if (filePath.includes('contact')) {
    content = content.replace(/Contact & Application Dossier/g, '<T id="contact.title">Contact & Application Dossier</T>');
    content = content.replace(/Send a Message/g, '<T id="contact.form.title">Send a Message</T>');
    content = content.replace(/Download Full Dossier \(PDF\)/g, '<T id="contact.dossier.btn">Download Full Dossier (PDF)</T>');
  }

  // Projects
  if (filePath.includes('projects')) {
    content = content.replace(/Project Portfolio \(Dritte Seite\)/g, '<T id="projects.title">Project Portfolio (Dritte Seite)</T>');
  }

  // Skills
  if (filePath.includes('skills')) {
    content = content.replace(/Professional Skills Matrix/g, '<T id="skills.title">Professional Skills Matrix</T>');
  }

  // Credentials
  if (filePath.includes('credentials')) {
    content = content.replace(/Academic & ZAB Credentials/g, '<T id="cred.title">Academic & ZAB Credentials</T>');
  }

  fs.writeFileSync(filePath, content);
}

const files = [
  'src/app/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/projects/page.tsx',
  'src/app/skills/page.tsx',
  'src/app/credentials/page.tsx'
];

files.forEach(processFile);
