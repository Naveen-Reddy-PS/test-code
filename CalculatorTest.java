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
}
