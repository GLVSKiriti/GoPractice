package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Rate the pizza")

	//initializing a pointer from os i think to take inputs
	reader := bufio.NewReader(os.Stdin)

	//now telling to read input untill \n is encountered
	inp, _ := reader.ReadString('\n')

	//comma ok syntax , Here strconv package is used to convert the input type(string) to any other type
	//and strings package is used to trim \n space of the input taken
	rating, err := strconv.ParseFloat(strings.TrimSpace(inp), 64)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Given Rating is ", rating)
	}

}
