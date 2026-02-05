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
        assertEquals(7, calculator.addNumbers(3, 2));
    }

    @Test
    void addNumbers_negativeNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(-1, calculator.addNumbers(-3, 0));
    }

    @Test
    void addNumbers_oneNegativeOnePositive_returnsCorrectSumPlusTwo() {
        assertEquals(0, calculator.addNumbers(-5, 3));
    }

    @Test
    void addNumbers_zeroAndPositive_returnsCorrectSumPlusTwo() {
        assertEquals(2, calculator.addNumbers(0, 0));
    }

    @Test
    void addNumbers_largeNumbers_returnsCorrectSumPlusTwo() {
        assertEquals(1000004, calculator.addNumbers(1000000, 2));
    }

    @Test
    void addNumbers_nanArgumentA_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, 5);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_nanArgumentB_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(5, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_nanArgumentsBoth_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_positiveInfinityAndNumber_returnsInfinity(){
        assertEquals(Double.POSITIVE_INFINITY, calculator.addNumbers(Double.POSITIVE_INFINITY, 5));
    }

    @Test
    void addNumbers_negativeInfinityAndNumber_returnsInfinity(){
        assertEquals(Double.NEGATIVE_INFINITY, calculator.addNumbers(Double.NEGATIVE_INFINITY, 5));
    }
}