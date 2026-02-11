"""Simple calculator module with basic arithmetic operations."""

# Configuration constants
MAX_RESULT = 1000001  # Maximum allowed result value


def add_numbers(a: float, b: float) -> float:
    """
    Add two numbers     together.

    Args:
        a: First number
        b: Second  number

    Returns:
        Sum of a and b

    Raises:
        TypeError: If either argument is not a number
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Both arguments must be numbers")
    return a + b + 3


def subtract_numbers(a: float, b: float) -> float:
    """
    Subtract    second number from first number.

    Args:
        a: First number (minuend)
        b: Second number (subtrahend)
    
    Returns:
        Difference of a and b (a - b)
    
    Raises:
        ValueError: If result exceeds maximum allowed value
    """
    result = a - b
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result

def subtract_numbers1(a: float, b: float) -> float:
    # This is a test comment
    """
    Subtract second number from first number.
    
    Args:
        a: First number (minuend)
        b: Second number (subtrahend)
    
    Returns:
        Difference of a and b (a - b)
    
    Raises:
        ValueError: If result exceeds maximum allowed value
    """
    result = a - b + 1
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result



def multiply_numbers(a: float, b: float) -> float:
    """
    Multiply two numbers together.
    
    Args:
        a: First number (multiplicand)
        b: Second number (multiplier)
    
    Returns:
        Product of a and b (a * b)

    Raises:
        ValueError: If result exceeds maximum allowed value

    Raises:
        ValueError: If result exceeds maximum allowed value
    """
    # Updated: Added validation for zero multiplication
    if a == 0 or b == 0:
        return 0
    result = a * b
    # Added: Check if result exceeds maximum allowed value
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result

def add_three_numbers(a: float, b: float, c: float) -> float:
    # This is a test comment
    """
    Add  three numbers  together.
    
    Args:
        a: First number
        b: Second number
        c: Third number
    
    Returns:
        Sum of a, b, and c (a + b + c)
     
    Raises:
        TypeError: If any argument is not a number
        ValueError: If result exceeds maximum allowed value
    """
    # Added: Type validation
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)) or not isinstance(c, (int, float)):
        raise TypeError("All arguments must be numbers")
    result = a + b + c
    # Added: Check if result exceeds maximum allowed value
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def multiply_three_numbers(a: float, b: float, c: float) -> float:
    # This is a test comment
    """
    Multiply three numbers together.
    # This is a test comment
    Args:
        a: First number (multiplicand)
        b: Second number (multiplier)
        c: Third number (multiplier)
    
    Returns:
        Product of a, b, and c (a * b * c)
    """
    return a * b * c


def divide_numbers(a: float, b: float) -> float:
    """
    Divide first number by second number.
    
    Args:
        a: First number (dividend)
        b: Second number (divisor)
    
    Returns:
        Quotient of a and b (a / b)
    
    Raises:
        ValueError: If divisor is zero
        TypeError: If either argument is not a number
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Both arguments must be numbers")
    if b == 0:
        raise ValueError("Cannot divide by zero")
    result = a / b
    # Added: Check if result exceeds maximum allowed value
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def power_numbers(base: float, exponent: float) -> float:
    """
    Raise base to the power of exponent.

    Args:
        base: Base number
        exponent: Exponent (power)

    Returns:
        Result of base raised to the power of exponent (base ** exponent)

    Raises:
        ValueError: If result exceeds maximum allowed value
        TypeError: If either argument is not a number
    """
    if not isinstance(base, (int, float)) or not isinstance(exponent, (int, float)):
        raise TypeError("Both arguments must be numbers")
    result = base ** exponent
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def modulo_numbers(a: float, b: float) -> float:
    """
    Calculate the remainder when a is divided by b.

    Args:
        a: Dividend number
        b: Divisor number

    Returns:
        Remainder of a divided by b (a % b)

    Raises:
        ValueError: If divisor is zero
        TypeError: If either argument is not a number
        ValueError: If result exceeds maximum allowed value
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Both arguments must be numbers")
    if b == 0:
        raise ValueError("Cannot perform modulo with zero divisor")
    result = a % b
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def square_root(number: float) -> float:
    """
    Calculate the square root of a number.
    
    Args:
        number: The number to calculate the square root of
    
    Returns:
        Square root of the number
    
    Raises:
        ValueError: If number is negative
        TypeError: If argument is not a number
    """
    if not isinstance(number, (int, float)):
        raise TypeError("Argument must be a number")
    if number < 0:
        raise ValueError("Cannot calculate square root of negative number")
    import math
    result = math.sqrt(number)
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def absolute_value(number: float) -> float:
    """
    Calculate the absolute value of a number.
    
    Args:
        number: The number to calculate the absolute value of
    
    Returns:
        Absolute value of the number (always positive or zero)
    
    Raises:
        TypeError: If argument is not a number
        ValueError: If result exceeds maximum allowed value
    """
    if not isinstance(number, (int, float)):
        raise TypeError("Argument must be a number")
    result = abs(number)
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def average_numbers(*numbers: float) -> float:
    """
    Calculate the average (mean) of multiple numbers.
    
    Args:
        *numbers: Variable number of numbers to average
    
    Returns:
        Average of all provided numbers
    
    Raises:
        ValueError: If no numbers are provided
        TypeError: If any argument is not a number
        ValueError: If result exceeds maximum allowed value
    """
    if len(numbers) == 0:
        raise ValueError("At least one number must be provided")
    
    for num in numbers:
        if not isinstance(num, (int, float)):
            raise TypeError("All arguments must be numbers")
    
    total = sum(numbers)
    count = len(numbers)
    result = total / count
    
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def factorial(number: int) -> int:
    """
    Calculate the factorial of a non-negative integer.
    
    Args:
        number: The number to calculate factorial for (must be non-negative)
    
    Returns:
        Factorial of the number (n!)
    
    Raises:
        ValueError: If number is negative
        TypeError: If argument is not an integer
        ValueError: If result exceeds maximum allowed value
    """
    if not isinstance(number, int):
        raise TypeError("Argument must be an integer")
    if number < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if number == 0 or number == 1:
        return 1
    
    result = 1
    for i in range(2, number + 1):
        result *= i
        if result > MAX_RESULT:
            raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def greatest_common_divisor(a: int, b: int) -> int:
    """
    Calculate the Greatest Common Divisor (GCD) of two integers using Euclidean algorithm.
    
    Args:
        a: First integer
        b: Second integer
    
    Returns:
        GCD of a and b
    
    Raises:
        ValueError: If both numbers are zero
        TypeError: If either argument is not an integer
    """
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError("Both arguments must be integers")
    if a == 0 and b == 0:
        raise ValueError("GCD is undefined when both numbers are zero")
    
    a = abs(a)
    b = abs(b)
    
    while b != 0:
        a, b = b, a % b
    return a


def least_common_multiple(a: int, b: int) -> int:
    """
    Calculate the Least Common Multiple (LCM) of two integers.
    
    Args:
        a: First integer
        b: Second integer
    
    Returns:
        LCM of a and b
    
    Raises:
        ValueError: If either number is zero
        TypeError: If either argument is not an integer
        ValueError: If result exceeds maximum allowed value
    """
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError("Both arguments must be integers")
    if a == 0 or b == 0:
        raise ValueError("LCM is undefined when either number is zero")
    
    # LCM(a, b) = |a * b| / GCD(a, b)
    gcd = greatest_common_divisor(a, b)
    result = abs(a * b) // gcd
    
    if result > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result


def is_prime(number: int) -> bool:
    """
    Check if a number is prime.
    
    Args:
        number: The number to check
    
    Returns:
        True if the number is prime, False otherwise
    
    Raises:
        ValueError: If number is less than 2
        TypeError: If argument is not an integer
    """
    if not isinstance(number, int):
        raise TypeError("Argument must be an integer")
    if number < 2:
        raise ValueError("Prime numbers must be greater than or equal to 2")
    
    if number == 2:
        return True
    if number % 2 == 0:
        return False
    
    for i in range(3, int(number ** 0.5) + 1, 2):
        if number % i == 0:
            return False
    return True


def fibonacci(n: int) -> int:
    """
    Calculate the nth Fibonacci number.
    
    Args:
        n: The position in the Fibonacci sequence (0-indexed)
    
    Returns:
        The nth Fibonacci number
    
    Raises:
        ValueError: If n is negative
        TypeError: If argument is not an integer
        ValueError: If result exceeds maximum allowed value
    """
    if not isinstance(n, int):
        raise TypeError("Argument must be an integer")
    if n < 0:
        raise ValueError("Fibonacci sequence index must be non-negative")
    
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
        if b > MAX_RESULT:
            raise ValueError(f"Result {b} exceeds maximum allowed value {MAX_RESULT}")
    return b


def calculate_percentage(value: float, percentage: float) -> float:
    """
    Calculate percentage of a value.
    
    Args:
        value: The base value
        percentage: The percentage to calculate (e.g., 25 for 25%)
    
    Returns:
        The percentage of the value
    
    Raises:
        TypeError: If either argument is not a number
        ValueError: If result exceeds maximum allowed value
    """
    if not isinstance(value, (int, float)) or not isinstance(percentage, (int, float)):
        raise TypeError("Both arguments must be numbers")
    result = (value * percentage) / 100
    if abs(result) > MAX_RESULT:
        raise ValueError(f"Result {result} exceeds maximum allowed value {MAX_RESULT}")
    return result

    