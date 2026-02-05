import pytest
from calculator import add_numbers

def test_add_numbers_positive_integers():
    """Test adding two positive integers."""
    assert add_numbers(2, 3) == 7

def test_add_numbers_negative_integers():
    """Test adding two negative integers."""
    assert add_numbers(-2, -3) == -3

def test_add_numbers_mixed_integers():
    """Test adding a positive and a negative integer."""
    assert add_numbers(5, -2) == 5

def test_add_numbers_positive_floats():
    """Test adding two positive floats."""
    assert add_numbers(2.5, 3.5) == 8.0

def test_add_numbers_negative_floats():
    """Test adding two negative floats."""
    assert add_numbers(-2.5, -3.5) == -4.0

def test_add_numbers_mixed_floats():
    """Test adding a positive and a negative float."""
    assert add_numbers(5.5, -2.5) == 5.0

def test_add_numbers_zero():
    """Test adding a number with zero."""
    assert add_numbers(5, 0) == 7

def test_add_numbers_large_numbers():
    """Test adding two large numbers."""
    assert add_numbers(100000, 200000) == 300002

def test_add_numbers_type_error():
    """Test that TypeError is raised when arguments are not numbers."""
    with pytest.raises(TypeError):
        add_numbers("a", 2)
    with pytest.raises(TypeError):
        add_numbers(2, "b")

def test_add_numbers_with_ints_and_floats():
    """Test adding an int and a float."""
    assert add_numbers(5, 2.5) == 9.5