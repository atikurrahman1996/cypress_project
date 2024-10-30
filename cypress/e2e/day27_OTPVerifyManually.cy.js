describe("Login with OTP", () => {
  it("visits login page", () => {
    cy.visit("https://bongobd.com/");
    cy.wait(15000);

    cy.get(
      "div.jss22 div.jss1168:nth-child(2) header.MuiPaper-root.MuiAppBar-root.MuiAppBar-positionFixed.MuiAppBar-colorPrimary.jss1170.jss1246.mui-fixed.MuiPaper-elevation4 div.MuiContainer-root.jss1186.MuiContainer-maxWidthXl div.MuiToolbar-root.MuiToolbar-dense div.jss1187 div.jss1201 div:nth-child(3) div:nth-child(1) button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss1202 > span.MuiButton-label",
      { timeout: 10000 }
    ).click();
  });

  it.skip("enters phone number", () => {
    cy.get("input[placeholder='Phone Number']").type("1879423644", {
      force: true,
    });
    cy.wait(5000);
    cy.get("input[type='checkbox']").click();
  });

  it.skip("submits phone number", () => {
    cy.get(
      "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained jss11127 MuiButton-containedPrimary MuiButton-fullWidth'] span[class='MuiButton-label']"
    ).click();
  });

  // Manually enter the received OTP on the device
});

/*
Challenges with OTP Automation:

OTPs are temporary codes sent to your phone, making direct automation through Cypress difficult.
Sending and receiving SMS messages programmatically is often restricted due to security concerns.
Approaches for Handling OTP Verification:

Manual OTP Entry:
Cypress can automate visiting the login page and entering your phone number.
You'll need to manually enter the received OTP on the device.
This simulates a real user flow but requires manual intervention.

Mocking OTP Verification (Limited Use):
If your application allows for mocking external dependencies, you might be able to intercept the OTP verification request and provide a pre-defined code.
This approach is highly dependent on your application's architecture and might not be feasible in most cases.
*/
