import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testCalculatePercentage_positiveValueAndPercentage() {
        Calculator calculator = new Calculator();
        assertEquals(5.0, calculator.calculatePercentage(100, 5), 0.001);
    }

    @Test
    public void testCalculatePercentage_zeroValue() {
        Calculator calculator = new Calculator();
        assertEquals(0.0, calculator.calculatePercentage(0, 50), 0.001);
    }

    @Test
    public void testCalculatePercentage_zeroPercentage() {
        Calculator calculator = new Calculator();
        assertEquals(0.0, calculator.calculatePercentage(100, 0), 0.001);
    }

    @Test
    public void testCalculatePercentage_negativeValue() {
        Calculator calculator = new Calculator();
        assertEquals(-5.0, calculator.calculatePercentage(-100, 5), 0.001);
    }

    @Test
    public void testCalculatePercentage_negativePercentage() {
        Calculator calculator = new Calculator();
        assertEquals(-5.0, calculator.calculatePercentage(100, -5), 0.001);
    }

    @Test
    public void testCalculatePercentage_largeValueAndPercentage() {
        Calculator calculator = new Calculator();
        assertEquals(50000.0, calculator.calculatePercentage(100000, 50), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCalculatePercentage_resultExceedsMaxResult() {
        Calculator calculator = new Calculator();
        calculator.calculatePercentage(2000000, 100);
    }

    @Test
    public void testCalculatePercentage_decimalValueAndPercentage() {
        Calculator calculator = new Calculator();
        assertEquals(2.5, calculator.calculatePercentage(10, 25), 0.001);
    }

    @Test
    public void testCalculatePercentage_boundaryValue() {
        Calculator calculator = new Calculator();
        assertEquals(10000.0, calculator.calculatePercentage(1000000, 1), 0.001);
    }
}