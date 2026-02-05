import pytest
from calculator import calculate_percentage, MAX_RESULT


def test_calculate_percentage_valid_input():
    """Test calculate_percentage with valid inputs."""
    assert calculate_percentage(100, 50) == 50.0
    assert calculate_percentage(200, 25) == 50.0
    assert calculate_percentage(50, 100) == 50.0
    assert calculate_percentage(75, 20) == 15.0
    assert calculate_percentage(10, 10) == 1.0


def test_calculate_percentage_zero_value():
    """Test calculate_percentage with zero value."""
    assert calculate_percentage(0, 50) == 0.0
    assert calculate_percentage(0, 100) == 0.0


def test_calculate_percentage_zero_percentage():
    """Test calculate_percentage with zero percentage."""
    assert calculate_percentage(100, 0) == 0.0
    assert calculate_percentage(50, 0) == 0.0


def test_calculate_percentage_large_value():
    """Test calculate_percentage with large value."""
    assert calculate_percentage(1000, 10) == 100.0
    assert calculate_percentage(5000, 5) == 250.0


def test_calculate_percentage_large_percentage():
    """Test calculate_percentage with large percentage."""
    assert calculate_percentage(100, 200) == 200.0
    assert calculate_percentage(50, 150) == 75.0


def test_calculate_percentage_negative_value():
    """Test calculate_percentage with negative value."""
    assert calculate_percentage(-100, 50) == -50.0
    assert calculate_percentage(-50, 25) == -12.5


def test_calculate_percentage_negative_percentage():
    """Test calculate_percentage with negative percentage."""
    assert calculate_percentage(100, -50) == -50.0
    assert calculate_percentage(50, -25) == -12.5


def test_calculate_percentage_type_error():
    """Test calculate_percentage with invalid type inputs."""
    with pytest.raises(TypeError):
        calculate_percentage("100", 50)
    with pytest.raises(TypeError):
        calculate_percentage(100, "50")
    with pytest.raises(TypeError):
        calculate_percentage("100", "50")


def test_calculate_percentage_exceeds_max_result():
    """Test calculate_percentage when the result exceeds the maximum allowed value."""
    with pytest.raises(ValueError):
        calculate_percentage(MAX_RESULT, 200)


def test_calculate_percentage_float_values():
    """Test calculate_percentage with float values."""
    assert calculate_percentage(150.5, 25.5) == 38.3775
    assert calculate_percentage(75.25, 10.75) == 8.089375