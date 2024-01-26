package main

import (
	"fmt"
	"time"
)

func main() {
	presentTime := time.Now()

	fmt.Println(presentTime)

	//Here you should always use this format date only to format any daye according to documentation
	fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))

	//And here also when giving month you should follow this syntax according to documentation
	createdate := time.Date(2003, time.September, 15, 23, 0, 0, 0, time.UTC)
	fmt.Println(createdate)
	fmt.Println(createdate.Format("01-02-2006 Monday"))
}

//one more thing bascically in projects we make afolder and some go files in it and make a go.mod file also
//when we build a project like that

//GOOS="windows" go build
//GOOS="linux" go build
//dont give spaces between GOOS and "os_name"
//will build a executable file which open in that os system so that even we devlop a project
//in one os we can make the project executable file for a particular os
//command works in bask also but shows command not found in powershell
