import { formatCurrency } from '../utilities/helpers';

class SummaryView {
  _parentElement = document.querySelector('.summary');
  income = document.getElementById('total-income');
  expenses = document.getElementById('total-expenses');
  netIncome = document.getElementById('total-netIncome');
  netIncomeParagraph = document.getElementById('total-netIncome');

  markup(data) {
    return `<p>${data}</p>`;
  }

  renderSummary(data) {
    const income = this.income;
    const expenses = this.expenses;
    const netIncome = this.netIncome;

    const {
      income: newIncome,
      expenses: newExpenses,
      netIncome: newNetIncome,
    } = data();

    income.textContent = formatCurrency(newIncome);
    expenses.textContent = formatCurrency(newExpenses);
    netIncome.textContent = formatCurrency(newNetIncome);
  }

  summaryDOMContentLoad(data) {
    document.addEventListener('DOMContentLoaded', () => {
      const income = this.income;
      const expenses = this.expenses;
      const netIncome = this.netIncome;

      const {
        income: newIncome,
        expenses: newExpenses,
        netIncome: newNetIncome,
      } = data();

      income.textContent = formatCurrency(newIncome);
      expenses.textContent = formatCurrency(newExpenses);
      netIncome.textContent = formatCurrency(newNetIncome);
    });
  }

  clearSummary() {
    this.income.textContent = formatCurrency(0);
    this.expenses.textContent = formatCurrency(0);
    this.netIncome.textContent = formatCurrency(0);
  }
}

export default new SummaryView();
