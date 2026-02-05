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
   // Test case to verify the function throws a TypeError when non-number arguments are provided.
   // /
  test('should throw a TypeError when non-number arguments are provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow(TypeError);
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case to verify the function calculates the mean of positive numbers correctly.
   // /
  test('should calculate the mean of positive numbers correctly', () => {
    expect(calculator.calculateMean(1, 2, 3)).toBe(2);
    expect(calculator.calculateMean(10, 20, 30, 40)).toBe(25);
  });

  /** */
   // Test case to verify the function calculates the mean of negative numbers correctly.
   // /
  test('should calculate the mean of negative numbers correctly', () => {
    expect(calculator.calculateMean(-1, -2, -3)).toBe(-2);
    expect(calculator.calculateMean(-10, -20, -30)).toBe(-20);
  });

  /** */
   // Test case to verify the function calculates the mean of mixed positive and negative numbers correctly.
   // /
  test('should calculate the mean of mixed positive and negative numbers correctly', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4)).toBe(0.5);
    expect(calculator.calculateMean(-10, 20, -30, 40)).toBe(5);
  });

  /** */
   // Test case to verify the function calculates the mean of zero and other numbers correctly.
   // /
  test('should calculate the mean of zero and other numbers correctly', () => {
    expect(calculator.calculateMean(0, 1, 2, 3)).toBe(1.5);
    expect(calculator.calculateMean(0, -1, -2, -3)).toBe(-1.5);
  });

  /** */
   // Test case to verify the function calculates the mean of a single number correctly.
   // /
  test('should calculate the mean of a single number correctly', () => {
    expect(calculator.calculateMean(5)).toBe(5);
    expect(calculator.calculateMean(-5)).toBe(-5);
  });

  /** */
   // Test case to verify the function calculates the mean of large numbers correctly.
   // /
  test('should calculate the mean of large numbers correctly', () => {
    expect(calculator.calculateMean(100000, 200000, 300000)).toBe(200000);
  });

  /** */
   // Test case to verify the function calculates the mean of decimal numbers correctly.
   // /
  test('should calculate the mean of decimal numbers correctly', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });

  /** */
   // Test case to verify that the function handles NaN values correctly.
   // /
  test('should throw a TypeError when NaN values are provided', () => {
      expect(() => calculator.calculateMean(1, NaN, 3)).toThrow(TypeError);
      expect(() => calculator.calculateMean(1, NaN, 3)).toThrow("All arguments must be numbers");
  });
});
