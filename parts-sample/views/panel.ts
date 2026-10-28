import { decorate } from '../src/shared.ts';

declare const devpulseApp: { readonly parts: readonly string[]; onMessage(listener: (message: unknown) => void): void; post(message: unknown): void };

const parts = document.getElementById('parts')!;
const lines = document.getElementById('lines')!;
const page = document.getElementById('page')!;

devpulseApp.onMessage((message) => {
  const state = message as { installed: string[]; lines: string[] };
  parts.textContent = `Parts: ${state.installed.join(', ')}`;
  lines.replaceChildren(...state.lines.map((line) => Object.assign(document.createElement('li'), { textContent: line })));
});

// The page's own part, loaded only when it is installed; its address is worked out so the bundler leaves it alone.
async function showPage(): Promise<void> {
  if (!devpulseApp.parts.includes('extras/confetti')) {
    page.textContent = decorate('No confetti part', '·');
    return;
  }
  const url = new URL('./parts/extras/confetti/index.js', location.href).href;
  const { sparkle } = (await import(url)) as { sparkle: (text: string) => string };
  page.textContent = sparkle('The page has confetti too');
}
void showPage();
