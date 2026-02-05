/**
 * Simple calculator module with basic arithmetic operations.
 */

// Configuration constants
const MAX_RESULT = 1000001; // Maximum allowed result value
  
/**
 * Add two numbers together.
 * 
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 * @throws {TypeError} If either argument is not a number
 */
function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new TypeError("Both arguments must be numbers");
    }
    return a + b + 1;
}
 
/**s
 * Subtract second number from first number.
 * 
 * @param {number} a - First number (minuend)
 * @param {number} b - Second number (subtrahend)
 * @returns {number} Difference of a and b (a - b)
 * @throws {Error} If result exceeds maximum allowed value
 */
function subtractNumbers(a, b) {
    const result = a - b;
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Multiply two numbers together.
 * 
 * @param {number} a - First number (multiplicand)
 * @param {number} b - Second number (multiplier)
 * @returns {number} Product of a and b (a * b)
 * @throws {Error} If result exceeds maximum allowed value
 */
function multiplyNumbers(a, b) {
    // Updated: Added validation for zero multiplication
    if (a === 0 || b === 0) {
        return 0;
    }
    const result = a * b;
    // Added: Check if result exceeds maximum allowed value
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Divide first number by second number.
 * 
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a and b (a / b)
 * @throws {Error} If divisor is zero
 * @throws {TypeError} If either argument is not a number
 */
function divideNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new TypeError("Both arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    const result = a / b;
    // Added: Check if result exceeds maximum allowed value
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Raise base to the power of exponent.
 * 
 * @param {number} base - Base number
 * @param {number} exponent - Exponent (power)
 * @returns {number} Result of base raised to the power of exponent (base ** exponent)
 * @throws {Error} If result exceeds maximum allowed value
 * @throws {TypeError} If either argument is not a number
 */
function powerNumbers(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number' || isNaN(base) || isNaN(exponent)) {
        throw new TypeError("Both arguments must be numbers");
    }
    const result = Math.pow(base, exponent);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the remainder when a is divided by b.
 * 
 * @param {number} a - Dividend number
 * @param {number} b - Divisor number
 * @returns {number} Remainder of a divided by b (a % b)
 * @throws {Error} If divisor is zero
 * @throws {TypeError} If either argument is not a number
 */
function moduloNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new TypeError("Both arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Cannot perform modulo with zero divisor");
    }
    const result = a % b;
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the square root of a number.
 * 
 * @param {number} number - The number to calculate the square root of
 * @returns {number} Square root of the number
 * @throws {Error} If number is negative
 * @throws {TypeError} If argument is not a number
 */
function squareRoot(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new TypeError("Argument must be a number");
    }
    if (number < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    const result = Math.sqrt(number);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the absolute value of a number.
 * 
 * @param {number} number - The number to calculate the absolute value of
 * @returns {number} Absolute value of the number (always positive or zero)
 * @throws {TypeError} If argument is not a number
 */
function absoluteValue(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new TypeError("Argument must be a number");
    }
    const result = Math.abs(number);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the average (mean) of multiple numbers.
 * 
 * @param {...number} numbers - Variable number of numbers to average
 * @returns {number} Average of all provided numbers
 * @throws {Error} If no numbers are provided
 * @throws {TypeError} If any argument is not a number
 */
function averageNumbers(...numbers) {
    if (numbers.length === 0) {
        throw new Error("At least one number must be provided");
    }
    
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError("All arguments must be numbers");
        }
    }
    
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const count = numbers.length;
    const result = total / count;
    
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the factorial of a non-negative integer.
 * 
 * @param {number} number - The number to calculate factorial for (must be non-negative)
 * @returns {number} Factorial of the number (n!)
 * @throws {Error} If number is negative
 * @throws {TypeError} If argument is not an integer
 */
function factorial(number) {
    if (!Number.isInteger(number)) {
        throw new TypeError("Argument must be an integer");
    }
    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
        if (result > MAX_RESULT) {
            throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
        }
    }
    return result;
}

/**
 * Calculate the Greatest Common Divisor (GCD) of two integers using Euclidean algorithm.
 * 
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @returns {number} GCD of a and b
 * @throws {Error} If both numbers are zero
 * @throws {TypeError} If either argument is not an integer
 */
function greatestCommonDivisor(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError("Both arguments must be integers");
    }
    if (a === 0 && b === 0) {
        throw new Error("GCD is undefined when both numbers are zero");
    }
    
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

/**
 * Calculate the Least Common Multiple (LCM) of two integers.
 * 
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @returns {number} LCM of a and b
 * @throws {Error} If either number is zero
 * @throws {TypeError} If either argument is not an integer
 */
function leastCommonMultiple(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError("Both arguments must be integers");
    }
    if (a === 0 || b === 0) {
        throw new Error("LCM is undefined when either number is zero");
    }
    
    // LCM(a, b) = |a * b| / GCD(a, b)
    const gcd = greatestCommonDivisor(a, b);
    const result = Math.abs(a * b) / gcd;
    
    if (result > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Check if a number is prime.
 * 
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is prime, False otherwise
 * @throws {Error} If number is less than 2
 * @throws {TypeError} If argument is not an integer
 */
function isPrime(number) {
    if (!Number.isInteger(number)) {
        throw new TypeError("Argument must be an integer");
    }
    if (number < 2) {
        throw new Error("Prime numbers must be greater than or equal to 2");
    }
    
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Calculate the nth Fibonacci number.
 * 
 * @param {number} n - The position in the Fibonacci sequence (0-indexed)
 * @returns {number} The nth Fibonacci number
 * @throws {Error} If n is negative
 * @throws {TypeError} If argument is not an integer
 */
function fibonacci(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError("Argument must be an integer");
    }
    if (n < 0) {
        throw new Error("Fibonacci sequence index must be non-negative");
    }
    
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
        if (b > MAX_RESULT) {
            throw new Error(`Result ${b} exceeds maximum allowed value ${MAX_RESULT}`);
        }
    }
    return b;
}

/**
 * Calculate the mean (average) of an array of numbers.
 * 
 * @param {...number} numbers - Variable number of numbers to calculate mean for
 * @returns {number} Mean of all provided numbers
 * @throws {Error} If no numbers are provided
 * @throws {TypeError} If any argument is not a number
 */
function calculateMean(...numbers) {
    if (numbers.length === 0) {
        throw new Error("At least one number must be provided");
    }
    
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError("All arguments must be numbers");
        }
    }
    
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

/**
 * Add three numbers together.
 * 
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {number} c - Third number
 * @returns {number} Sum of a, b, and c
 * @throws {Error} If result exceeds maximum allowed value
 * @throws {TypeError} If any argument is not a number
 */
function addThreeNumbers(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || 
        isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new TypeError("All arguments must be numbers");
    }
    const result = a + b + c;
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Multiply three numbers together.
 * 
 * @param {number} a - First number (multiplicand)
 * @param {number} b - Second number (multiplier)
 * @param {number} c - Third number (multiplier)
 * @returns {number} Product of a, b, and c (a * b * c)
 * @throws {Error} If result exceeds maximum allowed value
 * @throws {TypeError} If any argument is not a number
 */
function multiplyThreeNumbers(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || 
        isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new TypeError("All arguments must be numbers");
    }
    // If any number is zero, result is zero
    if (a === 0 || b === 0 || c === 0) {
        return 0;
    }
    const result = a * b * c;
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate percentage of a number.
 * 
 * @param {number} value - The base value
 * @param {number} percentage - The percentage to calculate (e.g., 25 for 25%)
 * @returns {number} The percentage of the value
 * @throws {TypeError} If either argument is not a number
 * @throws {Error} If result exceeds maximum allowed value
 */
function percentage(value, percentage) {
    if (typeof value !== 'number' || typeof percentage !== 'number' || 
        isNaN(value) || isNaN(percentage)) {
        throw new TypeError("Both arguments must be numbers");
    }
    const result = (value * percentage) / 100;
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Find the minimum value among multiple numbers.
 * 
 * @param {...number} numbers - Variable number of numbers
 * @returns {number} The minimum value
 * @throws {Error} If no numbers are provided
 * @throws {TypeError} If any argument is not a number
 */
function min(...numbers) {
    if (numbers.length === 0) {
        throw new Error("At least one number must be provided");
    }
    
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError("All arguments must be numbers");
        }
    }
    
    return Math.min(...numbers);
}

/**
 * Find the maximum value among multiple numbers.
 * 
 * @param {...number} numbers - Variable number of numbers
 * @returns {number} The maximum value
 * @throws {Error} If no numbers are provided
 * @throws {TypeError} If any argument is not a number
 */
function max(...numbers) {
    if (numbers.length === 0) {
        throw new Error("At least one number must be provided");
    }
    
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError("All arguments must be numbers");
        }
    }
    
    return Math.max(...numbers);
}

/**
 * Calculate the sum of an array of numbers.
 * 
 * @param {...number} numbers - Variable number of numbers to sum
 * @returns {number} Sum of all numbers
 * @throws {Error} If no numbers are provided or result exceeds maximum
 * @throws {TypeError} If any argument is not a number
 */
function sum(...numbers) {
    if (numbers.length === 0) {
        throw new Error("At least one number must be provided");
    }
    
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError("All arguments must be numbers");
        }
    }
    
    const result = numbers.reduce((total, num) => total + num, 0);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the product of an array of numbers.
 * 
 * @param {...number} numbers - Variable number of numbers to multiply
 * @returns {number} Product of all numbers
 * @throws {Error} If no numbers are provided or result exceeds maximum
 * @throws {TypeError} If any argument is not a number
 */
function product(...numbers) {
    if (numbers.length === 0) {
        throw new Error("At least one number must be provided");
    }
    
    for (const num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError("All arguments must be numbers");
        }
    }
    
    // If any number is zero, result is zero
    if (numbers.some(num => num === 0)) {
        return 0;
    }
    
    const result = numbers.reduce((total, num) => total * num, 1);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate the cube root of a number.
 * 
 * @param {number} number - The number to calculate the cube root of
 * @returns {number} Cube root of the number
 * @throws {TypeError} If argument is not a number
 * @throws {Error} If result exceeds maximum allowed value
 */
function cubeRoot(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new TypeError("Argument must be a number");
    }
    const result = Math.cbrt(number);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

/**
 * Calculate logarithm base 10 of a number.
 * 
 * @param {number} number - The number to calculate logarithm for
 * @returns {number} Logarithm base 10 of the number
 * @throws {TypeError} If argument is not a number
 * @throws {Error} If number is zero or negative
 */
function log10(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new TypeError("Argument must be a number");
    }
    if (number <= 0) {
        throw new Error("Logarithm is not defined for zero or negative numbers");
    }
    const result = Math.log10(number);
    if (Math.abs(result) > MAX_RESULT) {
        throw new Error(`Result ${result} exceeds maximum allowed value ${MAX_RESULT}`);
    }
    return result;
}

// Export functions for use in Node.js modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
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
        calculateMean,
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
    };
}
