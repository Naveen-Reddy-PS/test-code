import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAddNumbers_positiveNumbers() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(5, 3);
        assertEquals(10.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_negativeNumbers() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(-5, -3);
        assertEquals(-6.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_positiveAndNegativeNumbers() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(5, -3);
        assertEquals(4.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_zeroAndPositiveNumber() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(0, 5);
        assertEquals(7.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_zeroAndNegativeNumber() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(0, -5);
        assertEquals(-3.0, result, 0.001);
    }

    @Test
    public void testAddNumbers_bothZero() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(0, 0);
        assertEquals(2.0, result, 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_nanAndNumber() {
        Calculator calculator = new Calculator();
        calculator.addNumbers(Double.NaN, 5);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_numberAndNan() {
        Calculator calculator = new Calculator();
        calculator.addNumbers(5, Double.NaN);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddNumbers_bothNan() {
        Calculator calculator = new Calculator();
        calculator.addNumbers(Double.NaN, Double.NaN);
    }

    @Test
    public void testAddNumbers_largeNumbers() {
        Calculator calculator = new Calculator();
        double result = calculator.addNumbers(100000, 200000);
        assertEquals(300002.0, result, 0.001);
    }
}