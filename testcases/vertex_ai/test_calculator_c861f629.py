import pytest
from calculator import add_numbers, calculate_percentage

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
    """Test adding a number with zero."""
    assert add_numbers(5, 0) == 6

def test_add_numbers_float():
    """Test adding two float numbers."""
    assert add_numbers(2.5, 3.5) == 7.0

def test_add_numbers_type_error():
    """Test that TypeError is raised when arguments are not numbers."""
    with pytest.raises(TypeError):
        add_numbers("a", 3)
    with pytest.raises(TypeError):
        add_numbers(2, "b")

def test_calculate_percentage_positive():
    """Test calculating percentage of a positive value."""
    assert calculate_percentage(100, 25) == 25.0

def test_calculate_percentage_negative_value():
    """Test calculating percentage of a negative value."""
    assert calculate_percentage(-100, 25) == -25.0

def test_calculate_percentage_negative_percentage():
    """Test calculating percentage with a negative percentage."""
    assert calculate_percentage(100, -25) == -25.0

def test_calculate_percentage_zero_value():
    """Test calculating percentage of zero."""
    assert calculate_percentage(0, 25) == 0.0

def test_calculate_percentage_zero_percentage():
    """Test calculating zero percentage of a value."""
    assert calculate_percentage(100, 0) == 0.0

def test_calculate_percentage_float():
    """Test calculating percentage with float values."""
    assert calculate_percentage(50.5, 10.5) == 5.3025

def test_calculate_percentage_type_error():
    """Test that TypeError is raised when arguments are not numbers."""
    with pytest.raises(TypeError):
        calculate_percentage("a", 25)
    with pytest.raises(TypeError):
        calculate_percentage(100, "b")

def test_calculate_percentage_exceeds_max_result():
    """Test that ValueError is raised when result exceeds maximum allowed value."""
    with pytest.raises(ValueError):
        calculate_percentage(10000000, 100)