package main

import (
	"fmt"
)

func main() {
	var a = []string{"a", "b", "c"}
	fmt.Println(a)
	a = append(a[1:])
	fmt.Println(a)
	a = append(a, "d")
	fmt.Println(a)

	//How to remove a value from slices upon given index
	var fruits = []string{"apple", "banana", "mango", "watermelon", "coconut"}
	fmt.Println("Fruits are ", fruits)
	var index int = 2
	//For removing 2nd index fruit that is mango
	fruits = append(fruits[:index], fruits[index+1:]...)
	fmt.Println(fruits)
}
