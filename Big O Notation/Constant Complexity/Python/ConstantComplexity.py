import numpy as np


def display_first_cube(items):
    results = pow(items[0], 3)
    print(results)


imputs = np.array([2, 3, 4, 5, 6, 7, 8])
display_first_cube(imputs)
