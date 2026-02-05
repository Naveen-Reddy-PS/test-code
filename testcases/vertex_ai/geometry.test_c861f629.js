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
     // Test case for calculating circle area with a positive radius.
     // /
    test('should calculate circle area with positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case for calculating circle area with a zero radius.
     // /
    test('should calculate circle area with zero radius', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when radius is negative.
     // /
    test('should throw an error when radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when radius is not a number.
     // /
    test('should throw a TypeError when radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case for throwing a TypeError when radius is NaN.
     // /
    test('should throw a TypeError when radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case for calculating circle area with a large radius.
     // /
    test('should calculate circle area with a large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case for calculating circle area with a decimal radius.
     // /
    test('should calculate circle area with a decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case for calculating rectangle area with positive length and width.
     // /
    test('should calculate rectangle area with positive length and width', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case for calculating rectangle area with zero length.
     // /
    test('should calculate rectangle area with zero length', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating rectangle area with zero width.
     // /
    test('should calculate rectangle area with zero width', () => {
        expect(calculateRectangleArea(5, 0)).toBe(0);
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
        expect(() => calculateRectangleArea('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when width is not a number.
     // /
    test('should throw a TypeError when width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow("Both length and width must be numbers");
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
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case for calculating triangle area with positive base and height.
     // /
    test('should calculate triangle area with positive base and height', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case for calculating triangle area with zero base.
     // /
    test('should calculate triangle area with zero base', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating triangle area with zero height.
     // /
    test('should calculate triangle area with zero height', () => {
        expect(calculateTriangleArea(5, 0)).toBe(0);
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
        expect(() => calculateTriangleArea('abc', 10)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when height is not a number.
     // /
    test('should throw a TypeError when height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow("Both base and height must be numbers");
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
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case for calculating circle perimeter with a positive radius.
     // /
    test('should calculate circle perimeter with positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case for calculating circle perimeter with a zero radius.
     // /
    test('should calculate circle perimeter with zero radius', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when radius is negative.
     // /
    test('should throw an error when radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when radius is not a number.
     // /
    test('should throw a TypeError when radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case for throwing a TypeError when radius is NaN.
     // /
    test('should throw a TypeError when radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case for calculating circle perimeter with a large radius.
     // /
    test('should calculate circle perimeter with a large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case for calculating circle perimeter with a decimal radius.
     // /
    test('should calculate circle perimeter with a decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case for calculating rectangle perimeter with positive length and width.
     // /
    test('should calculate rectangle perimeter with positive length and width', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case for calculating rectangle perimeter with zero length.
     // /
    test('should calculate rectangle perimeter with zero length', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case for calculating rectangle perimeter with zero width.
     // /
    test('should calculate rectangle perimeter with zero width', () => {
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
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
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when width is not a number.
     // /
    test('should throw a TypeError when width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow("Both length and width must be numbers");
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
});

describe('calculateDistance', () => {
    /** */
     // Test case for calculating distance between two points.
     // /
    test('should calculate distance between two points', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case for calculating distance when points are the same.
     // /
    test('should calculate distance when points are the same', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case for calculating distance with negative coordinates.
     // /
    test('should calculate distance with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
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
     // Test case for throwing a TypeError when x1 is NaN.
     // /
    test('should throw a TypeError when x1 is NaN', () => {
        expect(() => calculateDistance(NaN, 0, 3, 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when y1 is NaN.
     // /
    test('should throw a TypeError when y1 is NaN', () => {
        expect(() => calculateDistance(0, NaN, 3, 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when x2 is NaN.
     // /
    test('should throw a TypeError when x2 is NaN', () => {
        expect(() => calculateDistance(0, 0, NaN, 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case for throwing a TypeError when y2 is NaN.
     // /
    test('should throw a TypeError when y2 is NaN', () => {
        expect(() => calculateDistance(0, 0, 3, NaN)).toThrow("All coordinates must be numbers");
    });
});
