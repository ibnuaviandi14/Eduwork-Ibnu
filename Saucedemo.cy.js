/// <reference types="cypress" />

describe('Trying Input',() =>{
    it("Visit the website", () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo')
        cy.fixture('login').then(login =>{
            const nama = login.username
            const pass = login.password
            cy.get('#user-name').type(nama)
            cy.get('#password').type(pass)
            cy.get('#login-button').click()
            cy.get('#react-burger-menu-btn').click()
            cy.url().should('include','/inventory.html')
            cy.get('#about_sidebar_link').click()
            cy.get('h1').should('contain','DEVELOP WITH CONFIDENCE')
    })
})
})
