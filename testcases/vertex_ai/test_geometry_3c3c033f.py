import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


class TestGeometry:
    """
    Test suite for geometry module.
    """

    class TestCalculateCircleArea:
        """
        Test cases for calculate_circle_area function.
        """

        def test_positive_radius(self):
            """Test with a positive radius."""
            radius = 5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_zero_radius(self):
            """Test with a zero radius."""
            radius = 0
            expected_area = 0
            assert calculate_circle_area(radius) == expected_area

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_float_radius(self):
            """Test with a floating-point radius."""
            radius = 2.5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_negative_radius(self):
            """Test with a negative radius, expecting a ValueError."""
            radius = -1
            with pytest.raises(ValueError, match="Radius cannot be negative"):
                calculate_circle_area(radius)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type, expecting a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError, match="Radius must be a number"):
                calculate_circle_area(radius)

    class TestCalculateRectangleArea:
        """
        Test cases for calculate_rectangle_area function.
        """

        def test_positive_dimensions(self):
            """Test with positive length and width."""
            length = 5
            width = 10
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == expected_area

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0
            width = 0
            expected_area = 0
            assert calculate_rectangle_area(length, width) == expected_area

        def test_mixed_zero_positive_dimensions(self):
            """Test with one dimension being zero."""
            length = 5
            width = 0
            expected_area = 0
            assert calculate_rectangle_area(length, width) == expected_area

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000
            width = 2000
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == expected_area

        def test_float_dimensions(self):
            """Test with floating-point length and width."""
            length = 2.5
            width = 3.5
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == expected_area

        def test_negative_dimensions(self):
            """Test with negative length, expecting a ValueError."""
            length = -1
            width = 5
            with pytest.raises(ValueError, match="Dimensions cannot be negative"):
                calculate_rectangle_area(length, width)

            length = 5
            width = -1
            with pytest.raises(ValueError, match="Dimensions cannot be negative"):
                calculate_rectangle_area(length, width)

        def test_invalid_dimension_types(self):
            """Test with invalid dimension types, expecting a TypeError."""
            length = "abc"
            width = 5
            with pytest.raises(TypeError, match="Both length and width must be numbers"):
                calculate_rectangle_area(length, width)

            length = 5
            width = "abc"
            with pytest.raises(TypeError, match="Both length and width must be numbers"):
                calculate_rectangle_area(length, width)

    class TestCalculateTriangleArea:
        """
        Test cases for calculate_triangle_area function.
        """

        def test_positive_dimensions(self):
            """Test with positive base and height."""
            base = 5
            height = 10
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == expected_area

        def test_zero_dimensions(self):
            """Test with zero base and height."""
            base = 0
            height = 0
            expected_area = 0
            assert calculate_triangle_area(base, height) == expected_area

        def test_mixed_zero_positive_dimensions(self):
            """Test with one dimension being zero."""
            base = 5
            height = 0
            expected_area = 0
            assert calculate_triangle_area(base, height) == expected_area

        def test_large_dimensions(self):
            """Test with large base and height."""
            base = 1000
            height = 2000
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == expected_area

        def test_float_dimensions(self):
            """Test with floating-point base and height."""
            base = 2.5
            height = 3.5
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == expected_area

        def test_negative_dimensions(self):
            """Test with negative base, expecting a ValueError."""
            base = -1
            height = 5
            with pytest.raises(ValueError, match="Dimensions cannot be negative"):
                calculate_triangle_area(base, height)

            base = 5
            height = -1
            with pytest.raises(ValueError, match="Dimensions cannot be negative"):
                calculate_triangle_area(base, height)

        def test_invalid_dimension_types(self):
            """Test with invalid dimension types, expecting a TypeError."""
            base = "abc"
            height = 5
            with pytest.raises(TypeError, match="Both base and height must be numbers"):
                calculate_triangle_area(base, height)

            base = 5
            height = "abc"
            with pytest.raises(TypeError, match="Both base and height must be numbers"):
                calculate_triangle_area(base, height)

    class TestCalculateCirclePerimeter:
        """
        Test cases for calculate_circle_perimeter function.
        """

        def test_positive_radius(self):
            """Test with a positive radius."""
            radius = 5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_zero_radius(self):
            """Test with a zero radius."""
            radius = 0
            expected_perimeter = 0
            assert calculate_circle_perimeter(radius) == expected_perimeter

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_float_radius(self):
            """Test with a floating-point radius."""
            radius = 2.5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_negative_radius(self):
            """Test with a negative radius, expecting a ValueError."""
            radius = -1
            with pytest.raises(ValueError, match="Radius cannot be negative"):
                calculate_circle_perimeter(radius)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type, expecting a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError, match="Radius must be a number"):
                calculate_circle_perimeter(radius)

    class TestCalculateRectanglePerimeter:
        """
        Test cases for calculate_rectangle_perimeter function.
        """

        def test_positive_dimensions(self):
            """Test with positive length and width."""
            length = 5
            width = 10
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0
            width = 0
            expected_perimeter = 0
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_mixed_zero_positive_dimensions(self):
            """Test with one dimension being zero."""
            length = 5
            width = 0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000
            width = 2000
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_float_dimensions(self):
            """Test with floating-point length and width."""
            length = 2.5
            width = 3.5
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_negative_dimensions(self):
            """Test with negative length, expecting a ValueError."""
            length = -1
            width = 5
            with pytest.raises(ValueError, match="Dimensions cannot be negative"):
                calculate_rectangle_perimeter(length, width)

            length = 5
            width = -1
            with pytest.raises(ValueError, match="Dimensions cannot be negative"):
                calculate_rectangle_perimeter(length, width)

        def test_invalid_dimension_types(self):
            """Test with invalid dimension types, expecting a TypeError."""
            length = "abc"
            width = 5
            with pytest.raises(TypeError, match="Both length and width must be numbers"):
                calculate_rectangle_perimeter(length, width)

            length = 5
            width = "abc"
            with pytest.raises(TypeError, match="Both length and width must be numbers"):
                calculate_rectangle_perimeter(length, width)

    class TestCalculateDistance:
        """
        Test cases for calculate_distance function.
        """

        def test_positive_coordinates(self):
            """Test with positive coordinates."""
            x1 = 1
            y1 = 2
            x2 = 4
            y2 = 6
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_zero_coordinates(self):
            """Test with zero coordinates."""
            x1 = 0
            y1 = 0
            x2 = 0
            y2 = 0
            expected_distance = 0
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_negative_coordinates(self):
            """Test with negative coordinates."""
            x1 = -1
            y1 = -2
            x2 = -4
            y2 = -6
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_mixed_positive_negative_coordinates(self):
            """Test with mixed positive and negative coordinates."""
            x1 = 1
            y1 = -2
            x2 = -4
            y2 = 6
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_float_coordinates(self):
            """Test with floating-point coordinates."""
            x1 = 1.5
            y1 = 2.5
            x2 = 4.5
            y2 = 6.5
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_invalid_coordinate_types(self):
            """Test with invalid coordinate types, expecting a TypeError."""
            x1 = "abc"
            y1 = 2
            x2 = 4
            y2 = 6
            with pytest.raises(TypeError, match="All coordinates must be numbers"):
                calculate_distance(x1, y1, x2, y2)

            x1 = 1
            y1 = "abc"
            x2 = 4
            y2 = 6
            with pytest.raises(TypeError, match="All coordinates must be numbers"):
                calculate_distance(x1, y1, x2, y2)

            x1 = 1
            y1 = 2
            x2 = "abc"
            y2 = 6
            with pytest.raises(TypeError, match="All coordinates must be numbers"):
                calculate_distance(x1, y1, x2, y2)

            x1 = 1
            y1 = 2
            x2 = 4
            y2 = "abc"
            with pytest.raises(TypeError, match="All coordinates must be numbers"):
                calculate_distance(x1, y1, x2, y2)