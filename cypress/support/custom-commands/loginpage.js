let loginPage
let userLogin

beforeEach(()=> {
    cy.fixture('elements').then(sel=>{
        loginPage = sel.elements.loginPage
    })
})

Cypress.Commands.add('fillLoginDetailsAndClickLoginButton', ()=>{
    cy.fixture('userLogin').then(user=>{
    cy.get(loginPage.emailAddressField).fill(user.email);
    cy.get(loginPage.passwordField).fill('Test@1234');
    cy.get(loginPage.button).click();
     })
})