describe("Steps Tests", () => {
  it("checkStepsTest", () => {
    cy.visit("pages/layout/stepper")
    cy.get("nb-card.col-md-12").as("stepper")
    cy.get('@stepper').find("h3.ng-star-inserted").should('have.text', 'Step content #1')
    for (let i = 2; i <= 4; i ++) {
      cy.get("@stepper").find("button").last().click()
      cy.get('@stepper').find("h3.ng-star-inserted").should('have.text', `Step content #${i}`)
    }
  })
})




