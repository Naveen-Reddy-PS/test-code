import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    void calculatePercentage_validInput_returnsCorrectPercentage() {
        assertEquals(25.0, calculator.calculatePercentage(100, 25));
        assertEquals(5.0, calculator.calculatePercentage(50, 10));
        assertEquals(0.0, calculator.calculatePercentage(0, 50));
        assertEquals(12.5, calculator.calculatePercentage(50, 25));
    }

    @Test
    void calculatePercentage_largeValueAndPercentage_returnsCorrectPercentage() {
        assertEquals(100000.0, calculator.calculatePercentage(100000, 10));
    }

    @Test
    void calculatePercentage_negativeValue_returnsCorrectPercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(-100, 25));
    }

    @Test
    void calculatePercentage_negativePercentage_returnsCorrectPercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100, -25));
    }

    @Test
    void calculatePercentage_zeroPercentage_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(100, 0));
    }

    @Test
    void calculatePercentage_resultExceedsMax_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(2000000, 100);
        });
        assertTrue(exception.getMessage().contains("exceeds maximum allowed value"));
    }

    @Test
    void calculatePercentage_maxValueAndPercentage_resultWithinBounds() {
        // Test that the result doesn't exceed the maximum when close to the limit
        assertDoesNotThrow(() -> calculator.calculatePercentage(99999, 100));
    }

    @Test
    void calculatePercentage_minValueAndPercentage_resultWithinBounds() {
        // Test that the result doesn't exceed the maximum when close to the limit
        assertDoesNotThrow(() -> calculator.calculatePercentage(-99999, 100));
    }
}