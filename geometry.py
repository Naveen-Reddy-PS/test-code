"""Geometry utility module with shape calculations."""

import math


def calculate_circle_area(radius: float) -> float:
    """
    Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle
        
    Returns:
        Area of the circle (π * r²)
        
    Raises:
        ValueError: If radius is negative
        TypeError: If radius is not a number
    """
    if not isinstance(radius, (int, float)):
        raise TypeError("Radius must be a number")
    if radius < 0:
        raise ValueError("Radius cannot be negative")
    return math.pi * radius * radius


def calculate_rectangle_area(length: float, width: float) -> float:
    """
    Calculate the area of a rectangle.
    
    Args:
        length: The length of the rectangle
        width: The width of the rectangle
        
    Returns:
        Area of the rectangle (length * width)
        
    Raises:
        ValueError: If either dimension is negative
        TypeError: If arguments are not numbers
    """
    if not isinstance(length, (int, float)) or not isinstance(width, (int, float)):
        raise TypeError("Both length and width must be numbers")
    if length < 0 or width < 0:
        raise ValueError("Dimensions cannot be negative")
    return length * width


def calculate_triangle_area(base: float, height: float) -> float:
    """
    Calculate the area of a triangle.
    
    Args:
        base: The base length of the triangle
        height: The height of the triangle
        
    Returns:
        Area of the triangle (0.5 * base * height)
        
    Raises:
        ValueError: If either dimension is negative
        TypeError: If arguments are not numbers
    """
    if not isinstance(base, (int, float)) or not isinstance(height, (int, float)):
        raise TypeError("Both base and height must be numbers")
    if base < 0 or height < 0:
        raise ValueError("Dimensions cannot be negative")
    return 0.5 * base * height


def calculate_circle_perimeter(radius: float) -> float:
    """
    Calculate the perimeter (circumference) of a circle.
    
    Args:
        radius: The radius of the circle
        
    Returns:
        Perimeter of the circle (2 * π * r)
        
    Raises:
        ValueError: If radius is negative
        TypeError: If radius is not a number
    """
    if not isinstance(radius, (int, float)):
        raise TypeError("Radius must be a number")
    if radius < 0:
        raise ValueError("Radius cannot be negative")
    return 2 * math.pi * radius


def calculate_rectangle_perimeter(length: float, width: float) -> float:
    """
    Calculate the perimeter of a rectangle.
    
    Args:
        length: The length of the rectangle
        width: The width of the rectangle
        
    Returns:
        Perimeter of the rectangle (2 * (length + width))
        
    Raises:
        ValueError: If either dimension is negative
        TypeError: If arguments are not numbers
    """
    if not isinstance(length, (int, float)) or not isinstance(width, (int, float)):
        raise TypeError("Both length and width must be numbers")
    if length < 0 or width < 0:
        raise ValueError("Dimensions cannot be negative")
    return 2 * (length + width)


def calculate_distance(x1: float, y1: float, x2: float, y2: float) -> float:
    """
    Calculate the Euclidean distance between two points.
    
    Args:
        x1: X coordinate of first point
        y1: Y coordinate of first point
        x2: X coordinate of second point
        y2: Y coordinate of second point
        
    Returns:
        Distance between the two points
        
    Raises:
        TypeError: If any argument is not a number
    """
    if not all(isinstance(coord, (int, float)) for coord in [x1, y1, x2, y2]):
        raise TypeError("All coordinates must be numbers")
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
