import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, \
    calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


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
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_float_radius(self):
            """Test with a float radius."""
            radius = 2.5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_negative_radius(self):
            """Test with a negative radius, expecting a ValueError."""
            radius = -1
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type, expecting a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius must be a number" in str(excinfo.value)

    class TestCalculateRectangleArea:
        """
        Test cases for calculate_rectangle_area function.
        """

        def test_positive_dimensions(self):
            """Test with positive length and width."""
            length = 5
            width = 10
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0
            width = 0
            expected_area = 0
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_mixed_dimensions(self):
            """Test with one dimension zero."""
            length = 5
            width = 0
            expected_area = 0
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_float_dimensions(self):
            """Test with float length and width."""
            length = 2.5
            width = 3.5
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

        def test_negative_dimensions(self):
            """Test with negative length, expecting a ValueError."""
            length = -1
            width = 5
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

            length = 5
            width = -1
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_type(self):
            """Test with an invalid length type, expecting a TypeError."""
            length = "abc"
            width = 5
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

            length = 5
            width = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

    class TestCalculateTriangleArea:
        """
        Test cases for calculate_triangle_area function.
        """

        def test_positive_dimensions(self):
            """Test with positive base and height."""
            base = 5
            height = 10
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_zero_dimensions(self):
            """Test with zero base and height."""
            base = 0
            height = 0
            expected_area = 0
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_mixed_dimensions(self):
            """Test with one dimension zero."""
            base = 5
            height = 0
            expected_area = 0
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_float_dimensions(self):
            """Test with float base and height."""
            base = 2.5
            height = 3.5
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

        def test_negative_dimensions(self):
            """Test with negative base, expecting a ValueError."""
            base = -1
            height = 5
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

            base = 5
            height = -1
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_type(self):
            """Test with an invalid base type, expecting a TypeError."""
            base = "abc"
            height = 5
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

            base = 5
            height = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

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
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_float_radius(self):
            """Test with a float radius."""
            radius = 2.5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_negative_radius(self):
            """Test with a negative radius, expecting a ValueError."""
            radius = -1
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type, expecting a TypeError."""
            radius = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius must be a number" in str(excinfo.value)

    class TestCalculateRectanglePerimeter:
        """
        Test cases for calculate_rectangle_perimeter function.
        """

        def test_positive_dimensions(self):
            """Test with positive length and width."""
            length = 5
            width = 10
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0
            width = 0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_mixed_dimensions(self):
            """Test with one dimension zero."""
            length = 5
            width = 0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_float_dimensions(self):
            """Test with float length and width."""
            length = 2.5
            width = 3.5
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_negative_dimensions(self):
            """Test with negative length, expecting a ValueError."""
            length = -1
            width = 5
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

            length = 5
            width = -1
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_type(self):
            """Test with an invalid length type, expecting a TypeError."""
            length = "abc"
            width = 5
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

            length = 5
            width = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

    class TestCalculateDistance:
        """
        Test cases for calculate_distance function.
        """

        def test_positive_coordinates(self):
            """Test with positive coordinates."""
            x1 = 0
            y1 = 0
            x2 = 3
            y2 = 4
            expected_distance = 5
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_negative_coordinates(self):
            """Test with negative coordinates."""
            x1 = -1
            y1 = -1
            x2 = -4
            y2 = -5
            expected_distance = 5
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(5.0)

        def test_mixed_coordinates(self):
            """Test with mixed positive and negative coordinates."""
            x1 = -1
            y1 = 0
            x2 = 2
            y2 = 4
            expected_distance = 5
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(5.0)

        def test_zero_coordinates(self):
            """Test with zero coordinates."""
            x1 = 0
            y1 = 0
            x2 = 0
            y2 = 0
            expected_distance = 0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_float_coordinates(self):
            """Test with float coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 3.0
            y2 = 4.0
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_invalid_coordinate_type(self):
            """Test with an invalid coordinate type, expecting a TypeError."""
            x1 = "abc"
            y1 = 0
            x2 = 0
            y2 = 0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

            x1 = 0
            y1 = "abc"
            x2 = 0
            y2 = 0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

            x1 = 0
            y1 = 0
            x2 = "abc"
            y2 = 0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

            x1 = 0
            y1 = 0
            x2 = 0
            y2 = "abc"
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)