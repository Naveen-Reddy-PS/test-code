import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class GeometryTest {

    @Test
    void calculateCircleArea_positiveRadius() {
        Geometry geometry = new Geometry();
        double radius = 5.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_zeroRadius() {
        Geometry geometry = new Geometry();
        double radius = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_largeRadius() {
        Geometry geometry = new Geometry();
        double radius = 100.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_smallRadius() {
        Geometry geometry = new Geometry();
        double radius = 0.1;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_negativeRadius_throwsException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateCircleArea(radius));
        assertEquals("Radius cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_positiveDimensions() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 10.0;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLength() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 10.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroWidth() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_negativeLength_throwsException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_negativeWidth_throwsException() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_negativeBoth_throwsException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_positiveDimensions() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = 10.0;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBase() {
        Geometry geometry = new Geometry();
        double base = 0.0;
        double height = 10.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroHeight() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_negativeBase_throwsException() {
        Geometry geometry = new Geometry();
        double base = -5.0;
        double height = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_negativeHeight_throwsException() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_negativeBoth_throwsException() {
        Geometry geometry = new Geometry();
        double base = -5.0;
        double height = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateCirclePerimeter_positiveRadius() {
        Geometry geometry = new Geometry();
        double radius = 5.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_zeroRadius() {
        Geometry geometry = new Geometry();
        double radius = 0.0;
        double expectedPerimeter = 0.0;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_largeRadius() {
        Geometry geometry = new Geometry();
        double radius = 100.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_smallRadius() {
        Geometry geometry = new Geometry();
        double radius = 0.1;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_negativeRadius_throwsException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(radius));
        assertEquals("Radius cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_positiveDimensions() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLength() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroWidth() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 0.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_negativeLength_throwsException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_negativeWidth_throwsException() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_negativeBoth_throwsException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = -10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateDistance_positiveCoordinates() {
        Geometry geometry = new Geometry();
        double x1 = 1.0;
        double y1 = 2.0;
        double x2 = 4.0;
        double y2 = 6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_zeroCoordinates() {
        Geometry geometry = new Geometry();
        double x1 = 0.0;
        double y1 = 0.0;
        double x2 = 0.0;
        double y2 = 0.0;
        double expectedDistance = 0.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_negativeCoordinates() {
        Geometry geometry = new Geometry();
        double x1 = -1.0;
        double y1 = -2.0;
        double x2 = -4.0;
        double y2 = -6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_mixedCoordinates() {
        Geometry geometry = new Geometry();
        double x1 = -1.0;
        double y1 = 2.0;
        double x2 = 4.0;
        double y2 = -6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_sameX() {
        Geometry geometry = new Geometry();
        double x1 = 5.0;
        double y1 = 2.0;
        double x2 = 5.0;
        double y2 = 6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_sameY() {
        Geometry geometry = new Geometry();
        double x1 = 1.0;
        double y1 = 5.0;
        double x2 = 4.0;
        double y2 = 5.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}