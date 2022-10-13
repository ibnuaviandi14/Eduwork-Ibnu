/// <reference types ="cypress"/>

describe('Navbar Test',() => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it("Should display online banking content", () => {
        cy.get('strong').should('contain','Online Banking')
        cy.contains('Online Banking').click()
        cy.url().should('include','/online-banking.html')
        cy.get('h1').should('be.visible').and('have.text','Online Banking')
        cy.get('h3').should('be.visible').and('contain','Our Bank is trusted by over 1,000,000 customers world wide.')
    });

    it("Should display feedback content", () => {
        cy.get('strong').should('contain','Feedback')
        cy.contains('Feedback').click()
        cy.url().should('include','/feedback.html')
        cy.get('h3').should('be.visible')
        cy.get('h3').should('have.text','Feedback')
        cy.get('#name').clear().and('be.visible')
        cy.get('#email').clear().and('be.visible')
        cy.get('#subject').clear().and('be.visible')
        cy.get('#comment').clear().and('be.visible')
    });

    it("Should display homepage content", () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('#download_webinspect_link').should('have.text','Download WebInspect')
        cy.get('#terms_of_use_link').should('have.text','Terms of Use')
        cy.get('#privacy_statement_link').should('have.text','Privacy Statement')
    });
})