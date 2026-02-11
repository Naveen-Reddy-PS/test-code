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
     * Test case for calculatePercentage with large value.
     */
    @Test
    public void testCalculatePercentage_largeValue() {
        assertEquals(100000.0, calculator.calculatePercentage(100000, 10), 0.001);
    }

    /**
     * Test case for calculatePercentage with percentage resulting in value exceeding MAX_RESULT.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testCalculatePercentage_exceedsMaxResult() {
        calculator.calculatePercentage(200000, 60);
    }

    /**
     * Test case for calculatePercentage with large percentage.
     */
    @Test
    public void testCalculatePercentage_largePercentage() {
        assertEquals(500000.0, calculator.calculatePercentage(50000, 100), 0.001);
    }

    /**
     * Test case for calculatePercentage with decimal value and percentage.
     */
    @Test
    public void testCalculatePercentage_decimalValueAndPercentage() {
        assertEquals(12.5, calculator.calculatePercentage(50.0, 25.0), 0.001);
    }

    /**
     * Test case for calculatePercentage with near MAX_RESULT value and percentage.
     */
    @Test
    public void testCalculatePercentage_nearMaxResult() {
        assertEquals(99999.9, calculator.calculatePercentage(99999.9, 10), 0.001);
    }
}