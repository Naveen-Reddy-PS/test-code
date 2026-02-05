import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


class TestGeometry:
    """
    Test suite for geometry module.
    """

    class TestCalculateCircleArea:
        """
        Test cases for the calculate_circle_area function.
        """
        def test_valid_radius(self):
            """Test with a valid positive radius."""
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
            """Test with a negative radius, expecting a ValueError."""
            radius = -1.0
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type (string), expecting a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius must be a number" in str(excinfo.value)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)
            
    class TestCalculateRectangleArea:
        """
        Test cases for the calculate_rectangle_area function.
        """
        def test_valid_dimensions(self):
            """Test with valid positive length and width."""
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

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000.0
            width = 2000.0
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_negative_length(self):
            """Test with a negative length, expecting a ValueError."""
            length = -1.0
            width = 5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_negative_width(self):
            """Test with a negative width, expecting a ValueError."""
            length = 5.0
            width = -1.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_length_type(self):
            """Test with an invalid length type (string), expecting a TypeError."""
            length = "abc"
            width = 5.0
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

        def test_invalid_width_type(self):
            """Test with an invalid width type (string), expecting a TypeError."""
            length = 5.0
            width = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

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
        def test_valid_dimensions(self):
            """Test with valid positive base and height."""
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

        def test_large_dimensions(self):
            """Test with large base and height."""
            base = 1000.0
            height = 2000.0
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_negative_base(self):
            """Test with a negative base, expecting a ValueError."""
            base = -1.0
            height = 5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_negative_height(self):
            """Test with a negative height, expecting a ValueError."""
            base = 5.0
            height = -1.0
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_base_type(self):
            """Test with an invalid base type (string), expecting a TypeError."""
            base = "abc"
            height = 5.0
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

        def test_invalid_height_type(self):
            """Test with an invalid height type (string), expecting a TypeError."""
            base = 5.0
            height = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

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
        def test_valid_radius(self):
            """Test with a valid positive radius."""
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
            """Test with a negative radius, expecting a ValueError."""
            radius = -1.0
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type (string), expecting a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius must be a number" in str(excinfo.value)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    class TestCalculateRectanglePerimeter:
        """
        Test cases for the calculate_rectangle_perimeter function.
        """
        def test_valid_dimensions(self):
            """Test with valid positive length and width."""
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

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000.0
            width = 2000.0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_negative_length(self):
            """Test with a negative length, expecting a ValueError."""
            length = -1.0
            width = 5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_negative_width(self):
            """Test with a negative width, expecting a ValueError."""
            length = 5.0
            width = -1.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_length_type(self):
            """Test with an invalid length type (string), expecting a TypeError."""
            length = "abc"
            width = 5.0
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

        def test_invalid_width_type(self):
            """Test with an invalid width type (string), expecting a TypeError."""
            length = 5.0
            width = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

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
        def test_valid_coordinates(self):
            """Test with valid coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 3.0
            y2 = 4.0
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_same_coordinates(self):
            """Test with same coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 0.0
            y2 = 0.0
            expected_distance = 0.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_large_coordinates(self):
            """Test with large coordinates."""
            x1 = 1000.0
            y1 = 1000.0
            x2 = 2000.0
            y2 = 2000.0
            expected_distance = math.sqrt((2000 - 1000) ** 2 + (2000 - 1000) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_invalid_x1_type(self):
            """Test with an invalid x1 type (string), expecting a TypeError."""
            x1 = "abc"
            y1 = 0.0
            x2 = 3.0
            y2 = 4.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

        def test_invalid_y1_type(self):
            """Test with an invalid y1 type (string), expecting a TypeError."""
            x1 = 0.0
            y1 = "abc"
            x2 = 3.0
            y2 = 4.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

        def test_invalid_x2_type(self):
            """Test with an invalid x2 type (string), expecting a TypeError."""
            x1 = 0.0
            y1 = 0.0
            x2 = "abc"
            y2 = 4.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

        def test_invalid_y2_type(self):
            """Test with an invalid y2 type (string), expecting a TypeError."""
            x1 = 0.0
            y1 = 0.0
            x2 = 3.0
            y2 = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

        def test_integer_coordinates(self):
            """Test with integer coordinates."""
            x1 = 0
            y1 = 0
            x2 = 3
            y2 = 4
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)