import { capitalizeFirstLetter, formatCurrency } from '../utilities/helpers';
import View from './view';

class HistoryView extends View {
  _parentElement = document.querySelector('#history_box');
  resetHistory = document.querySelector('.btn-reset');

  _markup(data) {
    const { id, date, amount, category, purpose } = data;

    return `<div class="history__item" data-id=${id}>
        <p class="date">${date}</p>
        <p class=${
          category === 'income' ? 'income' : 'expense'
        }>${formatCurrency(amount)}</p>
        <p class="category">${capitalizeFirstLetter(category)}</p>
        <p class="purpose">${capitalizeFirstLetter(purpose)}</p>
      </div>`;
  }

  _errorMessage() {
    const message = `<div class="history__error">
    <p>You haven't recorded any data yet</p>
  </div>`;

    this._parentElement.insertAdjacentHTML('afterbegin', message);
  }

  renderHistory(markupArray) {
    if (markupArray.length === 0) return this._errorMessage();

    markupArray.map((markup) => {
      const data = this._markup(markup);
      this._parentElement.insertAdjacentHTML('afterbegin', data);
    });
  }

  clearRecords(action) {
    this.resetHistory.addEventListener('click', action);
  }
}

export default new HistoryView();
