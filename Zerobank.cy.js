/// <reference types="cypress" />

describe('Trying Input',() =>{
    it("Visit the website", () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
        cy.fixture('regist').then(regist =>{
            const email = regist.username
            const pass = regist.password
        cy.Zerobank(email,pass)
        })
    })
})
