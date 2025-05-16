let homepage

before(()=>{
    cy.fixture('elements').then(sel=>{
        homepage = sel.elements.homepage
    })
})

Cypress.Commands.add('clickSignupButton', ()=> {
    cy.get(homepage.homepageSignupBtn).click()
});

Cypress.Commands.add('clickLoginButton', ()=> {
    cy.get(homepage.homepageLoginBtn).click()
});