const { it } = require("mocha");

describe("Request suite", () => {
  it("test-1", () => {
    //cy.visit("https://docs.cypress.io/api/commands/request");

    cy.request("https://jsonplaceholder.cypress.io/comments").as("comments");

    cy.get("@comments").should((response) => {
      expect(response.status).to.equal(200); // check for a successful status code
      expect(response.body).to.have.length(500); // validate body length
      expect(response).to.have.property("headers"); // ensure headers property exists
      expect(response).to.have.property("duration"); // ensure duration property exists
    });
  });

  it.only("should fetch comments from API", () => {
    cy.request("https://jsonplaceholder.typicode.com/comments").then(
      (response) => {
        expect(response.status).to.equal(200); // Checks for a successful response
        expect(response.body).to.have.length(500); // Checks the number of comments returned
      }
    );
  });
});

/*
cy.request:
Purpose: cy.request is used to make a real HTTP request to an endpoint. 
It directly sends a request to a server and fetches a response, similar to how a user might make an API call.
Common Use Case: Verifying API endpoints without interacting with the UI.
Example (2nd test case): Imagine you want to check the number of comments available from a public API.
*/

//The cy.request() command is used to send a network request without loading the page.
//Example: cy.request('POST', '/api/login', { username: 'johndoe', password: 'mypassword' })
//The intention of cy.request() is to be used for checking endpoints on an actual, running server without having to start the front end application.

/* we can use like this as well:

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
  },
})
*/
