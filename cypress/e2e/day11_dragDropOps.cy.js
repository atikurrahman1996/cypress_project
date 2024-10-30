import "@4tw/cypress-drag-drop";

describe("handle drag and drop", () => {
  it("Fried Checken would moved to drag box", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");
    cy.wait(5000);
    cy.get("#menu-fried-chicken").drag("ul[id='plate-items'] li");
    cy.wait(5000);
  });

  it.only("Drag1 moved to Drag2", () => {
    cy.visit("https://vishalok12.github.io/jquery-dragarrange/");

    cy.wait(5000);
    cy.get(".draggable-element.d-1").drag(".draggable-element.d-2", {
      force: true,
    });
    cy.wait(5000);
  });
});

// drag and drop using plugin > install >npm install --save-dev @4tw/cypress-drag-drop
// import package begging of the test case > import '@4tw/cypress-drag-drop'
// if drag and drop not works automatically used { force: true}
