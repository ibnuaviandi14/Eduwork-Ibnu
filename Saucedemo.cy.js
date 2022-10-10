/// <reference types="cypress" />

describe('Trying Input',() =>{
    it("Visit the website", () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo')
        cy.fixture('login').then(login =>{
            const nama = login.username
            const pass = login.password
            cy.get('#user-name').type(nama)
            cy.get('#user-name').type(pass)
    })

    it("Click Login", () => {
        cy.get('#login-button').click()
    })

    it("Click Menu", () => {
        cy.get('#react-burger-menu-btn').click
        cy.url().should('include','/inventory.html')
    })

    it("Click Abouts", () => {
        cy.get('#react-burger-menu-btn').click
        cy.url().should('include','https://saucelabs.com/')
    })
    })
})
