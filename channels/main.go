package main

import (
	"fmt"
	"sync"
)

func main() {
	mych := make(chan int, 2)
	wg := &sync.WaitGroup{}

	wg.Add(2)
	//writing here <-chan here means it is for recieve only
	go func(ch <-chan int, wg *sync.WaitGroup) {
		//close(mych),here we cant erite it as it is only recieve only(shows error)
		val, isChannelOpen := <-mych

		fmt.Println(isChannelOpen)
		fmt.Println(val)

		// fmt.Println(<-mych)
		wg.Done()
	}(mych, wg)

	//writing chan<- here means it is for send only
	go func(ch chan<- int, wg *sync.WaitGroup) {
		close(mych)
		// mych <- 0
		// mych <- 6
		wg.Done()
	}(mych, wg)
	wg.Wait()

	// mych <- 5
	// fmt.Println(<-mych)
}
