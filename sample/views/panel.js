devpulseApp.onMessage((state) => {
  document.getElementById('pings').textContent = String(state.pings);
});
document.getElementById('ping').addEventListener('click', () => devpulseApp.runCommand('ping'));
document.getElementById('open-tab').addEventListener('click', () => devpulseApp.openTab());
