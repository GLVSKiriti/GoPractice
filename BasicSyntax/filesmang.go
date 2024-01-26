package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	content := "Hi my name is kiriti"

	file, err := os.Create("./learnfiles.txt")

	if err != nil {
		panic(err)
	}
	//checkNilErr(err)

	length, err := io.WriteString(file, content)
	checkNilErr(err)
	fmt.Println("Length is: ", length)
	defer file.Close()
	readFile("./learnfiles.txt")
}

func readFile(filename string) {
	databyte, err := ioutil.ReadFile(filename)
	checkNilErr(err)
	fmt.Println("Text data inside the file is \n", string(databyte))
}

func checkNilErr(err error) {
	if err != nil {
		panic(err)
	}
}
