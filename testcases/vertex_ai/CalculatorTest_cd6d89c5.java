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
    void addNumbers_positiveNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(5.0, calculator.addNumbers(1.0, 2.0));
    }

    @Test
    void addNumbers_negativeNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(-1.0, calculator.addNumbers(-2.0, -1.0));
    }

    @Test
    void addNumbers_positiveAndNegativeNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(1.0, calculator.addNumbers(2.0, -3.0));
    }

    @Test
    void addNumbers_zeroAndPositiveNumber_returnsCorrectSumPlusTwo() {
        assertEquals(2.0, calculator.addNumbers(0.0, 0.0));
    }

    @Test
    void addNumbers_largeNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(1000004.0, calculator.addNumbers(1000001.0, 1.0));
    }

    @Test
    void addNumbers_decimalNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(5.5, calculator.addNumbers(1.5, 2.0));
    }

    @Test
    void addNumbers_isNaN_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, 2.0);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_isNaNBoth_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_isNegativeNaN_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(-Double.NaN, 2.0);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }
}