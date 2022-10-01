/// <reference types="cypress" />

describe('My First Test',() => {
    it('clicking "type" shows the headings', () => {
        cy.visit('https://example.cypress.io/')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        cy.get('.action-email')
        .type("Hi_Ibnu_Aviandi")
        .should('have.value','Hi_Ibnu_Aviandi')
    
    });
})