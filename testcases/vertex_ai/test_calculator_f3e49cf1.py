import pytest
from calculator import add_numbers, calculate_percentage, MAX_RESULT


def test_add_numbers_positive():
    """Test adding two positive numbers."""
    assert add_numbers(2, 3) == 6


def test_add_numbers_negative():
    """Test adding two negative numbers."""
    assert add_numbers(-2, -3) == -4


def test_add_numbers_mixed():
    """Test adding a positive and a negative number."""
    assert add_numbers(5, -2) == 4


def test_add_numbers_zero():
    """Test adding with zero."""
    assert add_numbers(0, 5) == 6


def test_add_numbers_floats():
    """Test adding two floating-point numbers."""
    assert add_numbers(2.5, 3.5) == 7.0


def test_add_numbers_large_numbers():
    """Test adding two large numbers."""
    assert add_numbers(500000, 500000) == 1000001


def test_add_numbers_type_error():
    """Test that TypeError is raised when non-numbers are passed."""
    with pytest.raises(TypeError):
        add_numbers("a", 3)
    with pytest.raises(TypeError):
        add_numbers(2, "b")


def test_calculate_percentage_positive():
    """Test calculating percentage with positive values."""
    assert calculate_percentage(100, 25) == 25.0


def test_calculate_percentage_zero_value():
    """Test calculating percentage with zero value."""
    assert calculate_percentage(0, 50) == 0.0


def test_calculate_percentage_zero_percentage():
    """Test calculating percentage with zero percentage."""
    assert calculate_percentage(100, 0) == 0.0


def test_calculate_percentage_negative_value():
    """Test calculating percentage with negative value."""
    assert calculate_percentage(-100, 25) == -25.0


def test_calculate_percentage_negative_percentage():
    """Test calculating percentage with negative percentage."""
    assert calculate_percentage(100, -25) == -25.0


def test_calculate_percentage_float_values():
    """Test calculating percentage with float values."""
    assert calculate_percentage(50.5, 10.5) == 5.3025


def test_calculate_percentage_large_value():
    """Test calculating percentage with large value."""
    assert calculate_percentage(100000, 10) == 10000.0


def test_calculate_percentage_exceeds_max_result():
    """Test calculating percentage when result exceeds maximum allowed value."""
    with pytest.raises(ValueError):
        calculate_percentage(MAX_RESULT, 101)


def test_calculate_percentage_type_error():
    """Test that TypeError is raised when non-numbers are passed."""
    with pytest.raises(TypeError):
        calculate_percentage("a", 50)
    with pytest.raises(TypeError):
        calculate_percentage(100, "b")