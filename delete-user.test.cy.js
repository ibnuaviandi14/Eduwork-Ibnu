describe("Delete data",() => {

    it("Successfully deteled user", () => {
        cy.request('DELETE','https:reqres.in/api/users/2').then((response) =>{
            expect(response.status).equal(204)
            expect(response.body).equal('')
        })
    });
})