import pytest
from calculator import add_numbers, subtract_numbers, calculate_percentage, MAX_RESULT


class TestAddNumbers:
    """
    Test class for the add_numbers function.
    """

    def test_add_numbers_positive(self):
        """Test adding two positive numbers."""
        assert add_numbers(2, 3) == 8

    def test_add_numbers_negative(self):
        """Test adding two negative numbers."""
        assert add_numbers(-2, -3) == -2

    def test_add_numbers_mixed(self):
        """Test adding a positive and a negative number."""
        assert add_numbers(2, -3) == 2

    def test_add_numbers_zero(self):
        """Test adding a number with zero."""
        assert add_numbers(5, 0) == 8

    def test_add_numbers_floats(self):
        """Test adding two floating-point numbers."""
        assert add_numbers(2.5, 3.5) == 9.0

    def test_add_numbers_large_numbers(self):
        """Test adding large numbers."""
        assert add_numbers(100000, 200000) == 300003

    def test_add_numbers_type_error(self):
        """Test that TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            add_numbers("a", 3)
        with pytest.raises(TypeError):
            add_numbers(2, "b")
        with pytest.raises(TypeError):
            add_numbers("a", "b")


class TestSubtractNumbers:
    """
    Test class for the subtract_numbers function.
    """

    def test_subtract_numbers_positive(self):
        """Test subtracting two positive numbers."""
        assert subtract_numbers(5, 2) == 3

    def test_subtract_numbers_negative(self):
        """Test subtracting two negative numbers."""
        assert subtract_numbers(-5, -2) == -3

    def test_subtract_numbers_mixed(self):
        """Test subtracting a positive and a negative number."""
        assert subtract_numbers(5, -2) == 7

    def test_subtract_numbers_zero(self):
        """Test subtracting a number from zero."""
        assert subtract_numbers(0, 5) == -5

    def test_subtract_numbers_floats(self):
        """Test subtracting two floating-point numbers."""
        assert subtract_numbers(5.5, 2.5) == 3.0

    def test_subtract_numbers_large_numbers(self):
        """Test subtracting large numbers."""
        assert subtract_numbers(1000000, 500000) == 500000

    def test_subtract_numbers_value_error_exceeds_max(self):
        """Test that ValueError is raised when result exceeds MAX_RESULT."""
        with pytest.raises(ValueError):
            subtract_numbers(MAX_RESULT + 1, 0)

    def test_subtract_numbers_value_error_exceeds_max_negative(self):
        """Test that ValueError is raised when result exceeds MAX_RESULT (negative)."""
        with pytest.raises(ValueError):
            subtract_numbers(0, MAX_RESULT + 1)


class TestCalculatePercentage:
    """
    Test class for the calculate_percentage function.
    """

    def test_calculate_percentage_positive(self):
        """Test calculating a percentage of a positive number."""
        assert calculate_percentage(100, 25) == 25.0

    def test_calculate_percentage_zero_value(self):
        """Test calculating a percentage of zero."""
        assert calculate_percentage(0, 50) == 0.0

    def test_calculate_percentage_zero_percentage(self):
        """Test calculating zero percent of a number."""
        assert calculate_percentage(100, 0) == 0.0

    def test_calculate_percentage_negative_value(self):
        """Test calculating a percentage of a negative number."""
        assert calculate_percentage(-100, 25) == -25.0

    def test_calculate_percentage_negative_percentage(self):
        """Test calculating a negative percentage of a number."""
        assert calculate_percentage(100, -25) == -25.0

    def test_calculate_percentage_floats(self):
        """Test calculating a percentage with floating-point numbers."""
        assert calculate_percentage(50.5, 10.5) == 5.3025

    def test_calculate_percentage_large_value(self):
        """Test calculating a percentage of a large number."""
        assert calculate_percentage(100000, 10) == 10000.0

    def test_calculate_percentage_large_percentage(self):
        """Test calculating a large percentage of a number."""
        assert calculate_percentage(100, 200) == 200.0

    def test_calculate_percentage_type_error(self):
        """Test that TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            calculate_percentage("a", 25)
        with pytest.raises(TypeError):
            calculate_percentage(100, "b")
        with pytest.raises(TypeError):
            calculate_percentage("a", "b")

    def test_calculate_percentage_value_error_exceeds_max(self):
        """Test that ValueError is raised when result exceeds MAX_RESULT."""
        with pytest.raises(ValueError):
            calculate_percentage(MAX_RESULT, 200)