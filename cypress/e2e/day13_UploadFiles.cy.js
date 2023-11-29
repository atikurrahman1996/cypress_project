import "cypress-file-upload";
describe("handling file upload", () => {
  it("Single file upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("Selenium Cheat Sheet.pdf");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!"); // assertions
  });

  it("Rename file when upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "Selenium Cheat Sheet.pdf",
      fileName: "Selenium1.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!"); // assertions
  });

  it("drag-n-drop file upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("Selenium Cheat Sheet.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span"
    ).contains("Selenium Cheat Sheet.pdf");
  });

  it.only("Multiple file upload ", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    cy.get("#filesToUpload").attachFile([
      "Selenium Cheat Sheet.pdf",
      "Selenium Cheat Sheet -1.pdf",
    ]);
    cy.wait(5000);

    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected:"
    );
  });
});

// to upload file we need to install upload file plugin > npm install --save-dev cypress-file-upload
// Import upload files begging of the test
// keep your files in the fixture folder to upload on the web application
