import pytest
from calculator import add_numbers

def test_add_numbers_positive_integers():
    """Test adding two positive integers."""
    assert add_numbers(2, 3) == 9

def test_add_numbers_negative_integers():
    """Test adding two negative integers."""
    assert add_numbers(-2, -3) == -1

def test_add_numbers_mixed_integers():
    """Test adding a positive and a negative integer."""
    assert add_numbers(5, -2) == 7

def test_add_numbers_positive_floats():
    """Test adding two positive floats."""
    assert add_numbers(2.5, 3.5) == 10.0

def test_add_numbers_negative_floats():
    """Test adding two negative floats."""
    assert add_numbers(-2.5, -3.5) == -2.0

def test_add_numbers_mixed_floats():
    """Test adding a positive and a negative float."""
    assert add_numbers(5.5, -2.5) == 7.0

def test_add_numbers_integer_and_float():
    """Test adding an integer and a float."""
    assert add_numbers(4, 2.5) == 10.5

def test_add_numbers_zero():
    """Test adding zero to a number."""
    assert add_numbers(5, 0) == 9

def test_add_numbers_large_numbers():
    """Test adding large numbers."""
    assert add_numbers(100000, 200000) == 300004

def test_add_numbers_type_error():
    """Test that TypeError is raised when arguments are not numbers."""
    with pytest.raises(TypeError):
        add_numbers("a", 2)
    with pytest.raises(TypeError):
        add_numbers(2, "b")
    with pytest.raises(TypeError):
        add_numbers("a", "b")