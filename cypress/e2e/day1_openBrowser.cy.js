describe("My First Test Suite", () => {
  it("Verify title-positive ", () => {
    cy.visit("https://connexpay.com/");
    cy.wait(3000);
    cy.title().should("eq", "ConnexPay - All-in-One B2B Payments Platform");
  });

  it("verify title-negative test", () => {
    cy.visit("https://connexpay.com/");

    cy.title().should("eq", "ConnexPay - All-in-One B2C Payments Platform");
  });

  it("finding webpage actual title", () => {
    cy.visit("https://connexpay.com/");
    cy.title().then((title) => {
      cy.log("Webpage Title is: " + title);
    });
  });
});

//npx cypress open -> this command will open in the browser
//npx cypress run --headed -> this command will open in the terminal
//npx cypress run --spec (filepath) -> this command will open specific file ()
//npx cypress run --browser chrome -> this command will open test in the chrome browser
//npx cypress run --browser chrome --headed -> this command will open test in the chrome browser in headed mode

// follow this below instruction for code auto suggestion:

//Intelligent Code Completion: IntelliSense is available for Cypress. It offers intelligent code suggestions directly in your IDE while writing tests.
//Using Triple slash directives, we can get auto suggestion:/// <reference types="Cypress" /> ( for specific file we can add this just above the test script)
//For whole project we can create "jsconfig.json" file in root project directory
// Add this: {"include": ["./node_modules/cypress", "cypress/**/*.js"]}
