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
        assertEquals(5.0, calculator.addNumbers(2.0, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        assertEquals(-3.0, calculator.addNumbers(-2.0, -2.0), 0.001);
    }

    @Test
    public void testAddNumbers_mixedNumbers() {
        assertEquals(2.0, calculator.addNumbers(1.0, 0.0), 0.001);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        assertEquals(1000001.0, calculator.addNumbers(500000.0, 500000.0), 0.001);
    }

    @Test
    public void testAddNumbers_zero() {
        assertEquals(1.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

   @Test
    public void testAddNumbers_decimalNumbers() {
        assertEquals(4.5, calculator.addNumbers(1.5, 2.0), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaN_firstArgument() {
        calculator.addNumbers(Double.NaN, 2.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaN_secondArgument() {
        calculator.addNumbers(2.0, Double.NaN);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaN_bothArguments() {
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    @Test
    public void testSubtractNumbers_withinMaxResult() {
        assertEquals(500.0, calculator.subtractNumbers(700.0, 200.0), 0.001);
    }
}