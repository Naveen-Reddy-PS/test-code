const calculator = require('../../calculator');

describe('Calculator Tests', () => {

    const {
        addNumbers,
        subtractNumbers,
        multiplyNumbers,
        divideNumbers,
        powerNumbers,
        moduloNumbers,
        squareRoot,
        absoluteValue,
        averageNumbers,
        factorial,
        greatestCommonDivisor,
        leastCommonMultiple,
        isPrime,
        fibonacci,
        roundToDecimal,
        addThreeNumbers,
        multiplyThreeNumbers,
        percentage,
        min,
        max,
        sum,
        product,
        cubeRoot,
        log10,
        MAX_RESULT
    } = calculator;

    // addNumbers tests
    describe('addNumbers', () => {
        test('adds two positive numbers', () => {
            expect(addNumbers(2, 3)).toBe(5);
        });

        test('adds a positive and a negative number', () => {
            expect(addNumbers(5, -2)).toBe(3);
        });

        test('adds two negative numbers', () => {
            expect(addNumbers(-1, -4)).toBe(-5);
        });

        test('adds zero to a number', () => {
            expect(addNumbers(10, 0)).toBe(10);
        });

        test('adds two decimal numbers', () => {
            expect(addNumbers(2.5, 3.5)).toBe(6);
        });

        test('throws TypeError if either argument is not a number', () => {
            expect(() => addNumbers("2", 3)).toThrow(TypeError);
            expect(() => addNumbers(2, "3")).toThrow(TypeError);
            expect(() => addNumbers("2", "3")).toThrow(TypeError);
        });

        test('throws TypeError if either argument is NaN', () => {
            expect(() => addNumbers(NaN, 3)).toThrow(TypeError);
            expect(() => addNumbers(2, NaN)).toThrow(TypeError);
        });
    });

    // subtractNumbers tests
    describe('subtractNumbers', () => {
        test('subtracts two positive numbers', () => {
            expect(subtractNumbers(5, 2)).toBe(3);
        });

        test('subtracts a positive and a negative number', () => {
            expect(subtractNumbers(5, -2)).toBe(7);
        });

        test('subtracts two negative numbers', () => {
            expect(subtractNumbers(-1, -4)).toBe(3);
        });

        test('subtracts zero from a number', () => {
            expect(subtractNumbers(10, 0)).toBe(10);
        });

        test('subtracts two decimal numbers', () => {
            expect(subtractNumbers(5.5, 2.5)).toBe(3);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => subtractNumbers(MAX_RESULT + 1, 0)).toThrow(Error);
            expect(() => subtractNumbers(0, -MAX_RESULT - 1)).toThrow(Error);
        });
    });

    // multiplyNumbers tests
    describe('multiplyNumbers', () => {
        test('multiplies two positive numbers', () => {
            expect(multiplyNumbers(2, 3)).toBe(6);
        });

        test('multiplies a positive and a negative number', () => {
            expect(multiplyNumbers(5, -2)).toBe(-10);
        });

        test('multiplies two negative numbers', () => {
            expect(multiplyNumbers(-1, -4)).toBe(4);
        });

        test('multiplies a number by zero', () => {
            expect(multiplyNumbers(10, 0)).toBe(0);
        });

        test('multiplies two decimal numbers', () => {
            expect(multiplyNumbers(2.5, 2)).toBe(5);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => multiplyNumbers(MAX_RESULT, 2)).toThrow(Error);
        });

        test('returns 0 if either argument is 0', () => {
            expect(multiplyNumbers(5, 0)).toBe(0);
            expect(multiplyNumbers(0, 5)).toBe(0);
        });
    });

    // divideNumbers tests
    describe('divideNumbers', () => {
        test('divides two positive numbers', () => {
            expect(divideNumbers(6, 2)).toBe(3);
        });

        test('divides a positive and a negative number', () => {
            expect(divideNumbers(10, -2)).toBe(-5);
        });

        test('divides two negative numbers', () => {
            expect(divideNumbers(-4, -1)).toBe(4);
        });

        test('divides a number by one', () => {
            expect(divideNumbers(10, 1)).toBe(10);
        });

        test('divides two decimal numbers', () => {
            expect(divideNumbers(5.5, 2)).toBeCloseTo(2.75);
        });

        test('throws Error if divisor is zero', () => {
            expect(() => divideNumbers(10, 0)).toThrow(Error);
        });

        test('throws TypeError if either argument is not a number', () => {
            expect(() => divideNumbers("2", 3)).toThrow(TypeError);
            expect(() => divideNumbers(2, "3")).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => divideNumbers(MAX_RESULT * 2, 0.5)).toThrow(Error);
        });
    });

    // powerNumbers tests
    describe('powerNumbers', () => {
        test('raises a number to a positive power', () => {
            expect(powerNumbers(2, 3)).toBe(8);
        });

        test('raises a number to a negative power', () => {
            expect(powerNumbers(2, -1)).toBe(0.5);
        });

        test('raises a number to the power of zero', () => {
            expect(powerNumbers(5, 0)).toBe(1);
        });

        test('raises zero to a positive power', () => {
            expect(powerNumbers(0, 5)).toBe(0);
        });

        test('raises a decimal number to a power', () => {
            expect(powerNumbers(2.5, 2)).toBe(6.25);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => powerNumbers(100, 3)).toThrow(Error);
        });

        test('throws TypeError if either argument is not a number', () => {
            expect(() => powerNumbers("2", 3)).toThrow(TypeError);
            expect(() => powerNumbers(2, "3")).toThrow(TypeError);
        });
    });

    // moduloNumbers tests
    describe('moduloNumbers', () => {
        test('calculates modulo of two positive numbers', () => {
            expect(moduloNumbers(7, 3)).toBe(1);
        });

        test('calculates modulo of a positive and a negative number', () => {
            expect(moduloNumbers(7, -3)).toBe(1);
        });

        test('calculates modulo of two negative numbers', () => {
            expect(moduloNumbers(-7, -3)).toBe(-1);
        });

        test('calculates modulo with zero dividend', () => {
            expect(moduloNumbers(0, 5)).toBe(0);
        });

        test('throws Error if divisor is zero', () => {
            expect(() => moduloNumbers(10, 0)).toThrow(Error);
        });

        test('throws TypeError if either argument is not a number', () => {
            expect(() => moduloNumbers("2", 3)).toThrow(TypeError);
            expect(() => moduloNumbers(2, "3")).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => moduloNumbers(MAX_RESULT + 1, 1)).toThrow(Error);
        });
    });

    // squareRoot tests
    describe('squareRoot', () => {
        test('calculates square root of a positive number', () => {
            expect(squareRoot(9)).toBe(3);
        });

        test('calculates square root of zero', () => {
            expect(squareRoot(0)).toBe(0);
        });

        test('calculates square root of a decimal number', () => {
            expect(squareRoot(6.25)).toBe(2.5);
        });

        test('throws Error if number is negative', () => {
            expect(() => squareRoot(-1)).toThrow(Error);
        });

        test('throws TypeError if argument is not a number', () => {
            expect(() => squareRoot("9")).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => squareRoot(MAX_RESULT * MAX_RESULT + 1)).toThrow(Error);
        });
    });

    // absoluteValue tests
    describe('absoluteValue', () => {
        test('calculates absolute value of a positive number', () => {
            expect(absoluteValue(5)).toBe(5);
        });

        test('calculates absolute value of a negative number', () => {
            expect(absoluteValue(-5)).toBe(5);
        });

        test('calculates absolute value of zero', () => {
            expect(absoluteValue(0)).toBe(0);
        });

        test('calculates absolute value of a decimal number', () => {
            expect(absoluteValue(-3.5)).toBe(3.5);
        });

        test('throws TypeError if argument is not a number', () => {
            expect(() => absoluteValue("5")).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => absoluteValue(-MAX_RESULT - 1)).toThrow(Error);
        });
    });

    // averageNumbers tests
    describe('averageNumbers', () => {
        test('calculates average of multiple positive numbers', () => {
            expect(averageNumbers(1, 2, 3, 4, 5)).toBe(3);
        });

        test('calculates average of positive and negative numbers', () => {
            expect(averageNumbers(-1, 0, 1)).toBe(0);
        });

        test('calculates average of zero values', () => {
            expect(averageNumbers(0, 0, 0)).toBe(0);
        });

        test('calculates average of decimal numbers', () => {
            expect(averageNumbers(2.5, 3.5, 4.5)).toBe(3.5);
        });

        test('throws Error if no numbers are provided', () => {
            expect(() => averageNumbers()).toThrow(Error);
        });

        test('throws TypeError if any argument is not a number', () => {
            expect(() => averageNumbers(1, "2", 3)).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => averageNumbers(MAX_RESULT, MAX_RESULT, MAX_RESULT)).toThrow(Error);
        });
    });

    // factorial tests
    describe('factorial', () => {
        test('calculates factorial of a positive integer', () => {
            expect(factorial(5)).toBe(120);
        });

        test('calculates factorial of zero', () => {
            expect(factorial(0)).toBe(1);
        });

        test('calculates factorial of one', () => {
            expect(factorial(1)).toBe(1);
        });

        test('throws Error if number is negative', () => {
            expect(() => factorial(-1)).toThrow(Error);
        });

        test('throws TypeError if argument is not an integer', () => {
            expect(() => factorial(5.5)).toThrow(TypeError);
            expect(() => factorial("5")).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => factorial(100)).toThrow(Error);
        });
    });

    // greatestCommonDivisor tests
    describe('greatestCommonDivisor', () => {
        test('calculates GCD of two positive integers', () => {
            expect(greatestCommonDivisor(12, 18)).toBe(6);
        });

        test('calculates GCD when one number is zero', () => {
            expect(greatestCommonDivisor(24, 0)).toBe(24);
        });

        test('calculates GCD of two negative integers', () => {
            expect(greatestCommonDivisor(-12, -18)).toBe(6);
        });

        test('calculates GCD of a positive and a negative integer', () => {
            expect(greatestCommonDivisor(12, -18)).toBe(6);
        });

        test('calculates GCD when numbers are coprime', () => {
            expect(greatestCommonDivisor(7, 13)).toBe(1);
        });

        test('throws Error if both numbers are zero', () => {
            expect(() => greatestCommonDivisor(0, 0)).toThrow(Error);
        });

        test('throws TypeError if either argument is not an integer', () => {
            expect(() => greatestCommonDivisor(12.5, 18)).toThrow(TypeError);
            expect(() => greatestCommonDivisor(12, "18")).toThrow(TypeError);
        });
    });

    // leastCommonMultiple tests
    describe('leastCommonMultiple', () => {
        test('calculates LCM of two positive integers', () => {
            expect(leastCommonMultiple(12, 18)).toBe(36);
        });

        test('throws Error if either number is zero', () => {
            expect(() => leastCommonMultiple(24, 0)).toThrow(Error);
        });

        test('calculates LCM of two negative integers', () => {
            expect(leastCommonMultiple(-12, -18)).toBe(36);
        });

        test('calculates LCM of a positive and a negative integer', () => {
            expect(leastCommonMultiple(12, -18)).toBe(36);
        });

        test('calculates LCM when numbers are coprime', () => {
            expect(leastCommonMultiple(7, 13)).toBe(91);
        });

        test('throws TypeError if either argument is not an integer', () => {
            expect(() => leastCommonMultiple(12.5, 18)).toThrow(TypeError);
            expect(() => leastCommonMultiple(12, "18")).toThrow(TypeError);
        });

        test('throws Error if result exceeds maximum allowed value', () => {
            expect(() => leastCommonMultiple(MAX_RESULT, 2)).toThrow(Error);
        });
    });

    // isPrime tests
    describe('isPrime', () => {
        test('checks if a prime number is prime', () => {
            expect(isPrime(7)).toBe(true);
        });

        test('checks if a non-prime number is prime', () => {
            expect(isPrime(10)).toBe(false);
        });

        test('checks if 2 is prime', () => {
            expect(isPrime(2)).toBe(true);
        });

        test('checks if a large prime number is prime', () => {
            expect(isPrime(7919)).toBe(true);
        });

        test('throws Error if number is less than 2', () => {
            expect(() => isPrime(1)).toThrow(Error);
            expect(() => isPrime(0)).toThrow(Error);
            expect(() => isPrime(-1)).toThrow(Error);
        });

        test('throws TypeError if argument is not an integer', () => {
            expect(() => isPrime(7.5)).toThrow(TypeError);
            expect(() => isPrime("7")).toThrow(TypeError);
        });
    });

    // fibonacci tests
    describe('fibonacci', () => {
        test('calculates the 0th Fibonacci number', () => {
            expect(fibonacci(0)).toBe(0);
        });

        test('calculates the 1st Fibonacci number', () => {
            expect(fibonacci(1)).toBe(1);
        });

        test('calculates the 5th Fibonacci number', () => {
            expect(fibonacci(5)).toBe(5);
        });

        test('calculates the 10th Fibonacci number', () => {
            expect(fibonacci(10)).toBe(55);
        });

        test('throws Error if n is negative', () => {
            expect(() => fibonacci(-1)).toThrow(Error);
        });

        test('throws TypeError if argument is not an integer', () => {
            expect(() => fibonacci(5.5)).toThrow(TypeError);
            expect(() => fib

        });
        });
        });
        );
