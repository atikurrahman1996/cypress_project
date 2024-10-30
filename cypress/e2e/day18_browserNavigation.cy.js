describe("MyTestSuit", () => {
  it("Browser navigations Test", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.title().should("eq", "Your Store"); // Title of the page
    cy.wait(5000);
    cy.get("li:nth-child(7) a:nth-child(1)").click(); // Click on Camera section
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); // Validation

    cy.wait(3000);
    cy.go("back"); // Go back home page from Camera page

    cy.wait(3000);
    cy.go("forward"); // Go back camera page from home page

    cy.wait(3000);
    cy.reload(); // Reload the page
  });
});
