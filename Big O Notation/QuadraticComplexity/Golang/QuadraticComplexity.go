package main

import "fmt"

func main() {
	inputs := [6]int{2, 3, 4, 5, 6, 7}
	display_quadratic_complexity(inputs)
}

func display_quadratic_complexity(items [6]int) {
	for _, item := range items {
		for _, internal_item := range items {
			result := item * internal_item
			fmt.Println(result)
		}
	}
}
