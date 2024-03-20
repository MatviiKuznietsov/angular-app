const POST = "posts/"
let id = 100

it("Delete post by id", () => {
  cy.api({
    method: 'DELETE',
    url: `${Cypress.env('API_URL')}${POST}${id}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).as("deletePost")
  cy.get("@deletePost").its("status").should("eql", 200)
  cy.get("@deletePost").its("body").should("be.empty");
})
