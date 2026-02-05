import pytest
from calculator import calculate_percentage, MAX_RESULT


def test_calculate_percentage_valid_input():
    """Test calculate_percentage with valid positive float inputs."""
    assert calculate_percentage(100.0, 25.0) == 25.0


def test_calculate_percentage_zero_value():
    """Test calculate_percentage with zero value."""
    assert calculate_percentage(0.0, 50.0) == 0.0


def test_calculate_percentage_zero_percentage():
    """Test calculate_percentage with zero percentage."""
    assert calculate_percentage(100.0, 0.0) == 0.0


def test_calculate_percentage_negative_value():
    """Test calculate_percentage with negative value."""
    assert calculate_percentage(-100.0, 25.0) == -25.0


def test_calculate_percentage_negative_percentage():
    """Test calculate_percentage with negative percentage."""
    assert calculate_percentage(100.0, -25.0) == -25.0


def test_calculate_percentage_large_value():
    """Test calculate_percentage with a large value that doesn't exceed MAX_RESULT."""
    assert calculate_percentage(1000.0, 50.0) == 500.0


def test_calculate_percentage_large_percentage():
    """Test calculate_percentage with a large percentage."""
    assert calculate_percentage(100.0, 100.0) == 100.0


def test_calculate_percentage_exceeds_max_result():
    """Test calculate_percentage when the result exceeds MAX_RESULT."""
    with pytest.raises(ValueError) as excinfo:
        calculate_percentage(MAX_RESULT, 200)
    assert "exceeds maximum allowed value" in str(excinfo.value)


def test_calculate_percentage_type_error_value():
    """Test calculate_percentage with invalid value type."""
    with pytest.raises(TypeError) as excinfo:
        calculate_percentage("100", 25.0)
    assert "Both arguments must be numbers" in str(excinfo.value)


def test_calculate_percentage_type_error_percentage():
    """Test calculate_percentage with invalid percentage type."""
    with pytest.raises(TypeError) as excinfo:
        calculate_percentage(100.0, "25")
    assert "Both arguments must be numbers" in str(excinfo.value)


def test_calculate_percentage_integer_inputs():
    """Test calculate_percentage with valid integer inputs."""
    assert calculate_percentage(100, 25) == 25.0