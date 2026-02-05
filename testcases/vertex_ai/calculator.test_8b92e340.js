const calculator = require('../../calculator');

describe('addNumbers', () => {
  /** */
   // Test case to verify that addNumbers function correctly adds two positive numbers and adds 3.
   // /
  test('should add two positive numbers correctly and add 3', () => {
    expect(calculator.addNumbers(2, 3)).toBe(8);
  });

  /** */
   // Test case to verify that addNumbers function correctly adds two negative numbers and adds 3.
   // /
  test('should add two negative numbers correctly and add 3', () => {
    expect(calculator.addNumbers(-2, -3)).toBe(-2);
  });

  /** */
   // Test case to verify that addNumbers function correctly adds a positive and a negative number and adds 3.
   // /
  test('should add a positive and a negative number correctly and add 3', () => {
    expect(calculator.addNumbers(5, -2)).toBe(6);
  });

  /** */
   // Test case to verify that addNumbers function correctly adds zero to a number and adds 3.
   // /
  test('should add zero to a number correctly and add 3', () => {
    expect(calculator.addNumbers(0, 5)).toBe(8);
  });

  /** */
   // Test case to verify that addNumbers function correctly adds two zeros and adds 3.
   // /
  test('should add two zeros correctly and add 3', () => {
    expect(calculator.addNumbers(0, 0)).toBe(3);
  });

  /** */
   // Test case to verify that addNumbers function throws an error when the first argument is not a number.
   // /
  test('should throw an error when the first argument is not a number', () => {
    expect(() => calculator.addNumbers('a', 5)).toThrow(TypeError);
  });

  /** */
   // Test case to verify that addNumbers function throws an error when the second argument is not a number.
   // /
  test('should throw an error when the second argument is not a number', () => {
    expect(() => calculator.addNumbers(5, 'b')).toThrow(TypeError);
  });

  /** */
   // Test case to verify that addNumbers function throws an error when both arguments are not numbers.
   // /
  test('should throw an error when both arguments are not numbers', () => {
    expect(() => calculator.addNumbers('a', 'b')).toThrow(TypeError);
  });

  /** */
   // Test case to verify that addNumbers function throws an error when the first argument is NaN.
   // /
  test('should throw an error when the first argument is NaN', () => {
    expect(() => calculator.addNumbers(NaN, 5)).toThrow(TypeError);
  });

  /** */
   // Test case to verify that addNumbers function throws an error when the second argument is NaN.
   // /
  test('should throw an error when the second argument is NaN', () => {
    expect(() => calculator.addNumbers(5, NaN)).toThrow(TypeError);
  });

  /** */
   // Test case to verify that addNumbers function throws an error when both arguments are NaN.
   // /
  test('should throw an error when both arguments are NaN', () => {
    expect(() => calculator.addNumbers(NaN, NaN)).toThrow(TypeError);
  });
});
