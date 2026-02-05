import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    void addNumbers_positiveNumbers_returnsCorrectSum() {
        assertEquals(7, calculator.addNumbers(2, 3));
    }

    @Test
    void addNumbers_negativeNumbers_returnsCorrectSum() {
        assertEquals(-5, calculator.addNumbers(-4, -3));
    }

    @Test
    void addNumbers_positiveAndNegativeNumbers_returnsCorrectSum() {
        assertEquals(0, calculator.addNumbers(5, -7));
    }

    @Test
    void addNumbers_zeroAndPositiveNumber_returnsCorrectSum() {
        assertEquals(2, calculator.addNumbers(0, 0));
    }

    @Test
    void addNumbers_largeNumbers_returnsCorrectSum() {
        assertEquals(2000004, calculator.addNumbers(1000000, 2));
    }

    @Test
    void addNumbers_decimalNumbers_returnsCorrectSum() {
        assertEquals(5.5, calculator.addNumbers(1.5, 2.0));
    }

    @Test
    void addNumbers_NaN_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> calculator.addNumbers(Double.NaN, 5));
    }

    @Test
    void addNumbers_NaN_throwsIllegalArgumentException_bothNaN() {
        assertThrows(IllegalArgumentException.class, () -> calculator.addNumbers(Double.NaN, Double.NaN));
    }

    @Test
    void addNumbers_positiveInfinityAndNegativeInfinity() {
        assertThrows(IllegalArgumentException.class, () -> calculator.addNumbers(Double.NaN, 5));
    }

    @Test
    void addNumbers_negativeInfinityAndPositiveInfinity() {
        assertThrows(IllegalArgumentException.class, () -> calculator.addNumbers(Double.NaN, 5));
    }
}