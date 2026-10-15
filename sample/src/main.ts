import fs from 'node:fs/promises';
import path from 'node:path';

import { app } from 'devpulse-addon-sdk-v2/app';

interface SampleState {
  readonly pings: number;
  readonly log: readonly string[];
}

const stateFile = path.join(app.dataDir, 'state.json');

async function readState(): Promise<SampleState> {
  try {
    return JSON.parse(await fs.readFile(stateFile, 'utf8')) as SampleState;
  } catch {
    return { pings: 0, log: [] };
  }
}

async function writeState(state: SampleState): Promise<void> {
  await fs.mkdir(app.dataDir, { recursive: true });
  await fs.writeFile(stateFile, JSON.stringify(state));
  app.views.post(null, state);
}

async function addLine(state: SampleState, text: string): Promise<void> {
  await writeState({ ...state, log: [...state.log, `${new Date().toISOString()} ${text}`].slice(-50) });
}

app.commands.on('ping', async () => {
  const state = await readState();
  await addLine({ ...state, pings: state.pings + 1 }, `Ping ${String(state.pings + 1)}`);
});

app.tasks.on('write-log', async () => {
  await addLine(await readState(), 'The background task ran');
});

// A page that opens shows the current count and log at once.
app.views.onState(async (view, open) => {
  if (open) app.views.post(view, await readState());
});
