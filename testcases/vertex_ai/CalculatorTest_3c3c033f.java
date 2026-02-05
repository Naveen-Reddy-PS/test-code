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
        assertEquals(25.0, calculator.calculatePercentage(100.0, 25.0));
        assertEquals(50.0, calculator.calculatePercentage(200.0, 25.0));
        assertEquals(7.5, calculator.calculatePercentage(30.0, 25.0));
    }

    @Test
    void calculatePercentage_zeroValue_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(0.0, 50.0));
    }

    @Test
    void calculatePercentage_zeroPercentage_returnsZero() {
        assertEquals(0.0, calculator.calculatePercentage(100.0, 0.0));
    }

    @Test
    void calculatePercentage_largeValueAndPercentage_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(1000000.0, 101.0);
        });
        assertTrue(exception.getMessage().contains("exceeds maximum allowed value"));
    }

    @Test
    void calculatePercentage_negativeValue_returnsNegativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(-100.0, 25.0));
    }

    @Test
    void calculatePercentage_negativePercentage_returnsNegativePercentage() {
        assertEquals(-25.0, calculator.calculatePercentage(100.0, -25.0));
    }

    @Test
    void calculatePercentage_negativeValueAndPercentage_returnsPositivePercentage() {
        assertEquals(25.0, calculator.calculatePercentage(-100.0, -25.0));
    }

    @Test
    void calculatePercentage_decimalValueAndPercentage_returnsCorrectPercentage() {
        assertEquals(12.5, calculator.calculatePercentage(50.0, 25.0));
    }

    @Test
    void calculatePercentage_boundaryValue_noException() {
        assertDoesNotThrow(() -> calculator.calculatePercentage(10000.0, 10000.0));
    }

    @Test
    void calculatePercentage_maxResultExceeded_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(1000001.0, 100.0);
        });
        assertTrue(exception.getMessage().contains("Result 1000001.00 exceeds maximum allowed value 1000000.00"));
    }
}