describe("Select drop down and search element", () => {
  it("demo test", () => {
    cy.visit("https://www.amazon.com/");
    cy.get("#searchDropdownBox").select("search-alias=software-intl-ship", {
      force: true,
    });
    cy.get("#twotabsearchtextbox").type("games{enter}", { force: true });
  });
});
