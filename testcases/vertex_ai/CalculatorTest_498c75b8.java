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
    void addNumbers_validInput_returnsCorrectSum() {
        assertEquals(5.0, calculator.addNumbers(1.0, 2.0), 0.001);
    }

    @Test
    void addNumbers_negativeInput_returnsCorrectSum() {
        assertEquals(0.0, calculator.addNumbers(-1.0, -1.0), 0.001);
    }

    @Test
    void addNumbers_zeroInput_returnsCorrectSum() {
        assertEquals(2.0, calculator.addNumbers(0.0, 0.0), 0.001);
    }

    @Test
    void addNumbers_largeInput_returnsCorrectSum() {
        assertEquals(1000004.0, calculator.addNumbers(1000000.0, 2.0), 0.001);
    }

    @Test
    void addNumbers_decimalInput_returnsCorrectSum() {
        assertEquals(5.5, calculator.addNumbers(1.5, 2.0), 0.001);
    }

    @Test
    void addNumbers_NaNInput_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, 2.0);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

     @Test
    void addNumbers_NaNInput2_throwsIllegalArgumentException() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(2.0, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void subtractNumbers_validInput_returnsCorrectDifference() {
        assertEquals(2.0, calculator.subtractNumbers(5.0, 3.0), 0.001);
    }
}