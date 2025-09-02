describe("Assertions example", () => {
  it("Explicit Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //Login

    cy.get("input[placeholder='Username']").type("Admin"); //provide value of input box
    cy.get("input[placeholder='Password']").type("admin123"); //provide value of input box
    cy.get("button[type='submit']").click(); //provide value of input box

    //compare expected name and actual name

    let expName = "Paul Collings";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      //BDD Style > Behavior Driven Development

      //expect(actName).to.equal(expName);
      //expect(actName).to.not.equal(expName); // negative assertion

      //TDD Style > Test Driven Development

      assert.equal(actName, expName);
      assert.notEqual(actName, expName); // negative assertion
    });
  });
});

// Explicit assertions -> Expect & Assert
