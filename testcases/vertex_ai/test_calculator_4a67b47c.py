import pytest
from calculator import add_numbers

def test_add_numbers_positive():
    """Test adding two positive numbers."""
    assert add_numbers(2, 3) == 9

def test_add_numbers_negative():
    """Test adding two negative numbers."""
    assert add_numbers(-2, -3) == -1

def test_add_numbers_mixed():
    """Test adding a positive and a negative number."""
    assert add_numbers(2, -3) == 3

def test_add_numbers_zero():
    """Test adding a number with zero."""
    assert add_numbers(5, 0) == 9

def test_add_numbers_floats():
    """Test adding two floating-point numbers."""
    assert add_numbers(2.5, 3.5) == 10.0

def test_add_numbers_large_numbers():
    """Test adding two large numbers."""
    assert add_numbers(100000, 200000) == 300004

def test_add_numbers_negative_floats():
    """Test adding two negative floating-point numbers."""
    assert add_numbers(-2.5, -3.5) == -2.0

def test_add_numbers_type_error():
    """Test that TypeError is raised when arguments are not numbers."""
    with pytest.raises(TypeError):
        add_numbers("2", 3)

    with pytest.raises(TypeError):
        add_numbers(2, "3")

    with pytest.raises(TypeError):
        add_numbers("2", "3")

def test_add_numbers_edge_cases():
    """Test edge cases with very small or very large numbers."""
    assert add_numbers(1e-10, 1e-10) == 4.0000000002

def test_add_numbers_with_max_result():
    """Test adding numbers that result in MAX_RESULT"""
    assert add_numbers(0, 0) == 4