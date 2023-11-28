import "cypress-iframe";

describe("handling frames", () => {
  it("handling iframes ", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").clear().type("Welcome");
  });

  /*
  // 2nd approach

  it.only("handling iframes ", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    iframe.clear().type("Welcome");
  });
  */
});

//handling ifrmaes using pluging Installation: npm install -D cypress-iframe
// Then Import "import "cypress-iframe"; beggining of the test case
