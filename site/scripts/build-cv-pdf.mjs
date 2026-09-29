/**
 * Generates the CV PDF from the built site (AGENTS.md 5.5).
 *
 *   1. Build the site first:            npm run build
 *   2. Generate the PDF:                npm run build:cv
 *   3. Private variant with the phone:  CV_PHONE="+92 3XX XXXXXXX" npm run build && npm run build:cv
 *
 * It serves the existing dist/ with `astro preview`, loads /cv in headless Chromium and prints
 * it to A4 using the page's print stylesheet. The output lands in dist/cv/ so it deploys with
 * the rest of the site. The public build never contains the phone number.
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const siteRoot = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const dist = join(siteRoot, 'dist');
const outDir = join(dist, 'cv');
const outFile = join(outDir, 'Muhammad-Ibrahim-Akmal-CV.pdf');
const PORT = Number(process.env.CV_PDF_PORT ?? 4323);

if (!existsSync(join(dist, 'index.html'))) {
  console.error('No build found in dist/. Run `npm run build` first.');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

console.log(`[cv] starting astro preview on port ${PORT} ...`);
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  cwd: siteRoot,
  stdio: ['ignore', 'pipe', 'pipe'],
});

let serverOutput = '';
server.stdout.on('data', (chunk) => (serverOutput += chunk));
server.stderr.on('data', (chunk) => (serverOutput += chunk));

async function waitForServer(url, timeoutMs = 30_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Preview server did not start. Output so far:\n${serverOutput}`);
}

try {
  await waitForServer(`http://localhost:${PORT}/cv/`);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/cv/`, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outFile,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log(`[cv] wrote ${outFile}`);
  if (process.env.CV_PHONE) {
    console.log('[cv] private variant: phone number WAS included (do not commit or deploy this file).');
    console.log('[cv] remember: the deployed site must be rebuilt WITHOUT CV_PHONE.');
  }
} finally {
  server.kill('SIGTERM');
}
