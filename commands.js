// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//const cypress = require("cypress");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',(username, password)=> {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#login_field').clear()
    cy.get('#login_field').type(username)    
    cy.get('#password').clear()
    cy.get('#password').type(password)  
    cy.get('input[name = "commit"]').click()
})

Cypress.Commands.add('Zerobank',(username,password) =>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.contains('Keep me signed in').click()
    cy.contains('Sign in').click()
    cy.get('h3').should('have.text','Troubles entering the site?')
    cy.contains('Forgot your password ?').click()
    cy.get('#user_email').clear()
    cy.get('#user_email').type('Ibnuaviandi@yahoo.com')
    cy.contains('Send Password').click()
})