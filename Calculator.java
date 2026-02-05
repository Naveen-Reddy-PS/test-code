/**
 * Simple calculator class with basic arithmetic operations in Java.
 */
public class Calculator {
    /**
     * Maximum allowed result value
     */
    private static final double MAX_RESULT = 1000000.0;

    /**
     * Add two numbers together.
     *
     * @param a First number
     * @param b Second number
     * @return Sum of a and b
     * @throws IllegalArgumentException if either argument is null
     */
    public double addNumbers(double a, double b) {
        if (Double.isNaN(a) || Double.isNaN(b)) {
            throw new IllegalArgumentException("Both arguments must be numbers");
        }
        return a + b;
    }


    /**
     * Subtract second number from first number.
     *
     * @param a First number (minuend)
     * @param b Second number (subtrahend)
     * @return Difference of a and b (a - b)
     * @throws IllegalArgumentException if result exceeds maximum allowed value
     */
    public double subtractNumbers(double a, double b) {
        double result = a - b;
        if (Math.abs(result) > MAX_RESULT) {
            throw new IllegalArgumentException(
                String.format("Result %.2f exceeds maximum allowed value %.2f", result, MAX_RESULT)
            );
        }
        return result;
    }

    /**
     * Multiply two numbers together.
     *
     * @param a First number (multiplicand)
     * @param b Second number (multiplier)
     * @return Product of a and b (a * b)
     * @throws IllegalArgumentException if result exceeds maximum allowed value
     */
    public double multiplyNumbers(double a, double b) {
        if (a == 0 || b == 0) {
            return 0;
        }
        double result = a * b;
        if (Math.abs(result) > MAX_RESULT) {
            throw new IllegalArgumentException(
                String.format("Result %.2f exceeds maximum allowed value %.2f", result, MAX_RESULT)
            );
        }
        return result;
    }

    /**
     * Divide first number by second number.
     *
     * @param a First number (dividend)
     * @param b Second number (divisor)
     * @return Quotient of a and b (a / b)
     * @throws IllegalArgumentException if divisor is zero or result exceeds maximum
     */
    public double divideNumbers(double a, double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        double result = a / b;
        if (Math.abs(result) > MAX_RESULT) {
            throw new IllegalArgumentException(
                String.format("Result %.2f exceeds maximum allowed value %.2f", result, MAX_RESULT)
            );
        }
        return result;
    }

    /**
     * Add three numbers together.
     *
     * @param a First number
     * @param b Second number
     * @param c Third number
     * @return Sum of a, b, and c
     * @throws IllegalArgumentException if result exceeds maximum allowed value
     */
    public double addThreeNumbers(double a, double b, double c) {
        double result = a + b + c;
        if (Math.abs(result) > MAX_RESULT) {
            throw new IllegalArgumentException(
                String.format("Result %.2f exceeds maximum allowed value %.2f", result, MAX_RESULT)
            );
        }
        return result;
    }

    /**
     * Calculate the power of a number.
     *
     * @param base Base number
     * @param exponent Exponent (power)
     * @return Result of base raised to the power of exponent
     * @throws IllegalArgumentException if result exceeds maximum allowed value
     */
    public double powerNumbers(double base, double exponent) {
        double result = Math.pow(base, exponent);
        if (Math.abs(result) > MAX_RESULT) {
            throw new IllegalArgumentException(
                String.format("Result %.2f exceeds maximum allowed value %.2f", result, MAX_RESULT)
            );
        }
        return result;
    }
 
    /**
     * Calculate the remainder when dividing first number by second number.
     *
     * @param a First number (dividend)
     * @param b Second number (divisor)
     * @return Remainder of a divided by b (a % b)
     * @throws IllegalArgumentException if divisor is zero
     */
    public double moduloNumbers(double a, double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot calculate modulo with zero divisor");
        }
        return a % b;
    }

    /**
     * Calculate the square root of a number.
     *
     * @param number The number to find the square root of
     * @return Square root of the number
     * @throws IllegalArgumentException if number is negative
     */
    public double squareRoot(double number) {
        if (number < 0) {
            throw new IllegalArgumentException("Cannot calculate square root of negative number");
        }
        return Math.sqrt(number);
    }

    /**
     * Calculate the factorial of a non-negative integer.
     *
     * @param number The number to calculate factorial for (must be non-negative)
     * @return Factorial of the number (n!)
     * @throws IllegalArgumentException if number is negative or result exceeds maximum
     */
    public long factorial(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("Factorial is not defined for negative numbers");
        }
        if (number == 0 || number == 1) {
            return 1;
        }
        long result = 1;
        for (int i = 2; i <= number; i++) {
            result *= i;
            if (result > (long) MAX_RESULT) {
                throw new IllegalArgumentException(
                    String.format("Result %d exceeds maximum allowed value %.2f", result, MAX_RESULT)
                );
            }
        }
        return result;
    }

    /**
     * Calculate the Greatest Common Divisor (GCD) of two integers using Euclidean algorithm.
     *
     * @param a First integer
     * @param b Second integer
     * @return GCD of a and b
     * @throws IllegalArgumentException if both numbers are zero
     */
    public int greatestCommonDivisor(int a, int b) {
        if (a == 0 && b == 0) {
            throw new IllegalArgumentException("GCD is undefined when both numbers are zero");
        }
        a = Math.abs(a);
        b = Math.abs(b);
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    /**
     * Calculate the Least Common Multiple (LCM) of two integers.
     *
     * @param a First integer
     * @param b Second integer
     * @return LCM of a and b
     * @throws IllegalArgumentException if either number is zero or result exceeds maximum
     */
    public long leastCommonMultiple(int a, int b) {
        if (a == 0 || b == 0) {
            throw new IllegalArgumentException("LCM is undefined when either number is zero");
        }
        // LCM(a, b) = |a * b| / GCD(a, b)
        int gcd = greatestCommonDivisor(a, b);
        long result = Math.abs((long) a * (long) b) / gcd;
        if (result > (long) MAX_RESULT) {
            throw new IllegalArgumentException(
                String.format("Result %d exceeds maximum allowed value %.2f", result, MAX_RESULT)
            );
        }
        return result;
    }

    /**
     * Check if a number is prime.
     *
     * @param number The number to check
     * @return True if the number is prime, False otherwise
     * @throws IllegalArgumentException if number is less than 2
     */
    public boolean isPrime(int number) {
        if (number < 2) {
            throw new IllegalArgumentException("Prime numbers must be greater than or equal to 2");
        }
        if (number == 2) {
            return true;
        }
        if (number % 2 == 0) {
            return false;
        }
        for (int i = 3; i * i <= number; i += 2) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Calculate the nth Fibonacci number.
     *
     * @param n The position in the Fibonacci sequence (0-indexed)
     * @return The nth Fibonacci number
     * @throws IllegalArgumentException if n is negative or result exceeds maximum
     */
    public long fibonacci(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Fibonacci sequence index must be non-negative");
        }
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        long a = 0;
        long b = 1;
        for (int i = 2; i <= n; i++) {
            long temp = a + b;
            if (temp > (long) MAX_RESULT) {
                throw new IllegalArgumentException(
                    String.format("Result %d exceeds maximum allowed value %.2f", temp, MAX_RESULT)
                );
            }
            a = b;
            b = temp;
        }
        return b;
    }

    /**
     * Round a number to a specified number of decimal places.
     *
     * @param number The number to round
     * @param decimals Number of decimal places (must be non-negative)
     * @return Rounded number
     * @throws IllegalArgumentException if decimals is negative
     */
    public double roundToDecimal(double number, int decimals) {
        if (decimals < 0) {
            throw new IllegalArgumentException("Number of decimal places must be non-negative");
        }
        if (decimals == 0) {
            return Math.round(number);
        }
        double multiplier = Math.pow(10, decimals);
        return Math.round(number * multiplier) / multiplier;
    }
}
