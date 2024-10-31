describe("javascript alerts", () => {
  //Js alert

  it.skip("Js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.wait(5000);
    cy.get("button[onclick='jsAlert()']").click();
    cy.wait(5000);

    // validate window alert-optional
    cy.on("window: alert", (win) => {
      expect(win).to.contains("I am a JS Alert");
    });

    //alert window automatically closed by cypress

    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  //Js confirmation alert, it will comes with OK & Cancel Button

  it.skip("Js confirm alert-Clicked Ok ", () => {r[.]
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsConfirm()']").click();
    // validate window alert-optional
    cy.on("window: confirm", (win) => {
      expect(win).to.contains("I am a JS Confirm");
    });

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it.only("Js confirm alert-Clicked Cancel ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsConfirm()']").click();
    

    // validate window alert -optional
    cy.on("window: confirm", (win) => {
      expect(win).to.contains("I am a JS Confirm");
    });
    cy.on("window: confirm", () => false); //cyress close alert window using cancel button
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //Js prompt alert, it will comes with input box and OK & Cancel Button
  it.skip("Js prompt alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.wait(5000);
    // this event will open before window open and take control on it
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome atik");
    });

    cy.wait(5000);

    cy.get("button[onclick='jsPrompt()']").click();

    //cypress will automatically closed prompt alert, it will use OK button by default
    cy.wait(5000);

    cy.get("#result").should("have.text", "You entered: welcome atik");
  });

  //Authenticated alert

  // only means- only run this test case

  it.skip("Authenticated alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.wait(5000);
    cy.get("div[class='example'] p").should("have.contain", "Congratulations!");
  });
});
