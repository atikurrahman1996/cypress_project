describe("auto test recorder", () => {
  it("cypress recorder", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://edutechs.app/welcome");
    cy.get(
      ".ant-menu-overflow > .ant-dropdown-trigger > .ant-space > :nth-child(2) > .anticon > svg"
    ).click();
    cy.get(".ant-col-md-13 > div > .ant-btn > span").click();
    cy.get("#basic_email").clear("atikur2022rahman@gmail.com");
    cy.get("#basic_email").type("atikur2022rahman@gmail.com");
    cy.get("#basic_password").clear("A");
    cy.get("#basic_password").type("Atik321");
    cy.get(".ant-btn").click();
    cy.get("#rc_select_0").clear("a");
    cy.get("#rc_select_0").type("atik");
    cy.get(
      ".ant-select-item-option-active > .ant-select-item-option-content"
    ).click();
    cy.get(".gx-btn-purple > span").click();
    cy.get("#rc-tabs-0-tab-2").click();
    cy.get("#rc-tabs-0-tab-3").click();
    cy.get(".drawer-head-left > .anticon > svg > path").click();
    cy.get(
      '[style="background-color: rgb(125, 127, 189); margin-bottom: 20px; height: 30%;"] > .ant-card-body > .gx-media > .gx-media-body > .gx-text-truncate-with-overflow-hidden'
    ).click();
    cy.get(".ant-modal-close-x > .anticon > svg").click();
    cy.get(
      '[style="background-color: rgb(145, 54, 219); margin-bottom: 20px; height: 30%;"] > .ant-card-body > .gx-media > .gx-media-body > .gx-dot-arrow > .gx-hover-arrow'
    ).click();
    cy.get(
      ":nth-child(15) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close > .ant-modal-close-x > .anticon > svg"
    ).click();
    cy.get(".gx-language > .gx-pointer").click();
    cy.get(":nth-child(2) > .gx-language-text").click();
    cy.get(":nth-child(1) > .gx-language-text").click();
    cy.get(":nth-child(5) > .anticon > svg").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Test1", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://edutechs.app/welcome");
    cy.get(".gx-header-notifications > .ant-btn > span").click();
    cy.get(
      ":nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper"
    ).click();
    cy.get("#basic_email").clear("a");
    cy.get("#basic_email").type("atikur2022rahman@gmail.com");
    cy.get("#basic_password").clear("A");
    cy.get("#basic_password").type("Atik321");
    cy.get(".ant-btn").click();
    /* ==== End Cypress Studio ==== */
  });
});

/*
To record cypress test add > experimentalStudio: true ( in the cypress.config file under e2e)
Create a test file > write describe block and it block > open cypress ui > click on it block and add url > click continue > do actions > save> return to VC code

*/
