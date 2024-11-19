describe("My First Test Suite", () => {
  it("Verify title-positive ", () => {
    cy.visit("https://ebpm.i2gether.com/sysi2gether/init/robiux/init/login");
    cy.wait(3000);
    cy.title().should("eq", "TIL eBPM");
    cy.get("#login_field").type("atikur");
    cy.get("#password").type("Atik@321");
    cy.get("input[value='Sign In']").click();
    cy.wait(3000);
    cy.get(".btn[data-toggle='modal']").click();
    cy.wait(2000);
    cy.get(":nth-child(3) > :nth-child(2) > .btn").click();
    cy.wait(3000);
    cy.on("window: confirm", (win) => {
      expect(win).to.contains("Are you sure?");
    });
    cy.get("tbody tr:nth-child(3) td:nth-child(2) a:nth-child(1)").click({
      force: true,
    });
    cy.wait(3000);
    cy.get(":nth-child(3) > :nth-child(2) > .btn").click({ force: true });
    cy.wait(10000);
  });
});
