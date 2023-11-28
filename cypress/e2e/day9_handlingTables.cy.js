describe("handling tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();
    cy.get(".btn-close").click();
    cy.get("#menu-customer").click();
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  // Check total number of rows & columns in the tables

  it("Check number of Rows & Columns", () => {
    cy.get(".table.table-bordered.table-hover>tbody>tr").should(
      "have.length",
      "10"
    ); // rows
    cy.get(".table.table-bordered.table-hover>thead>tr>td").should(
      "have.length",
      "7"
    ); // columns
  });

  it("Check cell data from specific row and column", () => {
    cy.get("tbody tr:nth-child(10) td:nth-child(3)").contains(
      "likitakotian123@gmail.com"
    );
  });
  // finding total numbers of pages
  it("pagination", () => {
    let totalPages;
    cy.get(".col-sm-6.text-end").then((ele) => {
      let myText = ele.text();
      totalPages = myText.substring(
        myText.indexOf("(") + 1,
        myText.indexOf("Pages") - 1
      );
      cy.log("Total number of pages:" + totalPages);
    });
  });
});
