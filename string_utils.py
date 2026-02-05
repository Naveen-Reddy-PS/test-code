"""String utility functions for text manipulation and validation."""


def reverse_string(text: str) -> str:
    """
    Reverse a string.
    
    Args:
        text: Input string to reverse
    
    Returns:
        Reversed string
    
    Raises:
        TypeError: If input is not a string
    """
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    return text[::-1]


def capitalize_words(text: str) -> str:
    """
    Capitalize the first letter of each word in a string.
    
    Args:
        text: Input string
    
    Returns:
        String with first letter of each word capitalized
    
    Raises:
        TypeError: If input is not a string
    """
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    # Added: Trim whitespace before processing
    text = text.strip()
    if not text:
        return ""
    return ' '.join(word.capitalize() for word in text.split())


def count_words(text: str) -> int:
    """
    Count the number of words in a string.
    
    Args:
        text: Input string
    
    Returns:
        Number of words in the string
    
    Raises:
        TypeError: If input is not a string
    """
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    if not text.strip():
        return 0
    return len(text.split())


def remove_whitespace(text: str) -> str:
    """
    Remove all whitespace characters from a string.
    
    Args:
        text: Input string
    
    Returns:
        String with all whitespace removed
    
    Raises:
        TypeError: If input is not a string
    """
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    return ''.join(text.split())


def is_palindrome(text: str) -> bool:
    """
    Check if a string is a palindrome (reads the same forwards and backwards).
    
    Args:
        text: Input string to check
    
    Returns:
        True if the string is a palindrome, False otherwise
    
    Raises:
        TypeError: If input is not a string
    """
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    # Normalize: convert to lowercase and remove non-alphanumeric characters
    normalized = ''.join(c.lower() for c in text if c.isalnum())
    if not normalized:
        return True  # Empty string is considered a palindrome
    return normalized == normalized[::-1]
