describe("e2e filter customers", () => {
    it("filter customer using textbox", () => {
        cy.visit("http://localhost:3000");
        cy.get("input[placeholder='search by name']")
            .type("Geller")
            .get(".card").then(rows => {
                expect(rows.length).to.eq(2);
            })
    })
});