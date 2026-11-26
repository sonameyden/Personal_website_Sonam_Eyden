// Prints the resume page (src/pages/resume.astro) to a PDF.
// Usage: node scripts/make-pdf.mjs <resume-page-url> <output.pdf>
// The deploy workflow runs this against the built site on every push, so the
// PDF always matches the website. It never contains the phone number, because
// the site never does.
import { writeFileSync } from 'node:fs';
import { launch, goto } from './chrome.mjs';

const [site, out] = process.argv.slice(2);
if (!site || !out) {
  console.error('usage: node scripts/make-pdf.mjs <resume-page-url> <output.pdf>');
  process.exit(2);
}

const b = await launch();
try {
  await b.send('Emulation.setEmulatedMedia', { media: 'print' });
  // ?still draws everything in its final state (no entrance animations).
  await goto(b, new URL('?still', site).href);
  await b.sleep(400);
  const pdf = await b.send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,
    paperWidth: 8.27,
    paperHeight: 11.69,
    marginTop: 0.55,
    marginBottom: 0.55,
    marginLeft: 0.6,
    marginRight: 0.6,
    displayHeaderFooter: false,
  });
  writeFileSync(out, Buffer.from(pdf.data, 'base64'));
  console.log('wrote', out);
} finally {
  b.close();
}
