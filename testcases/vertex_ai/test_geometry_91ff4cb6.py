import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


class TestGeometry:
    """
    Test suite for geometry calculations.
    """

    class TestCircleArea:
        """
        Test cases for circle area calculation.
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
            """Test with a negative radius (should raise ValueError)."""
            radius = -5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type (should raise TypeError)."""
            radius = "invalid"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_area(radius)
            assert "Radius must be a number" in str(excinfo.value)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

        def test_small_radius(self):
            """Test with a small radius."""
            radius = 0.1
            expected_area = math.pi * radius * radius
            assert calculate_circle_area(radius) == pytest.approx(expected_area)

    class TestRectangleArea:
        """
        Test cases for rectangle area calculation.
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
            """Test with negative length or width (should raise ValueError)."""
            length = -5.0
            width = 10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

            length = 5.0
            width = -10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_types(self):
            """Test with invalid length or width types (should raise TypeError)."""
            length = "invalid"
            width = 10.0
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_area(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

            length = 5.0
            width = "invalid"
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

    class TestTriangleArea:
        """
        Test cases for triangle area calculation.
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
            """Test with negative base or height (should raise ValueError)."""
            base = -5.0
            height = 10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

            base = 5.0
            height = -10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_types(self):
            """Test with invalid base or height types (should raise TypeError)."""
            base = "invalid"
            height = 10.0
            with pytest.raises(TypeError) as excinfo:
                calculate_triangle_area(base, height)
            assert "Both base and height must be numbers" in str(excinfo.value)

            base = 5.0
            height = "invalid"
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

    class TestCirclePerimeter:
        """
        Test cases for circle perimeter calculation.
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
            """Test with a negative radius (should raise ValueError)."""
            radius = -5.0
            with pytest.raises(ValueError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius cannot be negative" in str(excinfo.value)

        def test_invalid_radius_type(self):
            """Test with an invalid radius type (should raise TypeError)."""
            radius = "invalid"
            with pytest.raises(TypeError) as excinfo:
                calculate_circle_perimeter(radius)
            assert "Radius must be a number" in str(excinfo.value)

        def test_integer_radius(self):
            """Test with an integer radius."""
            radius = 5
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

        def test_small_radius(self):
            """Test with a small radius."""
            radius = 0.1
            expected_perimeter = 2 * math.pi * radius
            assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    class TestRectanglePerimeter:
        """
        Test cases for rectangle perimeter calculation.
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
            expected_perimeter = 2 * (length + width)
            assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

        def test_negative_dimensions(self):
            """Test with negative length or width (should raise ValueError)."""
            length = -5.0
            width = 10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

            length = 5.0
            width = -10.0
            with pytest.raises(ValueError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Dimensions cannot be negative" in str(excinfo.value)

        def test_invalid_dimension_types(self):
            """Test with invalid length or width types (should raise TypeError)."""
            length = "invalid"
            width = 10.0
            with pytest.raises(TypeError) as excinfo:
                calculate_rectangle_perimeter(length, width)
            assert "Both length and width must be numbers" in str(excinfo.value)

            length = 5.0
            width = "invalid"
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

    class TestDistance:
        """
        Test cases for distance calculation.
        """

        def test_positive_coordinates(self):
            """Test with positive coordinates."""
            x1 = 1.0
            y1 = 2.0
            x2 = 4.0
            y2 = 6.0
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_negative_coordinates(self):
            """Test with negative coordinates."""
            x1 = -1.0
            y1 = -2.0
            x2 = -4.0
            y2 = -6.0
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_mixed_coordinates(self):
            """Test with mixed positive and negative coordinates."""
            x1 = -1.0
            y1 = 2.0
            x2 = 4.0
            y2 = -6.0
            expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_zero_coordinates(self):
            """Test with zero coordinates."""
            x1 = 0.0
            y1 = 0.0
            x2 = 0.0
            y2 = 0.0
            expected_distance = 0.0
            assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

        def test_invalid_coordinate_types(self):
            """Test with invalid coordinate types (should raise TypeError)."""
            x1 = "invalid"
            y1 = 2.0
            x2 = 4.0
            y2 = 6.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

            x1 = 1.0
            y1 = "invalid"
            x2 = 4.0
            y2 = 6.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

            x1 = 1.0
            y1 = 2.0
            x2 = "invalid"
            y2 = 6.0
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)

            x1 = 1.0
            y1 = 2.0
            x2 = 4.0
            y2 = "invalid"
            with pytest.raises(TypeError) as excinfo:
                calculate_distance(x1, y1, x2, y2)
            assert "All coordinates must be numbers" in str(excinfo.value)