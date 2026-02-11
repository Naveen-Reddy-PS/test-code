const calculator = require('../../calculator');

describe('calculateMean', () => {
    /** */
     // Test case to check if the function throws an error when no numbers are provided.
     // /
    test('should throw an error when no numbers are provided', () => {
        expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
    });

    /** */
     // Test case to check if the function throws a TypeError when a non-number argument is provided.
     // /
    test('should throw a TypeError when a non-number argument is provided', () => {
        expect(() => calculator.calculateMean(1, 'a', 3)).toThrow("All arguments must be numbers");
        expect(() => calculator.calculateMean(1, null, 3)).toThrow("All arguments must be numbers");
        expect(() => calculator.calculateMean(1, undefined, 3)).toThrow("All arguments must be numbers");
    });

    /** */
     // Test case to check if the function calculates the mean correctly with positive numbers.
     // /
    test('should calculate the mean correctly with positive numbers', () => {
        expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
    });

    /** */
     // Test case to check if the function calculates the mean correctly with negative numbers.
     // /
    test('should calculate the mean correctly with negative numbers', () => {
        expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
    });

    /** */
     // Test case to check if the function calculates the mean correctly with mixed positive and negative numbers.
     // /
    test('should calculate the mean correctly with mixed positive and negative numbers', () => {
        expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
    });

    /** */
     // Test case to check if the function calculates the mean correctly with zero.
     // /
    test('should calculate the mean correctly with zero', () => {
        expect(calculator.calculateMean(0, 1, 2, 3, 4)).toBe(2);
    });

    /** */
     // Test case to check if the function calculates the mean correctly with a single number.
     // /
    test('should calculate the mean correctly with a single number', () => {
        expect(calculator.calculateMean(5)).toBe(5);
    });

    /** */
     // Test case to check if the function calculates the mean correctly with large numbers.
     // /
    test('should calculate the mean correctly with large numbers', () => {
        expect(calculator.calculateMean(1000000, 1000001)).toBe(1000000.5);
    });

    /** */
     // Test case to check if the function handles floating-point numbers correctly.
     // /
    test('should handle floating-point numbers correctly', () => {
        expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
    });

     /** */
     // Test case to check if the function throws an error when the result exceeds MAX_RESULT.
     // /
    test('should not throw an error when the result exceeds MAX_RESULT', () => {
        expect(calculator.calculateMean(500000, 500001, 1000000)).toBe(666667);
    });
});
