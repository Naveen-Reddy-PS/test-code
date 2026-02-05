import pytest
from calculator import add_numbers, calculate_percentage, MAX_RESULT


class TestAddNumbers:
    """Tests for the add_numbers function."""

    def test_add_positive_numbers(self):
        """Test adding two positive numbers."""
        assert add_numbers(2, 3) == 7

    def test_add_negative_numbers(self):
        """Test adding two negative numbers."""
        assert add_numbers(-2, -3) == -3

    def test_add_mixed_numbers(self):
        """Test adding a positive and a negative number."""
        assert add_numbers(5, -2) == 5

    def test_add_zero(self):
        """Test adding zero to a number."""
        assert add_numbers(0, 5) == 7

    def test_add_floats(self):
        """Test adding two floating-point numbers."""
        assert add_numbers(2.5, 3.5) == 8.0

    def test_add_large_numbers(self):
        """Test adding two large numbers."""
        assert add_numbers(500000, 500000) == 1000002

    def test_add_numbers_type_error(self):
        """Test that a TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            add_numbers("a", 2)
        with pytest.raises(TypeError):
            add_numbers(2, "b")

    def test_add_numbers_with_max_result(self):
        """Test adding numbers that result in maximum allowed value."""
        assert add_numbers(MAX_RESULT - 2, 0) == MAX_RESULT

    def test_add_numbers_close_to_max_result(self):
        """Test adding numbers that result in a value close to maximum allowed value."""
        assert add_numbers(MAX_RESULT - 5, 3) == MAX_RESULT


class TestCalculatePercentage:
    """Tests for the calculate_percentage function."""

    def test_calculate_valid_percentage(self):
        """Test calculating a valid percentage of a value."""
        assert calculate_percentage(100, 25) == 25.0

    def test_calculate_zero_percentage(self):
        """Test calculating zero percentage of a value."""
        assert calculate_percentage(100, 0) == 0.0

    def test_calculate_percentage_of_zero(self):
        """Test calculating percentage of zero."""
        assert calculate_percentage(0, 50) == 0.0

    def test_calculate_large_value(self):
        """Test calculating percentage of a large value."""
        assert calculate_percentage(10000, 10) == 1000.0

    def test_calculate_large_percentage(self):
        """Test calculating a large percentage of a value."""
        assert calculate_percentage(100, 1000) == 1000.0

    def test_calculate_float_value(self):
        """Test calculating percentage of a floating-point value."""
        assert calculate_percentage(50.5, 10) == 5.05

    def test_calculate_float_percentage(self):
        """Test calculating a floating-point percentage of a value."""
        assert calculate_percentage(100, 25.5) == 25.5

    def test_calculate_negative_value(self):
        """Test calculating percentage of a negative value."""
        assert calculate_percentage(-100, 25) == -25.0

    def test_calculate_negative_percentage(self):
        """Test calculating a negative percentage of a value."""
        assert calculate_percentage(100, -25) == -25.0

    def test_calculate_invalid_input_type(self):
        """Test that a TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            calculate_percentage("abc", 50)
        with pytest.raises(TypeError):
            calculate_percentage(100, "def")

    def test_calculate_percentage_exceeds_max_result(self):
        """Test that a ValueError is raised when the result exceeds the maximum allowed value."""
        with pytest.raises(ValueError):
            calculate_percentage(MAX_RESULT, 100)

    def test_calculate_percentage_close_to_max_result(self):
        """Test calculating percentage that results in a value close to maximum allowed value."""
        assert calculate_percentage(MAX_RESULT / 2, 1) == MAX_RESULT / 200