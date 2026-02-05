const { addNumbers } = require('../../calculator');

describe('addNumbers', () => {
  /** */
   // Test case: Adds two positive numbers correctly.
   // /
  test('adds two positive numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(6);
  });

  /** */
   // Test case: Adds two negative numbers correctly.
   // /
  test('adds two negative numbers correctly', () => {
    expect(addNumbers(-2, -3)).toBe(-4);
  });

  /** */
   // Test case: Adds a positive and a negative number correctly.
   // /
  test('adds a positive and a negative number correctly', () => {
    expect(addNumbers(5, -2)).toBe(4);
  });

  /** */
   // Test case: Adds zero to a positive number correctly.
   // /
  test('adds zero to a positive number correctly', () => {
    expect(addNumbers(0, 5)).toBe(6);
  });

  /** */
   // Test case: Adds zero to a negative number correctly.
   // /
  test('adds zero to a negative number correctly', () => {
    expect(addNumbers(0, -5)).toBe(-4);
  });

  /** */
   // Test case: Adds two zeros correctly.
   // /
  test('adds two zeros correctly', () => {
    expect(addNumbers(0, 0)).toBe(1);
  });

  /** */
   // Test case: Throws an error if the first argument is not a number.
   // /
  test('throws an error if the first argument is not a number', () => {
    expect(() => addNumbers('a', 5)).toThrow(TypeError);
  });

  /** */
   // Test case: Throws an error if the second argument is not a number.
   // /
  test('throws an error if the second argument is not a number', () => {
    expect(() => addNumbers(5, 'a')).toThrow(TypeError);
  });

  /** */
   // Test case: Throws an error if both arguments are not numbers.
   // /
  test('throws an error if both arguments are not numbers', () => {
    expect(() => addNumbers('a', 'b')).toThrow(TypeError);
  });

  /** */
   // Test case: Throws an error if the first argument is NaN.
   // /
  test('throws an error if the first argument is NaN', () => {
    expect(() => addNumbers(NaN, 5)).toThrow(TypeError);
  });

   /** */
   // Test case: Throws an error if the second argument is NaN.
   // /
  test('throws an error if the second argument is NaN', () => {
    expect(() => addNumbers(5, NaN)).toThrow(TypeError);
  });
});
