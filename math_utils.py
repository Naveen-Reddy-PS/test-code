"""Mathematical utility functions for advanced calculations."""


def factorial(n: int) -> int:
    """
    Calculate the factorial of a number (n!).
    
    Args:
        n: Non-negative integer
    
    Returns:
        Factorial of n (n!)
    
    Raises:
        ValueError: If n is negative
        TypeError: If n is not an integer
    """
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


def fibonacci(n: int) -> int:
    """
    Calculate the nth Fibonacci number.
    
    Args:
        n: Non-negative integer (position in Fibonacci sequence)
    
    Returns:
        The nth Fibonacci number
    
    Raises:
        ValueError: If n is negative
        TypeError: If n is not an integer
    """
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    if n < 0:
        raise ValueError("Fibonacci is not defined for negative numbers")
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b


def is_prime(n: int) -> bool:
    """
    Check if a number is prime.
    
    Args:
        n: Integer to check
    
    Returns:
        True if n is prime, False otherwise
    
    Raises:
        ValueError: If n is less than 2
        TypeError: If n is not an integer
    """
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    # Check divisibility up to sqrt(n)
    import math
    sqrt_n = int(math.sqrt(n)) + 1
    for i in range(3, sqrt_n, 2):
        if n % i == 0:
            return False
    return True


def gcd(a: int, b: int) -> int:
    """
    Calculate the Greatest Common Divisor (GCD) of two numbers using Euclidean algorithm.
    
    Args:
        a: First integer
        b: Second integer
    
    Returns:
        GCD of a and b
    
    Raises:
        TypeError: If either argument is not an integer
    """
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError("Both arguments must be integers")
    
    a, b = abs(a), abs(b)
    while b:
        a, b = b, a % b
    return a


def lcm(a: int, b: int) -> int:
    """
    Calculate the Least Common Multiple (LCM) of two numbers.
    
    Args:
        a: First integer
        b: Second integer
    
    Returns:
        LCM of a and b
    
    Raises:
        ValueError: If either number is zero
        TypeError: If either argument is not an integer
    """
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError("Both arguments must be integers")
    if a == 0 or b == 0:
        raise ValueError("LCM is not defined for zero")
    
    return abs(a * b) // gcd(a, b)


def sum_of_digits(n: int) -> int:
    """
    Calculate the sum of digits in a number.
    
    Args:
        n: Integer number
    
    Returns:
        Sum of all digits in n
    
    Raises:
        TypeError: If n is not an integer
    """
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    
    n = abs(n)
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total


def is_perfect_number(n: int) -> bool:
    """
    Check if a number is a perfect number (sum of its proper divisors equals the number).
    
    Args:
        n: Integer to check
    
    Returns:
        True if n is a perfect number, False otherwise
    
    Raises:
        ValueError: If n is less than 1
        TypeError: If n is not an integer
    """
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    if n < 1:
        return False
    
    divisors_sum = 0
    for i in range(1, n):
        if n % i == 0:
            divisors_sum += i
    
    return divisors_sum == n
