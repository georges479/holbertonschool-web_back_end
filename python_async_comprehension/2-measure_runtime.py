#!/usr/bin/env python3
"""asyncio.gather runtime measurement"""

import asyncio
import timeit
import importlib.util
from typing import Callable


# Dynamically import 'async_comprehension' from '1-async_comprehension.py'
spec = importlib.util.spec_from_file_location(
    "async_module", "./1-async_comprehension.py"
)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
async_comprehension: Callable = module.async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using asyncio.gather.
    Returns the total runtime in seconds.
    """
    start = timeit.default_timer()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = timeit.default_timer()
    return end - start
