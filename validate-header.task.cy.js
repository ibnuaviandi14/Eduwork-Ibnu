describe ('Validate API by Response Body',() => {

    it("Successfully Validate the response body", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body')
        .should('include',{
            "base_experience": 101,
            "id": 132,
        })
            })
})