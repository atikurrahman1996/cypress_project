describe("My First Test", () => {
    it("verify title-positive ", () => {
      cy.visit("https://connexpay.com/");
      cy.title().should("eq", "ConnexPay - Payment Gateway for Online Marketplaces");
    });
  
    it("verify title-negative test", () => {
      cy.visit("https://connexpay.com/");
  
      cy.title().should("eq", "ConnexPay - Payment Gateway for Offline Marketplaces");
    });

    it("finding webpage actual title", () => {
        cy.visit("https://connexpay.com/");
      
        cy.title().then((title) => {
          cy.log("Webpage Title is: " + title);
        });
      });
      
  });

  //npx cypress open - this command will open in the browser
  //npx cypress run --headed - this command will open in the terminal
  //npx cypress run --spec (filepath) - this command will open specific file ()
  //npx cypress run --browser chrome - this command will open test in the chrome browser
  //npx cypress run --browser chrome --headed - this command will open test in the chrome browser in headed mode
