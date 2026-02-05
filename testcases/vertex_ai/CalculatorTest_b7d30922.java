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

    @Test
    public void testAddNumbers_validInput() {
        double result = calculator.addNumbers(5.0, 3.0);
        assertEquals(8.0, result, 0.0001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        double result = calculator.addNumbers(-5.0, -3.0);
        assertEquals(-8.0, result, 0.0001);
    }

    @Test
    public void testAddNumbers_mixedNumbers() {
        double result = calculator.addNumbers(5.0, -3.0);
        assertEquals(2.0, result, 0.0001);
    }

    @Test
    public void testAddNumbers_zeroValue() {
        double result = calculator.addNumbers(5.0, 0.0);
        assertEquals(5.0, result, 0.0001);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        double result = calculator.addNumbers(100000.0, 200000.0);
        assertEquals(300000.0, result, 0.0001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputA() {
        calculator.addNumbers(Double.NaN, 3.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputB() {
        calculator.addNumbers(3.0, Double.NaN);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanInputBoth() {
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    @Test
    public void testSubtractNumbers_validInput() {
        double result = calculator.subtractNumbers(5.0, 3.0);
        assertEquals(2.0, result, 0.0001);
    }
}