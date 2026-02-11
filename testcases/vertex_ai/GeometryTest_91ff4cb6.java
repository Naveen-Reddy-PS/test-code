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
        assertEquals(0.0, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_largeRadius_returnsCorrectArea() {
        double radius = 1000.0;
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
        assertEquals(50.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLengthWidth_returnsZeroArea() {
        double length = 0.0;
        double width = 0.0;
        assertEquals(0.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_oneZeroDimension_returnsZeroArea() {
        double length = 5.0;
        double width = 0.0;
        assertEquals(0.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_largeLengthWidth_returnsCorrectArea() {
        double length = 1000.0;
        double width = 2000.0;
        assertEquals(2000000.0, geometry.calculateRectangleArea(length, width), 0.001);
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
    void calculateRectangleArea_negativeLengthWidth_throwsIllegalArgumentException() {
        double length = -5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_positiveBaseHeight_returnsCorrectArea() {
        double base = 5.0;
        double height = 10.0;
        assertEquals(25.0, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBaseHeight_returnsZeroArea() {
        double base = 0.0;
        double height = 0.0;
        assertEquals(0.0, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_oneZeroDimension_returnsZeroArea() {
        double base = 5.0;
        double height = 0.0;
        assertEquals(0.0, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_largeBaseHeight_returnsCorrectArea() {
        double base = 1000.0;
        double height = 2000.0;
        assertEquals(1000000.0, geometry.calculateTriangleArea(base, height), 0.001);
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
    void calculateTriangleArea_negativeBaseHeight_throwsIllegalArgumentException() {
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
        assertEquals(0.0, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_largeRadius_returnsCorrectPerimeter() {
        double radius = 1000.0;
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
        assertEquals(30.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLengthWidth_returnsZeroPerimeter() {
        double length = 0.0;
        double width = 0.0;
        assertEquals(0.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_oneZeroDimension_returnsCorrectPerimeter() {
        double length = 5.0;
        double width = 0.0;
        assertEquals(10.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_largeLengthWidth_returnsCorrectPerimeter() {
        double length = 1000.0;
        double width = 2000.0;
        assertEquals(6000.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
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
    void calculateRectanglePerimeter_negativeLengthWidth_throwsIllegalArgumentException() {
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
        assertEquals(5.0, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_negativeCoordinates_returnsCorrectDistance() {
        double x1 = -1.0;
        double y1 = -2.0;
        double x2 = 2.0;
        double y2 = 2.0;
        assertEquals(5.0, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_sameCoordinates_returnsZeroDistance() {
        double x1 = 5.0;
        double y1 = 5.0;
        double x2 = 5.0;
        double y2 = 5.0;
        assertEquals(0.0, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_largeCoordinates_returnsCorrectDistance() {
        double x1 = 1000.0;
        double y1 = 1000.0;
        double x2 = 1003.0;
        double y2 = 1004.0;
        assertEquals(5.0, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_decimalCoordinates_returnsCorrectDistance() {
        double x1 = 0.5;
        double y1 = 1.5;
        double x2 = 3.5;
        double y2 = 5.5;
        assertEquals(5.0, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}