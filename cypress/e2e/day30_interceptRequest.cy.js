describe("Intercept Example", () => {
  it("should intercept and mock a network request", () => {
    cy.visit("https://dummyapi.io/explorer");

    cy.intercept({
      path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
    }).as("comments");
    cy.get(
      "div[class='bg-white rounded shadow p-4 overflow-hidden mb-4'] div:nth-child(5)"
    ).click();
    cy.wait("@comments").then((intercept) => {
      expect(intercept.response.body.limit).equal(10);
    });
  });

  it("mock API request", () => {
    cy.visit("https://dummyapi.io/explorer");

    cy.intercept(
      "GET",
      "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
      {
        body: {
          limit: 10,
          name: "learning intercept using mock api",
        },
      }
    ).as("comments");

    cy.get(
      "div[class='bg-white rounded shadow p-4 overflow-hidden mb-4'] div:nth-child(5)"
    ).click();

    cy.wait("@comments").then((intercept) => {
      expect(intercept.response.body.limit).to.equal(10);
      expect(intercept.response.body.name).to.equal(
        "learning intercept using mock api"
      );
    });
  });
  it.only("mock API request", () => {
    cy.intercept("https://automationintesting.online/room/", {
      rooms: [
        {
          roomid: 1,
          roomName: "101",
          type: "single",
          accessible: true,
          image: "/images/room2.jpg",
          description: " Testing", // I modified the description and it will visible in the website
          features: ["TV", "WiFi", "Safe"],
          roomPrice: 100,
        },
      ],
    });

    // We can use intercept to see UI behaviors modifying the mock response without back end.
    // Exp: If we remove rooms array objects and just keep empty array we will get response.

    cy.visit("https://automationintesting.online/");

    cy.request("https://automationintesting.online/room/").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.rooms[0].roomName).to.equal("101");
      cy.log(JSON.stringify(response.body));
    });
  });
});

//The cy.intercept() command is used to intercept a network request and provide a mock response.
//That is, cy.intercept is usually used in conjunction with two other commands, .as and cy.wait.
// We can use intercept to see UI behaviors modifying the mock response without back end

/*
cy.intercept
Purpose: cy.intercept is used to intercept, modify, or mock requests and responses. 
It can intercept HTTP requests made by the application and replace or alter the response 
before it reaches the application.
Common Use Case: Mocking responses to control application behavior, testing various scenarios 
(e.g., errors or specific data states) without requiring a live server.
*/

// Code explanation:
/*
cy.intercept("GET", "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10", {...})
: Cypress intercepts any GET request to the specified URL endpoint and provides a mocked response. 
The response includes:
limit: 10: Simulates that the API returns a limit of 10 comments.
name: "learning intercept using mock api": Adds a custom name to the response data.
.as("comments"): This assigns the alias "comments" to the intercepted request.
cy.wait("@comments"): Cypress waits for the "comments" request (the intercepted GET request) to complete. 
This ensures the test only proceeds once the request is finished.

.then((intercept) => {...}): After the request completes, Cypress provides details about the 
intercepted request and response via the intercept object.
*/
