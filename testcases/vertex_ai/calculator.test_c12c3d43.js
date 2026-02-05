const calculator = require('../../calculator');

describe('addNumbers', () => {
  /** */
   * Test case for adding two positive numbers.
   */
  test('should add two positive numbers correctly', () => {
    expect(calculator.addNumbers(2, 3)).toBe(8);
  });

  /** */
   * Test case for adding a positive and a negative number.
   */
  test('should add a positive and a negative number correctly', () => {
    expect(calculator.addNumbers(5, -2)).toBe(6);
  });

  /** */
   * Test case for adding two negative numbers.
   */
  test('should add two negative numbers correctly', () => {
    expect(calculator.addNumbers(-1, -4)).toBe(-2);
  });

  /** */
   * Test case for adding zero to a number.
   */
  test('should add zero correctly', () => {
    expect(calculator.addNumbers(7, 0)).toBe(10);
  });

  /** */
   * Test case for adding two floating-point numbers.
   */
  test('should add two floating-point numbers correctly', () => {
    expect(calculator.addNumbers(2.5, 3.5)).toBe(9);
  });

  /** */
   * Test case for handling large numbers.
   */
  test('should handle large numbers correctly', () => {
    expect(calculator.addNumbers(100000, 200000)).toBe(300003);
  });

  /** */
   * Test case for throwing an error when arguments are not numbers.
   */
  test('should throw an error when arguments are not numbers', () => {
    expect(() => calculator.addNumbers('a', 5)).toThrow(TypeError);
    expect(() => calculator.addNumbers(5, 'b')).toThrow(TypeError);
    expect(() => calculator.addNumbers('a', 'b')).toThrow(TypeError);
  });

  /** */
   * Test case for throwing an error when one argument is NaN.
   */
  test('should throw an error when one argument is NaN', () => {
    expect(() => calculator.addNumbers(NaN, 5)).toThrow(TypeError);
  });

  /** */
   * Test case for throwing an error when both arguments are NaN.
   */
  test('should throw an error when both arguments are NaN', () => {
    expect(() => calculator.addNumbers(NaN, NaN)).toThrow(TypeError);
  });

  /** */
   * Test case for adding negative zero to a number.
   */
  test('should add negative zero correctly', () => {
    expect(calculator.addNumbers(7, -0)).toBe(10);
  });
});
