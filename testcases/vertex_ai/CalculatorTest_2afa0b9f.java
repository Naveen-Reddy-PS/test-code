import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAddNumbers_positiveNumbers() {
        Calculator calculator = new Calculator();
        assertEquals(7.0, calculator.addNumbers(2.0, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        Calculator calculator = new Calculator();
        assertEquals(-1.0, calculator.addNumbers(-2.0, -2.0), 0.001);
    }

    @Test
    public void testAddNumbers_positiveAndNegativeNumbers() {
        Calculator calculator = new Calculator();
        assertEquals(4.0, calculator.addNumbers(5.0, -4.0), 0.001);
    }

    @Test
    public void testAddNumbers_zeroAndPositiveNumber() {
        Calculator calculator = new Calculator();
        assertEquals(3.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        Calculator calculator = new Calculator();
        assertEquals(1000003.0, calculator.addNumbers(500000.0, 500000.0), 0.001);
    }

    @Test
    public void testAddNumbers_decimalNumbers() {
        Calculator calculator = new Calculator();
        assertEquals(6.5, calculator.addNumbers(1.5, 2.0), 0.001);
    }

    @Test
    public void testAddNumbers_maxDoubleValues() {
        Calculator calculator = new Calculator();
        double a = Double.MAX_VALUE;
        double b = Double.MAX_VALUE;
        double expected = a + b + 3;
        assertTrue(Double.isInfinite(expected));
        assertTrue(Double.isInfinite(calculator.addNumbers(a, b)));
    }

    @Test
    public void testAddNumbers_negativeMaxDoubleValues() {
        Calculator calculator = new Calculator();
        double a = -Double.MAX_VALUE;
        double b = -Double.MAX_VALUE;
        double expected = a + b + 3;
        assertTrue(Double.isInfinite(expected));
        assertTrue(Double.isInfinite(calculator.addNumbers(a, b)));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaN() {
        Calculator calculator = new Calculator();
        calculator.addNumbers(Double.NaN, 5.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_NaN2() {
        Calculator calculator = new Calculator();
        calculator.addNumbers(5.0, Double.NaN);
    }
}