/// <reference types="cypress" />

describe('Trying Input',() =>{
    it("Visit the website", () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });

    it('Trying to write login', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Ibnu114aviandi@gmail.com')
    });

    it('Trying to write password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('qazwsxedc1234567890')
    });
    it('Click keep me signed in', () => {
        cy.contains('Keep me signed in').click()
    });
    it('Click Sign In', () => {
        cy.contains('Sign in').click()
    })
    it('Error Massage', () => {
        cy.contains('Troubles entering the site?')
});
it('Forgot password', () => {
    cy.contains('Forgot your password ?').click()
});
it('Enter Email', () => {
    cy.get('#user_email').clear()
    cy.get('#user_email').type('Ibnuaviandi@yahoo.com')
    cy.contains('Send Password').click()
});
})
