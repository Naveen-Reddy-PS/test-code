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
        assert add_numbers(2, -3) == 2

    def test_add_zero(self):
        """Test adding zero to a number."""
        assert add_numbers(5, 0) == 8

    def test_add_large_numbers(self):
        """Test adding large numbers."""
        assert add_numbers(100000, 200000) == 300003

    def test_add_decimal_numbers(self):
        """Test adding decimal numbers."""
        assert add_numbers(2.5, 3.5) == 9.0

    def test_add_numbers_type_error(self):
        """Test that TypeError is raised when arguments are not numbers."""
        with pytest.raises(TypeError):
            add_numbers("a", 3)
        with pytest.raises(TypeError):
            add_numbers(2, "b")

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

    def test_subtract_decimal_numbers(self):
        """Test subtracting decimal numbers."""
        assert subtract_numbers(5.5, 2.5) == 3.0

    def test_subtract_numbers_exceeds_max_value(self):
        """Test that ValueError is raised when result exceeds maximum allowed value."""
        with pytest.raises(ValueError):
            subtract_numbers(MAX_RESULT + 1, 0)

class TestCalculatePercentage:
    """Tests for the calculate_percentage function."""

    def test_calculate_percentage_positive_value(self):
        """Test calculating percentage of a positive value."""
        assert calculate_percentage(100, 25) == 25.0

    def test_calculate_percentage_negative_value(self):
        """Test calculating percentage of a negative value."""
        assert calculate_percentage(-100, 25) == -25.0

    def test_calculate_percentage_zero_value(self):
        """Test calculating percentage of zero."""
        assert calculate_percentage(0, 25) == 0.0

    def test_calculate_percentage_positive_percentage(self):
        """Test calculating percentage with a positive percentage."""
        assert calculate_percentage(100, 50) == 50.0

    def test_calculate_percentage_negative_percentage(self):
        """Test calculating percentage with a negative percentage."""
        assert calculate_percentage(100, -25) == -25.0

    def test_calculate_percentage_zero_percentage(self):
        """Test calculating percentage with zero percentage."""
        assert calculate_percentage(100, 0) == 0.0

    def test_calculate_percentage_decimal_value(self):
        """Test calculating percentage of a decimal value."""
        assert calculate_percentage(50.5, 10) == 5.05

    def test_calculate_percentage_decimal_percentage(self):
        """Test calculating percentage with a decimal percentage."""
        assert calculate_percentage(100, 25.5) == 25.5

    def test_calculate_percentage_type_error(self):
        """Test that TypeError is raised when arguments are not numbers."""
        with pytest.raises(TypeError):
            calculate_percentage("a", 25)
        with pytest.raises(TypeError):
            calculate_percentage(100, "b")

    def test_calculate_percentage_exceeds_max_value(self):
        """Test that ValueError is raised when result exceeds maximum allowed value."""
        with pytest.raises(ValueError):
            calculate_percentage(MAX_RESULT, 200)