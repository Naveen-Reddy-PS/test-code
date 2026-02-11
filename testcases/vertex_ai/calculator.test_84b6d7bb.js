const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case to verify the function throws an error when no numbers are provided.
   // /
  test('should throw an error when no numbers are provided', () => {
    expect(() => calculator.calculateMean()).toThrowError("At least one number must be provided");
  });

  /** */
   // Test case to verify the function throws a TypeError when a non-number argument is provided.
   // /
  test('should throw a TypeError when a non-number argument is provided', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrowError("All arguments must be numbers");
    expect(() => calculator.calculateMean(1, null, 3)).toThrowError("All arguments must be numbers");
    expect(() => calculator.calculateMean(1, undefined, 3)).toThrowError("All arguments must be numbers");
  });

  /** */
   // Test case to verify the function returns the correct mean of positive numbers.
   // /
  test('should return the correct mean of positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
    expect(calculator.calculateMean(10, 20, 30)).toBe(20);
  });

  /** */
   // Test case to verify the function returns the correct mean of negative numbers.
   // /
  test('should return the correct mean of negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
    expect(calculator.calculateMean(-10, -20, -30)).toBe(-20);
  });

  /** */
   // Test case to verify the function returns the correct mean of mixed positive and negative numbers.
   // /
  test('should return the correct mean of mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
    expect(calculator.calculateMean(-10, 20, -30)).toBe(-6.666666666666667);
  });

  /** */
   // Test case to verify the function returns the correct mean of a single number.
   // /
  test('should return the correct mean of a single number', () => {
    expect(calculator.calculateMean(5)).toBe(5);
    expect(calculator.calculateMean(-10)).toBe(-10);
  });

  /** */
   // Test case to verify the function returns the correct mean of numbers including zero.
   // /
  test('should return the correct mean of numbers including zero', () => {
    expect(calculator.calculateMean(0, 1, 2, 3, 4)).toBe(2);
    expect(calculator.calculateMean(0, -1, -2, -3, -4)).toBe(-2);
  });

  /** */
   // Test case to verify the function returns the correct mean of large numbers.
   // /
  test('should return the correct mean of large numbers', () => {
    expect(calculator.calculateMean(100000, 200000, 300000)).toBe(200000);
  });
  
  /** */
   // Test case to verify the function handles floating point numbers correctly.
   // /
  test('should handle floating point numbers correctly', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });
});
