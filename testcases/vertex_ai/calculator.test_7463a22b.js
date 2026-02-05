const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case to verify the function throws an error when no numbers are provided.
   // /
  test('should throw an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case to verify the function throws a TypeError when a non-number argument is provided.
   // /
  test('should throw a TypeError when a non-number argument is provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case to verify the function calculates the mean of positive numbers correctly.
   // /
  test('should calculate the mean of positive numbers correctly', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
  });

  /** */
   // Test case to verify the function calculates the mean of negative numbers correctly.
   // /
  test('should calculate the mean of negative numbers correctly', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
  });

  /** */
   // Test case to verify the function calculates the mean of mixed positive and negative numbers correctly.
   // /
  test('should calculate the mean of mixed positive and negative numbers correctly', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
  });

  /** */
   // Test case to verify the function calculates the mean of a single number correctly.
   // /
  test('should calculate the mean of a single number correctly', () => {
    expect(calculator.calculateMean(10)).toBe(10);
  });

  /** */
   // Test case to verify the function calculates the mean of zero correctly.
   // /
  test('should calculate the mean of zero correctly', () => {
    expect(calculator.calculateMean(0)).toBe(0);
  });

  /** */
   // Test case to verify the function calculates the mean of large numbers correctly.
   // /
  test('should calculate the mean of large numbers correctly', () => {
    expect(calculator.calculateMean(1000000, 1000001)).toBe(1000000.5);
  });

    /** */
   // Test case to verify the function calculates the mean of decimal numbers correctly.
   // /
  test('should calculate the mean of decimal numbers correctly', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });

    /** */
   // Test case to verify the function calculates the mean when one of the numbers is zero.
   // /
  test('should calculate the mean when one of the numbers is zero', () => {
    expect(calculator.calculateMean(0, 5, 10)).toBe(5);
  });
});
