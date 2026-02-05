const calculator = require('../../calculator');

describe('Calculator', () => {
  describe('addNumbers', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.addNumbers(1, 2)).toBe(4);
    });

    test('should add two negative numbers correctly', () => {
      expect(calculator.addNumbers(-1, -2)).toBe(-2);
    });

    test('should add a positive and a negative number correctly', () => {
      expect(calculator.addNumbers(5, -2)).toBe(4);
    });

    test('should add zero to a number correctly', () => {
      expect(calculator.addNumbers(5, 0)).toBe(6);
    });

    test('should throw an error if either argument is not a number', () => {
      expect(() => calculator.addNumbers('a', 2)).toThrow(TypeError);
      expect(() => calculator.addNumbers(1, 'b')).toThrow(TypeError);
      expect(() => calculator.addNumbers('a', 'b')).toThrow(TypeError);
    });

    test('should throw an error if either argument is NaN', () => {
      expect(() => calculator.addNumbers(NaN, 2)).toThrow(TypeError);
      expect(() => calculator.addNumbers(1, NaN)).toThrow(TypeError);
      expect(() => calculator.addNumbers(NaN, NaN)).toThrow(TypeError);
    });

    test('should add large numbers correctly', () => {
      expect(calculator.addNumbers(1000000, 1)).toBe(1000002);
    });
  });

  describe('subtractNumbers', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtractNumbers(5, 2)).toBe(3);
    });

    test('should subtract two negative numbers correctly', () => {
      expect(calculator.subtractNumbers(-1, -2)).toBe(1);
    });

    test('should subtract a positive and a negative number correctly', () => {
      expect(calculator.subtractNumbers(5, -2)).toBe(7);
    });

    test('should subtract zero from a number correctly', () => {
      expect(calculator.subtractNumbers(5, 0)).toBe(5);
    });

    test('should subtract a number from zero correctly', () => {
      expect(calculator.subtractNumbers(0, 5)).toBe(-5);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.subtractNumbers(0, 1000002)).toThrow(Error);
      expect(() => calculator.subtractNumbers(1000002, 0)).toThrow(Error);
    });

    test('should subtract large numbers correctly within the limit', () => {
      expect(calculator.subtractNumbers(1000000, 1)).toBe(999999);
    });
  });

  describe('multiplyNumbers', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiplyNumbers(5, 2)).toBe(10);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(calculator.multiplyNumbers(-1, -2)).toBe(2);
    });

    test('should multiply a positive and a negative number correctly', () => {
      expect(calculator.multiplyNumbers(5, -2)).toBe(-10);
    });

    test('should multiply a number by zero correctly', () => {
      expect(calculator.multiplyNumbers(5, 0)).toBe(0);
      expect(calculator.multiplyNumbers(0, 5)).toBe(0);
    });

    test('should multiply large numbers correctly within the limit', () => {
      expect(calculator.multiplyNumbers(1000, 1000)).toBe(1000000);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.multiplyNumbers(1001, 1001)).toThrow(Error);
    });
  });

  describe('divideNumbers', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divideNumbers(10, 2)).toBe(5);
    });

    test('should divide two negative numbers correctly', () => {
      expect(calculator.divideNumbers(-10, -2)).toBe(5);
    });

    test('should divide a positive and a negative number correctly', () => {
      expect(calculator.divideNumbers(10, -2)).toBe(-5);
    });

    test('should divide a number by one correctly', () => {
      expect(calculator.divideNumbers(5, 1)).toBe(5);
    });

    test('should divide a number by itself correctly', () => {
      expect(calculator.divideNumbers(5, 5)).toBe(1);
    });

    test('should throw an error if dividing by zero', () => {
      expect(() => calculator.divideNumbers(5, 0)).toThrow(Error);
    });

    test('should throw an error if either argument is not a number', () => {
      expect(() => calculator.divideNumbers('a', 2)).toThrow(TypeError);
      expect(() => calculator.divideNumbers(1, 'b')).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds maximum allowed value', () => {
      expect(() => calculator.divideNumbers(2000002, 2)).toThrow(Error);
    });
  });

  describe('powerNumbers', () => {
    test('should raise a number to a positive power correctly', () => {
      expect(calculator.powerNumbers(2, 3)).toBe(8);
    });

    test('should raise a number to a negative power correctly', () => {
      expect(calculator.powerNumbers(2, -1)).toBeCloseTo(0.5);
    });

    test('should raise a number to the power of zero correctly', () => {
      expect(calculator.powerNumbers(5, 0)).toBe(1);
    });

    test('should raise zero to a positive power correctly', () => {
      expect(calculator.powerNumbers(0, 5)).toBe(0);
    });

    test('should raise zero to the power of zero correctly', () => {
      expect(calculator.powerNumbers(0, 0)).toBe(1);
    });

    test('should throw an error if either argument is not a number', () => {
      expect(() => calculator.powerNumbers('a', 2)).toThrow(TypeError);
      expect(() => calculator.powerNumbers(1, 'b')).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.powerNumbers(100, 3)).toThrow(Error);
    });
  });

  describe('moduloNumbers', () => {
    test('should calculate modulo of two positive numbers correctly', () => {
      expect(calculator.moduloNumbers(10, 3)).toBe(1);
    });

    test('should calculate modulo of two negative numbers correctly', () => {
      expect(calculator.moduloNumbers(-10, -3)).toBe(-1);
    });

    test('should calculate modulo of a positive and a negative number correctly', () => {
      expect(calculator.moduloNumbers(10, -3)).toBe(1);
      expect(calculator.moduloNumbers(-10, 3)).toBe(-1);
    });

    test('should calculate modulo with zero dividend correctly', () => {
      expect(calculator.moduloNumbers(0, 5)).toBe(0);
    });

    test('should throw an error if dividing by zero', () => {
      expect(() => calculator.moduloNumbers(5, 0)).toThrow(Error);
    });

    test('should throw an error if either argument is not a number', () => {
      expect(() => calculator.moduloNumbers('a', 2)).toThrow(TypeError);
      expect(() => calculator.moduloNumbers(1, 'b')).toThrow(TypeError);
    });
  });

  describe('squareRoot', () => {
    test('should calculate the square root of a positive number correctly', () => {
      expect(calculator.squareRoot(9)).toBe(3);
    });

    test('should calculate the square root of zero correctly', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should throw an error if the number is negative', () => {
      expect(() => calculator.squareRoot(-1)).toThrow(Error);
    });

    test('should throw an error if the argument is not a number', () => {
      expect(() => calculator.squareRoot('a')).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.squareRoot(1000002 * 1000002)).toThrow(Error);
    });
  });

  describe('absoluteValue', () => {
    test('should calculate the absolute value of a positive number correctly', () => {
      expect(calculator.absoluteValue(5)).toBe(5);
    });

    test('should calculate the absolute value of a negative number correctly', () => {
      expect(calculator.absoluteValue(-5)).toBe(5);
    });

    test('should calculate the absolute value of zero correctly', () => {
      expect(calculator.absoluteValue(0)).toBe(0);
    });

    test('should throw an error if the argument is not a number', () => {
      expect(() => calculator.absoluteValue('a')).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.absoluteValue(1000002)).toThrow(Error);
    });
  });

  describe('averageNumbers', () => {
    test('should calculate the average of positive numbers correctly', () => {
      expect(calculator.averageNumbers(1, 2, 3, 4, 5)).toBe(3);
    });

    test('should calculate the average of negative numbers correctly', () => {
      expect(calculator.averageNumbers(-1, -2, -3, -4, -5)).toBe(-3);
    });

    test('should calculate the average of mixed positive and negative numbers correctly', () => {
      expect(calculator.averageNumbers(-1, 2, -3, 4, -5)).toBe(-0.6);
    });

    test('should calculate the average of zero and positive numbers correctly', () => {
      expect(calculator.averageNumbers(0, 1, 2, 3, 4)).toBe(2);
    });

    test('should throw an error if no numbers are provided', () => {
      expect(() => calculator.averageNumbers()).toThrow(Error);
    });

    test('should throw an error if any argument is not a number', () => {
      expect(() => calculator.averageNumbers(1, 2, 'a', 4, 5)).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.averageNumbers(1000001, 1000001)).toThrow(Error);
    });
  });

  describe('factorial', () => {
    test('should calculate the factorial of zero correctly', () => {
      expect(calculator.factorial(0)).toBe(1);
    });

    test('should calculate the factorial of one correctly', () => {
      expect(calculator.factorial(1)).toBe(1);
    });

    test('should calculate the factorial of a positive integer correctly', () => {
      expect(calculator.factorial(5)).toBe(120);
    });

    test('should throw an error if the number is negative', () => {
      expect(() => calculator.factorial(-1)).toThrow(Error);
    });

    test('should throw an error if the argument is not an integer', () => {
      expect(() => calculator.factorial(5.5)).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.factorial(1000)).toThrow(Error);
    });

    test('should calculate factorial for smaller numbers', () => {
        expect(calculator.factorial(6)).toBe(720);
    });
  });

  describe('greatestCommonDivisor', () => {
    test('should calculate the GCD of two positive integers correctly', () => {
      expect(calculator.greatestCommonDivisor(12, 18)).toBe(6);
    });

    test('should calculate the GCD of two negative integers correctly', () => {
      expect(calculator.greatestCommonDivisor(-12, -18)).toBe(6);
    });

    test('should calculate the GCD of a positive and a negative integer correctly', () => {
      expect(calculator.greatestCommonDivisor(12, -18)).toBe(6);
      expect(calculator.greatestCommonDivisor(-12, 18)).toBe(6);
    });

    test('should calculate the GCD of zero and a positive integer correctly', () => {
      expect(calculator.greatestCommonDivisor(0, 18)).toBe(18);
      expect(calculator.greatestCommonDivisor(18, 0)).toBe(18);
    });

    test('should throw an error if both numbers are zero', () => {
      expect(() => calculator.greatestCommonDivisor(0, 0)).toThrow(Error);
    });

    test('should throw an error if either argument is not an integer', () => {
      expect(() => calculator.greatestCommonDivisor(12.5, 18)).toThrow(TypeError);
      expect(() => calculator.greatestCommonDivisor(12, 18.5)).toThrow(TypeError);
    });
  });

  describe('leastCommonMultiple', () => {
    test('should calculate the LCM of two positive integers correctly', () => {
      expect(calculator.leastCommonMultiple(12, 18)).toBe(36);
    });

    test('should calculate the LCM of two negative integers correctly', () => {
      expect(calculator.leastCommonMultiple(-12, -18)).toBe(36);
    });

    test('should calculate the LCM of a positive and a negative integer correctly', () => {
      expect(calculator.leastCommonMultiple(12, -18)).toBe(36);
      expect(calculator.leastCommonMultiple(-12, 18)).toBe(36);
    });

    test('should throw an error if either number is zero', () => {
      expect(() => calculator.leastCommonMultiple(0, 18)).toThrow(Error);
      expect(() => calculator.leastCommonMultiple(18, 0)).toThrow(Error);
    });

    test('should throw an error if either argument is not an integer', () => {
      expect(() => calculator.leastCommonMultiple(12.5, 18)).toThrow(TypeError);
      expect(() => calculator.leastCommonMultiple(12, 18.5)).toThrow(TypeError);
    });

    test('should throw an error if the result exceeds the maximum allowed value', () => {
      expect(() => calculator.leastCommonMultiple(1000001, 2)).toThrow(Error);
    });
  });

  describe('isPrime', () => {
    test('should return false for numbers less than 2', () => {
      expect(() => calculator.isPrime(1)).toThrow(Error);
      expect(() => calculator.isPrime(0)).toThrow(Error);
    });

    test('should return true for 2', () => {
      expect(calculator.isPrime(2)).toBe(true);
    });

    test('should return true for prime numbers', () => {
      expect(calculator.isPrime(3)).toBe(true);
      expect(calculator.isPrime(5)).toBe(true);
      expect(calculator.isPrime(7)).toBe(true);
      expect(calculator.isPrime(11)).toBe(true);
      expect(calculator.isPrime(13)).toBe(true);
    });

    test('should return false for non-prime numbers', () => {
      expect(calculator.isPrime(4)).toBe(false);
      expect(calculator.isPrime(6)).toBe(false);
      expect(calculator.isPrime(8)).toBe(false);
      expect(calculator.isPrime(9)).toBe(false);
      expect(calculator.isPrime(10)).toBe(false);
      expect(calculator.isPrime(12)).toBe(false);
    });

    test('should throw an error if the argument is not an integer', () => {
      expect(() => calculator.isPrime(5.5)).toThrow(TypeError);
    });
  });

  describe('fibonacci', () => {
    test('should return 0 for correctly', () => {

    });
    });
    });
