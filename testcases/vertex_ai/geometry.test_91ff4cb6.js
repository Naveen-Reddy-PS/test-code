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
     // Test case for calculating the area of a circle with a floating-point radius.
     // /
    test('should calculate the area of a circle with a floating-point radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });

    /** */
     // Test case for throwing an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCircleArea(-1)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCircleArea("abc")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when the radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is null.
     // /
    test('should throw a TypeError when the radius is null', () => {
        expect(() => calculateCircleArea(null)).toThrow(TypeError);
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
     // Test case for calculating the area of a rectangle with floating-point dimensions.
     // /
    test('should calculate the area of a rectangle with floating-point dimensions', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
    });

    /** */
     // Test case for throwing an error when one dimension is negative.
     // /
    test('should throw an error when one dimension is negative', () => {
        expect(() => calculateRectangleArea(-1, 5)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateRectangleArea(-1, -5)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when one dimension is not a number.
     // /
    test('should throw a TypeError when one dimension is not a number', () => {
        expect(() => calculateRectangleArea("abc", 5)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are not numbers.
     // /
    test('should throw a TypeError when both dimensions are not numbers', () => {
        expect(() => calculateRectangleArea("abc", "def")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when one dimension is NaN.
     // /
    test('should throw a TypeError when one dimension is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 5)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are NaN.
     // /
    test('should throw a TypeError when both dimensions are NaN', () => {
        expect(() => calculateRectangleArea(NaN, NaN)).toThrow(TypeError);
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
     // Test case for calculating the area of a triangle with floating-point dimensions.
     // /
    test('should calculate the area of a triangle with floating-point dimensions', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });

    /** */
     // Test case for throwing an error when one dimension is negative.
     // /
    test('should throw an error when one dimension is negative', () => {
        expect(() => calculateTriangleArea(-1, 5)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateTriangleArea(-1, -5)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when one dimension is not a number.
     // /
    test('should throw a TypeError when one dimension is not a number', () => {
        expect(() => calculateTriangleArea("abc", 5)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are not numbers.
     // /
    test('should throw a TypeError when both dimensions are not numbers', () => {
        expect(() => calculateTriangleArea("abc", "def")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when one dimension is NaN.
     // /
    test('should throw a TypeError when one dimension is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 5)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are NaN.
     // /
    test('should throw a TypeError when both dimensions are NaN', () => {
        expect(() => calculateTriangleArea(NaN, NaN)).toThrow(TypeError);
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
     // Test case for calculating the perimeter of a circle with a floating-point radius.
     // /
    test('should calculate the perimeter of a circle with a floating-point radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });

    /** */
     // Test case for throwing an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCirclePerimeter(-1)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCirclePerimeter("abc")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when the radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is null.
     // /
    test('should throw a TypeError when the radius is null', () => {
        expect(() => calculateCirclePerimeter(null)).toThrow(TypeError);
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
     // Test case for calculating the perimeter of a rectangle with floating-point dimensions.
     // /
    test('should calculate the perimeter of a rectangle with floating-point dimensions', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
    });

    /** */
     // Test case for throwing an error when one dimension is negative.
     // /
    test('should throw an error when one dimension is negative', () => {
        expect(() => calculateRectanglePerimeter(-1, 5)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateRectanglePerimeter(-1, -5)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when one dimension is not a number.
     // /
    test('should throw a TypeError when one dimension is not a number', () => {
        expect(() => calculateRectanglePerimeter("abc", 5)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are not numbers.
     // /
    test('should throw a TypeError when both dimensions are not numbers', () => {
        expect(() => calculateRectanglePerimeter("abc", "def")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when one dimension is NaN.
     // /
    test('should throw a TypeError when one dimension is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 5)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when both dimensions are NaN.
     // /
    test('should throw a TypeError when both dimensions are NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, NaN)).toThrow(TypeError);
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
     // Test case for calculating the distance between two identical points.
     // /
    test('should calculate the distance between two identical points', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case for calculating the distance between two points with negative coordinates.
     // /
    test('should calculate the distance between two points with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
    });

    /** */
     // Test case for calculating the distance between two points with mixed positive and negative coordinates.
     // /
    test('should calculate the distance between two points with mixed positive and negative coordinates', () => {
        expect(calculateDistance(-1, 1, 4, -3)).toBeCloseTo(6.403);
    });

    /** */
     // Test case for throwing a TypeError when one coordinate is not a number.
     // /
    test('should throw a TypeError when one coordinate is not a number', () => {
        expect(() => calculateDistance("abc", 0, 0, 0)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when all coordinates are not numbers.
     // /
    test('should throw a TypeError when all coordinates are not numbers', () => {
        expect(() => calculateDistance("abc", "def", "ghi", "jkl")).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when one coordinate is NaN.
     // /
    test('should throw a TypeError when one coordinate is NaN', () => {
        expect(() => calculateDistance(NaN, 0, 0, 0)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when all coordinates are NaN.
     // /
    test('should throw a TypeError when all coordinates are NaN', () => {
        expect(() => calculateDistance(NaN, NaN, NaN, NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the distance with floating point coordinates.
     // /
    test('should calculate the distance with floating point coordinates', () => {
        expect(calculateDistance(1.5, 2.5, 3.5, 4.5)).toBeCloseTo(2.828);
    });

    /** */
     // Test case for calculating distance when x1 equals x2.
     // /
    test('should calculate the distance when x1 equals x2', () => {
        expect(calculateDistance(2, 1, 2, 5)).toBe(4);
    });

    /** */
     // Test case for calculating distance when y1 equals y2.
     // /
    test('should calculate the distance when y1 equals y2', () => {
        expect(calculateDistance(1, 3, 5, 3)).toBe(4);
    });
});
