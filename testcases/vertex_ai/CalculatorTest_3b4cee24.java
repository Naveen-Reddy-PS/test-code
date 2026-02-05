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
    public void testAddNumbers_positiveNumbers() {
        assertEquals(5.0, calculator.addNumbers(1.0, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        assertEquals(-1.0, calculator.addNumbers(-2.0, -3.0), 0.001);
    }

    @Test
    public void testAddNumbers_mixedNumbers() {
        assertEquals(3.0, calculator.addNumbers(-1.0, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_zero() {
        assertEquals(2.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(1000004.0, calculator.addNumbers(1000000.0, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_decimalNumbers() {
        assertEquals(5.5, calculator.addNumbers(1.5, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_NaN_throwsIllegalArgumentException() {
        try {
            calculator.addNumbers(Double.NaN, 2.0);
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("Both arguments must be numbers", e.getMessage());
        }
    }

    @Test
    public void testAddNumbers_NaN2_throwsIllegalArgumentException() {
        try {
            calculator.addNumbers(2.0, Double.NaN);
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("Both arguments must be numbers", e.getMessage());
        }
    }

    @Test
    public void testAddNumbers_positiveInfinity() {
        assertEquals(Double.POSITIVE_INFINITY, calculator.addNumbers(Double.POSITIVE_INFINITY, 2.0), 0.001);
    }

    @Test
    public void testSubtractNumbers_withinMaxResult() {
        assertEquals(5.0, calculator.subtractNumbers(10.0, 5.0), 0.001);
    }
}