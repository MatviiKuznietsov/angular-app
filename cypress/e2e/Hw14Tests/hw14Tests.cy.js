describe("Hw 014 test 1", () => {
  it("Test1", () => {
    cy.visit("pages/layout/stepper")
    cy.get("nb-card.col-md-12").as("stepper")
    cy.get('@stepper').find("h3.ng-star-inserted").should('have.text', 'Step content #1')
    for (let i = 2; i <= 4; i ++) {
      cy.get("@stepper").find("button").last().click()
      cy.get('@stepper').find("h3.ng-star-inserted").should('have.text', `Step content #${i}`)
    }
  })
  it("Test2", () => {
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




