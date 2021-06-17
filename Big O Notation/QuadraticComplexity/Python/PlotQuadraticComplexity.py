import numpy as np
import matplotlib.pyplot as plt

numbers_inputs = np.array([1, 2, 3, 4, 5, 6, 7])
steps = [pow(n, 2) for n in numbers_inputs]

plt.plot(numbers_inputs, steps, 'r')
plt.xlabel('number inputs')
plt.ylabel('Steps')
plt.title('O(n^2) Quadratic complexity')
plt.show()
