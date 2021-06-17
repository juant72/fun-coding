import numpy as np
from numpy.lib import math


def display_all_products(items):
    for item in items:
        for inner_item in items:
            print(item*inner_item)


inputs = np.array([2, 3, 4, 5, 6, 7])
display_all_products(inputs)
