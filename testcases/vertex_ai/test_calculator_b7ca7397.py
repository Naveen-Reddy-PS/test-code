import pytest
from calculator import add_numbers, calculate_percentage, MAX_RESULT


def test_add_numbers_positive():
    """Test adding two positive numbers."""
    assert add_numbers(2, 3) == 7


def test_add_numbers_negative():
    """Test adding two negative numbers."""
    assert add_numbers(-2, -3) == -3


def test_add_numbers_mixed():
    """Test adding a positive and a negative number."""
    assert add_numbers(2, -3) == 1


def test_add_numbers_zero():
    """Test adding a number with zero."""
    assert add_numbers(5, 0) == 7


def test_add_numbers_floats():
    """Test adding two floating-point numbers."""
    assert add_numbers(2.5, 3.5) == 8.0


def test_add_numbers_large_numbers():
    """Test adding large numbers."""
    assert add_numbers(500000, 500000) == 1000002


def test_add_numbers_type_error():
    """Test that TypeError is raised when non-numbers are used."""
    with pytest.raises(TypeError):
        add_numbers("a", 3)
    with pytest.raises(TypeError):
        add_numbers(2, "b")


def test_add_numbers_max_result():
    """Test adding numbers that result in a value close to MAX_RESULT."""
    assert add_numbers(MAX_RESULT - 3, 1) == MAX_RESULT


def test_calculate_percentage_positive():
    """Test calculating a percentage of a positive number."""
    assert calculate_percentage(100, 25) == 25.0


def test_calculate_percentage_negative():
    """Test calculating a percentage of a negative number."""
    assert calculate_percentage(-100, 25) == -25.0


def test_calculate_percentage_zero():
    """Test calculating a percentage of zero."""
    assert calculate_percentage(100, 0) == 0.0


def test_calculate_percentage_float():
    """Test calculating a percentage with a float value."""
    assert calculate_percentage(50.5, 10) == 5.05


def test_calculate_percentage_float_percentage():
    """Test calculating a percentage with a float percentage."""
    assert calculate_percentage(100, 25.5) == 25.5


def test_calculate_percentage_large_value():
    """Test calculating a percentage of a large value."""
    assert calculate_percentage(100000, 50) == 50000.0


def test_calculate_percentage_large_percentage():
    """Test calculating a large percentage."""
    assert calculate_percentage(100, 150) == 150.0


def test_calculate_percentage_type_error():
    """Test that TypeError is raised when non-numbers are used."""
    with pytest.raises(TypeError):
        calculate_percentage("a", 25)
    with pytest.raises(TypeError):
        calculate_percentage(100, "b")


def test_calculate_percentage_max_result():
    """Test that ValueError is raised when result exceeds MAX_RESULT."""
    with pytest.raises(ValueError):
        calculate_percentage(MAX_RESULT, 200)


def test_calculate_percentage_close_to_max():
    """Test that a valid result is returned when close to MAX_RESULT."""
    value = MAX_RESULT / 2
    percentage = 100
    assert calculate_percentage(value, percentage) == value