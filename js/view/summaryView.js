class SummaryView {
  _parentElement = document.querySelector('.summary');
  income = document.getElementById('total-income');
  expenses = document.getElementById('total-expenses');
  netIncome = document.getElementById('total-netIncome');

  renderSummary(data) {
    const income = this.income;
    const expenses = this.expenses;
    const netIncome = this.netIncome;

    const {
      income: newIncome,
      expenses: newExpenses,
      netIncome: newNetIncome,
    } = data();

    income.textContent = newIncome;
    expenses.textContent = newExpenses;
    netIncome.textContent = newNetIncome;
  }
}

export default new SummaryView();
