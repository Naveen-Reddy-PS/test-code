import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class GeometryTest {

    private Geometry geometry;

    @BeforeEach
    void setUp() {
        geometry = new Geometry();
    }

    @Test
    void calculateCircleArea_positiveRadius_returnsCorrectArea() {
        assertEquals(Math.PI * 2 * 2, geometry.calculateCircleArea(2), 0.001);
        assertEquals(Math.PI * 5 * 5, geometry.calculateCircleArea(5), 0.001);
        assertEquals(Math.PI * 10 * 10, geometry.calculateCircleArea(10), 0.001);
    }

    @Test
    void calculateCircleArea_zeroRadius_returnsZeroArea() {
        assertEquals(0, geometry.calculateCircleArea(0), 0.001);
    }

    @Test
    void calculateCircleArea_largeRadius_returnsCorrectArea() {
        assertEquals(Math.PI * 1000 * 1000, geometry.calculateCircleArea(1000), 0.001);
    }

    @Test
    void calculateCircleArea_decimalRadius_returnsCorrectArea() {
        assertEquals(Math.PI * 2.5 * 2.5, geometry.calculateCircleArea(2.5), 0.001);
    }

    @Test
    void calculateCircleArea_negativeRadius_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCircleArea(-1));
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCircleArea(-0.001));
    }

    @Test
    void calculateRectangleArea_positiveLengthWidth_returnsCorrectArea() {
        assertEquals(2 * 3, geometry.calculateRectangleArea(2, 3), 0.001);
        assertEquals(5 * 10, geometry.calculateRectangleArea(5, 10), 0.001);
        assertEquals(1 * 1, geometry.calculateRectangleArea(1, 1), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLengthWidth_returnsZeroArea() {
        assertEquals(0, geometry.calculateRectangleArea(0, 5), 0.001);
        assertEquals(0, geometry.calculateRectangleArea(5, 0), 0.001);
        assertEquals(0, geometry.calculateRectangleArea(0, 0), 0.001);
    }

    @Test
    void calculateRectangleArea_largeLengthWidth_returnsCorrectArea() {
        assertEquals(1000 * 2000, geometry.calculateRectangleArea(1000, 2000), 0.001);
    }

    @Test
    void calculateRectangleArea_decimalLengthWidth_returnsCorrectArea() {
        assertEquals(2.5 * 3.5, geometry.calculateRectangleArea(2.5, 3.5), 0.001);
    }

    @Test
    void calculateRectangleArea_negativeLength_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(-1, 5));
    }

    @Test
    void calculateRectangleArea_negativeWidth_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(5, -1));
    }

    @Test
    void calculateRectangleArea_bothNegative_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(-1, -1));
    }

    @Test
    void calculateTriangleArea_positiveBaseHeight_returnsCorrectArea() {
        assertEquals(0.5 * 2 * 3, geometry.calculateTriangleArea(2, 3), 0.001);
        assertEquals(0.5 * 5 * 10, geometry.calculateTriangleArea(5, 10), 0.001);
        assertEquals(0.5 * 1 * 1, geometry.calculateTriangleArea(1, 1), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBaseHeight_returnsZeroArea() {
        assertEquals(0, geometry.calculateTriangleArea(0, 5), 0.001);
        assertEquals(0, geometry.calculateTriangleArea(5, 0), 0.001);
        assertEquals(0, geometry.calculateTriangleArea(0, 0), 0.001);
    }

    @Test
    void calculateTriangleArea_largeBaseHeight_returnsCorrectArea() {
        assertEquals(0.5 * 1000 * 2000, geometry.calculateTriangleArea(1000, 2000), 0.001);
    }

    @Test
    void calculateTriangleArea_decimalBaseHeight_returnsCorrectArea() {
        assertEquals(0.5 * 2.5 * 3.5, geometry.calculateTriangleArea(2.5, 3.5), 0.001);
    }

    @Test
    void calculateTriangleArea_negativeBase_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(-1, 5));
    }

    @Test
    void calculateTriangleArea_negativeHeight_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(5, -1));
    }

    @Test
    void calculateTriangleArea_bothNegative_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(-1, -1));
    }

    @Test
    void calculateCirclePerimeter_positiveRadius_returnsCorrectPerimeter() {
        assertEquals(2 * Math.PI * 2, geometry.calculateCirclePerimeter(2), 0.001);
        assertEquals(2 * Math.PI * 5, geometry.calculateCirclePerimeter(5), 0.001);
        assertEquals(2 * Math.PI * 10, geometry.calculateCirclePerimeter(10), 0.001);
    }

    @Test
    void calculateCirclePerimeter_zeroRadius_returnsZeroPerimeter() {
        assertEquals(0, geometry.calculateCirclePerimeter(0), 0.001);
    }

    @Test
    void calculateCirclePerimeter_largeRadius_returnsCorrectPerimeter() {
        assertEquals(2 * Math.PI * 1000, geometry.calculateCirclePerimeter(1000), 0.001);
    }

    @Test
    void calculateCirclePerimeter_decimalRadius_returnsCorrectPerimeter() {
        assertEquals(2 * Math.PI * 2.5, geometry.calculateCirclePerimeter(2.5), 0.001);
    }

    @Test
    void calculateCirclePerimeter_negativeRadius_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(-1));
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(-0.001));
    }

    @Test
    void calculateRectanglePerimeter_positiveLengthWidth_returnsCorrectPerimeter() {
        assertEquals(2 * (2 + 3), geometry.calculateRectanglePerimeter(2, 3), 0.001);
        assertEquals(2 * (5 + 10), geometry.calculateRectanglePerimeter(5, 10), 0.001);
        assertEquals(2 * (1 + 1), geometry.calculateRectanglePerimeter(1, 1), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLengthWidth_returnsCorrectPerimeter() {
        assertEquals(2 * (0 + 5), geometry.calculateRectanglePerimeter(0, 5), 0.001);
        assertEquals(2 * (5 + 0), geometry.calculateRectanglePerimeter(5, 0), 0.001);
        assertEquals(0, geometry.calculateRectanglePerimeter(0, 0), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_largeLengthWidth_returnsCorrectPerimeter() {
        assertEquals(2 * (1000 + 2000), geometry.calculateRectanglePerimeter(1000, 2000), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_decimalLengthWidth_returnsCorrectPerimeter() {
        assertEquals(2 * (2.5 + 3.5), geometry.calculateRectanglePerimeter(2.5, 3.5), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_negativeLength_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(-1, 5));
    }

    @Test
    void calculateRectanglePerimeter_negativeWidth_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(5, -1));
    }

    @Test
    void calculateRectanglePerimeter_bothNegative_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(-1, -1));
    }

    @Test
    void calculateDistance_positiveCoordinates_returnsCorrectDistance() {
        assertEquals(5, geometry.calculateDistance(0, 0, 3, 4), 0.001);
        assertEquals(Math.sqrt(2), geometry.calculateDistance(0, 0, 1, 1), 0.001);
        assertEquals(5, geometry.calculateDistance(1, 2, 4, 6), 0.001);
    }

    @Test
    void calculateDistance_negativeCoordinates_returnsCorrectDistance() {
        assertEquals(5, geometry.calculateDistance(0, 0, -3, -4), 0.001);
        assertEquals(5, geometry.calculateDistance(-1, -2, -4, -6), 0.001);
        assertEquals(Math.sqrt(8), geometry.calculateDistance(-1, 1, 1, -1), 0.001);
    }

    @Test
    void calculateDistance_mixedCoordinates_returnsCorrectDistance() {
        assertEquals(5, geometry.calculateDistance(0, 0, 3, -4), 0.001);
        assertEquals(5, geometry.calculateDistance(0, 0, -3, 4), 0.001);
    }

    @Test
    void calculateDistance_sameCoordinates_returnsZeroDistance() {
        assertEquals(0, geometry.calculateDistance(0, 0, 0, 0), 0.001);
        assertEquals(0, geometry.calculateDistance(1, 1, 1, 1), 0.001);
        assertEquals(0, geometry.calculateDistance(-1, -1, -1, -1), 0.001);
    }

    @Test
    void calculateDistance_largeCoordinates_returnsCorrectDistance() {
        assertEquals(Math.sqrt(2000000), geometry.calculateDistance(0, 0, 1000, 1000), 0.001);
    }

    @Test
    void calculateDistance_decimalCoordinates_returnsCorrectDistance() {
        assertEquals(Math.sqrt(0.5), geometry.calculateDistance(0, 0, 0.5, 0.5), 0.001);
    }
}