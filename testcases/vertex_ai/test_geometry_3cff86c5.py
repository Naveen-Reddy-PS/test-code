import pytest
import math
from geometry import calculate_circle_area, calculate_rectangle_area, calculate_triangle_area, calculate_circle_perimeter, calculate_rectangle_perimeter, calculate_distance


class TestGeometry:

    def test_calculate_circle_area_valid_radius(self):
        """Test calculate_circle_area with a valid positive radius."""
        radius = 5.0
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_zero_radius(self):
        """Test calculate_circle_area with a zero radius."""
        radius = 0.0
        expected_area = 0.0
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_negative_radius(self):
        """Test calculate_circle_area with a negative radius raises ValueError."""
        radius = -1.0
        with pytest.raises(ValueError):
            calculate_circle_area(radius)

    def test_calculate_circle_area_invalid_radius_type(self):
        """Test calculate_circle_area with an invalid radius type (string) raises TypeError."""
        radius = "invalid"
        with pytest.raises(TypeError):
            calculate_circle_area(radius)

    def test_calculate_circle_area_large_radius(self):
        """Test calculate_circle_area with a large radius."""
        radius = 1e10
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_circle_area_small_radius(self):
        """Test calculate_circle_area with a small radius."""
        radius = 0.0001
        expected_area = math.pi * radius * radius
        assert calculate_circle_area(radius) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_valid_dimensions(self):
        """Test calculate_rectangle_area with valid positive length and width."""
        length = 5.0
        width = 10.0
        expected_area = length * width
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_zero_length(self):
        """Test calculate_rectangle_area with a zero length."""
        length = 0.0
        width = 10.0
        expected_area = 0.0
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_zero_width(self):
        """Test calculate_rectangle_area with a zero width."""
        length = 5.0
        width = 0.0
        expected_area = 0.0
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)

    def test_calculate_rectangle_area_negative_length(self):
        """Test calculate_rectangle_area with a negative length raises ValueError."""
        length = -5.0
        width = 10.0
        with pytest.raises(ValueError):
            calculate_rectangle_area(length, width)

    def test_calculate_rectangle_area_negative_width(self):
        """Test calculate_rectangle_area with a negative width raises ValueError."""
        length = 5.0
        width = -10.0
        with pytest.raises(ValueError):
            calculate_rectangle_area(length, width)

    def test_calculate_rectangle_area_invalid_length_type(self):
        """Test calculate_rectangle_area with an invalid length type (string) raises TypeError."""
        length = "invalid"
        width = 10.0
        with pytest.raises(TypeError):
            calculate_rectangle_area(length, width)

    def test_calculate_rectangle_area_invalid_width_type(self):
        """Test calculate_rectangle_area with an invalid width type (string) raises TypeError."""
        length = 5.0
        width = "invalid"
        with pytest.raises(TypeError):
            calculate_rectangle_area(length, width)

    def test_calculate_rectangle_area_large_dimensions(self):
        """Test calculate_rectangle_area with large dimensions."""
        length = 1e5
        width = 1e5
        expected_area = length * width
        assert calculate_rectangle_area(length, width) == pytest.approx(expected_area)
        
    def test_calculate_triangle_area_valid_dimensions(self):
        """Test calculate_triangle_area with valid positive base and height."""
        base = 4.0
        height = 6.0
        expected_area = 0.5 * base * height
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_triangle_area_zero_base(self):
        """Test calculate_triangle_area with a zero base."""
        base = 0.0
        height = 6.0
        expected_area = 0.0
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_triangle_area_zero_height(self):
        """Test calculate_triangle_area with a zero height."""
        base = 4.0
        height = 0.0
        expected_area = 0.0
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_triangle_area_negative_base(self):
        """Test calculate_triangle_area with a negative base raises ValueError."""
        base = -4.0
        height = 6.0
        with pytest.raises(ValueError):
            calculate_triangle_area(base, height)

    def test_calculate_triangle_area_negative_height(self):
        """Test calculate_triangle_area with a negative height raises ValueError."""
        base = 4.0
        height = -6.0
        with pytest.raises(ValueError):
            calculate_triangle_area(base, height)

    def test_calculate_triangle_area_invalid_base_type(self):
        """Test calculate_triangle_area with an invalid base type (string) raises TypeError."""
        base = "invalid"
        height = 6.0
        with pytest.raises(TypeError):
            calculate_triangle_area(base, height)

    def test_calculate_triangle_area_invalid_height_type(self):
        """Test calculate_triangle_area with an invalid height type (string) raises TypeError."""
        base = 4.0
        height = "invalid"
        with pytest.raises(TypeError):
            calculate_triangle_area(base, height)

    def test_calculate_triangle_area_large_dimensions(self):
        """Test calculate_triangle_area with large dimensions."""
        base = 1e5
        height = 1e5
        expected_area = 0.5 * base * height
        assert calculate_triangle_area(base, height) == pytest.approx(expected_area)

    def test_calculate_circle_perimeter_valid_radius(self):
        """Test calculate_circle_perimeter with a valid positive radius."""
        radius = 5.0
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_zero_radius(self):
        """Test calculate_circle_perimeter with a zero radius."""
        radius = 0.0
        expected_perimeter = 0.0
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_negative_radius(self):
        """Test calculate_circle_perimeter with a negative radius raises ValueError."""
        radius = -1.0
        with pytest.raises(ValueError):
            calculate_circle_perimeter(radius)

    def test_calculate_circle_perimeter_invalid_radius_type(self):
        """Test calculate_circle_perimeter with an invalid radius type (string) raises TypeError."""
        radius = "invalid"
        with pytest.raises(TypeError):
            calculate_circle_perimeter(radius)

    def test_calculate_circle_perimeter_large_radius(self):
        """Test calculate_circle_perimeter with a large radius."""
        radius = 1e10
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_circle_perimeter_small_radius(self):
        """Test calculate_circle_perimeter with a small radius."""
        radius = 0.0001
        expected_perimeter = 2 * math.pi * radius
        assert calculate_circle_perimeter(radius) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_valid_dimensions(self):
        """Test calculate_rectangle_perimeter with valid positive length and width."""
        length = 5.0
        width = 10.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_zero_length(self):
        """Test calculate_rectangle_perimeter with a zero length."""
        length = 0.0
        width = 10.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_zero_width(self):
        """Test calculate_rectangle_perimeter with a zero width."""
        length = 5.0
        width = 0.0
        expected_perimeter = 2 * (length + width)
        assert calculate_rectangle_perimeter(length, width) == pytest.approx(expected_perimeter)

    def test_calculate_rectangle_perimeter_negative_length(self):
        """Test calculate_rectangle_perimeter with a negative length raises ValueError."""
        length = -5.0
        width = 10.0
        with pytest.raises(ValueError):
            calculate_rectangle_perimeter(length, width)

    def test_calculate_rectangle_perimeter_negative_width(self):
        """Test calculate_rectangle_perimeter with a negative width raises ValueError."""
        length = 5.0
        width = -10.0
        with pytest.raises(ValueError):
            calculate_rectangle_perimeter(length, width)

    def test_calculate_rectangle_perimeter_invalid_length_type(self):
        """Test calculate_rectangle_perimeter with an invalid length type (string) raises TypeError."""
        length = "invalid"
        width = 10.0
        with pytest.raises(TypeError):
            calculate_rectangle_perimeter(length, width)

    def test_calculate_rectangle_perimeter_invalid_width_type(self):
        """Test calculate_rectangle_perimeter with an invalid width type (string) raises TypeError."""
        length = 5.0
        width = "invalid"
        with pytest.raises(TypeError):
            calculate_rectangle_perimeter(length, width)
    
    def test_calculate_distance_valid_points(self):
        """Test calculate_distance with valid coordinates."""
        x1 = 1.0
        y1 = 2.0
        x2 = 4.0
        y2 = 6.0
        expected_distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_same_point(self):
        """Test calculate_distance with the same point (distance should be 0)."""
        x1 = 1.0
        y1 = 2.0
        x2 = 1.0
        y2 = 2.0
        expected_distance = 0.0
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_horizontal_line(self):
        """Test calculate_distance with points on a horizontal line."""
        x1 = 1.0
        y1 = 2.0
        x2 = 4.0
        y2 = 2.0
        expected_distance = 3.0
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_vertical_line(self):
        """Test calculate_distance with points on a vertical line."""
        x1 = 1.0
        y1 = 2.0
        x2 = 1.0
        y2 = 6.0
        expected_distance = 4.0
        assert calculate_distance(x1, y1, x2, y2) == pytest.approx(expected_distance)

    def test_calculate_distance_invalid_x1_type(self):
        """Test calculate_distance with an invalid x1 type (string) raises TypeError."""
        x1 = "invalid"
        y1 = 2.0
        x2 = 4.0
        y2 = 6.0
        with pytest.raises(TypeError):
            calculate_distance(x1, y1, x2, y2)

    def test_calculate_distance_invalid_y1_type(self):
        """Test calculate_distance with an invalid y1 type (string) raises TypeError."""
        x1 = 1.0
        y1 = "invalid"
        x2 = 4.0
        y2 = 6.0
        with pytest.raises(TypeError):
            calculate_distance(x1, y1, x2, y2)

    def test_calculate_distance_invalid_x2_type(self):
        """Test calculate_distance with an invalid x2 type (string) raises TypeError."""
        x1 = 1.0
        y1 = 2.0
        x2 = "invalid"
        y2 = 6.0
        with pytest.raises(TypeError):
            calculate_distance(x1, y1, x2, y2)

    def test_calculate_distance_invalid_y2_type(self):
        """Test calculate_distance with an invalid y2 type (string) raises TypeError."""
        x1 = 1.0
        y1 = 2.0
        x2 = 4.0
        y2 = "invalid"
        with pytest.raises(TypeError):
            calculate_distance(x1, y1, x2, y2)