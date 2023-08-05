export default class View {
  _data;
  _parentElement;

  _render(data, render = true) {
    this._data = data;
    markup = this._generateMarkup;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
