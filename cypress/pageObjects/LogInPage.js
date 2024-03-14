export default class LogInPage {
  _url = "auth/login"
  _containerSelector = "nb-login"

  navigate() {
    cy.visit(this._url)
  }

  fill(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.checkBox.click();
    return new LogInPage();
  }

  get emailInput() {
    return cy.get(this._containerSelector).find("input#input-email")
  }

  get passwordInput() {
    return cy.get(this._containerSelector).find("input#input-password")
  }

  get checkBox() {
    return cy.get(this._containerSelector).find("span.custom-checkbox")
  }

  get buttonLogIn() {
    return cy.get(this._containerSelector).find("button")
  }
}
