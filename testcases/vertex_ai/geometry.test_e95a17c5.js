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
    test('should calculate circle area with positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case for calculating the area of a circle with a zero radius.
     // /
    test('should calculate circle area with zero radius', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the radius is negative.
     // /
    test('should throw an error when radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case for calculating circle area with a large positive radius.
     // /
    test('should calculate circle area with a large positive radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case for calculating circle area with a small positive radius.
     // /
    test('should calculate circle area with a small positive radius', () => {
        expect(calculateCircleArea(0.1)).toBeCloseTo(Math.PI * 0.1 * 0.1);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case for calculating the area of a rectangle with positive dimensions.
     // /
    test('should calculate rectangle area with positive dimensions', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case for calculating the area of a rectangle with one dimension as zero.
     // /
    test('should calculate rectangle area with one dimension as zero', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating the area of a rectangle with both dimensions as zero.
     // /
    test('should calculate rectangle area with both dimensions as zero', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the length is negative.
     // /
    test('should throw an error when length is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when the width is negative.
     // /
    test('should throw an error when width is negative', () => {
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both length and width are negative.
     // /
    test('should throw an error when both length and width are negative', () => {
        expect(() => calculateRectangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the length is not a number.
     // /
    test('should throw a TypeError when length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when both length and width are not numbers.
     // /
    test('should throw a TypeError when both length and width are not numbers', () => {
        expect(() => calculateRectangleArea('abc', 'def')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when length is NaN.
     // /
    test('should throw a TypeError when length is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when width is NaN.
     // /
    test('should throw a TypeError when width is NaN', () => {
        expect(() => calculateRectangleArea(5, NaN)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when both length and width are NaN.
     // /
    test('should throw a TypeError when both length and width are NaN', () => {
        expect(() => calculateRectangleArea(NaN, NaN)).toThrow("Both length and width must be numbers");
    });
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case for calculating the area of a triangle with positive dimensions.
     // /
    test('should calculate triangle area with positive dimensions', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case for calculating the area of a triangle with one dimension as zero.
     // /
    test('should calculate triangle area with one dimension as zero', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating the area of a triangle with both dimensions as zero.
     // /
    test('should calculate triangle area with both dimensions as zero', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the base is negative.
     // /
    test('should throw an error when base is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when the height is negative.
     // /
    test('should throw an error when height is negative', () => {
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both base and height are negative.
     // /
    test('should throw an error when both base and height are negative', () => {
        expect(() => calculateTriangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the base is not a number.
     // /
    test('should throw a TypeError when base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when the height is not a number.
     // /
    test('should throw a TypeError when height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when both base and height are not numbers.
     // /
    test('should throw a TypeError when both base and height are not numbers', () => {
        expect(() => calculateTriangleArea('abc', 'def')).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when base is NaN.
     // /
    test('should throw a TypeError when base is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 10)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when height is NaN.
     // /
    test('should throw a TypeError when height is NaN', () => {
        expect(() => calculateTriangleArea(5, NaN)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when both base and height are NaN.
     // /
    test('should throw a TypeError when both base and height are NaN', () => {
        expect(() => calculateTriangleArea(NaN, NaN)).toThrow("Both base and height must be numbers");
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case for calculating the perimeter of a circle with a positive radius.
     // /
    test('should calculate circle perimeter with positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case for calculating the perimeter of a circle with a zero radius.
     // /
    test('should calculate circle perimeter with zero radius', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the radius is negative.
     // /
    test('should throw an error when radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case for calculating circle perimeter with a large positive radius.
     // /
    test('should calculate circle perimeter with a large positive radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case for calculating circle perimeter with a small positive radius.
     // /
    test('should calculate circle perimeter with a small positive radius', () => {
        expect(calculateCirclePerimeter(0.1)).toBeCloseTo(2 * Math.PI * 0.1);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case for calculating the perimeter of a rectangle with positive dimensions.
     // /
    test('should calculate rectangle perimeter with positive dimensions', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with one dimension as zero.
     // /
    test('should calculate rectangle perimeter with one dimension as zero', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with both dimensions as zero.
     // /
    test('should calculate rectangle perimeter with both dimensions as zero', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the length is negative.
     // /
    test('should throw an error when length is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when the width is negative.
     // /
    test('should throw an error when width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when both length and width are negative.
     // /
    test('should throw an error when both length and width are negative', () => {
        expect(() => calculateRectanglePerimeter(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the length is not a number.
     // /
    test('should throw a TypeError when length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when both length and width are not numbers.
     // /
    test('should throw a TypeError when both length and width are not numbers', () => {
        expect(() => calculateRectanglePerimeter('abc', 'def')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when length is NaN.
     // /
    test('should throw a TypeError when length is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when width is NaN.
     // /
    test('should throw a TypeError when width is NaN', () => {
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when both length and width are NaN.
     // /
    test('should throw a TypeError when both length and width are NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, NaN)).toThrow("Both length and width must be numbers");
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case for calculating the distance between two points with positive coordinates.
     // /
    test('should calculate distance with positive coordinates', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case for calculating the distance between two points with negative coordinates.
     // /
    test('should calculate distance with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
    });

    /** */
     // Test case for calculating the distance between two identical points.
     // /
    test('should calculate distance between identical points', () => {
        expect(calculateDistance(2, 2, 2, 2)).toBe(0);
    });

    /** */
     // Test case for calculating the distance between two points on the x-axis.
     // /
    test('should calculate distance between points on x-axis', () => {
        expect(calculateDistance(1, 0, 5, 0)).toBe(4);
    });

    /** */
     // Test case for calculating the distance between two points on the y-axis.
     // /
    test('should calculate distance between points on y-axis', () => {
        expect(calculateDistance(0, 1, 0, 5)).toBe(4);
    });

    /** */
     // Test case for throwing a TypeError when x1 is not a number.
     // /
    test('should throw a TypeError when x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 3, 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when y1 is not a number.
     // /
    test('should throw a TypeError when y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 3, 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when x2 is not a number.
     // /
    test('should throw a TypeError when x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when y2 is not a number.
     // /
    test('should throw a TypeError when y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 3, 'abc')).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when any coordinate is

});
