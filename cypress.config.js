
  const { defineConfig } = require('cypress');

  function createEmail(){
    const emailDomain = '@opihe6jd.mailosaur.net'
    const checker = new Date().getTime();
    const emailSuffix = checker.toString().substring(6,13)
    const emailPrefix = `test${emailSuffix}`
    const emailAddress = `${emailPrefix}${emailDomain}`
    return {
        email: emailAddress,
    }

  }
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://staging.trymima.com/',
          viewportHeight: 960,
          viewportWidth: 1520,
          chromeWebSecurity: false,
          defaultCommandTimeout: 15000,
          setupNodeEvents(on, config) {
            on('task', { 
              generateEmailFile(){
                const userDetails = createEmail();
                cy.writeFile('cypress/fixtures/userDetails.json', JSON.stringify(userDetails, null, 2))
                return null
              }
            })
            // implement node event listeners here
          },
      },
  });
      