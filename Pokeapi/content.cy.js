///<reference types= "cypress"/>

describe('Automation API with Pokeapi',()=>{

    it.only("Successfully Validate content Limber via method GET", () => {
        var info = {
                "ability" : {
                    'name': "limber",
                    'url': "https://pokeapi.co/api/v2/ability/7/"}
                }
            cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability).to.deep.eq(info.ability)
            })
        })
    })