
describe('Signup', () => {
    it('Signup filling all optional fields', () => {
        cy.clickSignupButton()
        cy.CompleteSignupForm()
        cy.retrieveAndInsertOTP()
    });

    it.only('Signup filling one optional field - Business Registration Number', () => {
        cy.clickSignupButton()
        cy.fillBasicDetails()
        cy.fillOptionalField('Business Registration Number')
        cy.Button()
        cy.otherActions()
        cy.retrieveAndInsertOTP()
    });

    it('Signup filling one optional field - Instagram handle', () => {
        
    });

    it('Signup filling one optional field - Twitter handle', () => {
        
    });
});
            