import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for Calculator class.
 */
public class CalculatorTest {
    
    private Calculator calculator;
    private static final double MAX_RESULT = 1000000.0;
    private static final double DELTA = 0.0001; // For floating point comparisons
    
    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
    }
    
    // Tests for addNumbers
    @Test
    public void testAddNumbers_PositiveNumbers() {
        double result = calculator.addNumbers(5.0, 3.0);
        assertEquals(8.0, result, DELTA);
    }
    
    @Test
    public void testAddNumbers_NegativeNumbers() {
        double result = calculator.addNumbers(-5.0, -3.0);
        assertEquals(-8.0, result, DELTA);
    }
    
    @Test
    public void testAddNumbers_MixedNumbers() {
        double result = calculator.addNumbers(5.0, -3.0);
        assertEquals(2.0, result, DELTA);
    }
    
    @Test
    public void testAddNumbers_WithZero() {
        double result = calculator.addNumbers(5.0, 0.0);
        assertEquals(5.0, result, DELTA);
    }
    
    @Test
    public void testAddNumbers_NaN() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, 5.0);
        });
        
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(5.0, Double.NaN);
        });
    }
    
    // Tests for subtractNumbers
    @Test
    public void testSubtractNumbers_PositiveNumbers() {
        double result = calculator.subtractNumbers(10.0, 3.0);
        assertEquals(7.0, result, DELTA);
    }
    
    @Test
    public void testSubtractNumbers_NegativeResult() {
        double result = calculator.subtractNumbers(3.0, 10.0);
        assertEquals(-7.0, result, DELTA);
    }
    
    @Test
    public void testSubtractNumbers_WithZero() {
        double result = calculator.subtractNumbers(5.0, 0.0);
        assertEquals(5.0, result, DELTA);
    }
    
    @Test
    public void testSubtractNumbers_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.subtractNumbers(-MAX_RESULT - 1, MAX_RESULT);
        });
    }
    
    // Tests for multiplyNumbers
    @Test
    public void testMultiplyNumbers_PositiveNumbers() {
        double result = calculator.multiplyNumbers(5.0, 3.0);
        assertEquals(15.0, result, DELTA);
    }
    
    @Test
    public void testMultiplyNumbers_NegativeNumbers() {
        double result = calculator.multiplyNumbers(-5.0, -3.0);
        assertEquals(15.0, result, DELTA);
    }
    
    @Test
    public void testMultiplyNumbers_MixedNumbers() {
        double result = calculator.multiplyNumbers(-5.0, 3.0);
        assertEquals(-15.0, result, DELTA);
    }
    
    @Test
    public void testMultiplyNumbers_WithZero() {
        double result = calculator.multiplyNumbers(5.0, 0.0);
        assertEquals(0.0, result, DELTA);
        
        result = calculator.multiplyNumbers(0.0, 5.0);
        assertEquals(0.0, result, DELTA);
    }
    
    @Test
    public void testMultiplyNumbers_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.multiplyNumbers(MAX_RESULT + 1, 2.0);
        });
    }
    
    // Tests for divideNumbers
    @Test
    public void testDivideNumbers_PositiveNumbers() {
        double result = calculator.divideNumbers(10.0, 2.0);
        assertEquals(5.0, result, DELTA);
    }
    
    @Test
    public void testDivideNumbers_DecimalResult() {
        double result = calculator.divideNumbers(7.0, 2.0);
        assertEquals(3.5, result, DELTA);
    }
    
    @Test
    public void testDivideNumbers_NegativeNumbers() {
        double result = calculator.divideNumbers(-10.0, -2.0);
        assertEquals(5.0, result, DELTA);
    }
    
    @Test
    public void testDivideNumbers_DivideByZero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.divideNumbers(10.0, 0.0);
        });
    }
    
    @Test
    public void testDivideNumbers_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.divideNumbers(MAX_RESULT * 2, 0.5);
        });
    }
    
    // Tests for addThreeNumbers
    @Test
    public void testAddThreeNumbers_PositiveNumbers() {
        double result = calculator.addThreeNumbers(1.0, 2.0, 3.0);
        assertEquals(6.0, result, DELTA);
    }
    
    @Test
    public void testAddThreeNumbers_MixedNumbers() {
        double result = calculator.addThreeNumbers(-1.0, 2.0, -3.0);
        assertEquals(-2.0, result, DELTA);
    }
    
    @Test
    public void testAddThreeNumbers_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.addThreeNumbers(MAX_RESULT, MAX_RESULT, 1.0);
        });
    }
    
    // Tests for powerNumbers
    @Test
    public void testPowerNumbers_PositiveBaseAndExponent() {
        double result = calculator.powerNumbers(2.0, 3.0);
        assertEquals(8.0, result, DELTA);
    }
    
    @Test
    public void testPowerNumbers_BaseToZero() {
        double result = calculator.powerNumbers(5.0, 0.0);
        assertEquals(1.0, result, DELTA);
    }
    
    @Test
    public void testPowerNumbers_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.powerNumbers(1000.0, 10.0);
        });
    }
    
    // Tests for moduloNumbers
    @Test
    public void testModuloNumbers_PositiveNumbers() {
        double result = calculator.moduloNumbers(10.0, 3.0);
        assertEquals(1.0, result, DELTA);
    }
    
    @Test
    public void testModuloNumbers_ExactDivision() {
        double result = calculator.moduloNumbers(10.0, 5.0);
        assertEquals(0.0, result, DELTA);
    }
    
    @Test
    public void testModuloNumbers_DivideByZero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.moduloNumbers(10.0, 0.0);
        });
    }
    
    @Test
    public void testModuloNumbers_NegativeNumbers() {
        double result = calculator.moduloNumbers(-10.0, 3.0);
        assertEquals(-1.0, result, DELTA);
    }
    
    // Tests for squareRoot
    @Test
    public void testSquareRoot_PositiveNumber() {
        double result = calculator.squareRoot(16.0);
        assertEquals(4.0, result, DELTA);
    }
    
    @Test
    public void testSquareRoot_DecimalResult() {
        double result = calculator.squareRoot(2.0);
        assertEquals(Math.sqrt(2.0), result, DELTA);
    }
    
    @Test
    public void testSquareRoot_Zero() {
        double result = calculator.squareRoot(0.0);
        assertEquals(0.0, result, DELTA);
    }
    
    @Test
    public void testSquareRoot_NegativeNumber() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.squareRoot(-1.0);
        });
    }
    
    // Tests for factorial
    @Test
    public void testFactorial_Zero() {
        long result = calculator.factorial(0);
        assertEquals(1, result);
    }
    
    @Test
    public void testFactorial_One() {
        long result = calculator.factorial(1);
        assertEquals(1, result);
    }
    
    @Test
    public void testFactorial_SmallNumber() {
        long result = calculator.factorial(5);
        assertEquals(120, result);
    }
    
    @Test
    public void testFactorial_MediumNumber() {
        long result = calculator.factorial(7);
        assertEquals(5040, result);
    }
    
    @Test
    public void testFactorial_NegativeNumber() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.factorial(-1);
        });
    }
    
    @Test
    public void testFactorial_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.factorial(100);
        });
    }
    
    // Tests for greatestCommonDivisor
    @Test
    public void testGreatestCommonDivisor_PositiveNumbers() {
        int result = calculator.greatestCommonDivisor(48, 18);
        assertEquals(6, result);
    }
    
    @Test
    public void testGreatestCommonDivisor_PrimeNumbers() {
        int result = calculator.greatestCommonDivisor(17, 13);
        assertEquals(1, result);
    }
    
    @Test
    public void testGreatestCommonDivisor_OneIsZero() {
        int result = calculator.greatestCommonDivisor(0, 5);
        assertEquals(5, result);
    }
    
    @Test
    public void testGreatestCommonDivisor_NegativeNumbers() {
        int result = calculator.greatestCommonDivisor(-48, -18);
        assertEquals(6, result);
    }
    
    @Test
    public void testGreatestCommonDivisor_MixedSigns() {
        int result = calculator.greatestCommonDivisor(48, -18);
        assertEquals(6, result);
    }
    
    @Test
    public void testGreatestCommonDivisor_BothZero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.greatestCommonDivisor(0, 0);
        });
    }
    
    @Test
    public void testGreatestCommonDivisor_SameNumber() {
        int result = calculator.greatestCommonDivisor(15, 15);
        assertEquals(15, result);
    }
    
    // Tests for leastCommonMultiple
    @Test
    public void testLeastCommonMultiple_PositiveNumbers() {
        long result = calculator.leastCommonMultiple(12, 18);
        assertEquals(36, result);
    }
    
    @Test
    public void testLeastCommonMultiple_PrimeNumbers() {
        long result = calculator.leastCommonMultiple(5, 7);
        assertEquals(35, result);
    }
    
    @Test
    public void testLeastCommonMultiple_OneIsOne() {
        long result = calculator.leastCommonMultiple(1, 5);
        assertEquals(5, result);
    }
    
    @Test
    public void testLeastCommonMultiple_NegativeNumbers() {
        // LCM should work with negative numbers (uses absolute values internally)
        long result = calculator.leastCommonMultiple(-12, -18);
        assertEquals(36, result);
    }
    
    @Test
    public void testLeastCommonMultiple_MixedSigns() {
        // LCM should work with mixed signs (uses absolute values internally)
        long result = calculator.leastCommonMultiple(-12, 18);
        assertEquals(36, result);
    }
    
    @Test
    public void testLeastCommonMultiple_FirstIsZero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.leastCommonMultiple(0, 5);
        });
    }
    
    @Test
    public void testLeastCommonMultiple_SecondIsZero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.leastCommonMultiple(5, 0);
        });
    }
    
    @Test
    public void testLeastCommonMultiple_SameNumber() {
        long result = calculator.leastCommonMultiple(10, 10);
        assertEquals(10, result);
    }
    
    // Tests for isPrime
    @Test
    public void testIsPrime_SmallPrime() {
        assertTrue(calculator.isPrime(2));
    }
    
    @Test
    public void testIsPrime_MediumPrime() {
        assertTrue(calculator.isPrime(17));
    }
    
    @Test
    public void testIsPrime_LargePrime() {
        assertTrue(calculator.isPrime(97));
    }
    
    @Test
    public void testIsPrime_EvenComposite() {
        assertFalse(calculator.isPrime(4));
    }
    
    @Test
    public void testIsPrime_OddComposite() {
        assertFalse(calculator.isPrime(15));
    }
    
    @Test
    public void testIsPrime_One() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.isPrime(1);
        });
    }
    
    @Test
    public void testIsPrime_Zero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.isPrime(0);
        });
    }
    
    @Test
    public void testIsPrime_NegativeNumber() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.isPrime(-5);
        });
    }
    
    // Tests for fibonacci
    @Test
    public void testFibonacci_Zero() {
        long result = calculator.fibonacci(0);
        assertEquals(0, result);
    }
    
    @Test
    public void testFibonacci_One() {
        long result = calculator.fibonacci(1);
        assertEquals(1, result);
    }
    
    @Test
    public void testFibonacci_SmallNumber() {
        long result = calculator.fibonacci(5);
        assertEquals(5, result);
    }
    
    @Test
    public void testFibonacci_MediumNumber() {
        long result = calculator.fibonacci(10);
        assertEquals(55, result);
    }
    
    @Test
    public void testFibonacci_LargerNumber() {
        long result = calculator.fibonacci(20);
        assertEquals(6765, result);
    }
    
    @Test
    public void testFibonacci_NegativeNumber() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.fibonacci(-1);
        });
    }
    
    @Test
    public void testFibonacci_ExceedsMaxResult() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.fibonacci(100);
        });
    }
    
    // Tests for roundToDecimal
    @Test
    public void testRoundToDecimal_ZeroDecimals() {
        double result = calculator.roundToDecimal(3.7, 0);
        assertEquals(4.0, result, DELTA);
    }
    
    @Test
    public void testRoundToDecimal_OneDecimal() {
        double result = calculator.roundToDecimal(3.14159, 1);
        assertEquals(3.1, result, DELTA);
    }
    
    @Test
    public void testRoundToDecimal_TwoDecimals() {
        double result = calculator.roundToDecimal(3.14159, 2);
        assertEquals(3.14, result, DELTA);
    }
    
    @Test
    public void testRoundToDecimal_ThreeDecimals() {
        double result = calculator.roundToDecimal(3.14159, 3);
        assertEquals(3.142, result, DELTA);
    }
    
    @Test
    public void testRoundToDecimal_NegativeNumber() {
        double result =