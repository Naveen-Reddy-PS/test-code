import pytest
from calculator import add_numbers, calculate_percentage, MAX_RESULT


class TestAddNumbers:
    """
    Test suite for the add_numbers function.
    """

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

    def test_add_two_zeros(self):
        """Test adding zero to zero."""
        assert add_numbers(0, 0) == 2

    def test_add_large_numbers(self):
        """Test adding large numbers."""
        assert add_numbers(500000, 500000) == 1000002

    def test_add_float_numbers(self):
        """Test adding floating-point numbers."""
        assert add_numbers(2.5, 3.5) == 8.0

    def test_add_numbers_invalid_input(self):
        """Test adding with invalid input types."""
        with pytest.raises(TypeError):
            add_numbers("a", 3)
        with pytest.raises(TypeError):
            add_numbers(2, "b")

    def test_add_numbers_with_max_result(self):
        """Test adding numbers resulting in MAX_RESULT."""
        assert add_numbers(MAX_RESULT / 2, MAX_RESULT / 2) == MAX_RESULT + 2

class TestCalculatePercentage:
    """
    Test suite for the calculate_percentage function.
    """

    def test_calculate_valid_percentage(self):
        """Test calculating a valid percentage."""
        assert calculate_percentage(100, 25) == 25.0

    def test_calculate_zero_value(self):
        """Test calculating percentage of zero value."""
        assert calculate_percentage(0, 50) == 0.0

    def test_calculate_zero_percentage(self):
        """Test calculating zero percentage of a value."""
        assert calculate_percentage(100, 0) == 0.0

    def test_calculate_large_value_small_percentage(self):
        """Test calculating percentage of a large value with a small percentage."""
        assert calculate_percentage(100000, 1) == 1000.0

    def test_calculate_small_value_large_percentage(self):
        """Test calculating percentage of a small value with a large percentage."""
        assert calculate_percentage(10, 100) == 10.0

    def test_calculate_decimal_value_percentage(self):
        """Test calculating percentage with decimal values."""
        assert calculate_percentage(50.5, 10.5) == 5.3025

    def test_calculate_negative_percentage(self):
        """Test calculating a negative percentage."""
        assert calculate_percentage(100, -25) == -25.0

    def test_calculate_negative_value(self):
        """Test calculating percentage of a negative value."""
        assert calculate_percentage(-100, 25) == -25.0

    def test_calculate_invalid_input(self):
        """Test calculating percentage with invalid input types."""
        with pytest.raises(TypeError):
            calculate_percentage("a", 25)
        with pytest.raises(TypeError):
            calculate_percentage(100, "b")

    def test_calculate_exceeds_max_result(self):
        """Test calculating percentage that exceeds MAX_RESULT."""
        with pytest.raises(ValueError):
            calculate_percentage(MAX_RESULT, 101)