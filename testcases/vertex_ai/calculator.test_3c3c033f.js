const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case to verify the mean of positive numbers.
   // /
  test('calculates the mean of positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
  });

  /** */
   // Test case to verify the mean of negative numbers.
   // /
  test('calculates the mean of negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
  });

  /** */
   // Test case to verify the mean of mixed positive and negative numbers.
   // /
  test('calculates the mean of mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 0, 1, 2)).toBeCloseTo(0.5);
  });

  /** */
   // Test case to verify the mean with a single number.
   // /
  test('calculates the mean with a single number', () => {
    expect(calculator.calculateMean(10)).toBe(10);
  });

  /** */
   // Test case to verify the mean with zero.
   // /
  test('calculates the mean with zero', () => {
    expect(calculator.calculateMean(0, 0, 0)).toBe(0);
  });

  /** */
   // Test case to verify the mean with floating-point numbers.
   // /
  test('calculates the mean with floating-point numbers', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBeCloseTo(2.5);
  });

  /** */
   // Test case to verify that an error is thrown when no numbers are provided.
   // /
  test('throws an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case to verify that an error is thrown when a non-number argument is provided.
   // /
  test('throws an error when a non-number argument is provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case to verify that an error is thrown when a NaN argument is provided.
   // /
  test('throws an error when a NaN argument is provided', () => {
    expect(() => calculator.calculateMean(1, NaN, 3)).toThrow("All arguments must be numbers");
  });
});
