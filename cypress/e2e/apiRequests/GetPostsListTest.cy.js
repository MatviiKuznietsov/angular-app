const POST = "posts/"

it("Get posts list", () => {
  cy.api(`${Cypress.env('API_URL')}${POST}`).as("getAllPosts");

  cy.get("@getAllPosts").its("status").should("eql", 200);
  cy.get("@getAllPosts").its("body").should("be.an", "array").and("not.be.empty");

  cy.get("@getAllPosts").then(response => {
    response.body.forEach(post => {
      expect(post).to.have.property("id").that.is.a("number");
      expect(post).to.have.property("title").that.is.a("string").and.not.empty;
      expect(post).to.have.property("body").that.is.a("string").and.not.empty;
      expect(post).to.have.property("userId").that.is.a("number");
    });
  });
})
