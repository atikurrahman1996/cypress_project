import "cypress-iframe";

describe("handling frames", () => {
  it("handling iframes ", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    cy.wait(3000);
    cy.frameLoaded("#mce_0_ifr");
    cy.wait(5000);
    cy.iframe("#mce_0_ifr").clear().type("welcome", { force: true });
  });

  // 2nd approach

  it.skip("handling iframes ", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    iframe.clear().type("Welcome");

    cy.wait(5000);

    // If you want to bold the text

    // iframe.clear().type("Welcome{cmd+a}");
    // cy.get("[aria-label='Bold']").click();
  });
});

//handling ifrmaes using iframe pluging-> Installation: npm install -D cypress-iframe
// Then Import-> import "cypress-iframe;    beggining of the test case
