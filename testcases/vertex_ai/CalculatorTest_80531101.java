import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class CalculatorTest {

    private Calculator calculator;
    private static final double DELTA = 1e-6; // Define a delta for double comparisons

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void testCalculatePercentage_positiveValueAndPercentage() {
        assertEquals(25.0, calculator.calculatePercentage(100, 25), DELTA);
    }

    @Test
    public void testCalculatePercentage_zeroValue() {
        assertEquals(0.0, calculator.calculatePercentage(0, 50), DELTA);
    }

    @Test
    public void testCalculatePercentage_zeroPercentage() {
        assertEquals(0.0, calculator.calculatePercentage(100, 0), DELTA);
    }

    @Test
    public void testCalculatePercentage_negativeValue() {
        assertEquals(-25.0, calculator.calculatePercentage(-100, 25), DELTA);
    }

    @Test
    public void testCalculatePercentage_negativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100, -25), DELTA);
    }

    @Test
    public void testCalculatePercentage_largeValueAndPercentage() {
        assertEquals(999999.0, calculator.calculatePercentage(999999, 10), DELTA);
    }

    @Test
    public void testCalculatePercentage_resultExceedsMax_positive() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(1000001, 10);
        });
        assertEquals("Result 1000001.00 exceeds maximum allowed value 1000000.00", exception.getMessage());
    }

    @Test
    public void testCalculatePercentage_resultExceedsMax_negative() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(-1000001, 10);
        });
        assertEquals("Result -1000001.00 exceeds maximum allowed value 1000000.00", exception.getMessage());
    }

    @Test
    public void testCalculatePercentage_decimalValueAndPercentage() {
        assertEquals(12.5, calculator.calculatePercentage(50, 25), DELTA);
    }

    @Test
    public void testCalculatePercentage_verySmallValueAndPercentage() {
        assertEquals(0.000001, calculator.calculatePercentage(0.0001, 0.1), DELTA);
    }
}