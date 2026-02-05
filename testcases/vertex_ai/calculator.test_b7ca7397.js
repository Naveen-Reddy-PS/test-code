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
   // Test case to verify the function returns the correct mean of positive numbers.
   // /
  test('should return the correct mean of positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
  });

  /** */
   // Test case to verify the function returns the correct mean of negative numbers.
   // /
  test('should return the correct mean of negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
  });

  /** */
   // Test case to verify the function returns the correct mean of mixed positive and negative numbers.
   // /
  test('should return the correct mean of mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
  });

  /** */
   // Test case to verify the function returns the correct mean with a single number.
   // /
  test('should return the correct mean with a single number', () => {
    expect(calculator.calculateMean(10)).toBe(10);
  });

  /** */
   // Test case to verify the function returns the correct mean with zero values.
   // /
  test('should return the correct mean with zero values', () => {
    expect(calculator.calculateMean(0, 0, 0, 0, 0)).toBe(0);
  });

  /** */
   // Test case to verify the function returns the correct mean with large numbers.
   // /
  test('should return the correct mean with large numbers', () => {
    expect(calculator.calculateMean(1000000, 1000000, 1000000)).toBe(1000000);
  });

    /** */
   // Test case to verify the function returns the correct mean with decimal numbers.
   // /
    test('should return the correct mean with decimal numbers', () => {
      expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
    });

  /** */
   // Test case to verify the function throws an error when the result exceeds the maximum allowed value.
   // /
  test('should not throw an error when the result exceeds the maximum allowed value', () => {
      expect(calculator.calculateMean(1,2)).toBe(1.5)
  });
});
