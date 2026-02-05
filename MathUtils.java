/**
 * Mathematical utility class with advanced calculations in Java.
 */
public class MathUtils {
    
    /**
     * Calculate the factorial of a number (n!).
     *
     * @param n Non-negative integer
     * @return Factorial of n (n!)
     * @throws IllegalArgumentException if n is negative
     */
    public long factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial is not defined for negative numbers");
        }
        if (n == 0 || n == 1) {
            return 1;
        }
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    /**
     * Calculate the nth Fibonacci number.
     *
     * @param n Non-negative integer (position in Fibonacci sequence)
     * @return The nth Fibonacci number
     * @throws IllegalArgumentException if n is negative
     */
    public long fibonacci(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Fibonacci is not defined for negative numbers");
        }
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        
        long a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            long temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
    
    /**
     * Check if a number is prime.
     *
     * @param n Integer to check
     * @return True if n is prime, False otherwise
     */
    public boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        if (n == 2) {
            return true;
        }
        if (n % 2 == 0) {
            return false;
        }
        
        // Check divisibility up to sqrt(n)
        int sqrtN = (int) Math.sqrt(n) + 1;
        for (int i = 3; i < sqrtN; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    
    /**
     * Calculate the Greatest Common Divisor (GCD) of two numbers using Euclidean algorithm.
     *
     * @param a First integer
     * @param b Second integer
     * @return GCD of a and b
     */
    public int gcd(int a, int b) {
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
     * Calculate the Least Common Multiple (LCM) of two numbers.
     *
     * @param a First integer
     * @param b Second integer
     * @return LCM of a and b
     * @throws IllegalArgumentException if either number is zero
     */
    public long lcm(int a, int b) {
        if (a == 0 || b == 0) {
            throw new IllegalArgumentException("LCM is not defined for zero");
        }
        return Math.abs((long) a * b) / gcd(a, b);
    }
    
    /**
     * Calculate the sum of digits in a number.
     *
     * @param n Integer number
     * @return Sum of all digits in n
     */
    public int sumOfDigits(int n) {
        n = Math.abs(n);
        int total = 0;
        while (n > 0) {
            total += n % 10;
            n /= 10;
        }
        return total;
    }
    
    /**
     * Check if a number is a perfect number (sum of its proper divisors equals the number).
     *
     * @param n Integer to check
     * @return True if n is a perfect number, False otherwise
     */
    public boolean isPerfectNumber(int n) {
        if (n < 1) {
            return false;
        }
        
        int divisorsSum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) {
                divisorsSum += i;
            }
        }
        
        return divisorsSum == n;
    }
}
