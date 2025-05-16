let loginPage

before(()=> {
    cy.fixture('elements').then(sel=>{
        loginPage = sel.elements.loginPage
    })
})

Cypress.Commands.add('fillLoginDetailsAndClickLoginButton', ()=>{
    cy.get(loginPage.emailAddressField).fill('test2375781@opihe6jd.mailosaur.net');
    cy.get(loginPage.passwordField).fill('Test@1234');
    cy.get(loginPage.button).click();
})