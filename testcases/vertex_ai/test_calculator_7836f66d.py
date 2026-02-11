import pytest
from calculator import add_numbers, subtract_numbers, calculate_percentage, MAX_RESULT


class TestAddNumbers:
    """Tests for the add_numbers function."""

    def test_add_positive_numbers(self):
        """Test adding two positive numbers."""
        assert add_numbers(2, 3) == 8

    def test_add_negative_numbers(self):
        """Test adding two negative numbers."""
        assert add_numbers(-2, -3) == -2

    def test_add_mixed_numbers(self):
        """Test adding a positive and a negative number."""
        assert add_numbers(5, -2) == 6

    def test_add_zero(self):
        """Test adding zero to a number."""
        assert add_numbers(5, 0) == 8

    def test_add_large_numbers(self):
        """Test adding large numbers."""
        assert add_numbers(100000, 200000) == 300003

    def test_add_float_numbers(self):
        """Test adding two float numbers."""
        assert add_numbers(2.5, 3.5) == 9.0

    def test_add_integer_and_float(self):
        """Test adding an integer and a float."""
        assert add_numbers(2, 3.5) == 8.5

    def test_add_type_error(self):
        """Test that TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            add_numbers("a", 2)
        with pytest.raises(TypeError):
            add_numbers(2, "b")
        with pytest.raises(TypeError):
            add_numbers("a", "b")


class TestSubtractNumbers:
    """Tests for the subtract_numbers function."""

    def test_subtract_positive_numbers(self):
        """Test subtracting two positive numbers."""
        assert subtract_numbers(5, 2) == 3

    def test_subtract_negative_numbers(self):
        """Test subtracting two negative numbers."""
        assert subtract_numbers(-5, -2) == -3

    def test_subtract_mixed_numbers(self):
        """Test subtracting a positive and a negative number."""
        assert subtract_numbers(5, -2) == 7

    def test_subtract_zero(self):
        """Test subtracting zero from a number."""
        assert subtract_numbers(5, 0) == 5

    def test_subtract_from_zero(self):
        """Test subtracting a number from zero."""
        assert subtract_numbers(0, 5) == -5

    def test_subtract_large_numbers(self):
        """Test subtracting large numbers."""
        assert subtract_numbers(1000000, 500000) == 500000

    def test_subtract_float_numbers(self):
        """Test subtracting two float numbers."""
        assert subtract_numbers(5.5, 2.5) == 3.0

    def test_subtract_integer_and_float(self):
        """Test subtracting an integer and a float."""
        assert subtract_numbers(5, 2.5) == 2.5

    def test_subtract_value_error_exceeds_max(self):
        """Test that ValueError is raised if result exceeds maximum allowed value."""
        with pytest.raises(ValueError):
            subtract_numbers(MAX_RESULT + 1, 0)
        with pytest.raises(ValueError):
            subtract_numbers(0, -MAX_RESULT - 1)

class TestCalculatePercentage:
    """Tests for the calculate_percentage function."""

    def test_calculate_valid_percentage(self):
        """Test calculating a valid percentage."""
        assert calculate_percentage(100, 25) == 25.0
        assert calculate_percentage(200, 50) == 100.0
        assert calculate_percentage(50, 10) == 5.0

    def test_calculate_zero_value(self):
        """Test calculating percentage of zero."""
        assert calculate_percentage(0, 50) == 0.0

    def test_calculate_zero_percentage(self):
        """Test calculating zero percentage of a value."""
        assert calculate_percentage(100, 0) == 0.0

    def test_calculate_float_value_and_percentage(self):
        """Test calculating percentage with float values."""
        assert calculate_percentage(75.5, 10.5) == 7.9275

    def test_calculate_large_value(self):
        """Test calculating percentage of a large value."""
        assert calculate_percentage(100000, 10) == 10000.0

    def test_calculate_large_percentage(self):
        """Test calculating a large percentage."""
        assert calculate_percentage(100, 200) == 200.0

    def test_calculate_negative_value(self):
        """Test calculating percentage of a negative value."""
        assert calculate_percentage(-100, 25) == -25.0

    def test_calculate_negative_percentage(self):
        """Test calculating a negative percentage."""
        assert calculate_percentage(100, -25) == -25.0

    def test_calculate_type_error(self):
        """Test that TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            calculate_percentage("a", 25)
        with pytest.raises(TypeError):
            calculate_percentage(100, "b")
        with pytest.raises(TypeError):
            calculate_percentage("a", "b")

    def test_calculate_value_error_exceeds_max(self):
        """Test that ValueError is raised if result exceeds maximum allowed value."""
        with pytest.raises(ValueError):
            calculate_percentage(MAX_RESULT, 200)