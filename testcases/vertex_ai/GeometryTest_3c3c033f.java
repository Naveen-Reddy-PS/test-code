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
        double radius = 100.0;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateCircleArea_negativeRadius_throwsIllegalArgumentException() {
        double radius = -1.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateCircleArea(radius);
        });
        assertEquals("Radius cannot be negative", exception.getMessage());
    }

    @Test
    void calculateCircleArea_smallPositiveRadius_returnsCorrectArea() {
        double radius = 0.1;
        double expectedArea = Math.PI * radius * radius;
        assertEquals(expectedArea, geometry.calculateCircleArea(radius), 0.001);
    }

    @Test
    void calculateRectangleArea_positiveLengthAndWidth_returnsCorrectArea() {
        double length = 5.0;
        double width = 10.0;
        assertEquals(50.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroLength_returnsZeroArea() {
        double length = 0.0;
        double width = 10.0;
        assertEquals(0.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_zeroWidth_returnsZeroArea() {
        double length = 5.0;
        double width = 0.0;
        assertEquals(0.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateRectangleArea_negativeLength_throwsIllegalArgumentException() {
        double length = -1.0;
        double width = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateRectangleArea(length, width);
        });
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_negativeWidth_throwsIllegalArgumentException() {
        double length = 5.0;
        double width = -1.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateRectangleArea(length, width);
        });
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectangleArea_largeDimensions_returnsCorrectArea() {
        double length = 100.0;
        double width = 200.0;
        assertEquals(20000.0, geometry.calculateRectangleArea(length, width), 0.001);
    }

    @Test
    void calculateTriangleArea_positiveBaseAndHeight_returnsCorrectArea() {
        double base = 5.0;
        double height = 10.0;
        assertEquals(25.0, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroBase_returnsZeroArea() {
        double base = 0.0;
        double height = 10.0;
        assertEquals(0.0, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_zeroHeight_returnsZeroArea() {
        double base = 5.0;
        double height = 0.0;
        assertEquals(0.0, geometry.calculateTriangleArea(base, height), 0.001);
    }

    @Test
    void calculateTriangleArea_negativeBase_throwsIllegalArgumentException() {
        double base = -1.0;
        double height = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateTriangleArea(base, height);
        });
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_negativeHeight_throwsIllegalArgumentException() {
        double base = 5.0;
        double height = -1.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateTriangleArea(base, height);
        });
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateTriangleArea_largeDimensions_returnsCorrectArea() {
        double base = 100.0;
        double height = 200.0;
        assertEquals(10000.0, geometry.calculateTriangleArea(base, height), 0.001);
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
        double radius = 100.0;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateCirclePerimeter_negativeRadius_throwsIllegalArgumentException() {
        double radius = -1.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateCirclePerimeter(radius);
        });
        assertEquals("Radius cannot be negative", exception.getMessage());
    }

     @Test
    void calculateCirclePerimeter_smallPositiveRadius_returnsCorrectPerimeter() {
        double radius = 0.1;
        double expectedPerimeter = 2 * Math.PI * radius;
        assertEquals(expectedPerimeter, geometry.calculateCirclePerimeter(radius), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_positiveLengthAndWidth_returnsCorrectPerimeter() {
        double length = 5.0;
        double width = 10.0;
        assertEquals(30.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroLength_returnsCorrectPerimeter() {
        double length = 0.0;
        double width = 10.0;
        assertEquals(20.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_zeroWidth_returnsCorrectPerimeter() {
        double length = 5.0;
        double width = 0.0;
        assertEquals(10.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateRectanglePerimeter_negativeLength_throwsIllegalArgumentException() {
        double length = -1.0;
        double width = 10.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateRectanglePerimeter(length, width);
        });
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_negativeWidth_throwsIllegalArgumentException() {
        double length = 5.0;
        double width = -1.0;
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            geometry.calculateRectanglePerimeter(length, width);
        });
        assertEquals("Dimensions cannot be negative", exception.getMessage());
    }

    @Test
    void calculateRectanglePerimeter_largeDimensions_returnsCorrectPerimeter() {
        double length = 100.0;
        double width = 200.0;
        assertEquals(600.0, geometry.calculateRectanglePerimeter(length, width), 0.001);
    }

    @Test
    void calculateDistance_positiveCoordinates_returnsCorrectDistance() {
        double x1 = 1.0;
        double y1 = 2.0;
        double x2 = 4.0;
        double y2 = 6.0;
        double expectedDistance = 5.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_zeroCoordinates_returnsCorrectDistance() {
        double x1 = 0.0;
        double y1 = 0.0;
        double x2 = 0.0;
        double y2 = 0.0;
        assertEquals(0.0, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
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
    void calculateDistance_mixedCoordinates_returnsCorrectDistance() {
        double x1 = -1.0;
        double y1 = 2.0;
        double x2 = 4.0;
        double y2 = -6.0;
        double expectedDistance = Math.sqrt(89);
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }

    @Test
    void calculateDistance_largeCoordinates_returnsCorrectDistance() {
        double x1 = 100.0;
        double y1 = 200.0;
        double x2 = 400.0;
        double y2 = 600.0;
        double expectedDistance = 500.0;
        assertEquals(expectedDistance, geometry.calculateDistance(x1, y1, x2, y2), 0.001);
    }
}