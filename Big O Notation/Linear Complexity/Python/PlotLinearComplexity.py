import numpy as np
import matplotlib.pyplot as plt

num_of_inputs = np.array([1, 2, 3, 4, 5, 6, 7])
steps = [2*n for n in num_of_inputs]

plt.plot(num_of_inputs, steps, 'r')
plt.xlabel('Number of inputs')
plt.ylabel('Steps')
plt.title('O(n) Linear Complexity')
plt.show()
