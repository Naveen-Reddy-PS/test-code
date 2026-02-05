/**
 * Geometry utility module with shape calculations.
 */

/**
 * Calculate the area of a circle.
 * 
 * @param {number} radius - The radius of the circle
 * @returns {number} Area of the circle (π * r²)
 * @throws {Error} If radius is negative
 * @throws {TypeError} If radius is not a number
 */
function calculateCircleArea(radius) {
    if (typeof radius !== 'number' || isNaN(radius)) {
        throw new TypeError("Radius must be a number");
    }
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return Math.PI * radius * radius;
}

/**
 * Calculate the area of a rectangle.
 * 
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} Area of the rectangle (length * width)
 * @throws {Error} If either dimension is negative
 * @throws {TypeError} If arguments are not numbers
 */
function calculateRectangleArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || 
        isNaN(length) || isNaN(width)) {
        throw new TypeError("Both length and width must be numbers");
    }
    if (length < 0 || width < 0) {
        throw new Error("Dimensions cannot be negative");
    }
    return length * width;
}

/**
 * Calculate the area of a triangle.
 * 
 * @param {number} base - The base length of the triangle
 * @param {number} height - The height of the triangle
 * @returns {number} Area of the triangle (0.5 * base * height)
 * @throws {Error} If either dimension is negative
 * @throws {TypeError} If arguments are not numbers
 */
function calculateTriangleArea(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number' || 
        isNaN(base) || isNaN(height)) {
        throw new TypeError("Both base and height must be numbers");
    }
    if (base < 0 || height < 0) {
        throw new Error("Dimensions cannot be negative");
    }
    return 0.5 * base * height;
}

/**
 * Calculate the perimeter (circumference) of a circle.
 * 
 * @param {number} radius - The radius of the circle
 * @returns {number} Perimeter of the circle (2 * π * r)
 * @throws {Error} If radius is negative
 * @throws {TypeError} If radius is not a number
 */
function calculateCirclePerimeter(radius) {
    if (typeof radius !== 'number' || isNaN(radius)) {
        throw new TypeError("Radius must be a number");
    }
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return 2 * Math.PI * radius;
}

/**
 * Calculate the perimeter of a rectangle.
 * 
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} Perimeter of the rectangle (2 * (length + width))
 * @throws {Error} If either dimension is negative
 * @throws {TypeError} If arguments are not numbers
 */
function calculateRectanglePerimeter(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || 
        isNaN(length) || isNaN(width)) {
        throw new TypeError("Both length and width must be numbers");
    }
    if (length < 0 || width < 0) {
        throw new Error("Dimensions cannot be negative");
    }
    return 2 * (length + width);
}

/**
 * Calculate the Euclidean distance between two points.
 * 
 * @param {number} x1 - X coordinate of first point
 * @param {number} y1 - Y coordinate of first point
 * @param {number} x2 - X coordinate of second point
 * @param {number} y2 - Y coordinate of second point
 * @returns {number} Distance between the two points
 * @throws {TypeError} If any argument is not a number
 */
function calculateDistance(x1, y1, x2, y2) {
    if (typeof x1 !== 'number' || typeof y1 !== 'number' || 
        typeof x2 !== 'number' || typeof y2 !== 'number' ||
        isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        throw new TypeError("All coordinates must be numbers");
    }
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Export functions for use in Node.js modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateCircleArea,
        calculateRectangleArea,
        calculateTriangleArea,
        calculateCirclePerimeter,
        calculateRectanglePerimeter,
        calculateDistance
    };
}
