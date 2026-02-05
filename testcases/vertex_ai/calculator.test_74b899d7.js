const calculator = require('../../calculator');

describe('addNumbers', () => {
    /** */
     // Test case: Adds two positive numbers correctly.
     // /
    test('adds two positive numbers', () => {
        expect(calculator.addNumbers(2, 3)).toBe(7);
    });

    /** */
     // Test case: Adds two negative numbers correctly.
     // /
    test('adds two negative numbers', () => {
        expect(calculator.addNumbers(-2, -3)).toBe(-3);
    });

    /** */
     // Test case: Adds a positive and a negative number.
     // /
    test('adds a positive and a negative number', () => {
        expect(calculator.addNumbers(5, -2)).toBe(5);
    });

    /** */
     // Test case: Adds zero to a positive number.
     // /
    test('adds zero to a positive number', () => {
        expect(calculator.addNumbers(0, 5)).toBe(7);
    });

    /** */
     // Test case: Adds zero to a negative number.
     // /
    test('adds zero to a negative number', () => {
        expect(calculator.addNumbers(0, -5)).toBe(-3);
    });

    /** */
     // Test case: Adds two zeros together.
     // /
    test('adds two zeros together', () => {
        expect(calculator.addNumbers(0, 0)).toBe(2);
    });

    /** */
     * Test case: Throws TypeError if either argument is not a number.
     // /
    test('throws TypeError if either argument is not a number', () => {
        expect(() => calculator.addNumbers('2', 3)).toThrow(TypeError);
        expect(() => calculator.addNumbers(2, '3')).toThrow(TypeError);
        expect(() => calculator.addNumbers('2', '3')).toThrow(TypeError);
    });

    /** */
     * Test case: Throws TypeError if either argument is NaN.
     // /
    test('throws TypeError if either argument is NaN', () => {
        expect(() => calculator.addNumbers(NaN, 3)).toThrow(TypeError);
        expect(() => calculator.addNumbers(2, NaN)).toThrow(TypeError);
        expect(() => calculator.addNumbers(NaN, NaN)).toThrow(TypeError);
    });

    /** */
     * Test case: Adds large positive numbers.
     // /
    test('adds large positive numbers', () => {
        expect(calculator.addNumbers(100000, 900000)).toBe(1000002);
    });
});
