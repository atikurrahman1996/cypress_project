describe("Scrolling page", () => {
  it("visit webpage scroll down and find element", () => {
    cy.visit(
      "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area"
    );

    // scroll down
    //cy.get("a[title='Bangladesh']").scrollIntoView();
    cy.get("a[title='Bangladesh']").scrollIntoView({ duration: 3000 });
    cy.get("a[title='Bangladesh']").should("be.visible");
    cy.wait(5000);

    // scroll up

    //cy.get(".mw-file-element[src='//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png']").scrollIntoView();
    cy.get(
      ".mw-file-element[src='//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png']"
    ).scrollIntoView({ duration: 3000 }); //spain

    cy.wait(5000);

    cy.get(
      ".mw-file-element[src='//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png']"
    ).should("be.visible");

    // scroll footer section

    cy.get("#footer").scrollIntoView({ duration: 2000 });
    cy.get("#footer").should("be.visible");
  });
});

// if we want to see scrolling slowly used {duration: 2000}
