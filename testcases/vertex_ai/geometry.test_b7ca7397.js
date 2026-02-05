const {
    calculateCircleArea,
    calculateRectangleArea,
    calculateTriangleArea,
    calculateCirclePerimeter,
    calculateRectanglePerimeter,
    calculateDistance
} = require('../../geometry');

describe('calculateCircleArea', () => {

     // Test case for calculateCircleArea with positive radius.
     // /
    test('should calculate the area of a circle with positive radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

     // Test case for calculateCircleArea with zero radius.
     // /
    test('should calculate the area of a circle with zero radius', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

     // Test case for calculateCircleArea with a floating-point radius.
     // /
    test('should calculate the area of a circle with a floating-point radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });

     // Test case for calculateCircleArea with a negative radius, should throw an error.
     // /
    test('should throw an error if radius is negative', () => {
        expect(() => calculateCircleArea(-1)).toThrow("Radius cannot be negative");
    });

     // Test case for calculateCircleArea with a non-number radius, should throw a TypeError.
     // /
    test('should throw a TypeError if radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow(TypeError);
    });

     // Test case for calculateCircleArea with NaN radius, should throw a TypeError.
     // /
    test('should throw a TypeError if radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });

     // Test case for calculateCircleArea with positive large radius.
     // /
    test('should calculate the area of a circle with positive large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });
});

describe('calculateRectangleArea', () => {

     // Test case for calculateRectangleArea with positive length and width.
     // /
    test('should calculate the area of a rectangle with positive length and width', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

     // Test case for calculateRectangleArea with zero length and positive width.
     // /
    test('should calculate the area of a rectangle with zero length and positive width', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

     // Test case for calculateRectangleArea with positive length and zero width.
     // /
    test('should calculate the area of a rectangle with positive length and zero width', () => {
        expect(calculateRectangleArea(5, 0)).toBe(0);
    });

     // Test case for calculateRectangleArea with zero length and zero width.
     // /
    test('should calculate the area of a rectangle with zero length and zero width', () => {
        expect(calculateRectangleArea(0, 0)).toBe(0);
    });

     // Test case for calculateRectangleArea with floating-point length and width.
     // /
    test('should calculate the area of a rectangle with floating-point length and width', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
    });

     // Test case for calculateRectangleArea with negative length, should throw an error.
     // /
    test('should throw an error if length is negative', () => {
        expect(() => calculateRectangleArea(-1, 5)).toThrow("Dimensions cannot be negative");
    });

     // Test case for calculateRectangleArea with negative width, should throw an error.
     // /
    test('should throw an error if width is negative', () => {
        expect(() => calculateRectangleArea(5, -1)).toThrow("Dimensions cannot be negative");
    });

     // Test case for calculateRectangleArea with non-number length, should throw a TypeError.
     // /
    test('should throw a TypeError if length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 5)).toThrow(TypeError);
    });

     // Test case for calculateRectangleArea with non-number width, should throw a TypeError.
     // /
    test('should throw a TypeError if width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow(TypeError);
    });

     // Test case for calculateRectangleArea with NaN length, should throw a TypeError.
     // /
    test('should throw a TypeError if length is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 5)).toThrow(TypeError);
    });

     // Test case for calculateRectangleArea with NaN width, should throw a TypeError.
     // /
    test('should throw a TypeError if width is NaN', () => {
        expect(() => calculateRectangleArea(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateTriangleArea', () => {

     // Test case for calculateTriangleArea with positive base and height.
     // /
    test('should calculate the area of a triangle with positive base and height', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

     // Test case for calculateTriangleArea with zero base and positive height.
     // /
    test('should calculate the area of a triangle with zero base and positive height', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

     // Test case for calculateTriangleArea with positive base and zero height.
     // /
    test('should calculate the area of a triangle with positive base and zero height', () => {
        expect(calculateTriangleArea(5, 0)).toBe(0);
    });

     // Test case for calculateTriangleArea with zero base and zero height.
     // /
    test('should calculate the area of a triangle with zero base and zero height', () => {
        expect(calculateTriangleArea(0, 0)).toBe(0);
    });

     // Test case for calculateTriangleArea with floating-point base and height.
     // /
    test('should calculate the area of a triangle with floating-point base and height', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });

     // Test case for calculateTriangleArea with negative base, should throw an error.
     // /
    test('should throw an error if base is negative', () => {
        expect(() => calculateTriangleArea(-1, 5)).toThrow("Dimensions cannot be negative");
    });

     // Test case for calculateTriangleArea with negative height, should throw an error.
     // /
    test('should throw an error if height is negative', () => {
        expect(() => calculateTriangleArea(5, -1)).toThrow("Dimensions cannot be negative");
    });

     // Test case for calculateTriangleArea with non-number base, should throw a TypeError.
     // /
    test('should throw a TypeError if base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 5)).toThrow(TypeError);
    });

     // Test case for calculateTriangleArea with non-number height, should throw a TypeError.
     // /
    test('should throw a TypeError if height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow(TypeError);
    });

     // Test case for calculateTriangleArea with NaN base, should throw a TypeError.
     // /
    test('should throw a TypeError if base is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 5)).toThrow(TypeError);
    });

     // Test case for calculateTriangleArea with NaN height, should throw a TypeError.
     // /
    test('should throw a TypeError if height is NaN', () => {
        expect(() => calculateTriangleArea(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateCirclePerimeter', () => {

     // Test case for calculateCirclePerimeter with positive radius.
     // /
    test('should calculate the perimeter of a circle with positive radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

     // Test case for calculateCirclePerimeter with zero radius.
     // /
    test('should calculate the perimeter of a circle with zero radius', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

     // Test case for calculateCirclePerimeter with a floating-point radius.
     // /
    test('should calculate the perimeter of a circle with a floating-point radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });

     // Test case for calculateCirclePerimeter with a negative radius, should throw an error.
     // /
    test('should throw an error if radius is negative', () => {
        expect(() => calculateCirclePerimeter(-1)).toThrow("Radius cannot be negative");
    });

     // Test case for calculateCirclePerimeter with a non-number radius, should throw a TypeError.
     // /
    test('should throw a TypeError if radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow(TypeError);
    });

     // Test case for calculateCirclePerimeter with NaN radius, should throw a TypeError.
     // /
    test('should throw a TypeError if radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });

     // Test case for calculateCirclePerimeter with positive large radius.
     // /
    test('should calculate the perimeter of a circle with positive large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });
});

describe('calculateRectanglePerimeter', () => {

     // Test case for calculateRectanglePerimeter with positive length and width.
     // /
    test('should calculate the perimeter of a rectangle with positive length and width', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

     // Test case for calculateRectanglePerimeter with zero length and positive width.
     // /
    test('should calculate the perimeter of a rectangle with zero length and positive width', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

     // Test case for calculateRectanglePerimeter with positive length and zero width.
     // /
    test('should calculate the perimeter of a rectangle with positive length and zero width', () => {
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
    });

     // Test case for calculateRectanglePerimeter with zero length and zero width.
     // /
    test('should calculate the perimeter of a rectangle with zero length and zero width', () => {
        expect(calculateRectanglePerimeter(0, 0)).toBe(0);
    });

     // Test case for calculateRectanglePerimeter with floating-point length and width.
     // /
    test('should calculate the perimeter of a rectangle with floating-point length and width', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
    });

     // Test case for calculateRectanglePerimeter with negative length, should throw an error.
     // /
    test('should throw an error if length is negative', () => {
        expect(() => calculateRectanglePerimeter(-1, 5)).toThrow("Dimensions cannot be negative");
    });

     // Test case for calculateRectanglePerimeter with negative width, should throw an error.
     // /
    test('should throw an error if width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -1)).toThrow("Dimensions cannot be negative");
    });

     // Test case for calculateRectanglePerimeter with non-number length, should throw a TypeError.
     // /
    test('should throw a TypeError if length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 5)).toThrow(TypeError);
    });

     // Test case for calculateRectanglePerimeter with non-number width, should throw a TypeError.
     // /
    test('should throw a TypeError if width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow(TypeError);
    });

     // Test case for calculateRectanglePerimeter with NaN length, should throw a TypeError.
     // /
    test('should throw a TypeError if length is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 5)).toThrow(TypeError);
    });

     // Test case for calculateRectanglePerimeter with NaN width, should throw a TypeError.
     // /
    test('should throw a TypeError if width is NaN', () => {
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateDistance', () => {

     // Test case for calculateDistance with positive coordinates.
     // /
    test('should calculate the distance between two points with positive coordinates', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

     // Test case for calculateDistance with negative coordinates.
     // /
    test('should calculate the distance between two points with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
    });

     // Test case for calculateDistance with mixed positive and negative coordinates.
     // /
    test('should calculate the distance between two points with mixed positive and negative coordinates', () => {
        expect(calculateDistance(-1, 0, 2, 4)).toBe(5);
    });

     // Test case for calculateDistance with zero distance.
     // /
    test('should calculate the distance between two identical points to be zero', () => {
        expect(calculateDistance(2, 2, 2, 2)).toBe(0);
    });

     // Test case for calculateDistance with floating-point coordinates.
     // /
    test('should calculate the distance between two points with floating-point coordinates', () => {
        expect(calculateDistance(0.5, 0.5, 3.5, 4.5)).toBe(5);
    });

     // Test case for calculateDistance with non-number x1, should throw a TypeError.
     // /
    test('should throw a TypeError if x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 0, 0)).toThrow(TypeError);
    });

     // Test case for calculateDistance with non-number y1, should throw a TypeError.
     // /
    test('should throw a TypeError if y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 0, 0)).toThrow(TypeError);
    });

     // Test case for calculateDistance with non-number x2, should throw a TypeError.
     // /
    test('should throw a TypeError if x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 0)).toThrow(TypeError);
    });

     // Test case for calculateDistance with non-number y2, should throw a TypeError.
     // /
    test('should throw a TypeError if y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 0, 'abc')).toThrow(TypeError);
    });

     // Test case for calculateDistance with NaN x1, should throw a TypeError.
     // /
    test('should throw a TypeError if x1 is NaN', () => {
        expect(() => calculateDistance(NaN, 0, 0, 0)).toThrow(TypeError);
    });

     // Test case for calculateDistance with NaN y1, should throw a TypeError.
     // /
    test('should throw a TypeError if y1 is NaN', () => {
        expect(() => calculateDistance(0, NaN, 0, 0)).toThrow(TypeError);
    });

     // Test case for calculateDistance with NaN x2, should throw a TypeError.
     // /
    test('should throw a TypeError if x2 is NaN', () => {
        expect(() => calculateDistance(0, 0, NaN, 0)).toThrow(TypeError);

    });
    });
