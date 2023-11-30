//Hooks:/before/after/beforeEach/afterEach
//Tags:/skipp/only

describe("MyTestSuit", () => {
  before(() => {
    cy.log("***** Launch the Application******"); // this will run first for every test
  });

  beforeEach(() => {
    cy.log("***** Login the Application******"); //  afer lauch this will run for every test
  });

  afterEach(() => {
    cy.log("***** Logout the Application******"); // this will logout the application
  });

  after(() => {
    cy.log("***** Closed the  Application******"); // closed the application
  });

  it("search", () => {
    cy.log("***** searching******");
  });

  it("advanced search", () => {
    cy.log("***** advance searching******");
  });

  it("listing items", () => {
    cy.log("***** listing items******");
  });
});

// we can write anywhere "after hooks"
