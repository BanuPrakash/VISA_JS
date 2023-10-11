const { add } = require("../src/lib");

// Assemble, Test Suite
describe("Unit testing lib.js module", () => {
    // test spec / test case
    it("testing add", () => {
        let result = add(4,5); //Action
        expect(result).toBe(9); // Assertion
    });

    it("testing forEach", () => {

    })

    it("testing filter", () => {

    })

});