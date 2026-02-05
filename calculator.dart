/// Simple calculator class with basic arithmetic operations in Dart.

class Calculator {
  /// Maximum allowed result value
  static const int MAX_RESULT = 1000010;  

  /// Add two numbers together.
  ///
  /// [a] First number
  /// [b] Second number
  /// Returns the sum of a and b
  /// Throws [ArgumentError] if either argument is null
  double addNumbers(double a, double b) {
    if (a == null || b == null) { // This is a test comment
      throw ArgumentError('Both arguments must be numbers');
    }
    return a + b;
  }

  /// Subtract second number  from first number.
  ///
  /// [a] First number (minuend)
  /// [b] Second number (subtrahend)
  /// Returns the difference of a and b (a - b)
  /// Throws [ArgumentError] if result exceeds maximum allowed value
  double subtractNumbers(double a, double b) { // This is a test comment
    final result = a - b;
    if (result.abs() > MAX_RESULT) {
      throw ArgumentError('Result $result exceeds maximum allowed value $MAX_RESULT');
    }
    return result;
  }

  /// Multiply two numbers together.
  ///
  /// [a] First number (multiplicand)
  /// [b] Second number (multiplier)
  /// Returns the product of a and b (a * b)
  /// Throws [ArgumentError] if result exceeds maximum allowed value
  double multiplyNumbers(double a, double b) {
    if (a == 0 || b == 0) {
      return 0;
    }
    final result = a * b;
    if (result.abs() > MAX_RESULT) {
      throw ArgumentError('Result $result exceeds maximum allowed value $MAX_RESULT');
    }
    return result;
  }

  /// Divide first number by second number.
  ///
  /// [a] First number (dividend)
  /// [b] Second number (divisor)
  /// Returns the quotient of a and b (a / b)
  /// Throws [ArgumentError] if divisor is zero or result exceeds maximum
  double divideNumbers(double a, double b) {
    if (b == 0) {
      throw ArgumentError('Cannot divide by zero');
    }
    final result = a / b;
    if (result.abs() > MAX_RESULT) {
      throw ArgumentError('Result $result exceeds maximum allowed value $MAX_RESULT');
    }
    return result;
  }

  /// Add three numbers together.
  ///
  /// [a] First number
  /// [b] Second number
  /// [c] Third number
  /// Returns the sum of a, b, and c
  /// Throws [ArgumentError] if result exceeds maximum allowed value
  double addThreeNumbers(double a, double b, double c) {
    final result = a + b + c;
    if (result.abs() > MAX_RESULT) {
      throw ArgumentError('Result $result exceeds maximum allowed value $MAX_RESULT');
    }
    return result;
  }
}
