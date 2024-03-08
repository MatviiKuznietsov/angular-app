describe("Modal Form Tests", () => {
  it("checkModalFormTest", () => {
    cy.visit("pages/modal-overlays/dialog")
    cy.get("nb-card.form-input-card").as("returnResultFromDialog")
    cy.get('@returnResultFromDialog').find("button").click();
    cy.get("nb-dialog-container").as("modalWindow")
    cy.get('@modalWindow').find("nb-card-header").should('have.text', 'Enter your name')
    cy.get('@modalWindow').find("input").should('be.visible')
    cy.get('@modalWindow').find("button").first().should('be.visible')
    cy.get('@modalWindow').find("button").last().should('be.visible')
  })
})




