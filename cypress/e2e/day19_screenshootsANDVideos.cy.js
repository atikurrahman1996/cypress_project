describe("MyTestSuit", () => {
  // when our test result was failed cypress will take screenshot automatically
  // for intentionally taking screenshot we can use these below method

  it.skip("Captured ScreenShoot and Videos", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.screenshot("Homepage"); // this will take home page screenshot
    cy.wait(5000);
    cy.get("img[title='Your Store']").screenshot("Logo"); // this will take screenshot for specific element
  });

  // automatically captured screenshot and videos for failure test or error test
  // negative test

  it("Captured ScreenShoot and Videos", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.wait(5000);
    cy.get("li:nth-child(7) a:nth-child(1)").click(); // Click on Camera section
    cy.wait(3000);
    cy.get("div[id='content'] h2").should("have.text", "Tablets"); // Validation for Camera, but we put Tablets for  failure testing purose
  });
});

// To verify the auto screenshot and videos for failure test go the terminal > npx cypress run --spec (file path)
