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
     // Test case for valid radius
     // /
    test('should calculate area with valid radius', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5);
    });

    /** */
     // Test case for radius zero
     // /
    test('should return 0 when radius is 0', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

    /** */
     // Test case for type error when radius is not a number
     // /
    test('should throw TypeError when radius is not a number', () => {
        expect(() => calculateCircleArea('abc')).toThrow(TypeError);
        expect(() => calculateCircleArea(null)).toThrow(TypeError);
        expect(() => calculateCircleArea(undefined)).toThrow(TypeError);
        expect(() => calculateCircleArea({})).toThrow(TypeError);
        expect(() => calculateCircleArea([])).toThrow(TypeError);
    });

    /** */
     // Test case for error when radius is negative
     // /
    test('should throw Error when radius is negative', () => {
        expect(() => calculateCircleArea(-1)).toThrow(Error);
    });

    /** */
     // Test case for a large radius
     // /
    test('should calculate area with a large radius', () => {
        expect(calculateCircleArea(1000)).toBeCloseTo(Math.PI * 1000 * 1000);
    });

    /** */
     // Test case for a decimal radius
     // /
    test('should calculate area with a decimal radius', () => {
        expect(calculateCircleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
    });

    /** */
     // Test case for NaN radius
     // /
    test('should throw TypeError when radius is NaN', () => {
        expect(() => calculateCircleArea(NaN)).toThrow(TypeError);
    });
});

describe('calculateRectangleArea', () => {
    /** */
     // Test case for valid length and width
     // /
    test('should calculate area with valid length and width', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    /** */
     // Test case for zero length
     // /
    test('should return 0 when length is 0', () => {
        expect(calculateRectangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for zero width
     // /
    test('should return 0 when width is 0', () => {
        expect(calculateRectangleArea(5, 0)).toBe(0);
    });

    /** */
     // Test case for type error when length is not a number
     // /
    test('should throw TypeError when length is not a number', () => {
        expect(() => calculateRectangleArea('abc', 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea(null, 10)).toThrow(TypeError);
        expect(() => calculateRectangleArea(undefined, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for type error when width is not a number
     // /
    test('should throw TypeError when width is not a number', () => {
        expect(() => calculateRectangleArea(5, 'abc')).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, null)).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, undefined)).toThrow(TypeError);
    });

    /** */
     // Test case for error when length is negative
     // /
    test('should throw Error when length is negative', () => {
        expect(() => calculateRectangleArea(-1, 10)).toThrow(Error);
    });

    /** */
     // Test case for error when width is negative
     // /
    test('should throw Error when width is negative', () => {
        expect(() => calculateRectangleArea(5, -1)).toThrow(Error);
    });

    /** */
     // Test case for large length and width
     // /
    test('should calculate area with large length and width', () => {
        expect(calculateRectangleArea(1000, 2000)).toBe(2000000);
    });

    /** */
     // Test case for decimal length and width
     // /
    test('should calculate area with decimal length and width', () => {
        expect(calculateRectangleArea(2.5, 3.5)).toBe(8.75);
    });

    /** */
     // Test case for NaN length or width
     // /
    test('should throw TypeError when length or width is NaN', () => {
        expect(() => calculateRectangleArea(NaN, 5)).toThrow(TypeError);
        expect(() => calculateRectangleArea(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateTriangleArea', () => {
    /** */
     // Test case for valid base and height
     // /
    test('should calculate area with valid base and height', () => {
        expect(calculateTriangleArea(5, 10)).toBe(25);
    });

    /** */
     // Test case for zero base
     // /
    test('should return 0 when base is 0', () => {
        expect(calculateTriangleArea(0, 10)).toBe(0);
    });

    /** */
     // Test case for zero height
     // /
    test('should return 0 when height is 0', () => {
        expect(calculateTriangleArea(5, 0)).toBe(0);
    });

    /** */
     // Test case for type error when base is not a number
     // /
    test('should throw TypeError when base is not a number', () => {
        expect(() => calculateTriangleArea('abc', 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea(null, 10)).toThrow(TypeError);
        expect(() => calculateTriangleArea(undefined, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for type error when height is not a number
     // /
    test('should throw TypeError when height is not a number', () => {
        expect(() => calculateTriangleArea(5, 'abc')).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, null)).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, undefined)).toThrow(TypeError);
    });

    /** */
     // Test case for error when base is negative
     // /
    test('should throw Error when base is negative', () => {
        expect(() => calculateTriangleArea(-1, 10)).toThrow(Error);
    });

    /** */
     // Test case for error when height is negative
     // /
    test('should throw Error when height is negative', () => {
        expect(() => calculateTriangleArea(5, -1)).toThrow(Error);
    });

    /** */
     // Test case for large base and height
     // /
    test('should calculate area with large base and height', () => {
        expect(calculateTriangleArea(1000, 2000)).toBe(1000000);
    });

    /** */
     // Test case for decimal base and height
     // /
    test('should calculate area with decimal base and height', () => {
        expect(calculateTriangleArea(2.5, 3.5)).toBe(4.375);
    });

    /** */
     // Test case for NaN base or height
     // /
    test('should throw TypeError when base or height is NaN', () => {
        expect(() => calculateTriangleArea(NaN, 5)).toThrow(TypeError);
        expect(() => calculateTriangleArea(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateCirclePerimeter', () => {
    /** */
     // Test case for valid radius
     // /
    test('should calculate perimeter with valid radius', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(2 * Math.PI * 5);
    });

    /** */
     // Test case for radius zero
     // /
    test('should return 0 when radius is 0', () => {
        expect(calculateCirclePerimeter(0)).toBe(0);
    });

    /** */
     // Test case for type error when radius is not a number
     // /
    test('should throw TypeError when radius is not a number', () => {
        expect(() => calculateCirclePerimeter('abc')).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(null)).toThrow(TypeError);
        expect(() => calculateCirclePerimeter(undefined)).toThrow(TypeError);
        expect(() => calculateCirclePerimeter({})).toThrow(TypeError);
        expect(() => calculateCirclePerimeter([])).toThrow(TypeError);
    });

    /** */
     // Test case for error when radius is negative
     // /
    test('should throw Error when radius is negative', () => {
        expect(() => calculateCirclePerimeter(-1)).toThrow(Error);
    });

    /** */
     // Test case for a large radius
     // /
    test('should calculate perimeter with a large radius', () => {
        expect(calculateCirclePerimeter(1000)).toBeCloseTo(2 * Math.PI * 1000);
    });

    /** */
     // Test case for a decimal radius
     // /
    test('should calculate perimeter with a decimal radius', () => {
        expect(calculateCirclePerimeter(2.5)).toBeCloseTo(2 * Math.PI * 2.5);
    });

    /** */
     // Test case for NaN radius
     // /
    test('should throw TypeError when radius is NaN', () => {
        expect(() => calculateCirclePerimeter(NaN)).toThrow(TypeError);
    });
});

describe('calculateRectanglePerimeter', () => {
    /** */
     // Test case for valid length and width
     // /
    test('should calculate perimeter with valid length and width', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });

    /** */
     // Test case for zero length
     // /
    test('should return correct perimeter when length is 0', () => {
        expect(calculateRectanglePerimeter(0, 10)).toBe(20);
    });

    /** */
     // Test case for zero width
     // /
    test('should return correct perimeter when width is 0', () => {
        expect(calculateRectanglePerimeter(5, 0)).toBe(10);
    });

    /** */
     // Test case for type error when length is not a number
     // /
    test('should throw TypeError when length is not a number', () => {
        expect(() => calculateRectanglePerimeter('abc', 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(null, 10)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(undefined, 10)).toThrow(TypeError);
    });

    /** */
     // Test case for type error when width is not a number
     // /
    test('should throw TypeError when width is not a number', () => {
        expect(() => calculateRectanglePerimeter(5, 'abc')).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, null)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, undefined)).toThrow(TypeError);
    });

    /** */
     // Test case for error when length is negative
     // /
    test('should throw Error when length is negative', () => {
        expect(() => calculateRectanglePerimeter(-1, 10)).toThrow(Error);
    });

    /** */
     // Test case for error when width is negative
     // /
    test('should throw Error when width is negative', () => {
        expect(() => calculateRectanglePerimeter(5, -1)).toThrow(Error);
    });

    /** */
     // Test case for large length and width
     // /
    test('should calculate perimeter with large length and width', () => {
        expect(calculateRectanglePerimeter(1000, 2000)).toBe(6000);
    });

    /** */
     // Test case for decimal length and width
     // /
    test('should calculate perimeter with decimal length and width', () => {
        expect(calculateRectanglePerimeter(2.5, 3.5)).toBe(12);
    });

     /** */
     // Test case for NaN length or width
     // /
    test('should throw TypeError when length or width is NaN', () => {
        expect(() => calculateRectanglePerimeter(NaN, 5)).toThrow(TypeError);
        expect(() => calculateRectanglePerimeter(5, NaN)).toThrow(TypeError);
    });
});

describe('calculateDistance', () => {
    /** */
     // Test case for valid coordinates
     // /
    test('should calculate distance with valid coordinates', () => {
        expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    });

    /** */
     // Test case for same coordinates
     // /
    test('should return 0 when coordinates are the same', () => {
        expect(calculateDistance(0, 0, 0, 0)).toBe(0);
    });

    /** */
     // Test case for type error when x1 is not a number
     // /
    test('should throw TypeError when x1 is not a number', () => {
        expect(() => calculateDistance('abc', 0, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(null, 0, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(undefined, 0, 3, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for type error when y1 is not a number
     // /
    test('should throw TypeError when y1 is not a number', () => {
        expect(() => calculateDistance(0, 'abc', 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, null, 3, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, undefined, 3, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for type error when x2 is not a number
     // /
    test('should throw TypeError when x2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 'abc', 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, null, 4)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, undefined, 4)).toThrow(TypeError);
    });

    /** */
     // Test case for type error when y2 is not a number
     // /
    test('should throw TypeError when y2 is not a number', () => {
        expect(() => calculateDistance(0, 0, 3, 'abc')).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, 3, null)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, 3, undefined)).toThrow(TypeError);
    });

    /** */
     // Test case for large coordinates
     // /
    test('should calculate distance with large coordinates', () => {
        expect(calculateDistance(1000, 1000, 4000, 5000)).toBeCloseTo(5000);
    });

    /** */
     // Test case for decimal coordinates
     // /
    test('should calculate distance with decimal coordinates', () => {
        expect(calculateDistance(0.5, 0.5, 3.5, 4.5)).toBeCloseTo(5);
    });

    /** */
     // Test case for NaN coordinates
     // /
    test('should throw TypeError when any coordinate is NaN', () => {
        expect(() => calculateDistance(NaN, 0, 0, 0)).toThrow(TypeError);
        expect(() => calculateDistance(0, NaN, 0, 0)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, NaN, 0)).toThrow(TypeError);
        expect(() => calculateDistance(0, 0, 0, NaN)).toThrow(TypeError);
    });
});
