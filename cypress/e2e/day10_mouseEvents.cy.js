import "cypress-iframe";

describe("handling mouse events", () => {
  it("handling mouse hover action", () => {
    cy.visit("https://demo.opencart.com/");

    cy.wait(3000);

    // To performed mousehover we need to use "trigger" method and "mouseover" parameter

    cy.get(
      ".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']"
    )
      .trigger("mouseover")
      .click();

    cy.wait(3000);

    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible"); //Mac(1) will be visible
  });

  //Handling RightClick Action

  it.skip("mouse right click action", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // Approch 1

    //cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
    //cy.get(".context-menu-icon-copy>span").should("be.visible");

    // Approch 2
    cy.wait(3000);

    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-copy>span").should("be.visible");
  });

  //Handling DoubleClick Action

  it.skip("mouse double click action", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.wait(3000);
    cy.frameLoaded("#iframeResult"); //Load the frame
    cy.wait(3000);
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.wait(5000);
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");

    // Approch 2
    //cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
    //cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!");
  });
});

//handling ifrmaes using pluging Installation: npm install -D cypress-iframe
// Then Import "import "cypress-iframe"; beggining of the test case
