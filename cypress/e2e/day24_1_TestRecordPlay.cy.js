describe("Cypress Studio", () => {
  it("testing demo", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://edutechs.app/welcome");
    cy.get("#gx-burger").click();
    cy.get(".gx-mobile-menu-btn-wrapper > .gx-login-btn").click();
    cy.get("#basic_email").clear("atikur2022rahman@gmail.com");
    cy.get("#basic_email").type("atikur2022rahman@gmail.com");
    cy.get("#basic_password").clear("A");
    cy.get("#basic_password").type("Atik321");
    cy.get(".ant-btn").click();
    cy.get(".ant-notification-notice-close-x > .anticon > svg").click();

    cy.wait(3000);

    cy.get(":nth-child(5) > .anticon > svg > path").click();
    /* ==== End Cypress Studio ==== */
  });

  it.only("testing demo2", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://www.amazon.com/");
    cy.wait(3000);
    cy.get(".a-button-base > .a-button-inner > .a-button-input").click();
    cy.get("#twotabsearchtextbox").clear("g");
    cy.wait(3000);
    cy.get("#twotabsearchtextbox").type("games");
    cy.get("#nav-search-submit-button").click();

    /* ==== End Cypress Studio ==== */
  });
});
