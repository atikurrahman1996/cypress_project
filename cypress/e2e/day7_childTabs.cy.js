describe("handling child tabs", () => {
  it("new tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //Parent Window

    // delete target attribute with invoke for link

    cy.get(".example>a").invoke("removeAttr", "target").click(); //Remove target attribute so that link will not open another tab & click

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    ); //Child Window URL

    cy.wait(8000);

    cy.go("back"); // shift to parent window
  });
});
