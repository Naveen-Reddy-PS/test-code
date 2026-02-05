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
    test('should calculate circle area with a positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case for calculating circle area with a zero radius.
     // /
    test('should calculate circle area with a zero radius', () => {
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
        expect(() => calculateCircleArea('abc')).toThrow(TypeError);
        expect(() => calculateCircleArea(null)).toThrow(TypeError);
        expect(() => calculateCircleArea(undefined)).toThrow(TypeError);
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating circle area with a large positive radius.
     // /
    test('should calculate circle area with a large positive radius', () => {
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
     // Test case for calculating rectangle area with zero length and positive width.
     // /
    test('should calculate rectangle area with zero length and positive width', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating rectangle area with positive length and zero width.
     // /
    test('should calculate rectangle area with positive length and zero width', () => {
        expect(calculateRectangleArea(5, 0)).toBe(0);
    });

    /** */
     // Test case for calculating rectangle area with zero length and zero width.
     // /
    test('should calculate rectangle area with zero length and zero width', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the length is negative.
     // /
    test('should throw an error when the length is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when the width is negative.
     // /
    test('should throw an error when the width is negative', () => {
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the length is not a number.
     // /
    test('should throw a TypeError when the length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea(null, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when the width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, null)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating rectangle area with large positive length and width.
     // /
    test('should calculate rectangle area with large positive length and width', () => {
        expect(calculateRectangleArea(1000, 2000)).toBe(2000000);
    });

    /** */
     // Test case for calculating rectangle area with decimal length and width.
     // /
    test('should calculate rectangle area with decimal length and width', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
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
     // Test case for calculating triangle area with zero base and positive height.
     // /
    test('should calculate triangle area with zero base and positive height', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for calculating triangle area with positive base and zero height.
     // /
    test('should calculate triangle area with positive base and zero height', () => {
        expect(calculateTriangleArea(5, 0)).toBe(0);
    });

    /** */
     // Test case for calculating triangle area with zero base and zero height.
     // /
    test('should calculate triangle area with zero base and zero height', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the base is negative.
     // /
    test('should throw an error when the base is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when the height is negative.
     // /
    test('should throw an error when the height is negative', () => {
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the base is not a number.
     // /
    test('should throw a TypeError when the base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea(null, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the height is not a number.
     // /
    test('should throw a TypeError when the height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, null)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating triangle area with large positive base and height.
     // /
    test('should calculate triangle area with large positive base and height', () => {
        expect(calculateTriangleArea(1000, 2000)).toBe(1000000);
    });

    /** */
     // Test case for calculating triangle area with decimal base and height.
     // /
    test('should calculate triangle area with decimal base and height', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case for calculating circle perimeter with a positive radius.
     // /
    test('should calculate circle perimeter with a positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case for calculating circle perimeter with a zero radius.
     // /
    test('should calculate circle perimeter with a zero radius', () => {
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
        expect(() => calculateCirclePerimeter('abc')).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(null)).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(undefined)).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating circle perimeter with a large positive radius.
     // /
    test('should calculate circle perimeter with a large positive radius', () => {
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
     // Test case for calculating rectangle perimeter with zero length and positive width.
     // /
    test('should calculate rectangle perimeter with zero length and positive width', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case for calculating rectangle perimeter with positive length and zero width.
     // /
    test('should calculate rectangle perimeter with positive length and zero width', () => {
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
    });

    /** */
     // Test case for calculating rectangle perimeter with zero length and zero width.
     // /
    test('should calculate rectangle perimeter with zero length and zero width', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case for throwing an error when the length is negative.
     // /
    test('should throw an error when the length is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing an error when the width is negative.
     // /
    test('should throw an error when the width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case for throwing a TypeError when the length is not a number.
     // /
    test('should throw a TypeError when the length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(null, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when the width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, null)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating rectangle perimeter with large positive length and width.
     // /
    test('should calculate rectangle perimeter with large positive length and width', () => {
        expect(calculateRectanglePerimeter(1000, 2000)).toBe(6000);
    });

    /** */
     // Test case for calculating rectangle perimeter with decimal length and width.
     // /
    test('should calculate rectangle perimeter with decimal length and width', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
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
     // Test case for calculating distance between the same point.
     // /
    test('should calculate distance between the same point', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case for calculating distance with negative coordinates.
     // /
    test('should calculate distance with negative coordinates', () => {
        expect(calculateDistance(-1, -1, 2, 3)).toBe(5);
    });

    /** */
     // Test case for calculating distance with mixed positive and negative coordinates.
     // /
    test('should calculate distance with mixed positive and negative coordinates', () => {
        expect(calculateDistance(-1, 1, 1, -1)).toBeCloseTo(2.828);
    });

    /** */
     // Test case for throwing a TypeError when x1 is not a number.
     // /
    test('should throw a TypeError when x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 0, 0)).toThrow(TypeError);
        expect(() => calculateDistance(null, 0, 0, 0)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when y1 is not a number.
     // /
    test('should throw a TypeError when y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 0, 0)).toThrow(TypeError);
        expect(() => calculateDistance(0, null, 0, 0)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when x2 is not a number.
     // /
    test('should throw a TypeError when x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 0)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, null, 0)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when y2 is not a number.
     // /
    test('should throw a TypeError when y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 0, 'abc')).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, 0, null)).toThrow(TypeError);
    });

    /** */
     // Test case for calculating distance with large coordinates.
     // /
    test('should calculate distance with large coordinates', () => {
        expect(calculateDistance(1000, 1000, 2000, 2000)).toBeCloseTo(1414.21);
    });

    /** */
     // Test case for calculating distance with decimal coordinates.
     // /
    test('should calculate distance with decimal coordinates', () => {
        expect(calculateDistance(1.5, 2.5, 3.5, 4.5)).toBeCloseTo(2.828);
    });
});
