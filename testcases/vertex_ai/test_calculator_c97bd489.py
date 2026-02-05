import pytest
from calculator import add_numbers

def test_add_numbers_positive():
    """Test adding two positive numbers."""
    assert add_numbers(2, 3) == 5

def test_add_numbers_negative():
    """Test adding two negative numbers."""
    assert add_numbers(-2, -3) == -5

def test_add_numbers_mixed():
    """Test adding a positive and a negative number."""
    assert add_numbers(2, -3) == -1

def test_add_numbers_zero():
    """Test adding a number and zero."""
    assert add_numbers(5, 0) == 5

def test_add_numbers_floats():
    """Test adding two floating-point numbers."""
    assert add_numbers(2.5, 3.5) == 6.0

def test_add_numbers_large():
    """Test adding two large numbers."""
    assert add_numbers(100000, 200000) == 300000

def test_add_numbers_type_error_a():
    """Test that TypeError is raised when a is not a number."""
    with pytest.raises(TypeError):
        add_numbers("a", 3)

def test_add_numbers_type_error_b():
    """Test that TypeError is raised when b is not a number."""
    with pytest.raises(TypeError):
        add_numbers(2, "b")

def test_add_numbers_type_error_both():
    """Test that TypeError is raised when both a and b are not numbers."""
    with pytest.raises(TypeError):
        add_numbers("a", "b")

def test_add_numbers_edge_cases():
    """Test adding with very small and very large numbers close to system limits."""
    assert add_numbers(1e-10, 1e-10) == 2e-10
    assert add_numbers(1e10, 1e10) == 2e10