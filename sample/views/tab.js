devpulseApp.onMessage((state) => {
  const list = document.getElementById('log');
  list.replaceChildren(...state.log.map((line) => Object.assign(document.createElement('li'), { textContent: line })));
  document.getElementById('empty').hidden = state.log.length > 0;
});
