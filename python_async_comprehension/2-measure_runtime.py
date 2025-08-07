#!/usr/bin/env python3
"""
Module that measures the total execution time of
running async_comprehension concurrently.
"""

import asyncio
import time
from typing import List
import async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and
    measures the total runtime.

    Returns:
        float: The total runtime in seconds.
    """
    start = time.perf_counter()

    # Run 4 async comprehensions concurrently
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end = time.perf_counter()
    return end - start
