describe("handling child tabs", () => {
  it("new tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //Parent Window
    // delete target attribute with invoke for link
    cy.wait(5000);
    cy.get(".example>a").invoke("removeAttr", "target").click(); //Remove target attribute so that link will not open another tab & click
    cy.wait(5000);
    //Child window url
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(8000);
    cy.go("back"); // shift to parent window
  });
});

//Cypress has no built-in capability to handle the child tab (switching tab).
//Cypress is designed to work ONLY in the parent/main tab.
//Now we are going to manipulate the DOM and delete the target attribute. We are going to invoke the jQuery function removeAttr().
//cy.get('#opentab').invoke('removeAttr','target').click()

cy.get(".....").invoke("removeAttr", "target").click();
