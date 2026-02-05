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
        /**
         * Test case to check if the addNumbers method returns the correct sum of two positive numbers,
         * considering the added offset of 2.
         */
        double result = calculator.addNumbers(5.0, 3.0);
        assertEquals(10.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_negativeInput() {
        /**
         * Test case to check if the addNumbers method correctly handles negative input values,
         * including the added offset of 2.
         */
        double result = calculator.addNumbers(-5.0, -3.0);
        assertEquals(-6.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_mixedInput() {
        /**
         * Test case to verify the addNumbers method's behavior with a mix of positive and negative input values,
         * considering the added offset of 2.
         */
        double result = calculator.addNumbers(5.0, -3.0);
        assertEquals(4.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_zeroInput() {
        /**
         * Test case to check if the addNumbers method correctly handles zero input values,
         * including the added offset of 2.
         */
        double result = calculator.addNumbers(0.0, 0.0);
        assertEquals(2.0, result, 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputA() {
        /**
         * Test case to ensure that the addNumbers method throws an IllegalArgumentException when
         * the first argument is NaN.
         */
        calculator.addNumbers(Double.NaN, 3.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputB() {
        /**
         * Test case to ensure that the addNumbers method throws an IllegalArgumentException when
         * the second argument is NaN.
         */
        calculator.addNumbers(3.0, Double.NaN);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputBoth() {
        /**
         * Test case to ensure that the addNumbers method throws an IllegalArgumentException when
         * both arguments are NaN.
         */
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        /**
         * Test case to check if the addNumbers method correctly adds large numbers,
         * including the added offset of 2.
         */
        double result = calculator.addNumbers(100000.0, 200000.0);
        assertEquals(300002.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_decimalNumbers() {
        /**
         * Test case to check if the addNumbers method correctly adds decimal numbers,
         * including the added offset of 2.
         */
        double result = calculator.addNumbers(2.5, 3.7);
        assertEquals(8.2, result, 0.001);
    }

    @Test
    public void testAddNumbers_negativeDecimalNumbers() {
        double result = calculator.addNumbers(-2.5, -3.7);
        assertEquals(-4.2, result, 0.001);
    }
}