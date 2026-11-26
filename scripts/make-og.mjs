// Renders scripts/og.html to public/og.png (1200x630), the link-preview image.
// Run: npm run og
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { launch, goto } from './chrome.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const b = await launch();
try {
  await b.send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  await goto(b, pathToFileURL(join(here, 'og.html')).href);
  await b.sleep(300);
  const shot = await b.send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  const out = join(here, '..', 'public', 'og.png');
  writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log('wrote', out);

  // Record where the image came from inside the file (Impeccable provenance).
  const launcher = join(here, '..', '.claude', 'skills', 'impeccable', 'scripts', process.platform === 'win32' ? 'impeccable.cmd' : 'impeccable');
  const origin =
    "Origin: rendered by scripts/make-og.mjs from the site's own template scripts/og.html (Geist type, site palette, flow-field lines drawn on canvas from the site's background algorithm). Content from resume-source/MASTER_FACTS.md. Not AI-generated, not stock.";
  // Pass the text through a file: Windows .cmd launchers need a shell, which would split a quoted argument.
  const promptFile = join(mkdtempSync(join(tmpdir(), 'og-')), 'origin.txt');
  writeFileSync(promptFile, origin);
  const r = spawnSync(launcher, ['embed-prompt', out, '--prompt-file', promptFile], { stdio: 'inherit', shell: process.platform === 'win32' });
  if (r.status !== 0) console.warn('Could not embed provenance; run impeccable embed-prompt on public/og.png.');
} finally {
  b.close();
}
