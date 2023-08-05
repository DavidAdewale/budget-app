export const state = {
  summary: {
    income: 0,
    expenses: 0,
  },

  history: [],
};

function persistHistory() {
  localStorage.setItem('history', JSON.stringify(state.history));
}

export function recordHistory(data) {
  state.history.push(data);
  persistHistory();
}

function init() {
  const storage = localStorage.getItem('history');
  if (storage) state.history = JSON.parse(storage);
}

init();
