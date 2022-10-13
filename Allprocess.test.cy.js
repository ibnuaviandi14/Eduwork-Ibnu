/// <reference types = "cypress" />

describe('Saucedemo test',() =>{
    before(() =>{
        cy.visit('https://www.saucedemo.com/')
    });

    it("Login with locked out user", () => {
        cy.fixture('Locked').then(Locked => {
            const nama = Locked.username
            const pass = Locked.password
        cy.Saucedemo(nama,pass)
        cy.get('h3').should('contain','Epic sadface: Sorry, this user has been locked out.')
    })
});

    it("Login with Invalid user", () => {
        cy.fixture('Invalid').then(Invalid => {
            const nama = Invalid.username
            const pass = Invalid.password
        cy.Saucedemo(nama,pass)
        cy.get('h3').should('contain',"Epic sadface: Username and password do not match any user in this service")
    })
});

    it("Login with valid user", () => {
        cy.fixture('Standard').then(Standard =>{
            const nama = Standard.username
            const pass = Standard.password
        cy.Saucedemo(nama,pass)
        cy.url().should('contain','https://www.saucedemo.com/inventory.html')
    })
});

    it("Add to cart Bacpack & Jacket ", () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    });

    it("Logout from website", () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').should('contain','All Items')
        cy.get('#about_sidebar_link').should('contain','About')
        cy.get('#reset_sidebar_link').should('contain','Reset App State')
        cy.get('#logout_sidebar_link').click()
        cy.url().should('contain','https://www.saucedemo.com/')
    });

    })