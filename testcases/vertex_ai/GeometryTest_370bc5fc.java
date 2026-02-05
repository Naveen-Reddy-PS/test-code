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
        double radius = 5.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_zeroRadius_returnsZeroArea() {
        double radius = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_largeRadius_returnsCorrectArea() {
        double radius = 100.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_decimalRadius_returnsCorrectArea() {
        double radius = 2.5;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_negativeRadius_throwsIllegalArgumentException() {
        double radius = -5.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateCircleArea(radius));
        assertEquals("Radius cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_positiveLengthWidth_returnsCorrectArea() {
        double length = 5.0;
        double width = 10.0;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLengthWidth_returnsZeroArea() {
        double length = 0.0;
        double width = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_largeLengthWidth_returnsCorrectArea() {
        double length = 100.0;
        double width = 200.0;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_decimalLengthWidth_returnsCorrectArea() {
        double length = 2.5;
        double width = 3.5;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_negativeLength_throwsIllegalArgumentException() {
        double length = -5.0;
        double width = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_negativeWidth_throwsIllegalArgumentException() {
        double length = 5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_negativeLengthAndWidth_throwsIllegalArgumentException() {
        double length = -5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_positiveBaseHeight_returnsCorrectArea() {
        double base = 5.0;
        double height = 10.0;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBaseHeight_returnsZeroArea() {
        double base = 0.0;
        double height = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_largeBaseHeight_returnsCorrectArea() {
        double base = 100.0;
        double height = 200.0;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_decimalBaseHeight_returnsCorrectArea() {
        double base = 2.5;
        double height = 3.5;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_negativeBase_throwsIllegalArgumentException() {
        double base = -5.0;
        double height = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_negativeHeight_throwsIllegalArgumentException() {
        double base = 5.0;
        double height = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_negativeBaseAndHeight_throwsIllegalArgumentException() {
        double base = -5.0;
        double height = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateCirclePerimeter_positiveRadius_returnsCorrectPerimeter() {
        double radius = 5.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_zeroRadius_returnsZeroPerimeter() {
        double radius = 0.0;
        double expectedPerimeter = 0.0;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_largeRadius_returnsCorrectPerimeter() {
        double radius = 100.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_decimalRadius_returnsCorrectPerimeter() {
        double radius = 2.5;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_negativeRadius_throwsIllegalArgumentException() {
        double radius = -5.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(radius));
        assertEquals("Radius cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_positiveLengthWidth_returnsCorrectPerimeter() {
        double length = 5.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLengthWidth_returnsZeroPerimeter() {
        double length = 0.0;
        double width = 0.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_largeLengthWidth_returnsCorrectPerimeter() {
        double length = 100.0;
        double width = 200.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_decimalLengthWidth_returnsCorrectPerimeter() {
        double length = 2.5;
        double width = 3.5;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_negativeLength_throwsIllegalArgumentException() {
        double length = -5.0;
        double width = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_negativeWidth_throwsIllegalArgumentException() {
        double length = 5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_negativeLengthAndWidth_throwsIllegalArgumentException() {
        double length = -5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateDistance_positiveCoordinates_returnsCorrectDistance() {
        double x1 = 0.0;
        double y1 = 0.0;
        double x2 = 3.0;
        double y2 = 4.0;
        double expectedDistance = 5.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_negativeCoordinates_returnsCorrectDistance() {
        double x1 = -1.0;
        double y1 = -2.0;
        double x2 = -4.0;
        double y2 = -6.0;
        double expectedDistance = 5.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_sameCoordinates_returnsZeroDistance() {
        double x1 = 5.0;
        double y1 = 5.0;
        double x2 = 5.0;
        double y2 = 5.0;
        double expectedDistance = 0.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_decimalCoordinates_returnsCorrectDistance() {
        double x1 = 1.5;
        double y1 = 2.5;
        double x2 = 4.5;
        double y2 = 6.5;
        double expectedDistance = 5.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_mixedCoordinates_returnsCorrectDistance() {
        double x1 = -2.0;
        double y1 = 1.0;
        double x2 = 4.0;
        double y2 = -7.0;
        double expectedDistance = 10.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}