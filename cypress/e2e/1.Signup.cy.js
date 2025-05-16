
describe('Signup', () => {
    it('Signup filling all optional fields', () => {
        cy.clickSignupButton()
        cy.CompleteSignupForm()
        cy.retrieveAndInsertOTP()
    });

    it('Signup filling one optional field - Business Registration Number', () => {
        cy.clickSignupButton()
        cy.fillBasicDetails()
        cy.fillOptionalField('Business Registration Number')
        cy.Button()
        cy.otherActions()
        cy.retrieveAndInsertOTP()
    });

    it('Signup filling one optional field - Website', () => {
        cy.clickSignupButton()
        cy.fillBasicDetails()
        cy.Button()
        cy.fillOptionalField('Website')
        cy.otherActions()
        cy.retrieveAndInsertOTP()
    });


    it('Signup filling one optional field - Instagram handle', () => {
        cy.clickSignupButton()
        cy.fillBasicDetails()
        cy.Button()
        cy.fillOptionalField('Instagram handle')
        cy.otherActions()
        cy.retrieveAndInsertOTP()
    });

    it('Signup filling one optional field - Twitter handle', () => {
        cy.clickSignupButton()
        cy.fillBasicDetails()
        cy.Button()
        cy.fillOptionalField('Twitter handle')
        cy.otherActions()
        cy.retrieveAndInsertOTP()
    });
});
            