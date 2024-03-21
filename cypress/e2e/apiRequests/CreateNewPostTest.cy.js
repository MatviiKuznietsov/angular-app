import posts from '../../fixtures/posts.json'

const POST = "posts/"
let id = 100
describe("Create new post", () => {
  it("Create new post test", () => {
    cy.api({
      method: 'POST',
      url: `${Cypress.env('API_URL')}${POST}`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: posts
    }).as("createPost")
    cy.get("@createPost").its('status').should('eq', 201)
    cy.get("@createPost").then(response => {
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('title', posts.title);
      expect(response.body).to.have.property('body', posts.body);
      expect(response.body).to.have.property('userId', posts.userId);
    })
  })
})


