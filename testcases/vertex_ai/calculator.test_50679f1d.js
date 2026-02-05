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
   // Test case to verify the function returns the correct mean for positive numbers.
   // /
  test('should return the correct mean for positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3)).toBe(2);
    expect(calculator.calculateMean(10, 20, 30, 40)).toBe(25);
  });

  /** */
   // Test case to verify the function returns the correct mean for negative numbers.
   // /
  test('should return the correct mean for negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3)).toBe(-2);
    expect(calculator.calculateMean(-10, -20, -30)).toBe(-20);
  });

  /** */
   // Test case to verify the function returns the correct mean for mixed positive and negative numbers.
   // /
  test('should return the correct mean for mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4)).toBe(0.5);
    expect(calculator.calculateMean(-5, 10, -15, 20)).toBe(2.5);
  });

  /** */
   // Test case to verify the function returns the correct mean for a single number.
   // /
  test('should return the correct mean for a single number', () => {
    expect(calculator.calculateMean(5)).toBe(5);
    expect(calculator.calculateMean(-10)).toBe(-10);
  });

  /** */
   // Test case to verify the function returns the correct mean when zero is included.
   // /
  test('should return the correct mean when zero is included', () => {
    expect(calculator.calculateMean(0, 5, 10)).toBe(5);
    expect(calculator.calculateMean(-5, 0, 5)).toBe(0);
  });

  /** */
   // Test case to verify the function returns the correct mean for large numbers.
   // /
  test('should return the correct mean for large numbers', () => {
    expect(calculator.calculateMean(100000, 200000, 300000)).toBe(200000);
  });

  /** */
   // Test case to verify the function returns the correct mean for decimal numbers.
   // /
  test('should return the correct mean for decimal numbers', () => {
    expect(calculator.calculateMean(1.5, 2.5, 3.5)).toBe(2.5);
  });
});
