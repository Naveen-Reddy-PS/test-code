import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class GeometryTest {

    @Test
    void calculateCircleArea_positiveRadius_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double radius = 5.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_zeroRadius_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double radius = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_largeRadius_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double radius = 100.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_decimalRadius_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double radius = 2.5;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_negativeRadius_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCircleArea(radius));
    }

    @Test
    void calculateRectangleArea_positiveLengthWidth_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 10.0;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLengthWidth_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_largeLengthWidth_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double length = 100.0;
        double width = 200.0;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_decimalLengthWidth_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double length = 2.5;
        double width = 3.5;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_negativeLength_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = 10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
    }

    @Test
    void calculateRectangleArea_negativeWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
    }

    @Test
    void calculateRectangleArea_negativeLengthWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
    }

    @Test
    void calculateTriangleArea_positiveBaseHeight_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = 10.0;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBaseHeight_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double base = 0.0;
        double height = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_largeBaseHeight_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double base = 100.0;
        double height = 200.0;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_decimalBaseHeight_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double base = 2.5;
        double height = 3.5;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_negativeBase_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double base = -5.0;
        double height = 10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
    }

    @Test
    void calculateTriangleArea_negativeHeight_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
    }

    @Test
    void calculateTriangleArea_negativeBaseHeight_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double base = -5.0;
        double height = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
    }

    @Test
    void calculateCirclePerimeter_positiveRadius_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double radius = 5.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_zeroRadius_returnsZeroPerimeter() {
        Geometry geometry = new Geometry();
        double radius = 0.0;
        double expectedPerimeter = 0.0;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_largeRadius_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double radius = 100.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_decimalRadius_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double radius = 2.5;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_negativeRadius_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(radius));
    }

    @Test
    void calculateRectanglePerimeter_positiveLengthWidth_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLengthWidth_returnsZeroPerimeter() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 0.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_largeLengthWidth_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 100.0;
        double width = 200.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_decimalLengthWidth_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 2.5;
        double width = 3.5;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_negativeLength_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = 10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
    }

    @Test
    void calculateRectanglePerimeter_negativeWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
    }

    @Test
    void calculateRectanglePerimeter_negativeLengthWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
    }

    @Test
    void calculateDistance_positiveCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = 1.0;
        double y1 = 2.0;
        double x2 = 4.0;
        double y2 = 6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_zeroCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = 0.0;
        double y1 = 0.0;
        double x2 = 0.0;
        double y2 = 0.0;
        double expectedDistance = 0.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_negativeCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = -1.0;
        double y1 = -2.0;
        double x2 = -4.0;
        double y2 = -6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_mixedCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = -1.0;
        double y1 = 2.0;
        double x2 = 4.0;
        double y2 = -6.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_decimalCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = 1.5;
        double y1 = 2.5;
        double x2 = 4.5;
        double y2 = 6.5;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}