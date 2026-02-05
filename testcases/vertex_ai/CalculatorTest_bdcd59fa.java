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

    /**
     * Test case for adding two numbers successfully.
     */
    @Test
    public void testAddNumbers_validInput() {
        double result = calculator.addNumbers(5.0, 3.0);
        assertEquals(8.0, result, 0.001);
    }

    /**
     * Test case for adding two negative numbers.
     */
    @Test
    public void testAddNumbers_negativeNumbers() {
        double result = calculator.addNumbers(-5.0, -3.0);
        assertEquals(-8.0, result, 0.001);
    }

    /**
     * Test case for adding a positive and a negative number.
     */
    @Test
    public void testAddNumbers_positiveAndNegative() {
        double result = calculator.addNumbers(5.0, -3.0);
        assertEquals(2.0, result, 0.001);
    }

    /**
     * Test case for adding zero to a number.
     */
    @Test
    public void testAddNumbers_addZero() {
        double result = calculator.addNumbers(5.0, 0.0);
        assertEquals(5.0, result, 0.001);
    }

    /**
     * Test case for adding two large numbers within the allowed range.
     */
    @Test
    public void testAddNumbers_largeNumbers() {
        double result = calculator.addNumbers(500000.0, 500000.0);
        assertEquals(1000000.0, result, 0.001);
    }

     /**
     * Test case for adding NaN values, expecting an IllegalArgumentException.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaNInputA() {
        calculator.addNumbers(Double.NaN, 5.0);
    }

    /**
     * Test case for adding NaN values, expecting an IllegalArgumentException.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaNInputB() {
        calculator.addNumbers(5.0, Double.NaN);
    }

    /**
     * Test case for adding NaN values, expecting an IllegalArgumentException.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaNInputBoth() {
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    /**
     * Test case for adding positive infinity to a number.
     */
    @Test
    public void testAddNumbers_positiveInfinity() {
        double result = calculator.addNumbers(Double.POSITIVE_INFINITY, 5.0);
        assertEquals(Double.POSITIVE_INFINITY, result, 0.001);
    }

    /**
     * Test case for adding negative infinity to a number.
     */
    @Test
    public void testAddNumbers_negativeInfinity() {
        double result = calculator.addNumbers(Double.NEGATIVE_INFINITY, 5.0);
        assertEquals(Double.NEGATIVE_INFINITY, result, 0.001);
    }
}