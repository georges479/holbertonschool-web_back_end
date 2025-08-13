#!/usr/bin/env python3
import csv
import math
from typing import List
"""Function that return a tuple of size two
containing a start index and an end index
"""


def index_range(page: int, page_size: int):

    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size

    return (start_idx, end_idx)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0
        start, end = index_range(page, page_size)

        data = self.dataset()

        if start >= len(data):
            return []
        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page of dataset with hypermedia pagination
        """
        current_page = self.get_page(page, page_size)
        data = self.dataset()
        total_pages = math.ceil(len(data) / page_size)
        if page == 1:
            prev_page = None
        else:
            prev_page = page - 1

        if page == total_pages:
            next_page = None
        else:
            next_page = page + 1

        my_dict = {
                'page_size': len(current_page),
                'data': current_page,
                'next_page': next_page,
                'prev_page': prev_page,
                'total_pages': total_pages,
                }

        return my_dict
