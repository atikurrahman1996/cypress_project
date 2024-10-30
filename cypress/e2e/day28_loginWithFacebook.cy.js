describe("Login with Facebook", () => {
  it("should login using Facebook", () => {
    // Visit the login page of your application
    cy.visit("/login");

    // Click the Facebook login button (adjust the selector as needed)
    cy.get("button.facebook-login").click();

    // Intercept the redirection to Facebook login
    cy.origin("https://www.facebook.com", () => {
      // Input Facebook email
      cy.get("#email").type(Cypress.env("facebook_email"));

      // Input Facebook password
      cy.get("#pass").type(Cypress.env("facebook_password"), { log: false });

      // Submit the Facebook login form
      cy.get('button[name="login"]').click();
    });

    // Verify redirection back to your application and successful login
    cy.url().should("include", "/dashboard"); // Adjust based on your application
  });
});

/*
cy.origin: This command allows you to handle actions on a different domain (Facebook in this case).
Create a cypress.env.json file in the root of your project to securely store your Facebook credentials:
{
  "facebook_email": "your_facebook_email",
  "facebook_password": "your_facebook_password"
}

*/
