describe("MyTestSuit", () => {
  it("Data Driven Test", () => {
    cy.fixture("OranageHRM2.json").then((data) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );

      cy.wait(3000);

      data.forEach((userdata) => {
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.wait(3000);
        cy.get("button[type='submit']").click();

        cy.wait(3000);

        if (userdata.username === "Admin" && userdata.password === "admin123") {
          cy.get(
            ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
          ).should("have.text", userdata.expected);

          cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click(); //click profile

          cy.get(
            "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
          ).click(); // logout
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
            "have.text",
            userdata.expected
          );
        }
      });
    });
  });
});
