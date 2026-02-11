const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case to verify that calculateMean throws an error when no numbers are provided.
   // /
  test('should throw an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrowError("At least one number must be provided");
  });

  /** */
   // Test case to verify that calculateMean throws a TypeError when non-number arguments are provided.
   // /
  test('should throw a TypeError when non-number arguments are provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrowError("All arguments must be numbers");
    expect(() => calculator.calculateMean(1, null, 3)).toThrowError("All arguments must be numbers");
    expect(() => calculator.calculateMean(1, undefined, 3)).toThrowError("All arguments must be numbers");
  });

  /** */
   // Test case to verify that calculateMean correctly calculates the mean of positive numbers.
   // /
  test('should correctly calculate the mean of positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
  });

  /** */
   // Test case to verify that calculateMean correctly calculates the mean of negative numbers.
   // /
  test('should correctly calculate the mean of negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
  });

  /** */
   // Test case to verify that calculateMean correctly calculates the mean of mixed positive and negative numbers.
   // /
  test('should correctly calculate the mean of mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
  });

  /** */
   // Test case to verify that calculateMean correctly calculates the mean of a single number.
   // /
  test('should correctly calculate the mean of a single number', () => {
    expect(calculator.calculateMean(5)).toBe(5);
  });

  /** */
   // Test case to verify that calculateMean correctly calculates the mean of zero.
   // /
  test('should correctly calculate the mean of zero', () => {
    expect(calculator.calculateMean(0, 0, 0)).toBe(0);
  });

  /** */
   // Test case to verify that calculateMean correctly calculates the mean of large numbers.
   // /
  test('should correctly calculate the mean of large numbers', () => {
    expect(calculator.calculateMean(1000000, 1000000, 1000000)).toBe(1000000);
  });

  /** */
   // Test case to verify that calculateMean handles floating point numbers correctly.
   // /
  test('should handle floating point numbers correctly', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });
});
