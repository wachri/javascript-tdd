describe("A suite is just a function", function() {

    it("and so is a spec", function() {
        expect(true).toBe(true);
    });

    it('should return the argument', function() {
        var testArg = 15;
        expect(window.myNamespace.test.myFunction(testArg)).toBe(testArg);
    });
});