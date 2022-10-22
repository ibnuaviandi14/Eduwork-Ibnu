describe('Create New User',() =>{

it("Add a new user", () => {
    var user = {
        "name" : "Ibnu Aviandi",
        "job" : "QA Engineer"
    }
    cy.request('POST','https:reqres.in/api/users',user).then((response) => {
        expect(response.body).contain(user)
    })
})
})