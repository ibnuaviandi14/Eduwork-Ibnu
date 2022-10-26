describe('Login Session with API',() =>{
it("Successfully login by appending username & password", () => {
    Cypress.Cookies.preserveOnce('my_custom_session_id'),
    cy.loginViaAPI('Basic YWRtaW46YWRtaW4=')

})
})