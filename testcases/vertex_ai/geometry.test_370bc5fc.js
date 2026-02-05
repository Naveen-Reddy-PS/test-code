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
     // Test case: Calculate the area of a circle with a positive radius.
     // /
    test('should calculate the area of a circle with a positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case: Calculate the area of a circle with a radius of 0.
     // /
    test('should calculate the area of a circle with a radius of 0', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case: Throw an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case: Throw a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCircleArea("abc")).toThrow("Radius must be a number");
        expect(() => calculateCircleArea(null)).toThrow("Radius must be a number");
        expect(() => calculateCircleArea(undefined)).toThrow("Radius must be a number");
        expect(() => calculateCircleArea(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case: Calculate the area with a large radius.
     // /
    test('should calculate the area with a large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case: Calculate the area with a decimal radius.
     // /
    test('should calculate the area with a decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case: Calculate the area of a rectangle with positive dimensions.
     // /
    test('should calculate the area of a rectangle with positive dimensions', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case: Calculate the area of a rectangle with one dimension as 0.
     // /
    test('should calculate the area of a rectangle with one dimension as 0', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case: Calculate the area of a rectangle with both dimensions as 0.
     // /
    test('should calculate the area of a rectangle with both dimensions as 0', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case: Throw an error when either dimension is negative.
     // /
    test('should throw an error when either dimension is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
        expect(() => calculateRectangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throw a TypeError when either dimension is not a number.
     // /
    test('should throw a TypeError when either dimension is not a number', () => {
        expect(() => calculateRectangleArea("abc", 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(5, "abc")).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(null, 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(5, null)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(undefined, 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(5, undefined)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(NaN, 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectangleArea(5, NaN)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Calculate the area with large dimensions.
     // /
    test('should calculate the area with large dimensions', () => {
        expect(calculateRectangleArea(1000, 2000)).toBe(2000000);
    });

    /** */
     // Test case: Calculate the area with decimal dimensions.
     // /
    test('should calculate the area with decimal dimensions', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
    });
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case: Calculate the area of a triangle with positive dimensions.
     // /
    test('should calculate the area of a triangle with positive dimensions', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case: Calculate the area of a triangle with one dimension as 0.
     // /
    test('should calculate the area of a triangle with one dimension as 0', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case: Calculate the area of a triangle with both dimensions as 0.
     // /
    test('should calculate the area of a triangle with both dimensions as 0', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case: Throw an error when either dimension is negative.
     // /
    test('should throw an error when either dimension is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
        expect(() => calculateTriangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throw a TypeError when either dimension is not a number.
     // /
    test('should throw a TypeError when either dimension is not a number', () => {
        expect(() => calculateTriangleArea("abc", 10)).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(5, "abc")).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(null, 10)).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(5, null)).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(undefined, 10)).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(5, undefined)).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(NaN, 10)).toThrow("Both base and height must be numbers");
        expect(() => calculateTriangleArea(5, NaN)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case: Calculate the area with large dimensions.
     // /
    test('should calculate the area with large dimensions', () => {
        expect(calculateTriangleArea(1000, 2000)).toBe(1000000);
    });

    /** */
     // Test case: Calculate the area with decimal dimensions.
     // /
    test('should calculate the area with decimal dimensions', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case: Calculate the perimeter of a circle with a positive radius.
     // /
    test('should calculate the perimeter of a circle with a positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case: Calculate the perimeter of a circle with a radius of 0.
     // /
    test('should calculate the perimeter of a circle with a radius of 0', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case: Throw an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case: Throw a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCirclePerimeter("abc")).toThrow("Radius must be a number");
        expect(() => calculateCirclePerimeter(null)).toThrow("Radius must be a number");
        expect(() => calculateCirclePerimeter(undefined)).toThrow("Radius must be a number");
        expect(() => calculateCirclePerimeter(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case: Calculate the perimeter with a large radius.
     // /
    test('should calculate the perimeter with a large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case: Calculate the perimeter with a decimal radius.
     // /
    test('should calculate the perimeter with a decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case: Calculate the perimeter of a rectangle with positive dimensions.
     // /
    test('should calculate the perimeter of a rectangle with positive dimensions', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case: Calculate the perimeter of a rectangle with one dimension as 0.
     // /
    test('should calculate the perimeter of a rectangle with one dimension as 0', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case: Calculate the perimeter of a rectangle with both dimensions as 0.
     // /
    test('should calculate the perimeter of a rectangle with both dimensions as 0', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case: Throw an error when either dimension is negative.
     // /
    test('should throw an error when either dimension is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
        expect(() => calculateRectanglePerimeter(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throw a TypeError when either dimension is not a number.
     // /
    test('should throw a TypeError when either dimension is not a number', () => {
        expect(() => calculateRectanglePerimeter("abc", 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(5, "abc")).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(null, 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(5, null)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(undefined, 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(5, undefined)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(NaN, 10)).toThrow("Both length and width must be numbers");
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Calculate the perimeter with large dimensions.
     // /
    test('should calculate the perimeter with large dimensions', () => {
        expect(calculateRectanglePerimeter(1000, 2000)).toBe(6000);
    });

    /** */
     // Test case: Calculate the perimeter with decimal dimensions.
     // /
    test('should calculate the perimeter with decimal dimensions', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case: Calculate the distance between two points.
     // /
    test('should calculate the distance between two points', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case: Calculate the distance when both points are the same.
     // /
    test('should calculate the distance when both points are the same', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case: Calculate the distance with negative coordinates.
     // /
    test('should calculate the distance with negative coordinates', () => {
        expect(calculateDistance(-1, -1, 2, 3)).toBe(5);
    });

    /** */
     // Test case: Throw a TypeError when any coordinate is not a number.
     // /
    test('should throw a TypeError when any coordinate is not a number', () => {
        expect(() => calculateDistance("abc", 0, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, "abc", 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, "abc", 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, 0, "abc")).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(null, 0, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, null, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, null, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, 0, null)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(undefined, 0, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, undefined, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, undefined, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, 0, undefined)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(NaN, 0, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, NaN, 0, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, NaN, 0)).toThrow("All coordinates must be numbers");
        expect(() => calculateDistance(0, 0, 0, NaN)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case: Calculate the distance with large coordinates.
     // /
    test('should calculate the distance with large coordinates', () => {
        expect(calculateDistance(1000, 1000, 2000, 2000)).toBeCloseTo(Math.sqrt(2000000));
    });

    /** */
     // Test case: Calculate the distance with decimal coordinates.
     // /
    test('should calculate the distance with decimal coordinates', () => {
        expect(calculateDistance(2.5, 3.5, 4.5, 5.5)).toBeCloseTo(Math.sqrt(8));
    });
});
