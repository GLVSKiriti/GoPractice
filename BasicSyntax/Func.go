package main

import "fmt"

func main() {

	//You know about normal functins now below is about
	//How to declare a function if number of inputs are unknown
	result, message := proAdder(1, 2, 3, 4)
	fmt.Println("Sum of the number is ", result)
	fmt.Println("Mesage is ", message)
}

func proAdder(values ...int) (int, string) {
	tot := 0

	for _, val := range values {
		tot += val
	}

	return tot, "From proAdder Function"
}
