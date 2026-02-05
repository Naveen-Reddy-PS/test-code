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
        assertEquals(50.0, calculator.calculatePercentage(100.0, 50.0));
        assertEquals(25.0, calculator.calculatePercentage(100.0, 25.0));
        assertEquals(12.5, calculator.calculatePercentage(50.0, 25.0));
        assertEquals(0.0, calculator.calculatePercentage(0.0, 50.0));
    }

    @Test
    void calculatePercentage_largeValueAndPercentage_returnsCorrectPercentage() {
        assertEquals(500000.0, calculator.calculatePercentage(1000000.0, 50.0));
    }

    @Test
    void calculatePercentage_percentageGreaterThan100_returnsCorrectPercentage() {
        assertEquals(200.0, calculator.calculatePercentage(100.0, 200.0));
    }

    @Test
    void calculatePercentage_negativeValue_returnsCorrectPercentage() {
        assertEquals(-50.0, calculator.calculatePercentage(-100.0, 50.0));
        assertEquals(-25.0, calculator.calculatePercentage(100.0, -25.0));
    }

    @Test
    void calculatePercentage_zeroPercentage_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(100.0, 0.0));
    }

    @Test
    void calculatePercentage_resultExceedsMax_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(2000000.0, 100.0);
        });
        assertEquals("Result 2000000.00 exceeds maximum allowed value 1000000.00", exception.getMessage());
    }

    @Test
    void calculatePercentage_negativeResultExceedsMax_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(-2000000.0, 100.0);
        });
        assertEquals("Result -2000000.00 exceeds maximum allowed value 1000000.00", exception.getMessage());
    }
}