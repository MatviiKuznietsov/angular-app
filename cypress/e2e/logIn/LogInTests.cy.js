import LogInPage from "../../pageObjects/LogInPage";

describe("Modal Form Tests", () => {
  const logInPage = new LogInPage()
  beforeEach(() => {
    logInPage.navigate()
  })
  it("checkModalFormTest", () => {
    const urlDashboard = 'http://localhost:4200/pages/dashboard'

    const userData = {
      email: "Hello@mail.com",
      password: "trainee111"
    }

    logInPage
      .fill(userData.email, userData.password)
      .buttonLogIn.click()
    cy.url().should('include', urlDashboard)
  })
})
