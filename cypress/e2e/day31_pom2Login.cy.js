//General way

// describe("Without POM Design", () => {
//   it("verify login", () => {
//     cy.visit("https://trytestingthis.netlify.app/");
//     cy.get("#uname").type("test");
//     cy.get("#pwd").type("test");
//     cy.get("input[value='Login']").click();
//     cy.wait(5000);
//     cy.get("div[class='main'] h2").should(
//       "include.text",
//       "Login Successful :)"
//     );
//   });
// });

import LoginPage from "../POM/Login_Page";

const login = new LoginPage();

describe("With POM Design", () => {
  it.only("verify login", () => {
    login.visit();
    login.userName("test");
    login.passWord("test");
    login.clickSubmit();
    login.verifyLoginSuccess();
  });
});
