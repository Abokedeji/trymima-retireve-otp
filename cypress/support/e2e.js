
// Import commands.js using ES2015 syntax:
import './commands';
import './custom-commands/homepage';
import './custom-commands/signuppage';
import './custom-commands/loginpage'
import './custom-commands/common-actions';
import '@faker-js/faker';
import 'cypress-mailosaur';
import 'cypress-fill-command'

beforeEach(()=>{
    cy.on('uncaught:exception',()=>{
        return false
    })
    cy.visit('/');
})


            