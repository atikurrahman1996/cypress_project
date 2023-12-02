describe("MyTestSuit", () => {
  it("Positive-To generate HTML Report", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.screenshot("Homepage"); // this will take home page screenshoot
    cy.wait(5000);
    cy.get("img[title='Your Store']").screenshot("Logo"); // this will take screenshoot for specific element
  });

  // negative test

  it("Negative-To generate HTML Report", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.wait(5000);
    cy.get("li:nth-child(7) a:nth-child(1)").click(); // Click on Camera section
    cy.get("div[id='content'] h2").should("have.text", "Tablets"); // Validation for Camera, but we put Tablets for  failure testing purose
  });
});

// To create Mocha HTML report follow below Instructions:

/*
1. install cypress-mochawesome-reporter> npm i --save-dev cypress-mochawesome-reporter

2. Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register';

4. to run test case: 
    / npx cypress run --spec cypress\e2e\day.20_HTMLReport.cy.js
   / npx cypress run --spec cypress\e2e\day.20_HTMLReport.cy.js --browser chrome
   /npx cypress run --headed--spec cypress\e2e\day.20_HTMLReport.cy.js -- browser chrome
5. Go to reports folder > copy HTML file path and open in new tab/browser 

*/
