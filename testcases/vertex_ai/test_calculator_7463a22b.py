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
    assert add_numbers(5, -2) == 5


def test_add_numbers_zero():
    """Test adding a number with zero."""
    assert add_numbers(5, 0) == 7


def test_add_numbers_floats():
    """Test adding two floating-point numbers."""
    assert add_numbers(2.5, 3.5) == 8.0


def test_add_numbers_large_numbers():
    """Test adding two large numbers."""
    assert add_numbers(500000, 500000) == 1000002


def test_add_numbers_type_error():
    """Test adding numbers with invalid types, expecting TypeError."""
    with pytest.raises(TypeError):
        add_numbers("2", 3)
    with pytest.raises(TypeError):
        add_numbers(2, "3")


def test_calculate_percentage_positive():
    """Test calculating a percentage of a positive value."""
    assert calculate_percentage(100, 25) == 25.0


def test_calculate_percentage_negative_value():
    """Test calculating a percentage of a negative value."""
    assert calculate_percentage(-100, 25) == -25.0


def test_calculate_percentage_negative_percentage():
    """Test calculating a negative percentage of a value."""
    assert calculate_percentage(100, -25) == -25.0


def test_calculate_percentage_zero_value():
    """Test calculating a percentage of zero."""
    assert calculate_percentage(0, 25) == 0.0


def test_calculate_percentage_zero_percentage():
    """Test calculating zero percentage of a value."""
    assert calculate_percentage(100, 0) == 0.0


def test_calculate_percentage_large_value():
    """Test calculating a percentage of a large value."""
    assert calculate_percentage(500000, 50) == 250000.0


def test_calculate_percentage_large_percentage():
    """Test calculating a large percentage of a value."""
    assert calculate_percentage(100, 500) == 500.0


def test_calculate_percentage_exceeds_max_result():
    """Test calculating percentage that exceeds the maximum allowed result."""
    with pytest.raises(ValueError):
        calculate_percentage(MAX_RESULT, 2)


def test_calculate_percentage_type_error():
    """Test calculating percentage with invalid types, expecting TypeError."""
    with pytest.raises(TypeError):
        calculate_percentage("100", 25)
    with pytest.raises(TypeError):
        calculate_percentage(100, "25")


def test_calculate_percentage_float_values():
    """Test calculating percentage with float values."""
    assert calculate_percentage(50.5, 10.5) == 5.3025