const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jv3yv2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    animationDistanceThreshold: 50,
    experimentalMemoryManagement: true,
    chromeWebSecurity: false,
    experimentalStudio: true,
    watchForFileChanges: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 900,
    viewportWidth: 1440,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});