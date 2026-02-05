const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case: Calculates the mean of positive numbers
   // /
  test('calculates the mean of positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
  });

  /** */
   // Test case: Calculates the mean of negative numbers
   // /
  test('calculates the mean of negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
  });

  /** */
   // Test case: Calculates the mean of mixed positive and negative numbers
   // /
  test('calculates the mean of mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 0, 1, 2, 3)).toBe(1);
  });

  /** */
   // Test case: Calculates the mean with a single number
   // /
  test('calculates the mean with a single number', () => {
    expect(calculator.calculateMean(5)).toBe(5);
  });

  /** */
   // Test case: Calculates the mean with zero
   // /
  test('calculates the mean with zero', () => {
    expect(calculator.calculateMean(0, 0, 0, 0, 0)).toBe(0);
  });

  /** */
   // Test case: Throws an error when no numbers are provided
   // /
  test('throws an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case: Throws a TypeError when a non-number argument is provided
   // /
  test('throws a TypeError when a non-number argument is provided', () => {
    expect(() => calculator.calculateMean(1, 2, 'a', 4, 5)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case: Throws a TypeError when NaN argument is provided
   // /
  test('throws a TypeError when NaN argument is provided', () => {
    expect(() => calculator.calculateMean(1, 2, NaN, 4, 5)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case: Calculates the mean with floating point numbers
   // /
  test('calculates the mean with floating point numbers', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });
});
