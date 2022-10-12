///<reference types= "cypress"/>

describe('Searchbox Test',() => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it("Should type into searchbox and submit", () => {
        cy.get('#searchTerm').type('Online {enter}')
    });
    it("Should show search result page", () => {
        cy.get('h2').should('contain','Search Results:')
        cy.url().should('contain','=Online')
    });

    it("Link Free Access to Online Banking", () => {
        cy.contains('Zero - Free Access to Online Banking').should('be.visible')
    });

    it("Link Online Statements", () => {
        cy.contains('Zero - Online Statements').should('be.visible')
    });

});