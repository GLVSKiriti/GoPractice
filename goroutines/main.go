package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

//Concept: Here when you use a go keyword a go routine is fired but if it just fires
//and dont wait untill it returns back so that we are not seeing the output of hello
//in go greeter("Hello"). So we are writing sleep function to wait for sometime
//but even though it works it is not efficient and fast practice

//So in sync wait groups concept is used
//when ever a go routine is fired it adds into the wait group by wg.Add(1)
//Now in main function we are writing wg.Wait() which helps to not tertminate the main func
//untill the all go routines returns back
//In every go routine function we write a wg.Done() which helps to tell that this go routine
// operation is completed

//so in this way we achieve parallelisim and get fastest and desired result
// Race conditions can occur when multiple goroutines try to access and change the same data. A strategy to prevent race conditions is to lock the data, perform the chance, and then unlock it, so that the next thread can do its job on the data.  Golang has a mechanism called Mutex, or mutual exclusion, which allows us to write code shielded against race conditions

var signals = []string{"test"}

var wg sync.WaitGroup //pointer is in mutexandwaitgrps which is better practice
var mut sync.Mutex    //pointer is in mutexandwaitgrps which is better practice

func main() {
	// go greeter("Hello")
	// greeter("World")

	websitelist := []string{
		"https://lco.dev",
		"https://go.dev",
		"https://google.com",
		"https://fb.com",
		"https://github.com",
	}

	for _, web := range websitelist {
		go getStatusCode(web)
		wg.Add(1)
	}

	wg.Wait()

}

// func greeter(s string) {
// 	for i := 0; i < 6; i++ {
// time.Sleep(3* time.Millisecond)
// 		fmt.Println(s)
// 	}
// }

func getStatusCode(endpoint string) {
	defer wg.Done()
	res, err := http.Get(endpoint)

	if err != nil {
		log.Fatal(err)
	} else {
		mut.Lock()
		signals = append(signals, endpoint)
		mut.Unlock()
		fmt.Printf("%d status code for %s\n", res.StatusCode, endpoint)
	}
}
