const calculator = require('../../calculator');

describe('Calculator Tests', () => {

  describe('addNumbers', () => {
    test('adds two positive numbers', () => {
      expect(calculator.addNumbers(1, 2)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.addNumbers(5, -3)).toBe(4);
    });

    test('adds two negative numbers', () => {
      expect(calculator.addNumbers(-1, -2)).toBe(-1);
    });

    test('adds zero to a number', () => {
      expect(calculator.addNumbers(5, 0)).toBe(7);
    });

    test('adds two zeros', () => {
      expect(calculator.addNumbers(0, 0)).toBe(2);
    });

    test('throws TypeError if first argument is not a number', () => {
      expect(() => calculator.addNumbers('a', 2)).toThrow(TypeError);
    });

    test('throws TypeError if second argument is not a number', () => {
      expect(() => calculator.addNumbers(1, 'b')).toThrow(TypeError);
    });

    test('throws TypeError if both arguments are not numbers', () => {
      expect(() => calculator.addNumbers('a', 'b')).toThrow(TypeError);
    });

    test('throws TypeError if first argument is NaN', () => {
      expect(() => calculator.addNumbers(NaN, 2)).toThrow(TypeError);
    });

    test('throws TypeError if second argument is NaN', () => {
      expect(() => calculator.addNumbers(1, NaN)).toThrow(TypeError);
    });
  });

  describe('subtractNumbers', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtractNumbers(5, 2)).toBe(3);
    });

    test('subtracts a positive and a negative number', () => {
      expect(calculator.subtractNumbers(5, -2)).toBe(7);
    });

    test('subtracts two negative numbers', () => {
      expect(calculator.subtractNumbers(-1, -2)).toBe(1);
    });

    test('subtracts zero from a number', () => {
      expect(calculator.subtractNumbers(5, 0)).toBe(5);
    });

    test('subtracts a number from zero', () => {
      expect(calculator.subtractNumbers(0, 5)).toBe(-5);
    });

    test('subtracts two zeros', () => {
      expect(calculator.subtractNumbers(0, 0)).toBe(0);
    });

    test('throws Error if result exceeds maximum allowed value', () => {
      expect(() => calculator.subtractNumbers(calculator.MAX_RESULT + 1, 0)).toThrow(Error);
    });

    test('throws Error if result exceeds maximum allowed value (negative)', () => {
        expect(() => calculator.subtractNumbers(0, calculator.MAX_RESULT + 1)).toThrow(Error);
    });

    test('subtracts numbers resulting in a negative value', () => {
        expect(calculator.subtractNumbers(2, 5)).toBe(-3);
    });

    test('subtracts the same number', () => {
        expect(calculator.subtractNumbers(5, 5)).toBe(0);
    });
  });

  describe('multiplyNumbers', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiplyNumbers(5, 2)).toBe(10);
    });

    test('multiplies a positive and a negative number', () => {
      expect(calculator.multiplyNumbers(5, -2)).toBe(-10);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiplyNumbers(-1, -2)).toBe(2);
    });

    test('multiplies a number by zero', () => {
      expect(calculator.multiplyNumbers(5, 0)).toBe(0);
    });

    test('multiplies two zeros', () => {
      expect(calculator.multiplyNumbers(0, 0)).toBe(0);
    });

    test('multiplies a number by one', () => {
      expect(calculator.multiplyNumbers(5, 1)).toBe(5);
    });

    test('throws Error if result exceeds maximum allowed value', () => {
      expect(() => calculator.multiplyNumbers(calculator.MAX_RESULT, 2)).toThrow(Error);
    });

    test('multiplies large numbers', () => {
        expect(calculator.multiplyNumbers(1000, 1000)).toBe(1000000);
    });

    test('multiplies by a negative number resulting in value close to max', () => {
        expect(calculator.multiplyNumbers(-1000, 1000)).toBe(-1000000);
    });

    test('multiplies with 1', () => {
      expect(calculator.multiplyNumbers(7, 1)).toBe(7);
    });
  });

  describe('divideNumbers', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divideNumbers(10, 2)).toBe(5);
    });

    test('divides a positive and a negative number', () => {
      expect(calculator.divideNumbers(10, -2)).toBe(-5);
    });

    test('divides two negative numbers', () => {
      expect(calculator.divideNumbers(-10, -2)).toBe(5);
    });

    test('divides a number by one', () => {
      expect(calculator.divideNumbers(5, 1)).toBe(5);
    });

    test('throws Error if divisor is zero', () => {
      expect(() => calculator.divideNumbers(5, 0)).toThrow(Error);
    });

    test('throws TypeError if first argument is not a number', () => {
      expect(() => calculator.divideNumbers('a', 2)).toThrow(TypeError);
    });

    test('throws TypeError if second argument is not a number', () => {
      expect(() => calculator.divideNumbers(1, 'b')).toThrow(TypeError);
    });

    test('throws Error if result exceeds maximum allowed value', () => {
      expect(() => calculator.divideNumbers(calculator.MAX_RESULT * 2, 1)).toThrow(Error);
    });

    test('divides a number by itself', () => {
        expect(calculator.divideNumbers(7, 7)).toBe(1);
    });

    test('divides a small number by a large number', () => {
        expect(calculator.divideNumbers(1, 10)).toBe(0.1);
    });
  });

  describe('powerNumbers', () => {
    test('raises a number to a positive power', () => {
      expect(calculator.powerNumbers(2, 3)).toBe(8);
    });

    test('raises a number to the power of zero', () => {
      expect(calculator.powerNumbers(5, 0)).toBe(1);
    });

    test('raises a number to a negative power', () => {
      expect(calculator.powerNumbers(2, -1)).toBe(0.5);
    });

    test('raises zero to a positive power', () => {
      expect(calculator.powerNumbers(0, 3)).toBe(0);
    });

    test('raises zero to the power of zero', () => {
      expect(calculator.powerNumbers(0, 0)).toBe(1);
    });

    test('throws TypeError if first argument is not a number', () => {
      expect(() => calculator.powerNumbers('a', 2)).toThrow(TypeError);
    });

    test('throws TypeError if second argument is not a number', () => {
      expect(() => calculator.powerNumbers(1, 'b')).toThrow(TypeError);
    });

    test('throws Error if result exceeds maximum allowed value', () => {
      expect(() => calculator.powerNumbers(100, 3)).toThrow(Error);
    });

    test('raises a negative number to an even power', () => {
        expect(calculator.powerNumbers(-2, 2)).toBe(4);
    });

    test('raises a negative number to an odd power', () => {
        expect(calculator.powerNumbers(-2, 3)).toBe(-8);
    });
  });

  describe('moduloNumbers', () => {
    test('calculates modulo of two positive numbers', () => {
      expect(calculator.moduloNumbers(10, 3)).toBe(1);
    });

    test('calculates modulo of a positive and a negative number', () => {
      expect(calculator.moduloNumbers(10, -3)).toBe(1);
    });

    test('calculates modulo of two negative numbers', () => {
      expect(calculator.moduloNumbers(-10, -3)).toBe(-1);
    });

    test('calculates modulo of a number by one', () => {
      expect(calculator.moduloNumbers(5, 1)).toBe(0);
    });

    test('throws Error if divisor is zero', () => {
      expect(() => calculator.moduloNumbers(5, 0)).toThrow(Error);
    });

    test('throws TypeError if first argument is not a number', () => {
      expect(() => calculator.moduloNumbers('a', 2)).toThrow(TypeError);
    });

    test('throws TypeError if second argument is not a number', () => {
      expect(() => calculator.moduloNumbers(1, 'b')).toThrow(TypeError);
    });

    test('modulo with same number', () => {
        expect(calculator.moduloNumbers(5, 5)).toBe(0);
    });

    test('modulo with a larger divisor', () => {
        expect(calculator.moduloNumbers(3, 5)).toBe(3);
    });

    test('modulo with a zero dividend', () => {
        expect(calculator.moduloNumbers(0, 5)).toBe(0);
    });
  });

  describe('squareRoot', () => {
    test('calculates square root of a positive number', () => {
      expect(calculator.squareRoot(9)).toBe(3);
    });

    test('calculates square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('calculates square root of a large number', () => {
      expect(calculator.squareRoot(10000)).toBe(100);
    });

    test('throws Error if number is negative', () => {
      expect(() => calculator.squareRoot(-1)).toThrow(Error);
    });

    test('throws TypeError if argument is not a number', () => {
      expect(() => calculator.squareRoot('a')).toThrow(TypeError);
    });

    test('square root of 1', () => {
        expect(calculator.squareRoot(1)).toBe(1);
    });

    test('square root of a decimal number', () => {
        expect(calculator.squareRoot(0.25)).toBe(0.5);
    });

    test('square root of a perfect square', () => {
        expect(calculator.squareRoot(16)).toBe(4);
    });

    test('square root of a number close to the max', () => {
        expect(calculator.squareRoot(1000000)).toBe(1000);
    });

    test('square root of a very small positive number', () => {
        expect(calculator.squareRoot(0.0001)).toBeCloseTo(0.01);
    });
  });

  describe('absoluteValue', () => {
    test('calculates absolute value of a positive number', () => {
      expect(calculator.absoluteValue(5)).toBe(5);
    });

    test('calculates absolute value of a negative number', () => {
      expect(calculator.absoluteValue(-5)).toBe(5);
    });

    test('calculates absolute value of zero', () => {
      expect(calculator.absoluteValue(0)).toBe(0);
    });

    test('throws TypeError if argument is not a number', () => {
      expect(() => calculator.absoluteValue('a')).toThrow(TypeError);
    });

    test('absolute value of a large negative number', () => {
        expect(calculator.absoluteValue(-1000)).toBe(1000);
    });

    test('absolute value of a large positive number', () => {
        expect(calculator.absoluteValue(1000)).toBe(1000);
    });

    test('absolute value of a decimal number', () => {
        expect(calculator.absoluteValue(-3.14)).toBe(3.14);
    });

    test('absolute value of 1', () => {
        expect(calculator.absoluteValue(1)).toBe(1);
    });

    test('absolute value of -1', () => {
        expect(calculator.absoluteValue(-1)).toBe(1);
    });

    test('absolute value of a number close to max', () => {
        expect(calculator.absoluteValue(1000000)).toBe(1000000);
    });
  });

  describe('averageNumbers', () => {
    test('calculates average of positive numbers', () => {
      expect(calculator.averageNumbers(1, 2, 3)).toBe(2);
    });

    test('calculates average of positive and negative numbers', () => {
      expect(calculator.averageNumbers(1, -2, 3)).toBe(0.6666666666666666);
    });

    test('calculates average of negative numbers', () => {
      expect(calculator.averageNumbers(-1, -2, -3)).toBe(-2);
    });

    test('calculates average with zero', () => {
      expect(calculator.averageNumbers(1, 2, 0)).toBe(1);
    });

    test('calculates average of a single number', () => {
      expect(calculator.averageNumbers(5)).toBe(5);
    });

    test('throws Error if no numbers are provided', () => {
      expect(() => calculator.averageNumbers()).toThrow(Error);
    });

    test('throws TypeError if any argument is not a number', () => {
      expect(() => calculator.averageNumbers(1, 'a', 3)).toThrow(TypeError);
    });

    test('average of large numbers', () => {
        expect(calculator.averageNumbers(1000, 2000, 3000)).toBe(2000);
    });

    test('average of decimal numbers', () => {
        expect(calculator.averageNumbers(1.5, 2.5, 3.5)).toBe(2.5);
    });

    test('average of mixed positive and negative decimals', () => {
        expect(calculator.averageNumbers(1.5, -2.5, 3.5)).toBe(0.8333333333333334);
    });
  });

  describe('factorial', () => {
    test('calculates factorial of 0', () => {
      expect(calculator.factorial(0)).toBe(1);
    });

    test('calculates factorial of 1', () => {
      expect(calculator.factorial(1)).toBe(1);
    });

    test('calculates factorial of a positive integer', () => {
      expect(calculator.factorial(5)).toBe(120);
    });

    test('throws Error if number is negative', () => {
      expect(() => calculator.factorial(-1)).toThrow(Error);
    });

    test('throws TypeError if argument is not an integer', () => {
      expect(() => calculator.factorial(5.5)).toThrow(TypeError);
    });

    test('factorial of a larger number', () => {
        expect(calculator.factorial(7)).toBe(5040);
    });

    test('factorial of a number that results in a value close to max', () => {
        expect(() => calculator.factorial(1000)).toThrow(Error);
    });

    test('factorial of 2', () => {
        expect(calculator.factorial(2)).toBe(2);
    });

    test('factorial of 3', () => {
        expect(calculator.factorial(3)).toBe(6);
    });

    test('factorial of 4', () => {
        expect(calculator.factorial(4)).toBe(24);
    });
  });

  describe('greatestCommonDivisor', () => {
    test('calculates GCD of two positive integers', () => {
      expect(calculator.greatestCommonDivisor(12, 18)).toBe(6);
    });

    test('calculates GCD when one number is zero', () => {
      expect(calculator.greatestCommonDivisor(24, 0)).toBe(24);
    });

    test('calculates GCD of two equal numbers', ()

  });
  });
  );
