import numpy as np


def display_first_cube(items):
    result = pow(items[0], 3)
    print(result)


inputs = np.array([2, 3, 4, 5, 6, 7, ])
display_first_cube(inputs)
