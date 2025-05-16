describe('Login', () => {
    it('User is able to login with valid credentials', () => {
        cy.clickLoginButton()
        cy.fillLoginDetailsAndClickLoginButton()
        
        
    });

    
});