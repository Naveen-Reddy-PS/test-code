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
        assertEquals(25.25, calculator.calculatePercentage(101, 25));
    }

    @Test
    void calculatePercentage_maxResultBoundary() {
        double value = 999999;
        double percentage = 100;
        double expectedResult = 999999.0;
        assertEquals(expectedResult, calculator.calculatePercentage(value, percentage));
    }

    @Test
    void calculatePercentage_exceedsMaxResultBoundary() {
        double value = 1000001;
        double percentage = 100;

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculatePercentage(value, percentage);
        });

        assertTrue(exception.getMessage().contains("exceeds maximum allowed value"));
    }
}