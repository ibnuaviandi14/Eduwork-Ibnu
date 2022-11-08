///<reference types= "cypress"/>

describe('Automation API with Pokeapi',()=>{

it('Successfully Validate Content-Type',() =>{
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
    .should('include','application/json; charset=utf-8')
});

it('Successfully Validate status',() =>{
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
    cy.get('@ditto').its('status').should('equal',200)
});

it('Successfully Validate status via method GET',() =>{
    cy.request({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto'
    }).as('users')
    cy.get('@users').its('status').should('equal',200)
});

it('Successfully Validate content',() =>{
    cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
    cy.get('@bulbasaur').its('body').should('include',{name:"bulbasaur"})
});

it.only("Successfully Validate content Limber via method GET", () => {
    var info ={ 
            "ability" :{
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"}
            }

        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        expect(response.status).equal(200)
        expect(response.body.abilities).include(info)
});

it("Successfully Validate content bulbasaur via method GET", () => {
    var detail ={
        "name": "bulbasaur",
        "order": 1,
    }
        cy.request('GET','https://pokeapi.co/api/v2/pokemon/bulbasaur').then((response) => {
        expect(response.status).equal(200)
        expect(response.body).include(detail)
});



})
})
})