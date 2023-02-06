const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u5rg43',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
