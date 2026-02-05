import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    /**
     * Test case to verify the correct addition of two numbers.
     */
    @Test
    public void testAddNumbers_positiveNumbers() {
        assertEquals(8.0, calculator.addNumbers(2.0, 3.0), 0.001);
    }

    /**
     * Test case to verify addition with one negative number.
     */
    @Test
    public void testAddNumbers_oneNegativeNumber() {
        assertEquals(2.0, calculator.addNumbers(5.0, -6.0), 0.001);
    }

    /**
     * Test case to verify addition with two negative numbers.
     */
    @Test
    public void testAddNumbers_twoNegativeNumbers() {
        assertEquals(-8.0, calculator.addNumbers(-5.0, -6.0), 0.001);
    }

    /**
     * Test case to verify addition with zero.
     */
    @Test
    public void testAddNumbers_withZero() {
        assertEquals(3.0, calculator.addNumbers(0.0, 0.0), 0.001);
        assertEquals(5.0, calculator.addNumbers(2.0, 0.0), 0.001);
        assertEquals(5.0, calculator.addNumbers(0.0, 2.0), 0.001);
    }

    /**
     * Test case to verify addition with large numbers.
     */
    @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(1000005.0, calculator.addNumbers(1000000.0, 2.0), 0.001);
    }

    /**
     * Test case to verify addition with decimal numbers.
     */
    @Test
    public void testAddNumbers_decimalNumbers() {
        assertEquals(8.5, calculator.addNumbers(2.5, 3.0), 0.001);
    }

    /**
     * Test case to verify addition with negative decimal numbers.
     */
    @Test
    public void testAddNumbers_negativeDecimalNumbers() {
        assertEquals(-2.5, calculator.addNumbers(-5.5, 0.0), 0.001);
    }

    /**
     * Test case to verify addition with a positive and negative decimal number.
     */
    @Test
    public void testAddNumbers_positiveAndNegativeDecimalNumbers() {
        assertEquals(0.5, calculator.addNumbers(5.5, -8.0), 0.001);
    }

     /**
     * Test case to verify argument exception is thrown when NaN is passed as an argument
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaNArgument() {
        calculator.addNumbers(Double.NaN, 5.0);
    }

     /**
     * Test case to verify argument exception is thrown when NaN is passed as an argument
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaNAArguments() {
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    /**
     * Test case to verify the correct subtraction of two numbers.
     */
    @Test
    public void testSubtractNumbers_positiveNumbers() {
        assertEquals(2.0, calculator.subtractNumbers(5.0, 3.0), 0.001);
    }
}