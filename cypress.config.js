const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // for html report
  e2e: {
    experimentalRunAllSpecs: true, // to run all the test at a time
    experimentalStudio: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true; // for failure test automatic screeshoots
      require("cypress-mochawesome-reporter/plugin")(on); //for html report
    },
  },
});
