
describe('Signup', () => {
    it('Signup filling all optional fields', () => {
        cy.clickSignupButton()
        cy.CompleteSignupForm()
        cy.retrieveAndInsertOTP()
    });
});
            