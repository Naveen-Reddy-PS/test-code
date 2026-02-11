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
        assert add_numbers(0, 5) == 8

    def test_add_floats(self):
        """Test adding two floating-point numbers."""
        assert add_numbers(2.5, 3.5) == 9.0

    def test_add_large_numbers(self):
        """Test adding large numbers."""
        assert add_numbers(500000, 500000) == 1000003

    def test_add_numbers_type_error(self):
        """Test that TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            add_numbers("a", 2)
        with pytest.raises(TypeError):
            add_numbers(2, "b")
        with pytest.raises(TypeError):
            add_numbers("a", "b")

    def test_add_numbers_with_one_zero(self):
        """Test adding one number with zero."""
        assert add_numbers(5, 0) == 8

    def test_add_numbers_both_zero(self):
        """Test adding zero and zero."""
        assert add_numbers(0, 0) == 3


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

    def test_subtract_floats(self):
        """Test subtracting two floating-point numbers."""
        assert subtract_numbers(5.5, 2.5) == 3.0

    def test_subtract_large_numbers_within_limit(self):
        """Test subtracting large numbers within the allowed limit."""
        assert subtract_numbers(MAX_RESULT, 1) == MAX_RESULT - 1

    def test_subtract_numbers_exceeding_limit(self):
        """Test that ValueError is raised when result exceeds maximum allowed value."""
        with pytest.raises(ValueError):
            subtract_numbers(MAX_RESULT + 1, 0)

    def test_subtract_numbers_exceeding_limit_negative(self):
        """Test that ValueError is raised when result exceeds maximum allowed value (negative result)."""
        with pytest.raises(ValueError):
            subtract_numbers(0, MAX_RESULT + 1)

    def test_subtract_numbers_zero_from_zero(self):
        """Test subtracting zero from zero."""
        assert subtract_numbers(0, 0) == 0


class TestCalculatePercentage:
    """Tests for the calculate_percentage function."""

    def test_calculate_percentage_positive_value(self):
        """Test calculating percentage of a positive value."""
        assert calculate_percentage(100, 25) == 25.0

    def test_calculate_percentage_zero_value(self):
        """Test calculating percentage of zero value."""
        assert calculate_percentage(0, 50) == 0.0

    def test_calculate_percentage_hundred_percent(self):
        """Test calculating 100% of a value."""
        assert calculate_percentage(50, 100) == 50.0

    def test_calculate_percentage_zero_percent(self):
        """Test calculating 0% of a value."""
        assert calculate_percentage(50, 0) == 0.0

    def test_calculate_percentage_negative_value(self):
        """Test calculating percentage of a negative value."""
        assert calculate_percentage(-100, 25) == -25.0

    def test_calculate_percentage_negative_percentage(self):
        """Test calculating with a negative percentage."""
        assert calculate_percentage(100, -25) == -25.0

    def test_calculate_percentage_float_value(self):
        """Test calculating percentage with float value."""
        assert calculate_percentage(50.5, 10) == 5.05

    def test_calculate_percentage_float_percentage(self):
        """Test calculating percentage with float percentage."""
        assert calculate_percentage(100, 25.5) == 25.5

    def test_calculate_percentage_type_error(self):
        """Test that TypeError is raised when non-numbers are passed."""
        with pytest.raises(TypeError):
            calculate_percentage("a", 25)
        with pytest.raises(TypeError):
            calculate_percentage(100, "b")

    def test_calculate_percentage_exceeds_max_result(self):
        """Test that ValueError is raised when result exceeds maximum allowed value."""
        with pytest.raises(ValueError):
            calculate_percentage(MAX_RESULT, 200)