describe("Cypress Studio Recorder", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("Sign up page", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://edutechs.app/welcome");
    cy.get(".ant-col-md-13 > div > .ant-btn > span").click();
    cy.get('[href="/signup"]').click();
    cy.get("#basic_username").clear("e");
    cy.get("#basic_username").type("edu");
    cy.get("#basic_email").clear("e");
    cy.get("#basic_email").type("edu23355@gmail.com");
    cy.get("#basic_password").clear("e");
    cy.get("#basic_password").type("edu123");
    cy.get(".ant-btn").click();
    cy.wait(5000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(2000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(2000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(2000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(2000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn-primary > span'
    ).click();
    cy.wait(2000);
    cy.get(":nth-child(4) > .anticon > svg").click();
    /* ==== End Cypress Studio ==== */

    it("Login Test", () => {});
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#basic_email").click();
    cy.get("#basic_email").clear("edu23355@gmail.com");
    cy.get("#basic_email").type("edu23355@gmail.com");
    cy.get("#basic_password").clear("e");
    cy.get("#basic_password").type("edu123");
    cy.get(".ant-btn").click();

    cy.wait(3000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(3000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(3000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(3000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn > span'
    ).click();
    cy.wait(3000);
    cy.get(
      '.slick-active > :nth-child(1) > [tabindex="-1"] > .ant-row-space-between > :nth-child(2) > .ant-row > :nth-child(3) > .ant-btn-primary > span'
    ).click();
    /* ==== End Cypress Studio ==== */
  });
});
