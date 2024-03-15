const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:7000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
