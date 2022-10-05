/// <reference types="cypress" />

describe("My frist test",() =>{
    it("Clicking 'type' shows the right headings", () => {
        cy.visit("http://example.cypress.io"),
        cy.pause(),
        cy.contains("type").click(),
        cy.url().should("include","/commands/actions"),
        cy.get(".action-email")
        .type("IBNU")
        .should("have.value","IBNU");
    })
})