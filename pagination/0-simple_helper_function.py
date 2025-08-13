#!/usr/bin/env python3
"""Function that return a tuple of size two
containing a start index and an end index
"""


def index_range(page: int, page_size: int):
    """Calculate the start and end index for pagination"""
    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size

    return (start_idx, end_idx)
