import View from './view';

class FormView extends View {
  _parentElement = document.querySelector('.form');

  constructor() {
    super();
  }

  addFormEventHandler(action) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const date = document.querySelector('#date').value;
      const amount = document.querySelector('#amount').value;
      const category = document.querySelector('#category').value;
      const purpose = document.querySelector('#purpose').value;

      if (!date || !amount || !category || !purpose) return;

      const submission = {
        id: new Date(date).toISOString() + Math.random(),
        date,
        amount,
        category,
        purpose,
      };

      action(submission);
    });
  }
}

export default new FormView();
