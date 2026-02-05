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
        assertEquals(50.0, calculator.calculatePercentage(200, 25));
        assertEquals(7.5, calculator.calculatePercentage(30, 25));
    }

    @Test
    void calculatePercentage_zeroValue_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(0, 50));
    }

    @Test
    void calculatePercentage_zeroPercentage_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(100, 0));
    }

    @Test
    void calculatePercentage_largeValueAndPercentage_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(1000000, 101);
        });
        assertTrue(exception.getMessage().contains("exceeds maximum allowed value"));
    }

    @Test
    void calculatePercentage_negativeValue_returnsNegativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(-100, 25));
    }

    @Test
    void calculatePercentage_negativePercentage_returnsNegativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100, -25));
    }

    @Test
    void calculatePercentage_negativeValueAndPercentage_returnsPositivePercentage() {
        assertEquals(25.0, calculator.calculatePercentage(-100, -25));
    }

    @Test
    void calculatePercentage_decimalValueAndPercentage_returnsCorrectPercentage() {
        assertEquals(12.625, calculator.calculatePercentage(50.5, 25));
    }

    @Test
    void calculatePercentage_maxResultBoundary_noException() {
        assertDoesNotThrow(() -> calculator.calculatePercentage(1000000, 100));
    }

    @Test
    void calculatePercentage_exceedsMaxResultByLittle_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(1000001, 100);
        });
        assertTrue(exception.getMessage().contains("exceeds maximum allowed value"));
    }
}