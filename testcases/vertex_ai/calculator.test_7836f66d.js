const calculator = require('../../calculator');

describe('calculateMean', () => {
  /** */
   // Test case: calculateMean with valid positive numbers
   // /
  test('calculateMean with valid positive numbers', () => {
    expect(calculator.calculateMean(1, 2, 3, 4, 5)).toBe(3);
  });

  /** */
   // Test case: calculateMean with valid negative numbers
   // /
  test('calculateMean with valid negative numbers', () => {
    expect(calculator.calculateMean(-1, -2, -3, -4, -5)).toBe(-3);
  });

  /** */
   // Test case: calculateMean with mixed positive and negative numbers
   // /
  test('calculateMean with mixed positive and negative numbers', () => {
    expect(calculator.calculateMean(-1, 2, -3, 4, -5)).toBe(-0.6);
  });

  /** */
   // Test case: calculateMean with zero
   // /
  test('calculateMean with zero', () => {
    expect(calculator.calculateMean(0, 0, 0, 0, 0)).toBe(0);
  });

  /** */
   // Test case: calculateMean with a single number
   // /
  test('calculateMean with a single number', () => {
    expect(calculator.calculateMean(10)).toBe(10);
  });

  /** */
   // Test case: calculateMean with no arguments should throw an error
   // /
  test('calculateMean with no arguments should throw an error', () => {
    expect(() => calculator.calculateMean()).toThrow(Error);
    expect(() => calculator.calculateMean()).toThrow("At least one number must be provided");
  });

  /** */
   // Test case: calculateMean with non-number arguments should throw a TypeError
   // /
  test('calculateMean with non-number arguments should throw a TypeError', () => {
    expect(() => calculator.calculateMean(1, 2, 'a', 4, 5)).toThrow(TypeError);
    expect(() => calculator.calculateMean(1, 2, 'a', 4, 5)).toThrow("All arguments must be numbers");
  });

  /** */
   // Test case: calculateMean with NaN arguments should throw a TypeError
   // /
  test('calculateMean with NaN arguments should throw a TypeError', () => {
    expect(() => calculator.calculateMean(1, 2, NaN, 4, 5)).toThrow(TypeError);
    expect(() => calculator.calculateMean(1, 2, NaN, 4, 5)).toThrow("All arguments must be numbers");
  });

    /** */
     // Test case: calculateMean with Infinity arguments should not throw an error
     // /
    test('calculateMean with Infinity arguments should not throw an error', () => {
      expect(calculator.calculateMean(1, Infinity, 1)).toBe(Infinity);
    });
});
