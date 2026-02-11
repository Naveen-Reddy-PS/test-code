const {
    calculateCircleArea,
    calculateRectangleArea,
    calculateTriangleArea,
    calculateCirclePerimeter,
    calculateRectanglePerimeter,
    calculateDistance
} = require('../../geometry');

describe('calculateCircleArea', () => {

     // Test case: Valid radius
     // /
    test('should calculate the area of a circle with a valid radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

     // Test case: Zero radius
     // /
    test('should return 0 for a circle with a radius of 0', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

     // Test case: Large radius
     // /
    test('should calculate the area of a circle with a large radius', () => {
        expect(calculateCircleArea(100)).toBeCloseTo(Math.PI * 100 * 100);
    });

     // Test case: Negative radius - throws error
     // /
    test('should throw an error if the radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow("Radius cannot be negative");
    });

     // Test case: Non-number radius - throws TypeError
     // /
    test('should throw a TypeError if the radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow(TypeError);
        expect(() => calculateCircleArea(null)).toThrow(TypeError);
        expect(() => calculateCircleArea(undefined)).toThrow(TypeError);
        expect(() => calculateCircleArea({})).toThrow(TypeError);
        expect(() => calculateCircleArea([])).toThrow(TypeError);
    });

     // Test case: NaN radius - throws TypeError
     // /
    test('should throw a TypeError if the radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });
});

describe('calculateRectangleArea', () => {

     // Test case: Valid length and width
     // /
    test('should calculate the area of a rectangle with valid length and width', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

     // Test case: Zero length
     // /
    test('should return 0 for a rectangle with a length of 0', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

     // Test case: Zero width
     // /
    test('should return 0 for a rectangle with a width of 0', () => {
        expect(calculateRectangleArea(5, 0)).toBe(0);
    });

     // Test case: Large length and width
     // /
    test('should calculate the area of a rectangle with large length and width', () => {
        expect(calculateRectangleArea(100, 200)).toBe(20000);
    });

     // Test case: Negative length - throws error
     // /
    test('should throw an error if the length is negative', () => {
        expect(() => calculateRectangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

     // Test case: Negative width - throws error
     // /
    test('should throw an error if the width is negative', () => {
        expect(() => calculateRectangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

     // Test case: Non-number length - throws TypeError
     // /
    test('should throw a TypeError if the length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea(null, 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea(undefined, 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea({}, 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea([], 10)).toThrow(TypeError);
    });

     // Test case: Non-number width - throws TypeError
     // /
    test('should throw a TypeError if the width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, null)).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, undefined)).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, {})).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, [])).toThrow(TypeError);
    });

     // Test case: NaN length - throws TypeError
     // /
    test('should throw a TypeError if the length is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 10)).toThrow(TypeError);
    });

     // Test case: NaN width - throws TypeError
     // /
    test('should throw a TypeError if the width is NaN', () => {
        expect(() => calculateRectangleArea(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateTriangleArea', () => {

     // Test case: Valid base and height
     // /
    test('should calculate the area of a triangle with valid base and height', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

     // Test case: Zero base
     // /
    test('should return 0 for a triangle with a base of 0', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

     // Test case: Zero height
     // /
    test('should return 0 for a triangle with a height of 0', () => {
        expect(calculateTriangleArea(5, 0)).toBe(0);
    });

     // Test case: Large base and height
     // /
    test('should calculate the area of a triangle with large base and height', () => {
        expect(calculateTriangleArea(100, 200)).toBe(10000);
    });

     // Test case: Negative base - throws error
     // /
    test('should throw an error if the base is negative', () => {
        expect(() => calculateTriangleArea(-5, 10)).toThrow("Dimensions cannot be negative");
    });

     // Test case: Negative height - throws error
     // /
    test('should throw an error if the height is negative', () => {
        expect(() => calculateTriangleArea(5, -10)).toThrow("Dimensions cannot be negative");
    });

     // Test case: Non-number base - throws TypeError
     // /
    test('should throw a TypeError if the base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea(null, 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea(undefined, 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea({}, 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea([], 10)).toThrow(TypeError);
    });

     // Test case: Non-number height - throws TypeError
     // /
    test('should throw a TypeError if the height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, null)).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, undefined)).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, {})).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, [])).toThrow(TypeError);
    });

     // Test case: NaN base - throws TypeError
     // /
    test('should throw a TypeError if the base is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 10)).toThrow(TypeError);
    });

     // Test case: NaN height - throws TypeError
     // /
    test('should throw a TypeError if the height is NaN', () => {
        expect(() => calculateTriangleArea(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateCirclePerimeter', () => {

     // Test case: Valid radius
     // /
    test('should calculate the perimeter of a circle with a valid radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

     // Test case: Zero radius
     // /
    test('should return 0 for a circle with a radius of 0', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

     // Test case: Large radius
     // /
    test('should calculate the perimeter of a circle with a large radius', () => {
        expect(calculateCirclePerimeter(100)).toBeCloseTo(2 * Math.PI * 100);
    });

     // Test case: Negative radius - throws error
     // /
    test('should throw an error if the radius is negative', () => {
        expect(() => calculateCirclePerimeter(-5)).toThrow("Radius cannot be negative");
    });

     // Test case: Non-number radius - throws TypeError
     // /
    test('should throw a TypeError if the radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(null)).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(undefined)).toThrow(TypeError);
        expect(() => calculateCirclePerimeter({})).toThrow(TypeError);
        expect(() => calculateCirclePerimeter([])).toThrow(TypeError);
    });

     // Test case: NaN radius - throws TypeError
     // /
    test('should throw a TypeError if the radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });
});

describe('calculateRectanglePerimeter', () => {

     // Test case: Valid length and width
     // /
    test('should calculate the perimeter of a rectangle with valid length and width', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

     // Test case: Zero length
     // /
    test('should return the correct perimeter for a rectangle with a length of 0', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

     // Test case: Zero width
     // /
    test('should return the correct perimeter for a rectangle with a width of 0', () => {
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
    });

     // Test case: Large length and width
     // /
    test('should calculate the perimeter of a rectangle with large length and width', () => {
        expect(calculateRectanglePerimeter(100, 200)).toBe(600);
    });

     // Test case: Negative length - throws error
     // /
    test('should throw an error if the length is negative', () => {
        expect(() => calculateRectanglePerimeter(-5, 10)).toThrow("Dimensions cannot be negative");
    });

     // Test case: Negative width - throws error
     // /
    test('should throw an error if the width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -10)).toThrow("Dimensions cannot be negative");
    });

     // Test case: Non-number length - throws TypeError
     // /
    test('should throw a TypeError if the length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(null, 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(undefined, 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter({}, 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter([], 10)).toThrow(TypeError);
    });

     // Test case: Non-number width - throws TypeError
     // /
    test('should throw a TypeError if the width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, null)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, undefined)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, {})).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, [])).toThrow(TypeError);
    });

     // Test case: NaN length - throws TypeError
     // /
    test('should throw a TypeError if the length is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 10)).toThrow(TypeError);
    });

     // Test case: NaN width - throws TypeError
     // /
    test('should throw a TypeError if the width is NaN', () => {
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateDistance', () => {

     // Test case: Valid coordinates
     // /
    test('should calculate the distance between two points with valid coordinates', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

     // Test case: Same points
     // /
    test('should return 0 if the two points are the same', () => {
        expect(calculateDistance(5, 5, 5, 5)).toBe(0);
    });

     // Test case: Large coordinates
     // /
    test('should calculate the distance between two points with large coordinates', () => {
        expect(calculateDistance(100, 100, 200, 200)).toBeCloseTo(141.42);
    });

     // Test case: Negative coordinates
     // /
    test('should calculate the distance between two points with negative coordinates', () => {
        expect(calculateDistance(-1, -1, -4, -5)).toBe(5);
    });

     // Test case: Mixed coordinates
     // /
    test('should calculate the distance between two points with mixed coordinates', () => {
        expect(calculateDistance(-1, 1, 4, -5)).toBeCloseTo(7.81);
    });

     // Test case: Non-number x1 - throws TypeError
     // /
    test('should throw a TypeError if x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(null, 0, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(undefined, 0, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance({}, 0, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance([], 0, 3, 4)).toThrow(TypeError);
    });

     // Test case: Non-number y1 - throws TypeError
     // /
    test('should throw a TypeError if y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, null, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, undefined, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, {}, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, [], 3, 4)).toThrow(TypeError);
    });

     // Test case: Non-number x2 - throws TypeError
     // /
    test('should throw a TypeError if x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, null, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, undefined, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, {}, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, [], 4)).toThrow(TypeError);
    });

     // Test case: Non-number y2 - throws TypeError
     // /
    test('should throw a TypeError if y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 3, 'abc')).toThrow(TypeError);

    });
    });
