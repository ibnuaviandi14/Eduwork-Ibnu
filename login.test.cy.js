///<reference types = "cypress"/>

describe('login/logout test',() =>{
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html') 
        cy.get('#signin_button').click()   
        
    });
it("Should try to login with invalid data", () => {
    cy.get('#user_login').should('be.visible')
    cy.get('#user_login').type('invalid username')
    cy.get('#user_password').should('be.visible')
    cy.get('#user_password').type('invalid password')
    cy.get('.btn-primary').click()

});
it("Should display error massage", () => {
    cy.get('.alert-error').should('be.visible').and ('contain','Login and/or password are wrong.')
});
it("Should login to application with valid data", () => {
    cy.fixture('login').then(login => {
        const nama = login.username
        const pass = login.password

        cy.login(nama,pass)
        cy.get('h2').should('be.visible').and('contain.text','Cash Accounts')
    })
});
it("Should logout from the application", () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain','Home')
        cy.url().should('contain','/index.html')
        cy.get('.brand').should('contain','Zero Bank')


});
})