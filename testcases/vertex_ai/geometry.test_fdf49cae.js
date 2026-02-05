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
        expect(() => calculateCircleArea('abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the area of a circle with a large positive radius.
     // /
    test('should calculate circle area with large positive radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case for calculating the area of a circle with a decimal radius.
     // /
    test('should calculate circle area with decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
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
     // Test case for calculating the area of a rectangle with one dimension zero.
     // /
    test('should calculate rectangle area with one dimension zero', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating the area of a rectangle with both dimensions zero.
     // /
    test('should calculate rectangle area with both dimensions zero', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when length is negative.
     // /
    test('should throw an error when length is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when width is negative.
     // /
    test('should throw an error when width is negative', () => {
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when length is not a number.
     // /
    test('should throw a TypeError when length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when width is not a number.
     // /
    test('should throw a TypeError when width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when length is NaN.
     // /
    test('should throw a TypeError when length is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when width is NaN.
     // /
    test('should throw a TypeError when width is NaN', () => {
        expect(() => calculateRectangleArea(5, NaN)).toThrow(TypeError);
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
     // Test case for calculating the area of a triangle with one dimension zero.
     // /
    test('should calculate triangle area with one dimension zero', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating the area of a triangle with both dimensions zero.
     // /
    test('should calculate triangle area with both dimensions zero', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when base is negative.
     // /
    test('should throw an error when base is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when height is negative.
     // /
    test('should throw an error when height is negative', () => {
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when base is not a number.
     // /
    test('should throw a TypeError when base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when height is not a number.
     // /
    test('should throw a TypeError when height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when base is NaN.
     // /
    test('should throw a TypeError when base is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when height is NaN.
     // /
    test('should throw a TypeError when height is NaN', () => {
        expect(() => calculateTriangleArea(5, NaN)).toThrow(TypeError);
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
        expect(() => calculateCirclePerimeter('abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating the perimeter of a circle with a large positive radius.
     // /
    test('should calculate circle perimeter with large positive radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case for calculating the perimeter of a circle with a decimal radius.
     // /
    test('should calculate circle perimeter with decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
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
     // Test case for calculating the perimeter of a rectangle with one dimension zero.
     // /
    test('should calculate rectangle perimeter with one dimension zero', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case for calculating the perimeter of a rectangle with both dimensions zero.
     // /
    test('should calculate rectangle perimeter with both dimensions zero', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when length is negative.
     // /
    test('should throw an error when length is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when width is negative.
     // /
    test('should throw an error when width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when length is not a number.
     // /
    test('should throw a TypeError when length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when width is not a number.
     // /
    test('should throw a TypeError when width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when length is NaN.
     // /
    test('should throw a TypeError when length is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when width is NaN.
     // /
    test('should throw a TypeError when width is NaN', () => {
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow(TypeError);
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
     // Test case for throwing a TypeError when x1 is not a number.
     // /
    test('should throw a TypeError when x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 3, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when y1 is not a number.
     // /
    test('should throw a TypeError when y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 3, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when x2 is not a number.
     // /
    test('should throw a TypeError when x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 4)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when y2 is not a number.
     // /
    test('should throw a TypeError when y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 3, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when x1 is NaN.
     // /
    test('should throw a TypeError when x1 is NaN', () => {
        expect(() => calculateDistance(NaN, 0, 3, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when y1 is NaN.
     // /
    test('should throw a TypeError when y1 is NaN', () => {
        expect(() => calculateDistance(0, NaN, 3, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when x2 is NaN.
     // /
    test('should throw a TypeError when x2 is NaN', () => {
        expect(() => calculateDistance(0, 0, NaN, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when y2 is NaN.
     // /
    test('should throw a TypeError when y2 is NaN', () => {
        expect(() => calculateDistance(0, 0, 3, NaN)).toThrow(TypeError);
    });
});
