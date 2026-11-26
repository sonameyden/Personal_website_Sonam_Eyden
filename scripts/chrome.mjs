// Minimal headless Chrome driver over the DevTools protocol (no dependencies).
// Used by make-og.mjs and make-pdf.mjs.
import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function launch() {
  const bin = CANDIDATES.find((p) => existsSync(p));
  if (!bin) throw new Error('No Chrome or Edge found. Set CHROME_PATH.');
  const port = 9600 + Math.floor(Math.random() * 300);
  const profile = mkdtempSync(join(tmpdir(), 'site-chrome-'));
  const proc = spawn(
    bin,
    ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run', '--no-sandbox', '--hide-scrollbars', '--allow-file-access-from-files', 'about:blank'],
    { stdio: 'ignore' },
  );

  let targets = [];
  for (let i = 0; i < 80; i++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      if (targets.some((t) => t.type === 'page')) break;
    } catch {}
    await sleep(250);
  }
  const page = targets.find((t) => t.type === 'page');
  if (!page) throw new Error('Chrome did not start');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r, j) => {
    ws.addEventListener('open', r);
    ws.addEventListener('error', j);
  });

  let id = 0;
  const pending = new Map();
  const listeners = new Map();
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(m.error.message)) : resolve(m.result);
    } else if (m.method && listeners.has(m.method)) {
      listeners.get(m.method).forEach((fn) => fn(m.params));
    }
  });

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      pending.set(i, { resolve, reject });
      ws.send(JSON.stringify({ id: i, method, params }));
    });

  const waitFor = (method) =>
    new Promise((r) => {
      const fns = listeners.get(method) ?? [];
      const fn = (p) => {
        listeners.set(method, (listeners.get(method) ?? []).filter((f) => f !== fn));
        r(p);
      };
      listeners.set(method, [...fns, fn]);
    });

  const evaluate = async (expression) =>
    (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.value;

  const close = () => {
    try {
      ws.close();
    } catch {}
    proc.kill();
    setTimeout(() => rmSync(profile, { recursive: true, force: true }), 500);
  };

  await send('Page.enable');
  return { send, waitFor, evaluate, close, sleep };
}

export async function goto(b, url) {
  const loaded = b.waitFor('Page.loadEventFired');
  await b.send('Page.navigate', { url });
  await loaded;
  await b.evaluate('document.fonts.ready.then(() => true)');
}
