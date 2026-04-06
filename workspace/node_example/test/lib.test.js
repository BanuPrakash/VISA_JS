let {add, forEach, filter} = require('../src/lib');

// assemble
describe("testing lib module", () => {
    // test spec @Test
    it("testing add()", () => {
        let expected = 12;
        let res = add(8, 4);
        expect(res).toBe(expected);

    });

    it("testing forEach()", () => {
        let mockAction = jest.fn(); // mock function
        let data = [6,1,66,11,67,15, 24];
        forEach(data, mockAction);
        expect(mockAction).toHaveBeenCalledTimes(7);
        expect(mockAction).toHaveBeenNthCalledWith(1,6);
        expect(mockAction).toHaveBeenNthCalledWith(4,11);
    })

    it("testing filter()", () => {
         let data = [6,1,66,11,67,15, 24];
         let mockPredicate = jest.fn(x => x % 2 === 0);
         let result = filter(data, mockPredicate);
         expect(result).toEqual([6, 66, 24]);
    })
})