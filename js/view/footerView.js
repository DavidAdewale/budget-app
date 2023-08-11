class FooterView {
  footerDate = document.getElementById('year');

  constructor() {
    this._setDate();
  }

  _setDate() {
    const currentYear = new Date().getFullYear();

    this.footerDate.innerText = currentYear;
  }
}

export default new FooterView();
