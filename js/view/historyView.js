import {
  capitalizeFirstLetter,
  formatCurrency,
  formatDateDistance,
} from '../utilities/helpers';

class HistoryView {
  _parentElement = document.querySelector('#history_box');
  resetHistory = document.querySelector('.btn-reset');

  _markup(data) {
    const { id, date, amount, category, purpose } = data;

    return `<div class="history__item" data-id=${id}>
        <p class="date">${formatDateDistance(date)}</p>
        <p class='${
          category === 'income' ? 'income' : 'expense'
        } amount' >${formatCurrency(amount)}</p>
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
    const errorElement = this._parentElement.querySelector('.history__error');
    if (errorElement) {
      this._parentElement.removeChild(errorElement);
    }

    const newData = markupArray[markupArray.length - 1];
    this._parentElement.insertAdjacentHTML('afterbegin', this._markup(newData));
    this.resetHistory.classList.remove('hidden');
  }

  loadHistoryOnDOMLoad(stateArray) {
    const state = stateArray();
    document.addEventListener('DOMContentLoaded', () => {
      if (state.length === 0) return this._errorMessage();
      state.forEach((markup) =>
        this._parentElement.insertAdjacentHTML(
          'afterbegin',
          this._markup(markup)
        )
      );
      this.resetHistory.classList.remove('hidden');
    });
  }

  clearRecords(action, action2) {
    this.resetHistory.addEventListener('click', () => {
      action();
      action2();

      const errorMessageElement =
        this._parentElement.querySelector('.history__error');
      if (!errorMessageElement) {
        this.resetHistory.classList.add('hidden');
        this._parentElement.innerHTML = '';
        this._parentElement.innerHTML = this._errorMessage().bind(this);
      }
    });
  }
}

export default new HistoryView();
