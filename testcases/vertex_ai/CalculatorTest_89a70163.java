import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    /**
     * Test case for adding two numbers.
     */
    @Test
    public void testAddNumbers_positiveNumbers() {
        assertEquals(5.0, calculator.addNumbers(2.0, 3.0), 0.001);
    }

    /**
     * Test case for adding two negative numbers.
     */
    @Test
    public void testAddNumbers_negativeNumbers() {
        assertEquals(-5.0, calculator.addNumbers(-2.0, -3.0), 0.001);
    }

    /**
     * Test case for adding a positive and a negative number.
     */
    @Test
    public void testAddNumbers_positiveAndNegative() {
        assertEquals(1.0, calculator.addNumbers(4.0, -3.0), 0.001);
    }

    /**
     * Test case for adding zero to a number.
     */
    @Test
    public void testAddNumbers_zero() {
        assertEquals(5.0, calculator.addNumbers(5.0, 0.0), 0.001);
    }

    /**
     * Test case for adding two large numbers.
     */
    @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(1000000.0, calculator.addNumbers(500000.0, 500000.0), 0.001);
    }

    /**
     * Test case for adding decimal numbers.
     */
    @Test
    public void testAddNumbers_decimalNumbers() {
        assertEquals(5.5, calculator.addNumbers(2.5, 3.0), 0.001);
    }

    /**
     * Test case for adding a number to itself.
     */
    @Test
    public void testAddNumbers_sameNumber() {
        assertEquals(10.0, calculator.addNumbers(5.0, 5.0), 0.001);
    }

    /**
     * Test case for adding a very small number.
     */
    @Test
    public void testAddNumbers_smallNumbers() {
        assertEquals(0.000002, calculator.addNumbers(0.000001, 0.000001), 0.000001);
    }

    /**
     * Test case for adding NaN values.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaN() {
        calculator.addNumbers(Double.NaN, 5.0);
    }

    /**
     * Test case for adding NaN values.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaNAgain() {
        calculator.addNumbers(5.0, Double.NaN);
    }
}