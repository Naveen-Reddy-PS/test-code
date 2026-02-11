const {
    calculateCircleArea,
    calculateRectangleArea,
    calculateTriangleArea,
    calculateCirclePerimeter,
    calculateRectanglePerimeter,
    calculateDistance
} = require('../../geometry');

describe('calculateCircleArea', () => {
    /** */
     // Test case for calculating the area of a circle with a positive radius.
     // /
    test('should calculate the area of a circle with a positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case for calculating the area of a circle with a zero radius.
     // /
    test('should calculate the area of a circle with a zero radius', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCircleArea("hello")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when the radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the area of a circle with a large radius.
     // /
    test('should calculate the area of a circle with a large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case for calculating the area of a circle with a decimal radius.
     // /
    test('should calculate the area of a circle with a decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case for calculating the area of a rectangle with positive dimensions.
     // /
    test('should calculate the area of a rectangle with positive dimensions', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case for calculating the area of a rectangle with one dimension being zero.
     // /
    test('should calculate the area of a rectangle with one dimension being zero', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating the area of a rectangle with both dimensions being zero.
     // /
    test('should calculate the area of a rectangle with both dimensions being zero', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when one dimension is negative.
     // /
    test('should throw an error when one dimension is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateRectangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when one dimension is not a number.
     // /
    test('should throw a TypeError when one dimension is not a number', () => {
        expect(() => calculateRectangleArea("hello", 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are not numbers.
     // /
    test('should throw a TypeError when both dimensions are not numbers', () => {
        expect(() => calculateRectangleArea("hello", "world")).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the area of a rectangle with large dimensions.
     // /
    test('should calculate the area of a rectangle with large dimensions', () => {
        expect(calculateRectangleArea(1000, 2000)).toBe(2000000);
    });

    /** */
     // Test case for calculating the area of a rectangle with decimal dimensions.
     // /
    test('should calculate the area of a rectangle with decimal dimensions', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
    });
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case for calculating the area of a triangle with positive dimensions.
     // /
    test('should calculate the area of a triangle with positive dimensions', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case for calculating the area of a triangle with one dimension being zero.
     // /
    test('should calculate the area of a triangle with one dimension being zero', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating the area of a triangle with both dimensions being zero.
     // /
    test('should calculate the area of a triangle with both dimensions being zero', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when one dimension is negative.
     // /
    test('should throw an error when one dimension is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateTriangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when one dimension is not a number.
     // /
    test('should throw a TypeError when one dimension is not a number', () => {
        expect(() => calculateTriangleArea("hello", 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are not numbers.
     // /
    test('should throw a TypeError when both dimensions are not numbers', () => {
        expect(() => calculateTriangleArea("hello", "world")).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the area of a triangle with large dimensions.
     // /
    test('should calculate the area of a triangle with large dimensions', () => {
        expect(calculateTriangleArea(1000, 2000)).toBe(1000000);
    });

    /** */
     // Test case for calculating the area of a triangle with decimal dimensions.
     // /
    test('should calculate the area of a triangle with decimal dimensions', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case for calculating the perimeter of a circle with a positive radius.
     // /
    test('should calculate the perimeter of a circle with a positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case for calculating the perimeter of a circle with a zero radius.
     // /
    test('should calculate the perimeter of a circle with a zero radius', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCirclePerimeter("hello")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when the radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the perimeter of a circle with a large radius.
     // /
    test('should calculate the perimeter of a circle with a large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case for calculating the perimeter of a circle with a decimal radius.
     // /
    test('should calculate the perimeter of a circle with a decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case for calculating the perimeter of a rectangle with positive dimensions.
     // /
    test('should calculate the perimeter of a rectangle with positive dimensions', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with one dimension being zero.
     // /
    test('should calculate the perimeter of a rectangle with one dimension being zero', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with both dimensions being zero.
     // /
    test('should calculate the perimeter of a rectangle with both dimensions being zero', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when one dimension is negative.
     // /
    test('should throw an error when one dimension is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateRectanglePerimeter(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when one dimension is not a number.
     // /
    test('should throw a TypeError when one dimension is not a number', () => {
        expect(() => calculateRectanglePerimeter("hello", 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are not numbers.
     // /
    test('should throw a TypeError when both dimensions are not numbers', () => {
        expect(() => calculateRectanglePerimeter("hello", "world")).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with large dimensions.
     // /
    test('should calculate the perimeter of a rectangle with large dimensions', () => {
        expect(calculateRectanglePerimeter(1000, 2000)).toBe(6000);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with decimal dimensions.
     // /
    test('should calculate the perimeter of a rectangle with decimal dimensions', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case for calculating the distance between two points with positive coordinates.
     // /
    test('should calculate the distance between two points with positive coordinates', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case for calculating the distance between two points with negative coordinates.
     // /
    test('should calculate the distance between two points with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
    });

    /** */
     // Test case for calculating the distance between two points with mixed coordinates.
     // /
    test('should calculate the distance between two points with mixed coordinates', () => {
        expect(calculateDistance(-1, 1, 4, -5)).toBeCloseTo(7.810);
    });

    /** */
     // Test case for calculating the distance between two identical points.
     // /
    test('should calculate the distance between two identical points', () => {
        expect(calculateDistance(2, 2, 2, 2)).toBe(0);
    });

    /** */
     // Test case for throwing a TypeError when one coordinate is not a number.
     // /
    test('should throw a TypeError when one coordinate is not a number', () => {
        expect(() => calculateDistance("hello", 1, 2, 3)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when all coordinates are not numbers.
     // /
    test('should throw a TypeError when all coordinates are not numbers', () => {
        expect(() => calculateDistance("a", "b", "c", "d")).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the distance between two points with large coordinates.
     // /
    test('should calculate the distance between two points with large coordinates', () => {
        expect(calculateDistance(1000, 1000, 4000, 5000)).toBeCloseTo(5000);
    });

    /** */
     // Test case for calculating the distance between two points with decimal coordinates.
     // /
    test('should calculate the distance between two points with decimal coordinates', () => {
        expect(calculateDistance(1.5, 2.5, 4.5, 6.5)).toBeCloseTo(5);
    });
});
