const calculator = require('../../calculator');

describe('calculateMean', () => {
    /** */
     // Test case for calculating the mean of positive numbers.
     // /
    test('calculates the mean of positive numbers', () => {
        expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
    });

    /** */
     // Test case for calculating the mean of negative numbers.
     // /
    test('calculates the mean of negative numbers', () => {
        expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
    });

    /** */
     // Test case for calculating the mean of mixed positive and negative numbers.
     // /
    test('calculates the mean of mixed positive and negative numbers', () => {
        expect(calculator.calculateMean(-1, 0, 1, 2, -2)).toBeCloseTo(0, 5);
    });

    /** */
     // Test case for calculating the mean of a single number.
     // /
    test('calculates the mean of a single number', () => {
        expect(calculator.calculateMean(10)).toBe(10);
    });

    /** */
     // Test case for calculating the mean of zero.
     // /
    test('calculates the mean of zero', () => {
        expect(calculator.calculateMean(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when no numbers are provided.
     // /
    test('throws an error when no numbers are provided', () => {
        expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
    });

    /** */
     // Test case for throwing a TypeError when a non-number argument is provided.
     // /
    test('throws a TypeError when a non-number argument is provided', () => {
        expect(() => calculator.calculateMean(1, 2, 'a')).toThrow("All arguments must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when NaN argument is provided.
     // /
    test('throws a TypeError when NaN argument is provided', () => {
        expect(() => calculator.calculateMean(1, 2, NaN)).toThrow("All arguments must be numbers");
    });

    /** */
     // Test case for large numbers that might approach MAX_RESULT.
     // /
    test('calculates the mean with large numbers', () => {
        expect(calculator.calculateMean(500000, 600000, 700000)).toBeCloseTo(600000, 5);
    });
});
