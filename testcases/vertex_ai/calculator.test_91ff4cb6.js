const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case to verify the function throws an error when no numbers are provided.
   // /
  test('should throw an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrow(Error);
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case to verify the function throws a TypeError when a non-number argument is provided.
   // /
  test('should throw a TypeError when a non-number argument is provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow(TypeError);
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
    expect(calculator.calculateMean(0, 0, 0, 0)).toBe(0);
  });

  /** */
   // Test case to verify the function calculates the mean of large numbers correctly within MAX_RESULT.
   // /
  test('should calculate the mean of large numbers correctly within MAX_RESULT', () => {
    expect(calculator.calculateMean(500000, 600000, 700000)).toBe(600000);
  });

  /** */
   // Test case to verify the function works with floating-point numbers.
   // /
  test('should calculate the mean of floating-point numbers correctly', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });

  /** */
   // Test case to verify the function throws an error if the result exceeds MAX_RESULT.
   // /
  test('should not throw an error when result is within MAX_RESULT', () => {
    expect(() => calculator.calculateMean(1, 2)).not.toThrowError();
  });
});
