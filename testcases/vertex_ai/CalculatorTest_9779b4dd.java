import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    /**
     * Test case for calculatePercentage with a positive value and percentage.
     */
    @Test
    void calculatePercentage_positiveValueAndPercentage_returnsCorrectPercentage() {
        assertEquals(25.0, calculator.calculatePercentage(100.0, 25.0));
    }

    /**
     * Test case for calculatePercentage with a zero value.
     */
    @Test
    void calculatePercentage_zeroValue_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(0.0, 50.0));
    }

    /**
     * Test case for calculatePercentage with a zero percentage.
     */
    @Test
    void calculatePercentage_zeroPercentage_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(100.0, 0.0));
    }

    /**
     * Test case for calculatePercentage with a negative value.
     */
    @Test
    void calculatePercentage_negativeValue_returnsCorrectPercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(-100.0, 25.0));
    }

    /**
     * Test case for calculatePercentage with a negative percentage.
     */
    @Test
    void calculatePercentage_negativePercentage_returnsCorrectPercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100.0, -25.0));
    }

    /**
     * Test case for calculatePercentage with a large value and percentage exceeding the maximum allowed result.
     */
    @Test
    void calculatePercentage_largeValueAndPercentage_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(1000000.0, 200.0);
        });
        assertEquals("Result 2000000.00 exceeds maximum allowed value 1000000.00", exception.getMessage());
    }

    /**
     * Test case for calculatePercentage with a value close to the maximum allowed result.
     */
    @Test
    void calculatePercentage_valueCloseToMax_returnsCorrectPercentage() {
        assertEquals(999999.0, calculator.calculatePercentage(999999.0, 100.0));
    }

    /**
     * Test case for calculatePercentage with decimal values.
     */
    @Test
    void calculatePercentage_decimalValues_returnsCorrectPercentage() {
        assertEquals(12.5, calculator.calculatePercentage(50.0, 25.0));
    }

    /**
     * Test case for calculatePercentage with a percentage greater than 100.
     */
    @Test
    void calculatePercentage_percentageGreaterThan100_returnsCorrectPercentage() {
        assertEquals(150.0, calculator.calculatePercentage(100.0, 150.0));
    }

    /**
     * Test case for calculatePercentage with a value and percentage that results in a negative value exceeding the maximum allowed result.
     */
    @Test
    void calculatePercentage_largeNegativeValueAndPercentage_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(-1000000.0, 200.0);
        });
        assertEquals("Result -2000000.00 exceeds maximum allowed value 1000000.00", exception.getMessage());
    }
}