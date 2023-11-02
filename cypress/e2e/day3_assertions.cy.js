describe("Assestions demo", ()=>{
    
it("Implicit Assertions", ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //should, and 
/*
    cy.url().should("include", "orangehrmlive.com");
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should("contain", "orangehrm");
*/
    //alternate way, if we have multiple validation

    /*
    cy.url().should("include", "orangehrmlive.com")
    .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .should("contain", "orangehrm")
    */
// another way to write assertions using and 

   cy.url().should("include", "orangehrmlive.com")
   .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   .and("contain", "orangehrm")
   .and("not.contain", "greenhrm") // negative assertion

   //checking title
   cy.title().should("include", "Orange")
   .and("eq", "OrangeHRM")
   .and("contain", "HRM");

   //checking logo visible or not

   cy.get("img[alt='company-branding']").should("be.visible").and("exist")
   cy.get("input[placeholder='Username']").type("Admin");
   cy.get("input[placeholder='Username']").should("have.value", "Admin");

   //Login

   cy.get("input[placeholder='Username']").type("Admin"); //provide value of input box
   cy.get("input[placeholder='Password']").type("admin123"); //provide value of input box
   cy.get("button[type='submit']").click(); //provide value of input box



})

})