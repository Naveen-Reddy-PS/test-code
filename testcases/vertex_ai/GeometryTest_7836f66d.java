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
    void calculateCircleArea_smallPositiveRadius_returnsCorrectArea() {
        Geometry geometry = new Geometry();
        double radius = 0.1;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
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
    void calculateRectangleArea_zeroLengthPositiveWidth_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 10.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_positiveLengthZeroWidth_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_negativeLengthPositiveWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = 10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
    }

    @Test
    void calculateRectangleArea_positiveLengthNegativeWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectangleArea(length, width));
    }

    @Test
    void calculateRectangleArea_negativeLengthNegativeWidth_throwsIllegalArgumentException() {
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
    void calculateTriangleArea_zeroBasePositiveHeight_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double base = 0.0;
        double height = 10.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_positiveBaseZeroHeight_returnsZeroArea() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = 0.0;
        double expectedArea = 0.0;
        assertEquals(expectedArea, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_negativeBasePositiveHeight_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double base = -5.0;
        double height = 10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
    }

    @Test
    void calculateTriangleArea_positiveBaseNegativeHeight_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double base = 5.0;
        double height = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateTriangleArea(base, height));
    }

    @Test
    void calculateTriangleArea_negativeBaseNegativeHeight_throwsIllegalArgumentException() {
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
    void calculateCirclePerimeter_negativeRadius_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double radius = -5.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateCirclePerimeter(radius));
    }

    @Test
    void calculateCirclePerimeter_smallPositiveRadius_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double radius = 0.1;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
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
        double expectedPerimeter = 0.0;
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLengthPositiveWidth_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 0.0;
        double width = 10.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_positiveLengthZeroWidth_returnsCorrectPerimeter() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = 0.0;
        double expectedPerimeter = 2 * (length + width);
        assertEquals(expectedPerimeter, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_negativeLengthPositiveWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = 10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
    }

    @Test
    void calculateRectanglePerimeter_positiveLengthNegativeWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = 5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
    }

    @Test
    void calculateRectanglePerimeter_negativeLengthNegativeWidth_throwsIllegalArgumentException() {
        Geometry geometry = new Geometry();
        double length = -5.0;
        double width = -10.0;
        assertThrows(IllegalArgumentException.class, () -> geometry.calculateRectanglePerimeter(length, width));
    }

    @Test
    void calculateDistance_positiveCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = 0.0;
        double y1 = 0.0;
        double x2 = 3.0;
        double y2 = 4.0;
        double expectedDistance = 5.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_negativeCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = -1.0;
        double y1 = -2.0;
        double x2 = 2.0;
        double y2 = 2.0;
        double expectedDistance = 5.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_sameCoordinates_returnsZeroDistance() {
        Geometry geometry = new Geometry();
        double x1 = 5.0;
        double y1 = 5.0;
        double x2 = 5.0;
        double y2 = 5.0;
        double expectedDistance = 0.0;
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
    void calculateDistance_mixedCoordinates_returnsCorrectDistance() {
        Geometry geometry = new Geometry();
        double x1 = -2.0;
        double y1 = 0.0;
        double x2 = 2.0;
        double y2 = 0.0;
        double expectedDistance = 4.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}