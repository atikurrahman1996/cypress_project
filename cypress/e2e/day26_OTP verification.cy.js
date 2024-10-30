describe("Login Page Automation", () => {
  it("should login using mobile number and OTP", () => {
    // Visit the login page
    cy.visit("/login");

    // Input the mobile phone number
    cy.get('input[name="mobile"]').type("1234567890");

    // Click on the submit or next button to trigger OTP sending
    cy.get('button[type="submit"]').click();

    // Wait for OTP (you might need to handle this part based on how your system works)
    // This can be a mock API call or interception in a test environment.

    // Input the OTP - here you need to find a way to get the OTP
    // One way is to mock the OTP API response or intercept it if it’s part of your system
    cy.intercept("POST", "**/api/send-otp", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          otp: "123456", // Mocked OTP
        },
      });
    }).as("sendOtp");

    cy.wait("@sendOtp");

    // Input the mocked OTP
    cy.get('input[name="otp"]').type("123456");

    // Submit the OTP
    cy.get('button[type="submit"]').click();

    // Verify the login is successful
    cy.url().should("include", "/dashboard"); // Adjust this based on your application
  });
});
