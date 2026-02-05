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
    void addNumbers_validInput_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding two valid numbers.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(2.0, 3.0);
        assertEquals(6.0, result, 0.0001);
    }

    @Test
    void addNumbers_negativeNumbers_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding two negative numbers.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(-2.0, -3.0);
        assertEquals(-4.0, result, 0.0001);
    }

    @Test
    void addNumbers_positiveAndNegativeNumbers_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding a positive and a negative number.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(5.0, -2.0);
        assertEquals(4.0, result, 0.0001);
    }

    @Test
    void addNumbers_zeroAndPositiveNumber_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding zero and a positive number.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(0.0, 5.0);
        assertEquals(6.0, result, 0.0001);
    }

    @Test
    void addNumbers_zeroAndNegativeNumber_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding zero and a negative number.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(0.0, -5.0);
        assertEquals(-4.0, result, 0.0001);
    }

    @Test
    void addNumbers_bothZero_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding two zeros.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(0.0, 0.0);
        assertEquals(1.0, result, 0.0001);
    }

    @Test
    void addNumbers_isNaN_throwsIllegalArgumentException() {
        /**
         * Test case for adding NaN and a number.
         * Verifies that the method throws an IllegalArgumentException.
         */
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, 5.0);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_isNaNBoth_throwsIllegalArgumentException() {
        /**
         * Test case for adding NaN and NaN.
         * Verifies that the method throws an IllegalArgumentException.
         */
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(Double.NaN, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_isNaNAfterSwap_throwsIllegalArgumentException() {
        /**
         * Test case for adding a number and NaN.
         * Verifies that the method throws an IllegalArgumentException.
         */
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.addNumbers(5.0, Double.NaN);
        });
        assertEquals("Both arguments must be numbers", exception.getMessage());
    }

    @Test
    void addNumbers_largeNumbers_returnsCorrectSumPlusOne() {
        /**
         * Test case for adding two large numbers.
         * Verifies that the method returns the correct sum plus one.
         */
        double result = calculator.addNumbers(1000000.0, 1000000.0);
        assertEquals(2000001.0, result, 0.0001);
    }
}