import posts from '../../fixtures/posts.json'

const POST = "posts/"
let id = 100

it("Update post by id", () => {
  const newTitle = 'New Title'
  posts.title = newTitle
  cy.api({
    method: 'PUT',
    url: `${Cypress.env('API_URL')}${POST}${id}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: posts
  }).as("createPost")
  cy.get("@createPost").its('status').should('eq', 200)
  cy.get("@createPost").then(response => {
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('title', newTitle);
    expect(response.body).to.have.property('body', posts.body);
    expect(response.body).to.have.property('userId', posts.userId);
  })
})
