let homepage
let signupPage
let creds
let serverID = 'opihe6jd'
let emailDomain = '@opihe6jd.mailosaur.net'
let emailAddress

import { faker } from "@faker-js/faker/locale/en_NG"

before(()=>{
    const checker = new Date().getTime();
    const emailSuffix = checker.toString().substring(6,13)
    const emailPrefix = `test${emailSuffix}`
    emailAddress = `${emailPrefix}${emailDomain}`
    const userDetails = {
        email: emailAddress,
    }

    cy.writeFile('cypress/fixtures/userDetails.json', JSON.stringify(userDetails, null, 2))

    cy.fixture('elements').then(sel=>{
        homepage = sel.elements.homepage
        signupPage = sel.elements.signupPage
    })
    cy.fixture('userDetails').then(user=>{
        creds = user
    })
})

Cypress.Commands.add('retrieveAndInsertOTP', () => {
    cy.mailosaurGetMessage(serverID, { 
        sentTo: emailAddress})
    .then((email)=>{
        const firstCode = email.html.codes[0]
        const otp = firstCode.value
        cy.log(otp)
    })
});

Cypress.Commands.add('CompleteSignupForm', () => {
    cy.get(signupPage.fullnameField).fill(faker.person.fullName());
    cy.get(signupPage.businessnameField).fill(faker.company.name());
    cy.get(signupPage.businessEmailField).fill(creds.email);
    cy.wait(5000)
    cy.get(signupPage.businessphoneField).fill(faker.phone.number({style: 'international'}));
    cy.get(signupPage.BusinessRegNumField).fill(faker.string.numeric({length: {min: 5, max: 7}}));
    cy.get(signupPage.button).click();
    cy.get(signupPage.websiteField).fill(faker.internet.domainName());
    cy.get(signupPage.instagramField).fill('@mankeTest');
    cy.get(signupPage.twitterField).fill('@mankeTest');
    cy.get(signupPage.howYouHeardAboutUs).click();
    cy.get('#scrollableDiv').contains('Twitter').scrollIntoView().click();
    cy.get(signupPage.passwordField).fill('Test@1234');
    cy.get(signupPage.button).click();
 })

 Cypress.Commands.add('fillBasicDetails', () => {
    cy.get(signupPage.fullnameField).fill(faker.person.fullName());
    cy.get(signupPage.businessnameField).fill(faker.company.name());
    cy.get(signupPage.businessEmailField).fill(creds.email);
    cy.wait(5000)
    cy.get(signupPage.businessphoneField).fill(faker.phone.number({style: 'international'}));

})

Cypress.Commands.add('fillOptionalField', (option) => {
    if(option === 'Business Registration Number'){
        cy.get(signupPage.BusinessRegNumField).fill(faker.string.numeric({length: {min: 5, max: 7}}));
    } 
    else if(option === 'Website'){
        cy.get(signupPage.websiteField).fill(faker.internet.domainName());
    }
    else if(option === 'Instagram handle'){
        cy.get(signupPage.instagramField).fill('@mankeTest');
    } 
    else if(option === 'Twitter handle'){
        cy.get(signupPage.twitterField).fill('@mankeTest');
    }
    else{
        throw new Error('Invalid option provided');
    }
})




Cypress.Commands.add('Button', () => {
    cy.get(signupPage.button).click();
})

Cypress.Commands.add('otherActions', () => {
    cy.get(signupPage.howYouHeardAboutUs).click();
    cy.get('#scrollableDiv').contains('Twitter').scrollIntoView().click();
    cy.get(signupPage.passwordField).fill('Test@1234');
    cy.get(signupPage.button).click();
})

