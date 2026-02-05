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
     // Test case to check if the function calculates the area of a circle correctly with a positive radius.
     // /
    test('should calculate the area of a circle with a positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case to check if the function calculates the area of a circle correctly with a zero radius.
     // /
    test('should calculate the area of a circle with a zero radius', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case to check if the function throws an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case to check if the function throws a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case to check if the function throws a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when the radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case to check if the function calculates the area of a circle with a large radius.
     // /
    test('should calculate the area of a circle with a large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case to check if the function calculates the area of a circle with a decimal radius.
     // /
    test('should calculate the area of a circle with a decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case to check if the function calculates the area of a rectangle correctly with positive length and width.
     // /
    test('should calculate the area of a rectangle with positive length and width', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case to check if the function calculates the area of a rectangle correctly with zero length and positive width.
     // /
    test('should calculate the area of a rectangle with zero length and positive width', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case to check if the function calculates the area of a rectangle correctly with positive length and zero width.
     // /
    test('should calculate the area of a rectangle with positive length and zero width', () => {
        expect(calculateRectangleArea(5, 0)).toBe(0);
    });

    /** */
     // Test case to check if the function calculates the area of a rectangle correctly with zero length and zero width.
     // /
    test('should calculate the area of a rectangle with zero length and zero width', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case to check if the function throws an error when the length is negative.
     // /
    test('should throw an error when the length is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws an error when the width is negative.
     // /
    test('should throw an error when the width is negative', () => {
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws an error when both the length and width are negative.
     // /
    test('should throw an error when both the length and width are negative', () => {
        expect(() => calculateRectangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws a TypeError when the length is not a number.
     // /
    test('should throw a TypeError when the length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when the width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when both the length and width are not numbers.
     // /
    test('should throw a TypeError when both the length and width are not numbers', () => {
        expect(() => calculateRectangleArea('abc', 'def')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the length is NaN.
     // /
    test('should throw a TypeError when the length is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the width is NaN.
     // /
    test('should throw a TypeError when the width is NaN', () => {
        expect(() => calculateRectangleArea(5, NaN)).toThrow("Both length and width must be numbers");
    });
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case to check if the function calculates the area of a triangle correctly with positive base and height.
     // /
    test('should calculate the area of a triangle with positive base and height', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case to check if the function calculates the area of a triangle correctly with zero base and positive height.
     // /
    test('should calculate the area of a triangle with zero base and positive height', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case to check if the function calculates the area of a triangle correctly with positive base and zero height.
     // /
    test('should calculate the area of a triangle with positive base and zero height', () => {
        expect(calculateTriangleArea(5, 0)).toBe(0);
    });

    /** */
     // Test case to check if the function calculates the area of a triangle correctly with zero base and zero height.
     // /
    test('should calculate the area of a triangle with zero base and zero height', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

    /** */
     // Test case to check if the function throws an error when the base is negative.
     // /
    test('should throw an error when the base is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws an error when the height is negative.
     // /
    test('should throw an error when the height is negative', () => {
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws an error when both the base and height are negative.
     // /
    test('should throw an error when both the base and height are negative', () => {
        expect(() => calculateTriangleArea(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws a TypeError when the base is not a number.
     // /
    test('should throw a TypeError when the base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the height is not a number.
     // /
    test('should throw a TypeError when the height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when both the base and height are not numbers.
     // /
    test('should throw a TypeError when both the base and height are not numbers', () => {
        expect(() => calculateTriangleArea('abc', 'def')).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the base is NaN.
     // /
    test('should throw a TypeError when the base is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 10)).toThrow("Both base and height must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the height is NaN.
     // /
    test('should throw a TypeError when the height is NaN', () => {
        expect(() => calculateTriangleArea(5, NaN)).toThrow("Both base and height must be numbers");
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case to check if the function calculates the perimeter of a circle correctly with a positive radius.
     // /
    test('should calculate the perimeter of a circle with a positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case to check if the function calculates the perimeter of a circle correctly with a zero radius.
     // /
    test('should calculate the perimeter of a circle with a zero radius', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case to check if the function throws an error when the radius is negative.
     // /
    test('should throw an error when the radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

    /** */
     // Test case to check if the function throws a TypeError when the radius is not a number.
     // /
    test('should throw a TypeError when the radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow("Radius must be a number");
    });

    /** */
     // Test case to check if the function throws a TypeError when the radius is NaN.
     // /
    test('should throw a TypeError when the radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow("Radius must be a number");
    });

    /** */
     // Test case to check if the function calculates the perimeter of a circle with a large radius.
     // /
    test('should calculate the perimeter of a circle with a large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case to check if the function calculates the perimeter of a circle with a decimal radius.
     // /
    test('should calculate the perimeter of a circle with a decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case to check if the function calculates the perimeter of a rectangle correctly with positive length and width.
     // /
    test('should calculate the perimeter of a rectangle with positive length and width', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case to check if the function calculates the perimeter of a rectangle correctly with zero length and positive width.
     // /
    test('should calculate the perimeter of a rectangle with zero length and positive width', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case to check if the function calculates the perimeter of a rectangle correctly with positive length and zero width.
     // /
    test('should calculate the perimeter of a rectangle with positive length and zero width', () => {
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
    });

    /** */
     // Test case to check if the function calculates the perimeter of a rectangle correctly with zero length and zero width.
     // /
    test('should calculate the perimeter of a rectangle with zero length and zero width', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

    /** */
     // Test case to check if the function throws an error when the length is negative.
     // /
    test('should throw an error when the length is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws an error when the width is negative.
     // /
    test('should throw an error when the width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws an error when both the length and width are negative.
     // /
    test('should throw an error when both the length and width are negative', () => {
        expect(() => calculateRectanglePerimeter(-5, -10)).toThrow("Dimensions cannot be negative");
    });

    /** */
     // Test case to check if the function throws a TypeError when the length is not a number.
     // /
    test('should throw a TypeError when the length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the width is not a number.
     // /
    test('should throw a TypeError when the width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when both the length and width are not numbers.
     // /
    test('should throw a TypeError when both the length and width are not numbers', () => {
        expect(() => calculateRectanglePerimeter('abc', 'def')).toThrow("Both length and width must be numbers");
    });

        /** */
     // Test case to check if the function throws a TypeError when the length is NaN.
     // /
    test('should throw a TypeError when the length is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 10)).toThrow("Both length and width must be numbers");
    });

    /** */
     // Test case to check if the function throws a TypeError when the width is NaN.
     // /
    test('should throw a TypeError when the width is NaN', () => {
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow("Both length and width must be numbers");
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case to check if the function calculates the distance between two points correctly.
     // /
    test('should calculate the distance between two points correctly', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case to check if the function calculates the distance between two identical points correctly.
     // /
    test('should calculate the distance between two identical points correctly', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case to check if the function calculates the distance between two points with negative coordinates correctly.
     // /
    test('should calculate the distance between two points with negative coordinates correctly', () => {
        expect(calculateDistance(-1, -1, 2, 3)).toBe(5);
    });

    /** */
     // Test case to check if the function throws a TypeError when x1 is not a number.
     // /
    test('should throw a TypeError when x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 3, 4)).toThrow("All coordinates must be numbers");
    });

    /** */
     // Test case

});
