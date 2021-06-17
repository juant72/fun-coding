import numpy as np


def display_all_cube(items):
    for item in items:
        result = pow(item, 3)
        print(result)


inputs = np.array([2, 3, 4, 5, 6, 7])
display_all_cube(inputs)
