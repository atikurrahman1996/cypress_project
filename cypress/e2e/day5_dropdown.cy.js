describe("handle dropdowns", () => {
  it("dropdowns with select option", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#country").select("Japan").should("have.value", "Japan");
  });

  //it.skip means this test will not run

  it("dropdowns without select option", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Bangladesh").type("{enter}");

    cy.get("#select2-billing_country-container").should(
      "have.text",
      "Bangladesh"
    );
  });

  it.skip("auto suggestion dropdowns ", () => {
    cy.visit("https://www.wikipedia.org/");

    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi University").click();
  });

  it.skip("dynamic dropdowns ", () => {
    cy.visit("https://www.google.com/");

    cy.get("#APjFqb").type("cypress automation");

    cy.get(".wM6W7d").contains("cypress automation tutorial").click();
  });
});
