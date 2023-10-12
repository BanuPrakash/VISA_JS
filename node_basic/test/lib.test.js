const { add, forEach, filter } = require("../src/lib");

// Assemble, Test Suite
describe("Unit testing lib.js module", () => {
    // test spec / test case
    it("testing add", () => {
        let result = add(4,5); //Action
        expect(result).toBe(9); // Assertion
    });

    it("testing forEach", () => {
        let callback = jest.fn(); //Mock Functions
        var data = [52,6,1,3,9,44];
        forEach(data, callback);
        //[ [ 52 ], [ 6 ], [ 1 ], [ 3 ], [ 9 ], [ 44 ] ]
        expect(callback.mock.calls[0][0]).toBe(52);
      // The first argument of the second call to the function was 1
        expect(callback.mock.calls[1][0]).toBe(6);
        expect(callback.mock.calls).toHaveLength(6);
    })

    it("testing filter", () => {
        const callback = jest.fn(x => x % 2 === 0); // mock fn
        var data = [52,6,1,3,9,44];
        var result = filter(data, callback);
        expect(result.length).toBe(3);
        expect(result[2]).toBe(44);
    })

});