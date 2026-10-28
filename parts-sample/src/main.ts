import fs from 'node:fs/promises';

import { app } from 'devpulse-addon-sdk-v2/app';

/** The greetings of the languages installed, and confetti around them when that part is installed. */
async function greetings(): Promise<{ readonly installed: readonly string[]; readonly lines: readonly string[] }> {
  const installed = app.parts.installed();
  const confetti = installed.includes('extras/confetti') ? await app.parts.import<{ confetti: (text: string) => string }>('extras/confetti') : null;
  const lines: string[] = [];
  for (const part of installed.filter((id) => id.startsWith('greetings/'))) {
    const { text } = JSON.parse(await fs.readFile(app.parts.path(part, 'greeting.json'), 'utf8')) as { text: string };
    lines.push(confetti == null ? text : confetti.confetti(text));
  }
  return { installed, lines };
}

app.views.onState((view, open) => {
  if (open) void greetings().then((state) => app.views.post(view, state));
});
