class LoginPage {
  visit() {
    cy.visit("https://trytestingthis.netlify.app/");
  }
  // userName(username) {
  //   cy.get("#uname").type(username);
  // }
  // passWord(password) {
  //   cy.get("#pwd").type(password);
  // }
  // clickSubmit() {
  //   cy.get("input[value='Login']").click();
  // }
  // verifyLoginSuccess() {
  //   cy.get("div[class='main'] h2").should(
  //     "include.text",
  //     "Login Successful :)"
  //   );
  // }

  //another way to separate locators and method
  login_userName = "#uname";
  login_passWord = "#pwd";
  login_Submit = "input[value='Login']";
  login_verifySuccess = "div[class='main'] h2";

  userName(username) {
    cy.get(this.login_userName).type(username);
  }
  passWord(password) {
    cy.get(this.login_passWord).type(password);
  }
  clickSubmit() {
    cy.get(this.login_Submit).click();
  }
  verifyLoginSuccess() {
    cy.get(this.login_verifySuccess).should(
      "include.text",
      "Login Successful :)"
    );
  }
}

export default LoginPage;
/*
//also we can write like this:

webLocators = {
  login_userName = "#uname";
  login_passWord = "#pwd";
  login_Submit = "input[value='Login']";
  login_verifySuccess = "div[class='main'] h2";

};

userName(username) {
    cy.get(this.weblocators.login_userName).type(username);
  }

*/
//Both the way are correct whatever we choose we can use
