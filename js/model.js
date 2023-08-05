export const state = {
  summary: {
    income: 0,
    expenses: 0,
    netIncome: 0,
  },

  history: [],
};

function persistHistory() {
  localStorage.setItem('history', JSON.stringify(state.history));
}

export function recordHistory(data) {
  state.history.push(data);
  calculateSummary();
  state.summary.netIncome = state.summary.income - state.summary.expenses;
  persistHistory();
  persistSummary();
  //   console.log(state.summary);
  //   console.log(data);
}

function calculateSummary() {
  state.summary.income = state.history.reduce((cur, sum) => {
    if (sum.category === 'income') {
      return cur + +sum.amount;
    }
    return cur;
  }, 0);

  state.summary.expenses = state.history.reduce((cur, sum) => {
    if (sum.category !== 'income') {
      return cur + +sum.amount;
    }
    return cur;
  }, 0);
}

function persistSummary() {
  localStorage.setItem('summary', JSON.stringify(state.summary));
}

export function updateSummary() {
  return state.summary;
}

export function historyData() {
  return state.history;
}

export function clearHistory() {
  //   console.log('cleared');
  localStorage.removeItem('history');
  localStorage.removeItem('summary');
}

function init() {
  const storage = localStorage.getItem('history');
  const summary = localStorage.getItem('histoy');
  if (storage) state.history = JSON.parse(storage);
  if (summary) state.summary = JSON.parse(summary);
}

init();
