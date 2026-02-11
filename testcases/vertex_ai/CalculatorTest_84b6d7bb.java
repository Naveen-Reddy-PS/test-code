import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    /**
     * Test case for calculatePercentage with valid input.
     */
    @Test
    public void testCalculatePercentage_validInput() {
        assertEquals(25.0, calculator.calculatePercentage(100, 25), 0.001);
    }

    /**
     * Test case for calculatePercentage with zero value.
     */
    @Test
    public void testCalculatePercentage_zeroValue() {
        assertEquals(0.0, calculator.calculatePercentage(0, 50), 0.001);
    }

    /**
     * Test case for calculatePercentage with zero percentage.
     */
    @Test
    public void testCalculatePercentage_zeroPercentage() {
        assertEquals(0.0, calculator.calculatePercentage(100, 0), 0.001);
    }

    /**
     * Test case for calculatePercentage with negative value.
     */
    @Test
    public void testCalculatePercentage_negativeValue() {
        assertEquals(-25.0, calculator.calculatePercentage(-100, 25), 0.001);
    }

    /**
     * Test case for calculatePercentage with negative percentage.
     */
    @Test
    public void testCalculatePercentage_negativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100, -25), 0.001);
    }

    /**
     * Test case for calculatePercentage with large value and percentage.
     */
    @Test
    public void testCalculatePercentage_largeValueAndPercentage() {
        assertEquals(99999.9, calculator.calculatePercentage(999999, 1), 0.001);
    }

    /**
     * Test case for calculatePercentage when result exceeds maximum allowed value.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testCalculatePercentage_resultExceedsMax() {
        calculator.calculatePercentage(1000000, 101);
    }

    /**
     * Test case for calculatePercentage with a decimal value.
     */
    @Test
    public void testCalculatePercentage_decimalValue() {
        assertEquals(12.5, calculator.calculatePercentage(50, 25), 0.001);
    }

    /**
     * Test case for calculatePercentage with a decimal percentage.
     */
    @Test
    public void testCalculatePercentage_decimalPercentage() {
        assertEquals(2.5, calculator.calculatePercentage(100, 0.25), 0.001);
    }
}