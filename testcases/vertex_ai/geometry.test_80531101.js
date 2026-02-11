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
        expect(() => calculateCircleArea('abc')).toThrow(TypeError);
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

    /** */
     // Test case for throwing a TypeError when the radius is undefined.
     // /
    test('should throw a TypeError when the radius is undefined', () => {
        expect(() => calculateCircleArea(undefined)).toThrow(TypeError);
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
     // Test case for calculating the area of a rectangle with zero dimensions.
     // /
    test('should calculate the area of a rectangle with zero dimensions', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
        expect(calculateRectangleArea(5, 0)).toBe(0);
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
    });

    /** */
     // Test case for throwing a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when the width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the length is NaN.
     // /
    test('should throw a TypeError when the length is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is NaN.
     // /
    test('should throw a TypeError when the width is NaN', () => {
        expect(() => calculateRectangleArea(5, NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the length is null.
     // /
    test('should throw a TypeError when the length is null', () => {
        expect(() => calculateRectangleArea(null, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is null.
     // /
    test('should throw a TypeError when the width is null', () => {
        expect(() => calculateRectangleArea(5, null)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the length is undefined.
     // /
    test('should throw a TypeError when the length is undefined', () => {
        expect(() => calculateRectangleArea(undefined, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is undefined.
     // /
    test('should throw a TypeError when the width is undefined', () => {
        expect(() => calculateRectangleArea(5, undefined)).toThrow(TypeError);
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
     // Test case for calculating the area of a triangle with zero dimensions.
     // /
    test('should calculate the area of a triangle with zero dimensions', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
        expect(calculateTriangleArea(5, 0)).toBe(0);
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
    });

    /** */
     // Test case for throwing a TypeError when the height is not a number.
     // /
    test('should throw a TypeError when the height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the base is NaN.
     // /
    test('should throw a TypeError when the base is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the height is NaN.
     // /
    test('should throw a TypeError when the height is NaN', () => {
        expect(() => calculateTriangleArea(5, NaN)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the base is null.
     // /
    test('should throw a TypeError when the base is null', () => {
        expect(() => calculateTriangleArea(null, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the height is null.
     // /
    test('should throw a TypeError when the height is null', () => {
        expect(() => calculateTriangleArea(5, null)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the base is undefined.
     // /
    test('should throw a TypeError when the base is undefined', () => {
        expect(() => calculateTriangleArea(undefined, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the height is undefined.
     // /
    test('should throw a TypeError when the height is undefined', () => {
        expect(() => calculateTriangleArea(5, undefined)).toThrow(TypeError);
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
        expect(() => calculateCirclePerimeter('abc')).toThrow(TypeError);
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

    /** */
     // Test case for throwing a TypeError when the radius is undefined.
     // /
    test('should throw a TypeError when the radius is undefined', () => {
        expect(() => calculateCirclePerimeter(undefined)).toThrow(TypeError);
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
     // Test case for calculating the perimeter of a rectangle with zero dimensions.
     // /
    test('should calculate the perimeter of a rectangle with zero dimensions', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
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
    });

    /** */
     // Test case for throwing a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when the width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the length is NaN.
     // /
    test('should throw a TypeError when the length is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is NaN.
     // /
    test('should throw a TypeError when the width is NaN', () => {
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow(TypeError);
    });

     /** */
     // Test case for throwing a TypeError when the length is null.
     // /
    test('should throw a TypeError when the length is null', () => {
        expect(() => calculateRectanglePerimeter(null, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is null.
     // /
    test('should throw a TypeError when the width is null', () => {
        expect(() => calculateRectanglePerimeter(5, null)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the length is undefined.
     // /
    test('should throw a TypeError when the length is undefined', () => {
        expect(() => calculateRectanglePerimeter(undefined, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for throwing a TypeError when the width is undefined.
     // /
    test('should throw a TypeError when the width is undefined', () => {
        expect(() => calculateRectanglePerimeter(5, undefined)).toThrow(TypeError);
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case for calculating the distance between two points.
     // /
    test('should calculate the distance between two points', () => {
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

});
