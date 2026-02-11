import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class GeometryTest {

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
    void calculateCircleArea_negativeRadius_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCircleArea(radius));
    }

    @Test
    void calculateRectangleArea_positiveDimensions_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 10.0;
        double expectedArea = length * width;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLength_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 10.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroWidth_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_largeDimensions_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double length = 100.0;
        double width = 200.0;
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
    void calculateTriangleArea_positiveDimensions_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = 10.0;
        double expectedArea = 0.5 * base * height;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBase_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double base = 0.0;
        double height = 10.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroHeight_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_largeDimensions_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double base = 100.0;
        double height = 200.0;
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
    void calculateCirclePerimeter_negativeRadius_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(radius));
    }

    @Test
    void calculateRectanglePerimeter_positiveDimensions_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLength_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroWidth_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 0.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_largeDimensions_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 100.0;
        double width = 200.0;
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
    void calculateDistance_largeCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = 1000.0;
        double y1 = 2000.0;
        double x2 = 4000.0;
        double y2 = 6000.0;
        double expectedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}