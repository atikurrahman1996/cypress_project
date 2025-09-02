describe(" check UI elements", () => {
  it(" check radio button", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    // check visibility

    cy.get("#male").should("be.visible");
    cy.get("#female").should("be.visible");

    // check radio button checked

    cy.get("#male").check().should("be.checked"); // male should be selected
    cy.get("#female").should("not.be.checked");

    cy.get("#female").check().should("be.checked"); // female should be selected
    cy.get("#male").should("not.be.checked");

    // selecting checkbox
    cy.get("#monday").should("be.visible");
    cy.get("#monday").check().should("be.checked");
    //cy.get("#monday").uncheck().should("not.be.checked");

    // selecting all the check box -(combination of tag, class, attribute)

    cy.get(".form-check-input[type='checkbox']").check().should("be.checked");
    cy.get(".form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    //Selecting first & last check box

    cy.get(".form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get(".form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");

    // If want to select any other options like 3rd, 4th, 5th ...
    /*
      If it’s a <select> dropdown:
      cy.get('select#dropdown').select(2).check()   // get the dropdown and select 3rd option

      Example for Multiple Checkboxes (like in your script)

    If you have multiple checkboxes and you want the 3rd one:

    cy.get(".form-check-input[type='checkbox']").eq(3).check().should("be.checked");   // 4th element (0, 1,2, 3-based index)

      */
  });
});
