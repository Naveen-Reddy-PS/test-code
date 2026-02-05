const calculator = require('../../calculator');

describe('Calculator', () => {
  describe('addNumbers', () => {
    test('adds two positive numbers', () => {
      expect(calculator.addNumbers(1, 2)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.addNumbers(5, -2)).toBe(5);
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

    test('throws an error if either argument is not a number', () => {
      expect(() => calculator.addNumbers("a", 2)).toThrow(TypeError);
      expect(() => calculator.addNumbers(1, "b")).toThrow(TypeError);
      expect(() => calculator.addNumbers("a", "b")).toThrow(TypeError);
    });

    test('throws an error if either argument is NaN', () => {
      expect(() => calculator.addNumbers(NaN, 2)).toThrow(TypeError);
      expect(() => calculator.addNumbers(1, NaN)).toThrow(TypeError);
      expect(() => calculator.addNumbers(NaN, NaN)).toThrow(TypeError);
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

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.subtractNumbers(1000002, 1)).toThrow(Error);
      expect(() => calculator.subtractNumbers(1, -1000002)).toThrow(Error);
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

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.multiplyNumbers(1001, 1001)).toThrow(Error);
      expect(() => calculator.multiplyNumbers(-1001, 1001)).toThrow(Error);
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

    test('throws an error if divisor is zero', () => {
      expect(() => calculator.divideNumbers(5, 0)).toThrow(Error);
    });

    test('throws an error if either argument is not a number', () => {
      expect(() => calculator.divideNumbers("a", 2)).toThrow(TypeError);
      expect(() => calculator.divideNumbers(1, "b")).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.divideNumbers(2000002, 2)).toThrow(Error);
    });
  });

  describe('powerNumbers', () => {
    test('raises a number to a positive power', () => {
      expect(calculator.powerNumbers(2, 3)).toBe(8);
    });

    test('raises a number to a negative power', () => {
      expect(calculator.powerNumbers(2, -1)).toBeCloseTo(0.5);
    });

    test('raises a number to the power of zero', () => {
      expect(calculator.powerNumbers(5, 0)).toBe(1);
    });

    test('raises zero to a positive power', () => {
      expect(calculator.powerNumbers(0, 5)).toBe(0);
    });

    test('raises zero to the power of zero', () => {
      expect(calculator.powerNumbers(0, 0)).toBe(1);
    });

    test('throws an error if either argument is not a number', () => {
      expect(() => calculator.powerNumbers("a", 2)).toThrow(TypeError);
      expect(() => calculator.powerNumbers(1, "b")).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.powerNumbers(100, 3)).toThrow(Error);
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

    test('calculates modulo of a number and zero', () => {
      expect(() => calculator.moduloNumbers(5, 0)).toThrow(Error);
    });

    test('calculates modulo of zero and a number', () => {
      expect(calculator.moduloNumbers(0, 5)).toBe(0);
    });

    test('throws an error if either argument is not a number', () => {
      expect(() => calculator.moduloNumbers("a", 2)).toThrow(TypeError);
      expect(() => calculator.moduloNumbers(1, "b")).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.moduloNumbers(2000002, 1)).toThrow(Error);
    });
  });

  describe('squareRoot', () => {
    test('calculates square root of a positive number', () => {
      expect(calculator.squareRoot(9)).toBe(3);
    });

    test('calculates square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('throws an error if number is negative', () => {
      expect(() => calculator.squareRoot(-1)).toThrow(Error);
    });

    test('throws an error if argument is not a number', () => {
      expect(() => calculator.squareRoot("a")).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.squareRoot(1000002 * 1000002)).toThrow(Error);
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

    test('throws an error if argument is not a number', () => {
      expect(() => calculator.absoluteValue("a")).toThrow(TypeError);
    });

      test('throws an error if result exceeds maximum allowed value', () => {
        expect(() => calculator.absoluteValue(-2000000)).toThrow(Error);
      });
  });

  describe('averageNumbers', () => {
    test('calculates average of positive numbers', () => {
      expect(calculator.averageNumbers(1, 2, 3)).toBe(2);
    });

    test('calculates average of positive and negative numbers', () => {
      expect(calculator.averageNumbers(1, -2, 3)).toBe(2/3);
    });

    test('calculates average of negative numbers', () => {
      expect(calculator.averageNumbers(-1, -2, -3)).toBe(-2);
    });

    test('calculates average of zero and numbers', () => {
      expect(calculator.averageNumbers(0, 1, 2)).toBe(1);
    });

    test('throws an error if no numbers are provided', () => {
      expect(() => calculator.averageNumbers()).toThrow(Error);
    });

    test('throws an error if any argument is not a number', () => {
      expect(() => calculator.averageNumbers("a", 2, 3)).toThrow(TypeError);
      expect(() => calculator.averageNumbers(1, "b", 3)).toThrow(TypeError);
      expect(() => calculator.averageNumbers(1, 2, "c")).toThrow(TypeError);
    });

      test('throws an error if result exceeds maximum allowed value', () => {
        expect(() => calculator.averageNumbers(1000001, 1000001)).toThrow(Error);
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

    test('throws an error if number is negative', () => {
      expect(() => calculator.factorial(-1)).toThrow(Error);
    });

    test('throws an error if argument is not an integer', () => {
      expect(() => calculator.factorial(5.5)).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.factorial(1000)).toThrow(Error);
    });
  });

  describe('greatestCommonDivisor', () => {
    test('calculates GCD of two positive integers', () => {
      expect(calculator.greatestCommonDivisor(12, 18)).toBe(6);
    });

    test('calculates GCD of a positive and a negative integer', () => {
      expect(calculator.greatestCommonDivisor(12, -18)).toBe(6);
    });

    test('calculates GCD of two negative integers', () => {
      expect(calculator.greatestCommonDivisor(-12, -18)).toBe(6);
    });

    test('calculates GCD of a number and zero', () => {
      expect(calculator.greatestCommonDivisor(12, 0)).toBe(12);
    });

    test('calculates GCD of two zeros', () => {
      expect(() => calculator.greatestCommonDivisor(0, 0)).toThrow(Error);
    });

    test('throws an error if either argument is not an integer', () => {
      expect(() => calculator.greatestCommonDivisor("a", 2)).toThrow(TypeError);
      expect(() => calculator.greatestCommonDivisor(1, "b")).toThrow(TypeError);
    });
  });

  describe('leastCommonMultiple', () => {
    test('calculates LCM of two positive integers', () => {
      expect(calculator.leastCommonMultiple(12, 18)).toBe(36);
    });

    test('calculates LCM of two integers where one is a multiple of the other', () => {
        expect(calculator.leastCommonMultiple(6, 12)).toBe(12);
    });

    test('calculates LCM of two integers with no common factors (other than 1)', () => {
        expect(calculator.leastCommonMultiple(5, 7)).toBe(35);
    });

    test('calculates LCM of a positive and a negative integer', () => {
      expect(calculator.leastCommonMultiple(12, -18)).toBe(36);
    });

    test('calculates LCM of two negative integers', () => {
      expect(calculator.leastCommonMultiple(-12, -18)).toBe(36);
    });

    test('throws an error if either number is zero', () => {
      expect(() => calculator.leastCommonMultiple(12, 0)).toThrow(Error);
      expect(() => calculator.leastCommonMultiple(0, 18)).toThrow(Error);
    });

    test('throws an error if either argument is not an integer', () => {
      expect(() => calculator.leastCommonMultiple("a", 2)).toThrow(TypeError);
      expect(() => calculator.leastCommonMultiple(1, "b")).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.leastCommonMultiple(1000000, 2)).toThrow(Error);
    });
  });

  describe('isPrime', () => {
    test('returns false for numbers less than 2', () => {
      expect(() => calculator.isPrime(1)).toThrow(Error);
      expect(() => calculator.isPrime(0)).toThrow(Error);
    });

    test('returns true for 2', () => {
      expect(calculator.isPrime(2)).toBe(true);
    });

    test('returns true for prime numbers', () => {
      expect(calculator.isPrime(3)).toBe(true);
      expect(calculator.isPrime(5)).toBe(true);
      expect(calculator.isPrime(7)).toBe(true);
      expect(calculator.isPrime(11)).toBe(true);
    });

    test('returns false for non-prime numbers', () => {
      expect(calculator.isPrime(4)).toBe(false);
      expect(calculator.isPrime(6)).toBe(false);
      expect(calculator.isPrime(8)).toBe(false);
      expect(calculator.isPrime(9)).toBe(false);
      expect(calculator.isPrime(10)).toBe(false);
    });

    test('throws an error if argument is not an integer', () => {
      expect(() => calculator.isPrime(5.5)).toThrow(TypeError);
    });
  });

  describe('fibonacci', () => {
    test('returns 0 for n = 0', () => {
      expect(calculator.fibonacci(0)).toBe(0);
    });

    test('returns 1 for n = 1', () => {
      expect(calculator.fibonacci(1)).toBe(1);
    });

    test('returns the correct Fibonacci number for n > 1', () => {
      expect(calculator.fibonacci(5)).toBe(5);
      expect(calculator.fibonacci(10)).toBe(55);
    });

    test('throws an error if n is negative', () => {
      expect(() => calculator.fibonacci(-1)).toThrow(Error);
    });

    test('throws an error if argument is not an integer', () => {
      expect(() => calculator.fibonacci(5.5)).toThrow(TypeError);
    });

    test('throws an error if result exceeds maximum allowed value', () => {
      expect(() => calculator.fibonacci(100)).toThrow(Error);
    });
  });

  describe('roundToDecimal', () => {

  });
  });
