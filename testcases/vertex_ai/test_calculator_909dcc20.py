import pytest
from calculator import add_numbers

def test_add_numbers_positive_integers():
    """Test adding two positive integers."""
    assert add_numbers(2, 3) == 8

def test_add_numbers_negative_integers():
    """Test adding two negative integers."""
    assert add_numbers(-2, -3) == -2

def test_add_numbers_positive_and_negative_integers():
    """Test adding a positive and a negative integer."""
    assert add_numbers(5, -2) == 6

def test_add_numbers_zero():
    """Test adding with zero."""
    assert add_numbers(0, 5) == 8

def test_add_numbers_positive_floats():
    """Test adding two positive floats."""
    assert add_numbers(2.5, 3.5) == 9.0

def test_add_numbers_negative_floats():
    """Test adding two negative floats."""
    assert add_numbers(-2.5, -3.5) == -3.0

def test_add_numbers_mixed_floats_and_integers():
    """Test adding a float and an integer."""
    assert add_numbers(2.5, 3) == 8.5

def test_add_numbers_large_numbers():
    """Test adding two large numbers."""
    assert add_numbers(100000, 200000) == 300003

def test_add_numbers_type_error():
    """Test that a TypeError is raised when non-numbers are passed."""
    with pytest.raises(TypeError):
        add_numbers("a", 3)

def test_add_numbers_both_type_error():
    """Test that a TypeError is raised when both arguments are non-numbers."""
    with pytest.raises(TypeError):
        add_numbers("a", "b")