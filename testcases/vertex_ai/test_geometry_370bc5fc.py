import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


class TestGeometry:
    """
    Test suite for the geometry module.
    """

    class TestCalculateCircleArea:
        """
        Test cases for the calculate_circle_area function.
        """

        def test_positive_radius(self):
            """Test with a positive radius."""
            radius = 5.0
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_zero_radius(self):
            """Test with a zero radius."""
            radius = 0.0
            expected_area = 0.0
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000.0
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_negative_radius(self):
            """Test with a negative radius should raise a ValueError."""
            radius = -5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type should raise a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius must be a number" in str(excinfo.value)

        def test_small_radius(self):
            """Test with a small positive radius."""
            radius = 0.1
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

    class TestCalculateRectangleArea:
        """
        Test cases for the calculate_rectangle_area function.
        """

        def test_positive_dimensions(self):
            """Test with positive length and width."""
            length = 5.0
            width = 10.0
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0.0
            width = 0.0
            expected_area = 0.0
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_negative_dimensions(self):
            """Test with negative length should raise a ValueError."""
            length = -5.0
            width = 10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_negative_width(self):
            """Test with negative width should raise a ValueError."""
            length = 5.0
            width = -10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_type(self):
            """Test with an invalid length type should raise a TypeError."""
            length = "abc"
            width = 10.0
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

        def test_invalid_width_type(self):
            """Test with an invalid width type should raise a TypeError."""
            length = 5.0
            width = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000.0
            width = 2000.0
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_integer_dimensions(self):
            """Test with integer length and width."""
            length = 5
            width = 10
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    class TestCalculateTriangleArea:
        """
        Test cases for the calculate_triangle_area function.
        """

        def test_positive_dimensions(self):
            """Test with positive base and height."""
            base = 5.0
            height = 10.0
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_zero_dimensions(self):
            """Test with zero base and height."""
            base = 0.0
            height = 0.0
            expected_area = 0.0
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_negative_dimensions(self):
            """Test with negative base should raise a ValueError."""
            base = -5.0
            height = 10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_negative_height(self):
            """Test with negative height should raise a ValueError."""
            base = 5.0
            height = -10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_type(self):
            """Test with an invalid base type should raise a TypeError."""
            base = "abc"
            height = 10.0
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

        def test_invalid_height_type(self):
            """Test with an invalid height type should raise a TypeError."""
            base = 5.0
            height = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

        def test_large_dimensions(self):
            """Test with large base and height."""
            base = 1000.0
            height = 2000.0
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_integer_dimensions(self):
            """Test with integer base and height."""
            base = 5
            height = 10
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    class TestCalculateCirclePerimeter:
        """
        Test cases for the calculate_circle_perimeter function.
        """

        def test_positive_radius(self):
            """Test with a positive radius."""
            radius = 5.0
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_zero_radius(self):
            """Test with a zero radius."""
            radius = 0.0
            expected_perimeter = 0.0
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000.0
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_negative_radius(self):
            """Test with a negative radius should raise a ValueError."""
            radius = -5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type should raise a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius must be a number" in str(excinfo.value)

        def test_small_radius(self):
            """Test with a small positive radius."""
            radius = 0.1
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    class TestCalculateRectanglePerimeter:
        """
        Test cases for the calculate_rectangle_perimeter function.
        """

        def test_positive_dimensions(self):
            """Test with positive length and width."""
            length = 5.0
            width = 10.0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0.0
            width = 0.0
            expected_perimeter = 0.0
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_negative_dimensions(self):
            """Test with negative length should raise a ValueError."""
            length = -5.0
            width = 10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_negative_width(self):
            """Test with negative width should raise a ValueError."""
            length = 5.0
            width = -10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_type(self):
            """Test with an invalid length type should raise a TypeError."""
            length = "abc"
            width = 10.0
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

        def test_invalid_width_type(self):
            """Test with an invalid width type should raise a TypeError."""
            length = 5.0
            width = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000.0
            width = 2000.0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_integer_dimensions(self):
            """Test with integer length and width."""
            length = 5
            width = 10
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    class TestCalculateDistance:
        """
        Test cases for the calculate_distance function.
        """

        def test_positive_coordinates(self):
            """Test with positive coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 3.0
            y2 = 4.0
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_negative_coordinates(self):
            """Test with negative coordinates."""
            x1 = -1.0
            y1 = -2.0
            x2 = -4.0
            y2 = -6.0
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_mixed_coordinates(self):
            """Test with mixed positive and negative coordinates."""
            x1 = -1.0
            y1 = 2.0
            x2 = 4.0
            y2 = -6.0
            expected_distance = math.sqrt(89)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_zero_coordinates(self):
            """Test with zero coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 0.0
            y2 = 0.0
            expected_distance = 0.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_invalid_coordinate_type(self):
            """Test with an invalid coordinate type should raise a TypeError."""
            x1 = "abc"
            y1 = 0.0
            x2 = 0.0
            y2 = 0.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

        def test_large_coordinates(self):
            """Test with large coordinates."""
            x1 = 1000.0
            y1 = 2000.0
            x2 = 3000.0
            y2 = 4000.0
            expected_distance = math.sqrt(8000000)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_integer_coordinates(self):
            """Test with integer coordinates."""
            x1 = 1
            y1 = 2
            x2 = 3
            y2 = 4
            expected_distance = math.sqrt(8)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)