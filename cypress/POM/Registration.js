class Registration {
  webLocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    passwordConfirm: "#input-confirm",
    policyCheckbox: 'input[type="checkbox"]',
    continue: ".btn.btn-primary",
  };

  openUrl() {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
    );
  }
  enterFirstName(FName) {
    cy.get(this.webLocators.firstName).type(FName);
  }
  enterLastName(LName) {
    cy.get(this.webLocators.lastName).type(LName);
  }
  enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }
  enterTelephone(phoneNo) {
    cy.get(this.webLocators.telephone).type(phoneNo);
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
    cy.get(this.webLocators.passwordConfirm).type(password);
  }
  selectCheckbox() {
    cy.get(this.webLocators.policyCheckbox).check();
  }
  clickOnContinue() {
    cy.get(this.webLocators.continue).click();
  }
}

export default Registration;

//We can set this base URL in the cypress.config.js file for global configuration
/*
//Exp: e2e: {
        env: {
        URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
        }

}
        Navigate to registration file or Test cases file (where you want to use) -> add like this ->
         openURL(){
         cy.visit(Cypress.env.('URL')
        }
*/
