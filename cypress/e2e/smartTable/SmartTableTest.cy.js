import SmartTablePage from "../../pageObjects/smartTablePage";

describe("Modal Form Tests", () => {
  const smartTablePage = new SmartTablePage()

  beforeEach(() => {
    smartTablePage.navigate()
  })

  it("checkModalFormTest", () => {
    const userData = {
      id: "2",
      firstName: "Mike",
      lastName: "Smith",
      userName: "MS",
      email: "mail@mail.com",
      age: "56"
    }

    smartTablePage
      .clickBtnAddNewUser()
      .fillNewUser(userData.id, userData.firstName, userData.lastName, userData.userName, userData.email, userData.age)
      .clickBtnSubmitChanges()
      .lineNewUser.should('have.text', Object.values(userData).join(""))
    smartTablePage
      .clickBtnEdit()
      .fieldUserName.clear().type(userData.userName = 'Dou')
    smartTablePage
      .clickBtnSubmitChanges()
      .lineNewUser.should('have.text', Object.values(userData).join(""))
  })
})

