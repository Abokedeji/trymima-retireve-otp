let homepage
let signupPage
let creds
let serverID = 'opihe6jd'
let emailDomain = '@opihe6jd.mailosaur.net'
let emailAddress

import { faker } from "@faker-js/faker/locale/en_NG"



beforeEach(()=>{
    // cy.task('generateEmailFile')
    const checker = new Date().getTime();
    const emailSuffix = checker.toString().substring(6,13)
    const emailPrefix = `test${emailSuffix}`
    emailAddress = `${emailPrefix}${emailDomain}`
    const userDetails = {
        email: emailAddress,
    }

    cy.writeFile('cypress/fixtures/userDetails.json', JSON.stringify(userDetails, null, 2))
    cy.on('uncaught:exception',()=>{
        return false
    })
    cy.visit('/');

    cy.fixture('elements').then(sel=>{
        homepage = sel.elements.homepage
        signupPage = sel.elements.signupPage
    })
})



Cypress.Commands.add('retrieveAndInsertOTP', () => {
    cy.mailosaurGetMessage(serverID, { 
        sentTo: emailAddress})
    .then((email)=>{
        const firstCode = email.html.codes[0]
        const otp = firstCode.value
        cy.log(otp)
        cy.get('input').each(($el, index) => {
            cy.wrap($el).type(otp[index])
    })
})
});

Cypress.Commands.add('CompleteSignupForm', () => {
    cy.reloadFixture('userDetails').then(user=>{
    cy.get(signupPage.fullnameField).fill(faker.person.fullName());
    cy.get(signupPage.businessnameField).fill(faker.company.name());
    cy.get(signupPage.businessEmailField).fill(user.email);
    
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
    cy.saveLoginEmail()
   
 })

Cypress.Commands.add('saveLoginEmail', ()=> {  
    cy.readFile('cypress/fixtures/userDetails.json').then((userDetails) => {
        cy.writeFile('cypress/fixtures/userLogin.json', JSON.stringify(userDetails, null, 2))
    })
  })

Cypress.Commands.add('reloadFixture', (file)=>{
    return cy.readFile(`cypress/fixtures/${file}.json`)
})

 Cypress.Commands.add('fillBasicDetails', () => {
    cy.reloadFixture('userDetails').then(user=>{
    cy.get(signupPage.fullnameField).fill(faker.person.fullName());
    cy.get(signupPage.businessnameField).fill(faker.company.name());
    cy.get(signupPage.businessEmailField).fill(user.email);
    
    cy.get(signupPage.businessphoneField).fill(faker.phone.number({style: 'international'}));
    })

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

