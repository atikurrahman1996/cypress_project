//import Login from "../PageObjectsModel/loginPage";
import Login2 from "../PageObjectsModel/loginPage2";

describe("MyTestSuit", () => {
  //Genral approach

  it.skip("General approach to do login test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.wait(3000);
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  // using page object model (pom) // import LoginPage.js from PageObjectsModel

  it("Login Test using POM", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    const login = new Login2();
    login.setUserName("Admin");
    login.setPassword("admin123");
    cy.wait(3000);
    login.clickSubmit();
    cy.wait(3000);
    login.verifyLogin();
  });

  //using fixture

  it.only("Login Test using POM", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.fixture("orangeHRM2.json").then((data) => {
      const login2 = new Login2();
      login2.setUserName(data.username);
      login2.setPassword(data.password);
      cy.wait(3000);
      login2.clickSubmit();
      cy.wait(3000);
      login2.verifyLogin();
    });
  });
});
