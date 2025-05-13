
describe('Signup', () => {
    it('Signup filling all optional fields', () => {
        cy.clickSignupButton()
        cy.CompleteSignupForm()
        cy.retrieveAndInsertOTP()
    });

    it('Signup filling one optional field - Business Registration Number', () => {
        
    });

    it('Signup filling one optional field - Instagram handle', () => {
        
    });

    it('Signup filling one optional field - Twitter handle', () => {
        
    });
});
            