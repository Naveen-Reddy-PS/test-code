import pytest
from calculator import add_numbers

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

def test_add_numbers_float():
    """Test adding two float numbers."""
    assert add_numbers(2.5, 3.5) == 8.0

def test_add_numbers_large():
    """Test adding two large numbers."""
    assert add_numbers(100000, 200000) == 300002

def test_add_numbers_type_error_first():
    """Test TypeError when the first argument is not a number."""
    with pytest.raises(TypeError):
        add_numbers("a", 2)

def test_add_numbers_type_error_second():
    """Test TypeError when the second argument is not a number."""
    with pytest.raises(TypeError):
        add_numbers(2, "b")

def test_add_numbers_type_error_both():
    """Test TypeError when both arguments are not numbers."""
    with pytest.raises(TypeError):
        add_numbers("a", "b")

def test_add_numbers_edge_case_max_float():
    """Test adding maximum float values."""
    import sys
    max_float = sys.float_info.max
    result = add_numbers(max_float, max_float)
    assert result == float('inf')