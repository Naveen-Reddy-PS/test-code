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

        def test_valid_radius(self):
            """Test with a valid positive radius."""
            radius = 5.0
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_zero_radius(self):
            """Test with a zero radius."""
            radius = 0.0
            expected_area = 0.0
            assert calculate_circle_area(radius) == expected_area

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000.0
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_negative_radius(self):
            """Test with a negative radius, expecting a ValueError."""
            radius = -5.0
            with pytest.raises(ValueError):
                calculate_circle_area(radius)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type (string), expecting a TypeError."""
            radius = "5.0"
            with pytest.raises(TypeError):
                calculate_circle_area(radius)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_small_radius(self):
            """Test with a very small radius."""
            radius = 0.0001
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

    class TestCalculateRectangleArea:
        """
        Test cases for calculate_rectangle_area function.
        """

        def test_valid_dimensions(self):
            """Test with valid positive length and width."""
            length = 5.0
            width = 10.0
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == expected_area

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0.0
            width = 0.0
            expected_area = 0.0
            assert calculate_rectangle_area(length, width) == expected_area

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000.0
            width = 2000.0
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == expected_area

        def test_negative_dimensions(self):
            """Test with negative length and width, expecting a ValueError."""
            length = -5.0
            width = -10.0
            with pytest.raises(ValueError):
                calculate_rectangle_area(length, width)

        def test_invalid_dimension_type(self):
            """Test with an invalid dimension type (string), expecting a TypeError."""
            length = "5.0"
            width = 10.0
            with pytest.raises(TypeError):
                calculate_rectangle_area(length, width)
            length = 5.0
            width = "10.0"
            with pytest.raises(TypeError):
                calculate_rectangle_area(length, width)

        def test_integer_dimensions(self):
            """Test with integer length and width."""
            length = 5
            width = 10
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == expected_area

        def test_mixed_dimensions(self):
            """Test with one dimension being zero."""
            length = 5.0
            width = 0.0
            expected_area = 0.0
            assert calculate_rectangle_area(length, width) == expected_area

        def test_small_dimensions(self):
            """Test with small length and width."""
            length = 0.001
            width = 0.002
            expected_area = length * width
            assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    class TestCalculateTriangleArea:
        """
        Test cases for calculate_triangle_area function.
        """

        def test_valid_dimensions(self):
            """Test with valid positive base and height."""
            base = 5.0
            height = 10.0
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == expected_area

        def test_zero_dimensions(self):
            """Test with zero base and height."""
            base = 0.0
            height = 0.0
            expected_area = 0.0
            assert calculate_triangle_area(base, height) == expected_area

        def test_large_dimensions(self):
            """Test with large base and height."""
            base = 1000.0
            height = 2000.0
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == expected_area

        def test_negative_dimensions(self):
            """Test with negative base and height, expecting a ValueError."""
            base = -5.0
            height = -10.0
            with pytest.raises(ValueError):
                calculate_triangle_area(base, height)

        def test_invalid_dimension_type(self):
            """Test with an invalid dimension type (string), expecting a TypeError."""
            base = "5.0"
            height = 10.0
            with pytest.raises(TypeError):
                calculate_triangle_area(base, height)
            base = 5.0
            height = "10.0"
            with pytest.raises(TypeError):
                calculate_triangle_area(base, height)

        def test_integer_dimensions(self):
            """Test with integer base and height."""
            base = 5
            height = 10
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == expected_area

        def test_mixed_dimensions(self):
            """Test with one dimension being zero."""
            base = 5.0
            height = 0.0
            expected_area = 0.0
            assert calculate_triangle_area(base, height) == expected_area

        def test_small_dimensions(self):
            """Test with small base and height."""
            base = 0.001
            height = 0.002
            expected_area = 0.5 * base * height
            assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    class TestCalculateCirclePerimeter:
        """
        Test cases for calculate_circle_perimeter function.
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
            assert calculate_circle_perimeter(radius) == expected_perimeter

        def test_large_radius(self):
            """Test with a large radius."""
            radius = 1000.0
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_negative_radius(self):
            """Test with a negative radius, expecting a ValueError."""
            radius = -5.0
            with pytest.raises(ValueError):
                calculate_circle_perimeter(radius)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type (string), expecting a TypeError."""
            radius = "5.0"
            with pytest.raises(TypeError):
                calculate_circle_perimeter(radius)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_small_radius(self):
            """Test with a very small radius."""
            radius = 0.0001
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    class TestCalculateRectanglePerimeter:
        """
        Test cases for calculate_rectangle_perimeter function.
        """

        def test_valid_dimensions(self):
            """Test with valid positive length and width."""
            length = 5.0
            width = 10.0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_zero_dimensions(self):
            """Test with zero length and width."""
            length = 0.0
            width = 0.0
            expected_perimeter = 0.0
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_large_dimensions(self):
            """Test with large length and width."""
            length = 1000.0
            width = 2000.0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_negative_dimensions(self):
            """Test with negative length and width, expecting a ValueError."""
            length = -5.0
            width = -10.0
            with pytest.raises(ValueError):
                calculate_rectangle_perimeter(length, width)

        def test_invalid_dimension_type(self):
            """Test with an invalid dimension type (string), expecting a TypeError."""
            length = "5.0"
            width = 10.0
            with pytest.raises(TypeError):
                calculate_rectangle_perimeter(length, width)
            length = 5.0
            width = "10.0"
            with pytest.raises(TypeError):
                calculate_rectangle_perimeter(length, width)

        def test_integer_dimensions(self):
            """Test with integer length and width."""
            length = 5
            width = 10
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_mixed_dimensions(self):
            """Test with one dimension being zero."""
            length = 5.0
            width = 0.0
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == expected_perimeter

        def test_small_dimensions(self):
            """Test with small length and width."""
            length = 0.001
            width = 0.002
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    class TestCalculateDistance:
        """
        Test cases for calculate_distance function.
        """

        def test_valid_coordinates(self):
            """Test with valid coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 3.0
            y2 = 4.0
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_same_point(self):
            """Test with the same point."""
            x1 = 0.0
            y1 = 0.0
            x2 = 0.0
            y2 = 0.0
            expected_distance = 0.0
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_large_coordinates(self):
            """Test with large coordinates."""
            x1 = 1000.0
            y1 = 1000.0
            x2 = 2000.0
            y2 = 2000.0
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_invalid_coordinate_type(self):
            """Test with an invalid coordinate type (string), expecting a TypeError."""
            x1 = "0.0"
            y1 = 0.0
            x2 = 3.0
            y2 = 4.0
            with pytest.raises(TypeError):
                calculate_distance(x1, y1, x2, y2)

            x1 = 0.0
            y1 = "0.0"
            x2 = 3.0
            y2 = 4.0
            with pytest.raises(TypeError):
                calculate_distance(x1, y1, x2, y2)

            x1 = 0.0
            y1 = 0.0
            x2 = "3.0"
            y2 = 4.0
            with pytest.raises(TypeError):
                calculate_distance(x1, y1, x2, y2)

            x1 = 0.0
            y1 = 0.0
            x2 = 3.0
            y2 = "4.0"
            with pytest.raises(TypeError):
                calculate_distance(x1, y1, x2, y2)

        def test_integer_coordinates(self):
            """Test with integer coordinates."""
            x1 = 0
            y1 = 0
            x2 = 3
            y2 = 4
            expected_distance = 5.0
            assert calculate_distance(x1, y1, x2, y2) == expected_distance

        def test_negative_coordinates(self):
            """Test with negative coordinates."""
            x1 = -1.0
            y1 = -1.0
            x2 = 2.0
            y2 = 3.0
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_small_coordinates(self):
            """Test with small coordinates."""
            x1 = 0.001
            y1 = 0.001
            x2 = 0.002
            y2 = 0.002
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)