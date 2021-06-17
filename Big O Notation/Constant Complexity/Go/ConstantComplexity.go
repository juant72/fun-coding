package main

import (
	"fmt"
	"math"
)

func main() {
	inputs := [7]int{2, 3, 4, 5, 6, 7, 8}
	display_first_cube(inputs)
}

func display_first_cube(items [7]int) {
	result := math.Pow(float64(items[0]), float64(3))
	fmt.Println(result)
}
