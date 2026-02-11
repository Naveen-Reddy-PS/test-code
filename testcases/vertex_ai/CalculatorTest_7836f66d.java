import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private Calculator calculator;
    private static final double MAX_RESULT = 1000000.0;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    /**
     * Test case for calculatePercentage with valid input.
     */
    @Test
    void calculatePercentage_validInput() {
        assertEquals(25.0, calculator.calculatePercentage(100, 25));
    }

    /**
     * Test case for calculatePercentage with zero value.
     */
    @Test
    void calculatePercentage_zeroValue() {
        assertEquals(0.0, calculator.calculatePercentage(0, 50));
    }

    /**
     * Test case for calculatePercentage with zero percentage.
     */
    @Test
    void calculatePercentage_zeroPercentage() {
        assertEquals(0.0, calculator.calculatePercentage(100, 0));
    }

    /**
     * Test case for calculatePercentage with negative value.
     */
    @Test
    void calculatePercentage_negativeValue() {
        assertEquals(-25.0, calculator.calculatePercentage(-100, 25));
    }

    /**
     * Test case for calculatePercentage with negative percentage.
     */
    @Test
    void calculatePercentage_negativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100, -25));
    }

    /**
     * Test case for calculatePercentage with large value and percentage exceeding maximum result.
     */
    @Test
    void calculatePercentage_exceedsMaximumResult() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(MAX_RESULT * 2, 100);
        });
        assertEquals(String.format("Result %.2f exceeds maximum allowed value %.2f", MAX_RESULT * 20, MAX_RESULT), exception.getMessage());
    }

    /**
     * Test case for calculatePercentage with decimal value and percentage.
     */
    @Test
    void calculatePercentage_decimalValueAndPercentage() {
        assertEquals(12.5, calculator.calculatePercentage(50, 25));
    }

    /**
     * Test case for calculatePercentage with a value of 1.
     */
    @Test
    void calculatePercentage_valueIsOne() {
        assertEquals(0.5, calculator.calculatePercentage(1, 5));
    }

    /**
     * Test case for calculatePercentage with a percentage of 1.
     */
    @Test
    void calculatePercentage_percentageIsOne() {
        assertEquals(10.0, calculator.calculatePercentage(1000, 1));
    }

    /**
     * Test case for calculatePercentage with a value close to MAX_RESULT.
     */
    @Test
    void calculatePercentage_valueCloseToMaxResult() {
        assertEquals(99999.9, calculator.calculatePercentage(999999, 1));
    }
}