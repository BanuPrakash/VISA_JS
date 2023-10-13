describe("e2e delete a customer", () => {
    it("delete customer on button click", () => {
        cy.visit("http://localhost:3000");
        cy.get("button")
            .eq(3)
            .click()
            .get(".card").then(rows => {
                expect(rows.length).to.eq(5);
            })
    })
});