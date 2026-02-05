import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance

class TestGeometry:
    """Tests for geometry module."""

    def test_calculate_circle_area_positive_radius(self):
        """Test circle area calculation with positive radius."""
        radius = 5.0
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_zero_radius(self):
        """Test circle area calculation with zero radius."""
        radius = 0.0
        expected_area = 0.0
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_large_radius(self):
        """Test circle area calculation with a large radius."""
        radius = 1000.0
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_negative_radius_raises_value_error(self):
        """Test that negative radius raises ValueError."""
        radius = -5.0
        with pytest.raises(ValueError) as excinfo:
            calculate_circle_area(radius)
        assert "Radius cannot be negative" in str(excinfo.value)

    def test_calculate_circle_area_invalid_radius_type_raises_type_error(self):
        """Test that invalid radius type raises TypeError."""
        radius = "five"
        with pytest.raises(TypeError) as excinfo:
            calculate_circle_area(radius)
        assert "Radius must be a number" in str(excinfo.value)

    def test_calculate_rectangle_area_positive_dimensions(self):
        """Test rectangle area calculation with positive dimensions."""
        length = 5.0
        width = 10.0
        expected_area = length * width
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_zero_length(self):
        """Test rectangle area calculation with zero length."""
        length = 0.0
        width = 10.0
        expected_area = 0.0
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_zero_width(self):
        """Test rectangle area calculation with zero width."""
        length = 5.0
        width = 0.0
        expected_area = 0.0
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_negative_length_raises_value_error(self):
        """Test that negative length raises ValueError."""
        length = -5.0
        width = 10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_area_negative_width_raises_value_error(self):
        """Test that negative width raises ValueError."""
        length = 5.0
        width = -10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_area_invalid_length_type_raises_type_error(self):
        """Test that invalid length type raises TypeError."""
        length = "five"
        width = 10.0
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_rectangle_area_invalid_width_type_raises_type_error(self):
        """Test that invalid width type raises TypeError."""
        length = 5.0
        width = "ten"
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_triangle_area_positive_dimensions(self):
        """Test triangle area calculation with positive dimensions."""
        base = 5.0
        height = 10.0
        expected_area = 0.5 * base * height
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_triangle_area_zero_base(self):
        """Test triangle area calculation with zero base."""
        base = 0.0
        height = 10.0
        expected_area = 0.0
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_triangle_area_zero_height(self):
        """Test triangle area calculation with zero height."""
        base = 5.0
        height = 0.0
        expected_area = 0.0
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_triangle_area_negative_base_raises_value_error(self):
        """Test that negative base raises ValueError."""
        base = -5.0
        height = 10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_triangle_area_negative_height_raises_value_error(self):
        """Test that negative height raises ValueError."""
        base = 5.0
        height = -10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_triangle_area_invalid_base_type_raises_type_error(self):
        """Test that invalid base type raises TypeError."""
        base = "five"
        height = 10.0
        with pytest.raises(TypeError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Both base and height must be numbers" in str(excinfo.value)

    def test_calculate_triangle_area_invalid_height_type_raises_type_error(self):
        """Test that invalid height type raises TypeError."""
        base = 5.0
        height = "ten"
        with pytest.raises(TypeError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Both base and height must be numbers" in str(excinfo.value)

    def test_calculate_circle_perimeter_positive_radius(self):
        """Test circle perimeter calculation with positive radius."""
        radius = 5.0
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_zero_radius(self):
        """Test circle perimeter calculation with zero radius."""
        radius = 0.0
        expected_perimeter = 0.0
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_large_radius(self):
        """Test circle perimeter calculation with a large radius."""
        radius = 1000.0
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_negative_radius_raises_value_error(self):
        """Test that negative radius raises ValueError."""
        radius = -5.0
        with pytest.raises(ValueError) as excinfo:
            calculate_circle_perimeter(radius)
        assert "Radius cannot be negative" in str(excinfo.value)

    def test_calculate_circle_perimeter_invalid_radius_type_raises_type_error(self):
        """Test that invalid radius type raises TypeError."""
        radius = "five"
        with pytest.raises(TypeError) as excinfo:
            calculate_circle_perimeter(radius)
        assert "Radius must be a number" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_positive_dimensions(self):
        """Test rectangle perimeter calculation with positive dimensions."""
        length = 5.0
        width = 10.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_zero_length(self):
        """Test rectangle perimeter calculation with zero length."""
        length = 0.0
        width = 10.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_zero_width(self):
        """Test rectangle perimeter calculation with zero width."""
        length = 5.0
        width = 0.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_negative_length_raises_value_error(self):
        """Test that negative length raises ValueError."""
        length = -5.0
        width = 10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_negative_width_raises_value_error(self):
        """Test that negative width raises ValueError."""
        length = 5.0
        width = -10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_invalid_length_type_raises_type_error(self):
        """Test that invalid length type raises TypeError."""
        length = "five"
        width = 10.0
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_invalid_width_type_raises_type_error(self):
        """Test that invalid width type raises TypeError."""
        length = 5.0
        width = "ten"
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_distance_positive_coordinates(self):
        """Test distance calculation with positive coordinates."""
        x1 = 1.0
        y1 = 2.0
        x2 = 4.0
        y2 = 6.0
        expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_zero_coordinates(self):
        """Test distance calculation with zero coordinates."""
        x1 = 0.0
        y1 = 0.0
        x2 = 0.0
        y2 = 0.0
        expected_distance = 0.0
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_negative_coordinates(self):
        """Test distance calculation with negative coordinates."""
        x1 = -1.0
        y1 = -2.0
        x2 = -4.0
        y2 = -6.0
        expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_mixed_coordinates(self):
        """Test distance calculation with mixed positive and negative coordinates."""
        x1 = -1.0
        y1 = 2.0
        x2 = 4.0
        y2 = -6.0
        expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_invalid_x1_type_raises_type_error(self):
        """Test that invalid x1 type raises TypeError."""
        x1 = "one"
        y1 = 2.0
        x2 = 4.0
        y2 = 6.0
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_invalid_y1_type_raises_type_error(self):
        """Test that invalid y1 type raises TypeError."""
        x1 = 1.0
        y1 = "two"
        x2 = 4.0
        y2 = 6.0
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_invalid_x2_type_raises_type_error(self):
        """Test that invalid x2 type raises TypeError."""
        x1 = 1.0
        y1 = 2.0
        x2 = "four"
        y2 = 6.0
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_invalid_y2_type_raises_type_error(self):
        """Test that invalid y2 type raises TypeError."""
        x1 = 1.0
        y1 = 2.0
        x2 = 4.0
        y2 = "six"
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)