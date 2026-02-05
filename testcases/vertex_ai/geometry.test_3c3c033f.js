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
     // Test case: Calculates the area of a circle with a positive radius.
     // /
    test('should calculate the area of a circle with a positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case: Calculates the area of a circle with a radius of 0.
     // /
    test('should calculate the area of a circle with a radius of 0', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case: Throws an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case: Throws an error when the radius is not a number.
     // /
    test('should throw an error when the radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case: Throws an error when the radius is NaN.
     // /
    test('should throw an error when the radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case: Calculates the area of a circle with a large radius.
     // /
    test('should calculate the area of a circle with a large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case: Calculates the area of a circle with a decimal radius.
     // /
    test('should calculate the area of a circle with a decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case: Calculates the area of a rectangle with positive dimensions.
     // /
    test('should calculate the area of a rectangle with positive dimensions', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case: Calculates the area of a rectangle with one dimension being 0.
     // /
    test('should calculate the area of a rectangle with one dimension being 0', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case: Calculates the area of a rectangle with both dimensions being 0.
     // /
    test('should calculate the area of a rectangle with both dimensions being 0', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case: Throws an error when the length is negative.
     // /
    test('should throw an error when the length is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when the width is negative.
     // /
    test('should throw an error when the width is negative', () => {
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateRectangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when the length is not a number.
     // /
    test('should throw an error when the length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Throws an error when the width is not a number.
     // /
    test('should throw an error when the width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Throws an error when both dimensions are not numbers.
     // /
    test('should throw an error when both dimensions are not numbers', () => {
        expect(() => calculateRectangleArea('abc', 'def')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Calculates the area of a rectangle with decimal dimensions.
     // /
    test('should calculate the area of a rectangle with decimal dimensions', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
    });
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case: Calculates the area of a triangle with positive dimensions.
     // /
    test('should calculate the area of a triangle with positive dimensions', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case: Calculates the area of a triangle with one dimension being 0.
     // /
    test('should calculate the area of a triangle with one dimension being 0', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case: Calculates the area of a triangle with both dimensions being 0.
     // /
    test('should calculate the area of a triangle with both dimensions being 0', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case: Throws an error when the base is negative.
     // /
    test('should throw an error when the base is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when the height is negative.
     // /
    test('should throw an error when the height is negative', () => {
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateTriangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when the base is not a number.
     // /
    test('should throw an error when the base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case: Throws an error when the height is not a number.
     // /
    test('should throw an error when the height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case: Throws an error when both dimensions are not numbers.
     // /
    test('should throw an error when both dimensions are not numbers', () => {
        expect(() => calculateTriangleArea('abc', 'def')).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case: Calculates the area of a triangle with decimal dimensions.
     // /
    test('should calculate the area of a triangle with decimal dimensions', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case: Calculates the perimeter of a circle with a positive radius.
     // /
    test('should calculate the perimeter of a circle with a positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case: Calculates the perimeter of a circle with a radius of 0.
     // /
    test('should calculate the perimeter of a circle with a radius of 0', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case: Throws an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case: Throws an error when the radius is not a number.
     // /
    test('should throw an error when the radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case: Throws an error when the radius is NaN.
     // /
    test('should throw an error when the radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case: Calculates the perimeter of a circle with a large radius.
     // /
    test('should calculate the perimeter of a circle with a large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case: Calculates the perimeter of a circle with a decimal radius.
     // /
    test('should calculate the perimeter of a circle with a decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case: Calculates the perimeter of a rectangle with positive dimensions.
     // /
    test('should calculate the perimeter of a rectangle with positive dimensions', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case: Calculates the perimeter of a rectangle with one dimension being 0.
     // /
    test('should calculate the perimeter of a rectangle with one dimension being 0', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case: Calculates the perimeter of a rectangle with both dimensions being 0.
     // /
    test('should calculate the perimeter of a rectangle with both dimensions being 0', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case: Throws an error when the length is negative.
     // /
    test('should throw an error when the length is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when the width is negative.
     // /
    test('should throw an error when the width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when both dimensions are negative.
     // /
    test('should throw an error when both dimensions are negative', () => {
        expect(() => calculateRectanglePerimeter(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case: Throws an error when the length is not a number.
     // /
    test('should throw an error when the length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Throws an error when the width is not a number.
     // /
    test('should throw an error when the width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Throws an error when both dimensions are not numbers.
     // /
    test('should throw an error when both dimensions are not numbers', () => {
        expect(() => calculateRectanglePerimeter('abc', 'def')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case: Calculates the perimeter of a rectangle with decimal dimensions.
     // /
    test('should calculate the perimeter of a rectangle with decimal dimensions', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case: Calculates the distance between two points.
     // /
    test('should calculate the distance between two points', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case: Calculates the distance between two identical points.
     // /
    test('should calculate the distance between two identical points', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case: Calculates the distance between two points with negative coordinates.
     // /
    test('should calculate the distance between two points with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
    });

    /** */
     // Test case: Throws an error when x1 is not a number.
     // /
    test('should throw an error when x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 0, 0)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case: Throws an error when y1 is not a number.
     // /
    test('should throw an error when y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 0, 0)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case: Throws an error when x2 is not a number.
     // /
    test('should throw an error when x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 0)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case: Throws an error when y2 is not a number.
     // /
    test('should throw an error when y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 0, 'abc')).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case: Calculates the distance between two points with decimal coordinates.
     // /
    test('should calculate the distance between two points with decimal coordinates', () => {
        expect(calculateDistance(0.5, 0.5, 3.5, 4.5)).toBeCloseTo(5);
    });

    /** */
     // Test case: Calculates distance with large coordinate values.
     // /
    test('should calculate distance with large coordinate values', () => {
        expect(calculateDistance(1000, 1000, 2000, 2000)).toBeCloseTo(1414.21356);
    });
});
