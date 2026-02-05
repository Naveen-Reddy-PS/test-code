import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void testAddNumbers_validInput() {
        assertEquals(5.0, calculator.addNumbers(2.0, 3.0), 0.001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        assertEquals(-1.0, calculator.addNumbers(-2.0, 1.0), 0.001);
    }

    @Test
    public void testAddNumbers_zeroValues() {
        assertEquals(0.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(2000000.0, calculator.addNumbers(1000000.0, 1000000.0), 0.001);
    }

    @Test
    public void testAddNumbers_decimalValues() {
        assertEquals(3.5, calculator.addNumbers(1.5, 2.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputA() {
        calculator.addNumbers(Double.NaN, 2.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputB() {
        calculator.addNumbers(2.0, Double.NaN);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputBoth() {
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    @Test
    public void testSubtractNumbers_validInput() {
        assertEquals(1.0, calculator.subtractNumbers(3.0, 2.0), 0.001);
    }
    
    @Test
    public void testSubtractNumbers_negativeResult() {
        assertEquals(-1.0, calculator.subtractNumbers(2.0, 3.0), 0.001);
    }

    @Test
    public void testSubtractNumbers_zeroResult() {
        assertEquals(0.0, calculator.subtractNumbers(2.0, 2.0), 0.001);
    }

     @Test
    public void testSubtractNumbers_largeNumbers() {
        assertEquals(999999.0, calculator.subtractNumbers(1000000.0, 1.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testSubtractNumbers_exceedsMaxResultPositive() {
        calculator.subtractNumbers(1000001.0, 0.0);
    }
     @Test
    public void testMultiplyNumbers_validInput() {
        assertEquals(6.0, calculator.multiplyNumbers(2.0, 3.0), 0.001);
    }

    @Test
    public void testMultiplyNumbers_negativeNumbers() {
        assertEquals(-6.0, calculator.multiplyNumbers(-2.0, 3.0), 0.001);
    }

    @Test
    public void testMultiplyNumbers_zeroValue() {
        assertEquals(0.0, calculator.multiplyNumbers(2.0, 0.0), 0.001);
    }

    @Test
    public void testMultiplyNumbers_oneValue() {
        assertEquals(2.0, calculator.multiplyNumbers(2.0, 1.0), 0.001);
    }

    @Test
    public void testMultiplyNumbers_decimalValues() {
        assertEquals(3.0, calculator.multiplyNumbers(1.5, 2.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testMultiplyNumbers_exceedsMaxResult() {
        calculator.multiplyNumbers(1000.0, 1001.0);
    }
    
    @Test
    public void testDivideNumbers_validInput() {
        assertEquals(2.0, calculator.divideNumbers(6.0, 3.0), 0.001);
    }

    @Test
    public void testDivideNumbers_negativeNumbers() {
        assertEquals(-2.0, calculator.divideNumbers(-6.0, 3.0), 0.001);
    }

    @Test
    public void testDivideNumbers_decimalValues() {
        assertEquals(2.5, calculator.divideNumbers(5.0, 2.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideNumbers_divideByZero() {
        calculator.divideNumbers(5.0, 0.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideNumbers_exceedsMaxResult() {
        calculator.divideNumbers(10000000.0, 0.5);
    }
    
    @Test
    public void testAddThreeNumbers_validInput() {
        assertEquals(6.0, calculator.addThreeNumbers(1.0, 2.0, 3.0), 0.001);
    }

    @Test
    public void testAddThreeNumbers_negativeNumbers() {
        assertEquals(0.0, calculator.addThreeNumbers(-1.0, 2.0, -1.0), 0.001);
    }

    @Test
    public void testAddThreeNumbers_zeroValues() {
        assertEquals(0.0, calculator.addThreeNumbers(0.0, 0.0, 0.0), 0.001);
    }

    @Test
    public void testAddThreeNumbers_decimalValues() {
        assertEquals(6.5, calculator.addThreeNumbers(1.5, 2.0, 3.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddThreeNumbers_exceedsMaxResult() {
        calculator.addThreeNumbers(500000.0, 500000.0, 1.0);
    }
    
    @Test
    public void testPowerNumbers_validInput() {
        assertEquals(8.0, calculator.powerNumbers(2.0, 3.0), 0.001);
    }

    @Test
    public void testPowerNumbers_zeroExponent() {
        assertEquals(1.0, calculator.powerNumbers(5.0, 0.0), 0.001);
    }

    @Test
    public void testPowerNumbers_oneExponent() {
        assertEquals(5.0, calculator.powerNumbers(5.0, 1.0), 0.001);
    }

    @Test
    public void testPowerNumbers_negativeBase() {
        assertEquals(-8.0, calculator.powerNumbers(-2.0, 3.0), 0.001);
    }

    @Test
    public void testPowerNumbers_decimalExponent() {
        assertEquals(2.828, calculator.powerNumbers(2.0, 1.5), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testPowerNumbers_exceedsMaxResult() {
        calculator.powerNumbers(100.0, 4.0);
    }
    
    @Test
    public void testModuloNumbers_validInput() {
        assertEquals(1.0, calculator.moduloNumbers(5.0, 2.0), 0.001);
    }

    @Test
    public void testModuloNumbers_zeroRemainder() {
        assertEquals(0.0, calculator.moduloNumbers(6.0, 3.0), 0.001);
    }

    @Test
    public void testModuloNumbers_negativeDividend() {
        assertEquals(-1.0, calculator.moduloNumbers(-5.0, 2.0), 0.001);
    }

    @Test
    public void testModuloNumbers_negativeDivisor() {
        assertEquals(1.0, calculator.moduloNumbers(5.0, -2.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testModuloNumbers_divideByZero() {
        calculator.moduloNumbers(5.0, 0.0);
    }
    
    @Test
    public void testSquareRoot_validInput() {
        assertEquals(2.0, calculator.squareRoot(4.0), 0.001);
    }

    @Test
    public void testSquareRoot_zeroValue() {
        assertEquals(0.0, calculator.squareRoot(0.0), 0.001);
    }

    @Test
    public void testSquareRoot_decimalValue() {
        assertEquals(1.414, calculator.squareRoot(2.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testSquareRoot_negativeNumber() {
        calculator.squareRoot(-4.0);
    }
    
    @Test
    public void testFactorial_validInput() {
        assertEquals(6, calculator.factorial(3));
    }

    @Test
    public void testFactorial_zeroValue() {
        assertEquals(1, calculator.factorial(0));
    }

    @Test
    public void testFactorial_oneValue() {
        assertEquals(1, calculator.factorial(1));
    }

    @Test
    public void testFactorial_largeValue() {
        assertEquals(3628800, calculator.factorial(10));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testFactorial_negativeNumber() {
        calculator.factorial(-1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testFactorial_exceedsMaxResult() {
        calculator.factorial(14);
    }
    
    @Test
    public void testGreatestCommonDivisor_validInput() {
        assertEquals(6, calculator.greatestCommonDivisor(12, 18));
    }

    @Test
    public void testGreatestCommonDivisor_coprimeNumbers() {
        assertEquals(1, calculator.greatestCommonDivisor(7, 13));
    }

    @Test
    public void testGreatestCommonDivisor_oneNumberIsZero() {
        assertEquals(5, calculator.greatestCommonDivisor(5, 0));
    }

    @Test
    public void testGreatestCommonDivisor_bothNumbersAreSame() {
        assertEquals(10, calculator.greatestCommonDivisor(10, 10));
    }

    @Test
    public void testGreatestCommonDivisor_negativeNumbers() {
        assertEquals(6, calculator.greatestCommonDivisor(-12, 18));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testGreatestCommonDivisor_bothNumbersAreZero() {
        calculator.greatestCommonDivisor(0, 0);
    }
    
    @Test
    public void testLeastCommonMultiple_validInput() {
        assertEquals(36, calculator.leastCommonMultiple(12, 18));
    }

    @Test
    public void testLeastCommonMultiple_coprimeNumbers() {
        assertEquals(91, calculator.leastCommonMultiple(7, 13));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testLeastCommonMultiple_oneNumberIsZero() {
        calculator.leastCommonMultiple(5, 0);
    }

    @Test
    public void testLeastCommonMultiple_bothNumbersAreSame() {
        assertEquals(10, calculator.leastCommonMultiple(10, 10));
    }

    @Test
    public void testLeastCommonMultiple_largeNumbers() {
        assertEquals(999990, calculator.leastCommonMultiple(99999, 10));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testLeastCommonMultiple_exceedsMaxResult() {
        calculator.leastCommonMultiple(100000, 11);
    }
    
    @Test
    public void testIsPrime_validInput() {
        assertTrue(calculator.isPrime(7));
    }

    @Test
    public void testIsPrime_compositeNumber() {
        assertFalse(calculator.isPrime(10));
    }

    @Test
    public void testIsPrime_twoValue() {
        assertTrue(calculator.isPrime(2));
    }

    @Test
    public void testIsPrime_evenNumberGreaterThanTwo() {
        assertFalse(calculator.isPrime(4));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testIsPrime_numberLessThanTwo() {
        calculator.isPrime(1);
    }
    
    @Test
    public void testFibonacci_validInput() {
        assertEquals(5, calculator.fibonacci(5));
    }

    @Test
    public void testFibonacci_zeroValue() {
        assertEquals(0, calculator.fibonacci(0));
    }

    @Test
    public void testFibonacci_oneValue() {
        assertEquals(1, calculator.fibonacci(1));
    }

    @Test
    public void testFibonacci_largeValue() {
        assertEquals(55, calculator.fibonacci(10));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testFibonacci_negativeNumber() {
        calculator.fibonacci(-1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testFibonacci_exceedsMaxResult() {
        calculator.fibonacci(30);
    }
    
    @Test
    public void testRoundToDecimal_validInput() {
        assertEquals(3.14, calculator.roundToDecimal(3.14159, 2), 0.001);
    }

    @Test
    public void testRoundToDecimal_zeroDecimals() {
        assertEquals(3.0, calculator.roundToDecimal(3.14159, 0), 0.001);
    }

    @Test
    public void testRoundToDecimal_moreDecimalsThanAvailable() {
        assertEquals(3.14159, calculator.roundToDecimal(3.14159, 5), 0.001);
    }

    @Test
    public void testRoundToDecimal_negativeNumber() {
        assertEquals(-3.14, calculator.roundToDecimal(-3.14159, 2), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testRoundToDecimal_negativeDecimals() {
        calculator.roundToDecimal(3.14159, -1);
    }
}