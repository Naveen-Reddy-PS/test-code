const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case: calculateMean with valid positive numbers.
   // /
  test('calculateMean with valid positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
    expect(calculator.calculateMean(10, 20, 30)).toBe(20);
  });

  /** */
   // Test case: calculateMean with valid negative numbers.
   // /
  test('calculateMean with valid negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
    expect(calculator.calculateMean(-10, -20, -30)).toBe(-20);
  });

  /** */
   // Test case: calculateMean with mixed positive and negative numbers.
   // /
  test('calculateMean with mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
    expect(calculator.calculateMean(-10, 20, -30)).toBe(-6.666666666666667);
  });

  /** */
   // Test case: calculateMean with zero values.
   // /
  test('calculateMean with zero values', () => {
    expect(calculator.calculateMean(0, 0, 0, 0, 0)).toBe(0);
    expect(calculator.calculateMean(0, 10, 20, 30)).toBe(15);
  });

  /** */
   // Test case: calculateMean with a single number.
   // /
  test('calculateMean with a single number', () => {
    expect(calculator.calculateMean(5)).toBe(5);
    expect(calculator.calculateMean(-5)).toBe(-5);
  });

  /** */
   // Test case: calculateMean with no arguments, should throw an error.
   // /
  test('calculateMean with no arguments, should throw an error', () => {
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case: calculateMean with non-number arguments, should throw a TypeError.
   // /
  test('calculateMean with non-number arguments, should throw a TypeError', () => {
    expect(() => calculator.calculateMean(1, 'a', 3)).toThrow("All arguments must be numbers");
    expect(() => calculator.calculateMean(1, null, 3)).toThrow("All arguments must be numbers");
    expect(() => calculator.calculateMean(1, undefined, 3)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case: calculateMean with NaN arguments, should throw a TypeError.
   // /
  test('calculateMean with NaN arguments, should throw a TypeError', () => {
    expect(() => calculator.calculateMean(1, NaN, 3)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case: calculateMean with a result exceeding MAX_RESULT, should not throw error.
   // /
  test('calculateMean with a result exceeding MAX_RESULT, should not throw error', () => {
      const largeNumber = calculator.MAX_RESULT;
      const numbers = [largeNumber, largeNumber, largeNumber];
      const mean = calculator.calculateMean(...numbers);
      expect(mean).toBeCloseTo(largeNumber);
  });
});
