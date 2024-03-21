const POST = "posts/"
let id = 100

it("Get post by id", () => {
  cy.api(`${Cypress.env('API_URL')}${POST}${id}`).as("getPost")
  cy.get("@getPost").its("status").should("eql", 200)
  cy.get("@getPost").its("body.id").should("eql", id)
})
