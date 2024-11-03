import Registration from "../POM/Registration";
import registerData from "../fixtures/registerData.json";

const register = new Registration();

describe("Register test using POM design pattern", () => {
  it("Simple registration test", () => {
    register.openUrl();
    register.enterFirstName(registerData.firstName);
    register.enterLastName(registerData.lastName);
    register.enterEmail(registerData.email);
    register.enterTelephone(registerData.telephone);
    register.enterPassword(registerData.password);
    register.selectCheckbox();
    cy.wait(5000);
    register.clickOnContinue();
  });
});
