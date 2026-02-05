/**
 * Geometry utility class with shape calculations.
 */
public class Geometry {
    /**
     * Calculate the area of a circle.
     *
     * @param radius The radius of the circle
     * @return Area of the circle (π * r²)
     * @throws IllegalArgumentException if radius is negative
     */
    public double calculateCircleArea(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        return Math.PI * radius * radius;
    }

    /**
     * Calculate the area of a rectangle.
     *
     * @param length The length of the rectangle
     * @param width The width of the rectangle
     * @return Area of the rectangle (length * width)
     * @throws IllegalArgumentException if either dimension is negative
     */
    public double calculateRectangleArea(double length, double width) {
        if (length < 0 || width < 0) {
            throw new IllegalArgumentException("Dimensions cannot be negative");
        }
        return length * width;
    }

    /**
     * Calculate the area of a triangle.
     *
     * @param base The base length of the triangle
     * @param height The height of the triangle
     * @return Area of the triangle (0.5 * base * height)
     * @throws IllegalArgumentException if either dimension is negative
     */
    public double calculateTriangleArea(double base, double height) {
        if (base < 0 || height < 0) {
            throw new IllegalArgumentException("Dimensions cannot be negative");
        }
        return 0.5 * base * height;
    }

    /**
     * Calculate the perimeter (circumference) of a circle.
     *
     * @param radius The radius of the circle
     * @return Perimeter of the circle (2 * π * r)
     * @throws IllegalArgumentException if radius is negative
     */
    public double calculateCirclePerimeter(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        return 2 * Math.PI * radius;
    }

    /**
     * Calculate the perimeter of a rectangle.
     *
     * @param length The length of the rectangle
     * @param width The width of the rectangle
     * @return Perimeter of the rectangle (2 * (length + width))
     * @throws IllegalArgumentException if either dimension is negative
     */
    public double calculateRectanglePerimeter(double length, double width) {
        if (length < 0 || width < 0) {
            throw new IllegalArgumentException("Dimensions cannot be negative");
        }
        return 2 * (length + width);
    }

    /**
     * Calculate the Euclidean distance between two points.
     *
     * @param x1 X coordinate of first point
     * @param y1 Y coordinate of first point
     * @param x2 X coordinate of second point
     * @param y2 Y coordinate of second point
     * @return Distance between the two points
     */
    public double calculateDistance(double x1, double y1, double x2, double y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}
