const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case to verify the correct calculation of the mean with positive numbers.
   // /
  test('should calculate the mean of positive numbers correctly', () => {
    expect(calculator.calculateMean(2, 4, 6, 8)).toBe(5);
  });

  /** */
   // Test case to verify the correct calculation of the mean with negative numbers.
   // /
  test('should calculate the mean of negative numbers correctly', () => {
    expect(calculator.calculateMean(-2, -4, -6, -8)).toBe(-5);
  });

  /** */
   // Test case to verify the correct calculation of the mean with mixed positive and negative numbers.
   // /
  test('should calculate the mean of mixed positive and negative numbers correctly', () => {
    expect(calculator.calculateMean(-2, 4, -6, 8)).toBe(1);
  });

  /** */
   // Test case to verify the correct calculation of the mean with a single number.
   // /
  test('should calculate the mean of a single number correctly', () => {
    expect(calculator.calculateMean(10)).toBe(10);
  });

  /** */
   // Test case to verify that an error is thrown when no numbers are provided.
   // /
  test('should throw an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrow(Error);
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case to verify that an error is thrown when non-number arguments are provided.
   // /
  test('should throw a TypeError when non-number arguments are provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow(TypeError);
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case to verify the correct calculation of the mean with zero values.
   // /
  test('should calculate the mean with zero values correctly', () => {
    expect(calculator.calculateMean(0, 0, 0, 0)).toBe(0);
  });

  /** */
   // Test case to verify the correct calculation of the mean with decimal numbers.
   // /
  test('should calculate the mean with decimal numbers correctly', () => {
    expect(calculator.calculateMean(2.5, 3.5, 4.5)).toBe(3.5);
  });

  /** */
   // Test case to verify the correct calculation of the mean with large numbers.
   // /
  test('should calculate the mean with large numbers correctly', () => {
    expect(calculator.calculateMean(100000, 200000, 300000)).toBe(200000);
  });
});
