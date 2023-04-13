package main

import (
	"fmt"
	"sync"
)

func main() {

	//Here poiter type declaration
	mut := &sync.Mutex{}
	wg := &sync.WaitGroup{}
	var score = []int{0}

	wg.Add(1)
	go func(wg *sync.WaitGroup, m *sync.Mutex) {
		fmt.Println("One R")
		m.Lock()
		score = append(score, 1)
		m.Unlock()
		wg.Done()
	}(wg, mut)
	wg.Add(1)
	go func(wg *sync.WaitGroup, m *sync.Mutex) {
		fmt.Println("Two R")
		m.Lock()
		score = append(score, 2)
		m.Unlock()
		wg.Done()
	}(wg, mut)
	wg.Add(1)
	go func(wg *sync.WaitGroup, m *sync.Mutex) {
		fmt.Println("Three R")
		m.Lock()
		score = append(score, 3)
		m.Unlock()
		wg.Done()
	}(wg, mut)

	wg.Wait()
	fmt.Println(score)
}

// run in terminal "go run --race ." this command will tell whether in your code there is a
//race condition or not and if there is no race condition it runs the code normally
