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
     * Test case 1: Adding two positive numbers.
     */
    @Test
    public void testAddNumbers_positiveNumbers() {
        assertEquals(8.0, calculator.addNumbers(2.0, 3.0), 0.001);
    }

    /**
     * Test case 2: Adding two negative numbers.
     */
    @Test
    public void testAddNumbers_negativeNumbers() {
        assertEquals(-2.0, calculator.addNumbers(-2.0, -3.0), 0.001);
    }

    /**
     * Test case 3: Adding a positive and a negative number.
     */
    @Test
    public void testAddNumbers_positiveAndNegative() {
        assertEquals(4.0, calculator.addNumbers(5.0, -4.0), 0.001);
    }

    /**
     * Test case 4: Adding zero to a number.
     */
    @Test
    public void testAddNumbers_addingZero() {
        assertEquals(3.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

    /**
     * Test case 5: Adding large numbers.
     */
    @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(1000005.0, calculator.addNumbers(500001.0, 500001.0), 0.001);
    }

    /**
     * Test case 6: Adding decimal numbers.
     */
    @Test
    public void testAddNumbers_decimalNumbers() {
        assertEquals(7.5, calculator.addNumbers(2.2, 2.3), 0.001);
    }

    /**
     * Test case 7: Adding NaN values should throw IllegalArgumentException.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanValuesA() {
        calculator.addNumbers(Double.NaN, 5.0);
    }

    /**
     * Test case 8: Adding NaN values should throw IllegalArgumentException.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanValuesB() {
        calculator.addNumbers(5.0, Double.NaN);
    }

    /**
     * Test case 9: Adding NaN values should throw IllegalArgumentException.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanValuesBoth() {
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    /**
     * Test case 10: Adding near zero values
     */
    @Test
    public void testAddNumbers_nearZeroValues() {
        assertEquals(3.000000000000002, calculator.addNumbers(1e-15, 1e-15), 0.001);
    }
}