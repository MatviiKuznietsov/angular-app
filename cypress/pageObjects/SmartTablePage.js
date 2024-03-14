export default class SmartTablePage {
  _url = "pages/tables/smart-table"
  _containerSelector = "ngx-tables"

  navigate() {
    cy.visit(this._url)
  }

  fillNewUser(id, firstName, lastName, userName, email, age) {
    this.fieldId.type(id)
    this.fieldFirstName.type(firstName)
    this.fieldLastName.type(lastName)
    this.fieldUserName.type(userName)
    this.fieldEmail.type(email)
    this.fieldAge.type(age)
    return new SmartTablePage()
  }

  clickBtnAddNewUser() {
    this.btnAddNewUser.click()
    return new SmartTablePage()
  }
  clickBtnSubmitChanges() {
    this.btnSubmitChanges.click()
    return new SmartTablePage()
  }

  clickBtnEdit() {
    this.btnEdit.click()
    return new SmartTablePage()
  }


  get btnAddNewUser() {
    return cy.get(this._containerSelector).find("i.nb-plus")
  }

  get btnSubmitChanges() {
    return cy.get(this._containerSelector).find("i.nb-checkmark")
  }

  get fieldId() {
    return cy.get(this._containerSelector).find("input[ng-reflect-name='id']")
  }

  get fieldFirstName() {
    return cy.get(this._containerSelector).find("input[ng-reflect-name='firstName']")
  }

  get fieldLastName() {
    return cy.get(this._containerSelector).find("input[ng-reflect-name='lastName']")
  }

  get fieldUserName() {
    return cy.get(this._containerSelector).find("input[ng-reflect-name='username']")
  }

  get fieldEmail() {
    return cy.get(this._containerSelector).find("input[ng-reflect-name='email']")
  }

  get fieldAge() {
    return cy.get(this._containerSelector).find("input[ng-reflect-name='age']")
  }

  get lineNewUser() {
    return cy.get(this._containerSelector).find("tr.ng2-smart-row:nth-of-type(1)")
  }

  get btnEdit() {
    return cy.get(this._containerSelector).find(".nb-edit").first()
  }

}
