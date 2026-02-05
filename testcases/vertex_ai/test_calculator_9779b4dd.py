import pytest
from calculator import calculate_percentage, MAX_RESULT


def test_calculate_percentage_valid_input():
    """Test calculate_percentage with valid inputs."""
    assert calculate_percentage(100, 50) == 50.0
    assert calculate_percentage(200, 25) == 50.0
    assert calculate_percentage(50, 100) == 50.0
    assert calculate_percentage(75, 20) == 15.0
    assert calculate_percentage(120, 75) == 90.0


def test_calculate_percentage_zero_value():
    """Test calculate_percentage with a zero value."""
    assert calculate_percentage(0, 50) == 0.0
    assert calculate_percentage(0, 0) == 0.0


def test_calculate_percentage_zero_percentage():
    """Test calculate_percentage with a zero percentage."""
    assert calculate_percentage(100, 0) == 0.0


def test_calculate_percentage_negative_value():
    """Test calculate_percentage with a negative value."""
    assert calculate_percentage(-100, 50) == -50.0
    assert calculate_percentage(-50, 20) == -10.0


def test_calculate_percentage_negative_percentage():
    """Test calculate_percentage with a negative percentage."""
    assert calculate_percentage(100, -50) == -50.0
    assert calculate_percentage(50, -20) == -10.0


def test_calculate_percentage_large_value():
    """Test calculate_percentage with a large value."""
    assert calculate_percentage(1000, 100) == 1000.0
    assert calculate_percentage(5000, 20) == 1000.0


def test_calculate_percentage_large_percentage():
    """Test calculate_percentage with a large percentage."""
    assert calculate_percentage(100, 200) == 200.0
    assert calculate_percentage(50, 150) == 75.0


def test_calculate_percentage_type_error():
    """Test calculate_percentage with invalid input types."""
    with pytest.raises(TypeError):
        calculate_percentage("100", 50)
    with pytest.raises(TypeError):
        calculate_percentage(100, "50")
    with pytest.raises(TypeError):
        calculate_percentage("100", "50")


def test_calculate_percentage_exceeds_max_result():
    """Test calculate_percentage when the result exceeds MAX_RESULT."""
    with pytest.raises(ValueError) as excinfo:
        calculate_percentage(MAX_RESULT, 200)
    assert "exceeds maximum allowed value" in str(excinfo.value)

def test_calculate_percentage_fractional_inputs():
    """Test calculate_percentage with fractional inputs."""
    assert calculate_percentage(10.5, 50.5) == 5.3025
    assert calculate_percentage(25.25, 10.75) == 2.714375