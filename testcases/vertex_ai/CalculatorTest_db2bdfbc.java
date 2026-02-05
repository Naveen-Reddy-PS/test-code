import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void testAddNumbers_positiveNumbers() {
        assertEquals(8.0, calculator.addNumbers(2.0, 3.0), 0.001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        assertEquals(-2.0, calculator.addNumbers(-5.0, 0.0), 0.001);
    }

    @Test
    public void testAddNumbers_zeroValues() {
        assertEquals(3.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

     @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(1000005.0, calculator.addNumbers(1000000.0, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_decimalNumbers() {
        assertEquals(6.5, calculator.addNumbers(1.5, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_NaNInputA() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, 5.0);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    public void testAddNumbers_NaNInputB() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(5.0, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    public void testAddNumbers_positiveAndNegativeNumbers() {
        assertEquals(1.0, calculator.addNumbers(5.0, -7.0), 0.001);
    }

    @Test
    public void testSubtractNumbers_withinMaxResult() {
        assertEquals(2.0, calculator.subtractNumbers(5.0, 3.0), 0.001);
    }
}