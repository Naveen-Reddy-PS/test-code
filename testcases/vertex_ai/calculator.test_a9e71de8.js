const calculator = require('../../calculator');

describe('addNumbers', () => {
  /** */
   // Test case to check if addNumbers function adds two positive numbers correctly.
   // /
  test('should add two positive numbers correctly', () => {
    expect(calculator.addNumbers(2, 3)).toBe(7);
  });

  /** */
   // Test case to check if addNumbers function adds two negative numbers correctly.
   // /
  test('should add two negative numbers correctly', () => {
    expect(calculator.addNumbers(-2, -3)).toBe(-3);
  });

  /** */
   // Test case to check if addNumbers function adds a positive and a negative number correctly.
   // /
  test('should add a positive and a negative number correctly', () => {
    expect(calculator.addNumbers(5, -2)).toBe(5);
  });

  /** */
   // Test case to check if addNumbers function adds zero to a number correctly.
   // /
  test('should add zero to a number correctly', () => {
    expect(calculator.addNumbers(0, 5)).toBe(7);
  });

  /** */
   // Test case to check if addNumbers function adds two zeros correctly.
   // /
  test('should add two zeros correctly', () => {
    expect(calculator.addNumbers(0, 0)).toBe(2);
  });

  /** */
   // Test case to check if addNumbers function throws an error when adding non-numbers.
   // /
  test('should throw an error if either argument is not a number', () => {
    expect(() => calculator.addNumbers("a", 2)).toThrow(TypeError);
    expect(() => calculator.addNumbers(2, "b")).toThrow(TypeError);
    expect(() => calculator.addNumbers("a", "b")).toThrow(TypeError);
  });

    /** */
   // Test case to check if addNumbers function throws an error when adding null.
   // /
  test('should throw an error if either argument is null', () => {
    expect(() => calculator.addNumbers(null, 2)).toThrow(TypeError);
    expect(() => calculator.addNumbers(2, null)).toThrow(TypeError);
  });

  /** */
   // Test case to check if addNumbers function throws an error when adding undefined.
   // /
  test('should throw an error if either argument is undefined', () => {
    expect(() => calculator.addNumbers(undefined, 2)).toThrow(TypeError);
    expect(() => calculator.addNumbers(2, undefined)).toThrow(TypeError);
  });

  /** */
   // Test case to check if addNumbers function throws an error when adding NaN.
   // /
  test('should throw an error if either argument is NaN', () => {
    expect(() => calculator.addNumbers(NaN, 2)).toThrow(TypeError);
    expect(() => calculator.addNumbers(2, NaN)).toThrow(TypeError);
  });

  /** */
   // Test case to check if addNumbers function adds large numbers correctly.
   // /
  test('should add large numbers correctly', () => {
    expect(calculator.addNumbers(1000000, 1)).toBe(1000003);
  });
});
