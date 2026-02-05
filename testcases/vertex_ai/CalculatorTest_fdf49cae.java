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
    void calculatePercentage_largePercentage_throwsException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(10000.0, 10001.0);
        });
        assertTrue(exception.getMessage().contains("exceeds maximum allowed value"));
    }

    @Test
    void calculatePercentage_boundaryValue_returnsCorrectPercentage() {
        assertEquals(10000.0, calculator.calculatePercentage(1000000.0, 1.0));
    }

    @Test
    void calculatePercentage_decimalPercentage_returnsCorrectPercentage() {
        assertEquals(12.5, calculator.calculatePercentage(100.0, 12.5));
    }
}