describe("handling tables", () => {
  // beforeEach is a hook,  beforeEach will execute before every it block code again and again
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();
    cy.wait(5000);
    cy.get(".btn-close").click();
    cy.wait(5000);
    cy.get("#menu-customer").click();
    cy.wait(3000);
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  // Check total number of rows & columns in the tables

  it("Check number of Rows & Columns", () => {
    cy.get(".table.table-bordered.table-hover>tbody>tr").should(
      "have.length",
      "10"
    ); // rows

    cy.wait(5000);

    cy.get(".table.table-bordered.table-hover>thead>tr>td").should(
      "have.length",
      "7"
    ); // columns
  });

  it("Check cell data from specific row and column", () => {
    cy.get("tbody tr:nth-child(10) td:nth-child(3)").contains(
      "princytrainings4@gmail.com"
    );
  });

  // finding total numbers of pages

  it("pagination", () => {
    let totalPages;
    cy.get(".col-sm-6.text-end").then((ele) => {
      let myText = ele.text(); //Showing 1 to 10 of 17847 (1785 Pages)
      totalPages = myText.substring(
        myText.indexOf("(") + 1, // indexOf opening bracket/1st number we need +1
        myText.indexOf("Pages") - 1 // indexOf last number -1
      );
      cy.log("Total number of pages:" + totalPages);
    });
  });
});
