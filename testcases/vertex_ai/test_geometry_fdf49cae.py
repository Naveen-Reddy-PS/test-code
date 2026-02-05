import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


class TestGeometry:

    def test_calculate_circle_area_positive_radius(self):
        """Test circle area calculation with a positive radius."""
        radius = 5.0
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_zero_radius(self):
        """Test circle area calculation with a zero radius."""
        radius = 0.0
        expected_area = 0.0
        assert calculate_circle_area(radius) == expected_area

    def test_calculate_circle_area_large_radius(self):
        """Test circle area calculation with a large radius."""
        radius = 1000.0
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_negative_radius_raises_error(self):
        """Test that a negative radius raises a ValueError."""
        radius = -5.0
        with pytest.raises(ValueError) as excinfo:
            calculate_circle_area(radius)
        assert "Radius cannot be negative" in str(excinfo.value)

    def test_calculate_circle_area_invalid_radius_type_raises_error(self):
        """Test that an invalid radius type (string) raises a TypeError."""
        radius = "invalid"
        with pytest.raises(TypeError) as excinfo:
            calculate_circle_area(radius)
        assert "Radius must be a number" in str(excinfo.value)

    def test_calculate_circle_area_integer_radius(self):
        """Test circle area calculation with an integer radius."""
        radius = 5
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_positive_dimensions(self):
        """Test rectangle area calculation with positive dimensions."""
        length = 5.0
        width = 10.0
        expected_area = length * width
        assert calculate_rectangle_area(length, width) == expected_area

    def test_calculate_rectangle_area_zero_dimensions(self):
        """Test rectangle area calculation with zero dimensions."""
        length = 0.0
        width = 0.0
        expected_area = 0.0
        assert calculate_rectangle_area(length, width) == expected_area

    def test_calculate_rectangle_area_negative_length_raises_error(self):
        """Test that a negative length raises a ValueError."""
        length = -5.0
        width = 10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_area_negative_width_raises_error(self):
        """Test that a negative width raises a ValueError."""
        length = 5.0
        width = -10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_area_invalid_length_type_raises_error(self):
        """Test that an invalid length type (string) raises a TypeError."""
        length = "invalid"
        width = 10.0
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_rectangle_area_invalid_width_type_raises_error(self):
        """Test that an invalid width type (string) raises a TypeError."""
        length = 5.0
        width = "invalid"
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_area(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_rectangle_area_integer_dimensions(self):
        """Test rectangle area calculation with integer dimensions."""
        length = 5
        width = 10
        expected_area = length * width
        assert calculate_rectangle_area(length, width) == expected_area

    def test_calculate_triangle_area_positive_dimensions(self):
        """Test triangle area calculation with positive dimensions."""
        base = 5.0
        height = 10.0
        expected_area = 0.5 * base * height
        assert calculate_triangle_area(base, height) == expected_area

    def test_calculate_triangle_area_zero_dimensions(self):
        """Test triangle area calculation with zero dimensions."""
        base = 0.0
        height = 0.0
        expected_area = 0.0
        assert calculate_triangle_area(base, height) == expected_area

    def test_calculate_triangle_area_negative_base_raises_error(self):
        """Test that a negative base raises a ValueError."""
        base = -5.0
        height = 10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_triangle_area_negative_height_raises_error(self):
        """Test that a negative height raises a ValueError."""
        base = 5.0
        height = -10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_triangle_area_invalid_base_type_raises_error(self):
        """Test that an invalid base type (string) raises a TypeError."""
        base = "invalid"
        height = 10.0
        with pytest.raises(TypeError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Both base and height must be numbers" in str(excinfo.value)

    def test_calculate_triangle_area_invalid_height_type_raises_error(self):
        """Test that an invalid height type (string) raises a TypeError."""
        base = 5.0
        height = "invalid"
        with pytest.raises(TypeError) as excinfo:
            calculate_triangle_area(base, height)
        assert "Both base and height must be numbers" in str(excinfo.value)

    def test_calculate_triangle_area_integer_dimensions(self):
        """Test triangle area calculation with integer dimensions."""
        base = 5
        height = 10
        expected_area = 0.5 * base * height
        assert calculate_triangle_area(base, height) == expected_area

    def test_calculate_circle_perimeter_positive_radius(self):
        """Test circle perimeter calculation with a positive radius."""
        radius = 5.0
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_zero_radius(self):
        """Test circle perimeter calculation with a zero radius."""
        radius = 0.0
        expected_perimeter = 0.0
        assert calculate_circle_perimeter(radius) == expected_perimeter

    def test_calculate_circle_perimeter_large_radius(self):
        """Test circle perimeter calculation with a large radius."""
        radius = 1000.0
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_negative_radius_raises_error(self):
        """Test that a negative radius raises a ValueError."""
        radius = -5.0
        with pytest.raises(ValueError) as excinfo:
            calculate_circle_perimeter(radius)
        assert "Radius cannot be negative" in str(excinfo.value)

    def test_calculate_circle_perimeter_invalid_radius_type_raises_error(self):
        """Test that an invalid radius type (string) raises a TypeError."""
        radius = "invalid"
        with pytest.raises(TypeError) as excinfo:
            calculate_circle_perimeter(radius)
        assert "Radius must be a number" in str(excinfo.value)

    def test_calculate_circle_perimeter_integer_radius(self):
        """Test circle perimeter calculation with an integer radius."""
        radius = 5
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_positive_dimensions(self):
        """Test rectangle perimeter calculation with positive dimensions."""
        length = 5.0
        width = 10.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == expected_perimeter

    def test_calculate_rectangle_perimeter_zero_dimensions(self):
        """Test rectangle perimeter calculation with zero dimensions."""
        length = 0.0
        width = 0.0
        expected_perimeter = 0.0
        assert calculate_rectangle_perimeter(length, width) == expected_perimeter

    def test_calculate_rectangle_perimeter_negative_length_raises_error(self):
        """Test that a negative length raises a ValueError."""
        length = -5.0
        width = 10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_negative_width_raises_error(self):
        """Test that a negative width raises a ValueError."""
        length = 5.0
        width = -10.0
        with pytest.raises(ValueError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Dimensions cannot be negative" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_invalid_length_type_raises_error(self):
        """Test that an invalid length type (string) raises a TypeError."""
        length = "invalid"
        width = 10.0
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_invalid_width_type_raises_error(self):
        """Test that an invalid width type (string) raises a TypeError."""
        length = 5.0
        width = "invalid"
        with pytest.raises(TypeError) as excinfo:
            calculate_rectangle_perimeter(length, width)
        assert "Both length and width must be numbers" in str(excinfo.value)

    def test_calculate_rectangle_perimeter_integer_dimensions(self):
        """Test rectangle perimeter calculation with integer dimensions."""
        length = 5
        width = 10
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == expected_perimeter

    def test_calculate_distance_positive_coordinates(self):
        """Test distance calculation with positive coordinates."""
        x1 = 0.0
        y1 = 0.0
        x2 = 3.0
        y2 = 4.0
        expected_distance = 5.0
        assert calculate_distance(x1, y1, x2, y2) == expected_distance

    def test_calculate_distance_negative_coordinates(self):
        """Test distance calculation with negative coordinates."""
        x1 = -1.0
        y1 = -1.0
        x2 = 2.0
        y2 = 3.0
        expected_distance = 5.0
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(5.0)

    def test_calculate_distance_same_point(self):
        """Test distance calculation between the same point."""
        x1 = 5.0
        y1 = 5.0
        x2 = 5.0
        y2 = 5.0
        expected_distance = 0.0
        assert calculate_distance(x1, y1, x2, y2) == expected_distance

    def test_calculate_distance_invalid_x1_type_raises_error(self):
        """Test that an invalid x1 type (string) raises a TypeError."""
        x1 = "invalid"
        y1 = 0.0
        x2 = 3.0
        y2 = 4.0
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_invalid_y1_type_raises_error(self):
        """Test that an invalid y1 type (string) raises a TypeError."""
        x1 = 0.0
        y1 = "invalid"
        x2 = 3.0
        y2 = 4.0
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_invalid_x2_type_raises_error(self):
        """Test that an invalid x2 type (string) raises a TypeError."""
        x1 = 0.0
        y1 = 0.0
        x2 = "invalid"
        y2 = 4.0
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_invalid_y2_type_raises_error(self):
        """Test that an invalid y2 type (string) raises a TypeError."""
        x1 = 0.0
        y1 = 0.0
        x2 = 3.0
        y2 = "invalid"
        with pytest.raises(TypeError) as excinfo:
            calculate_distance(x1, y1, x2, y2)
        assert "All coordinates must be numbers" in str(excinfo.value)

    def test_calculate_distance_integer_coordinates(self):
        """Test distance calculation with integer coordinates."""
        x1 = 0
        y1 = 0
        x2 = 3
        y2 = 4
        expected_distance = 5.0
        assert calculate_distance(x1, y1, x2, y2) == expected_distance