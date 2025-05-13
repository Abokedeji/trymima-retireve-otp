
  const { defineConfig } = require('cypress');
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://staging.trymima.com/',
          viewportHeight: 960,
          viewportWidth: 1520,
          chromeWebSecurity: false,
          defaultCommandTimeout: 15000,
          setupNodeEvents(on, config) {
            // implement node event listeners here
          },
      },
  });
      