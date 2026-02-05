const calculator = require('../../calculator');

describe('addNumbers', () => {
    /** */
     // Test case to verify the addition of two positive numbers.
     // /
    test('should add two positive numbers correctly', () => {
        expect(calculator.addNumbers(2, 3)).toBe(6);
    });

    /** */
     // Test case to verify the addition of a positive and a negative number.
     // /
    test('should add a positive and a negative number correctly', () => {
        expect(calculator.addNumbers(5, -2)).toBe(4);
    });

    /** */
     // Test case to verify the addition of two negative numbers.
     // /
    test('should add two negative numbers correctly', () => {
        expect(calculator.addNumbers(-1, -4)).toBe(-4);
    });

    /** */
     // Test case to verify the addition of a number and zero.
     // /
    test('should add a number and zero correctly', () => {
        expect(calculator.addNumbers(7, 0)).toBe(8);
    });

    /** */
     // Test case to verify the addition of zero and a number.
     // /
    test('should add zero and a number correctly', () => {
        expect(calculator.addNumbers(0, 5)).toBe(6);
    });

    /** */
     // Test case to verify the addition of two large numbers.
     // /
    test('should add two large numbers correctly', () => {
        expect(calculator.addNumbers(100000, 50000)).toBe(150001);
    });

    /** */
     // Test case to verify the error when arguments are not numbers.
     // /
    test('should throw an error when arguments are not numbers', () => {
        expect(() => calculator.addNumbers("a", 2)).toThrow(TypeError);
    });

    /** */
     // Test case to verify the error when one argument is not a number.
     // /
    test('should throw an error when one argument is not a number', () => {
        expect(() => calculator.addNumbers(5, "b")).toThrow(TypeError);
    });

    /** */
     // Test case to verify the error when both arguments are not numbers.
     // /
    test('should throw an error when both arguments are not numbers', () => {
        expect(() => calculator.addNumbers("a", "b")).toThrow(TypeError);
    });

    /** */
     // Test case to verify the addition with NaN values.
     // /
    test('should throw an error when either argument is NaN', () => {
        expect(() => calculator.addNumbers(NaN, 5)).toThrow(TypeError);
        expect(() => calculator.addNumbers(5, NaN)).toThrow(TypeError);
        expect(() => calculator.addNumbers(NaN, NaN)).toThrow(TypeError);
    });
});
