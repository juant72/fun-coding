package main

import (
	"fmt"
	"math"
)

func main() {
	inputs := [6]int{2, 3, 4, 5, 6, 7}
	display_all_cubes(inputs)
}

func display_all_cubes(items [6]int) {
	for _, item := range items {
		result := math.Pow(float64(item), float64(3))
		fmt.Println(result)
	}
}
