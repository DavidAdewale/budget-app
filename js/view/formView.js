class FormView {
  _parentElement = document.querySelector('.form');
  date = document.querySelector('#date');
  amount = document.querySelector('#amount');
  category = document.querySelector('#category');
  purpose = document.querySelector('#purpose');
  dateInput = document.getElementById('date');

  constructor() {
    this._setMaxDate();
  }

  _setMaxDate() {
    const currentDate = new Date().toISOString().split('T')[0];
    this.dateInput.setAttribute('max', currentDate);
  }

  _reset() {
    this.date.value = '';
    this.amount.value = '';
    this.category.value = '';
    this.purpose.value = '';
  }

  addFormEventHandler(action, renderSummary, renderHistory) {
    this._parentElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const date = this.date.value;
      const amount = this.amount.value;
      const category = this.category.value;
      const purpose = this.purpose.value;

      if (!date || !amount || !category || !purpose) {
        alert('Oops! Incomplete Entry. Please fill out the form');
        return;
      }

      const submission = {
        id: new Date(date).toISOString() + Math.random(),
        date,
        amount,
        category,
        purpose,
      };

      action(submission);
      renderHistory();
      renderSummary();
      this._reset();
    });
  }
}

export default new FormView();
