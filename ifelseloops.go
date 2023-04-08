package main

import "fmt"

func main() {
	var result string

	a := 10

	if a < 0 {
		result = "Negative"
	} else if a == 0 {
		result = "Zero"
	} else {
		result = "Positive"
	}
	fmt.Println("The Number Is ", result)

	//switch statements
	switch a {
	case 10:
		fmt.Println("Number is 10")
		fallthrough
	case 9:
		fmt.Println("Number is 9")
	default:
		fmt.Println("Number is ", a)
	}

	//loops and goto
	days := []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}
	for d := 0; d < len(days); d++ {
		fmt.Println(days[d])
	}

	for i := range days {
		fmt.Println(days[i])
	}

	for i, day := range days {
		fmt.Printf("At index %v the day stored is %v\n", i, day)
	}

	j := 0
	for j < 7 {

		if j == 7 {
			goto lco
		}

		if j == 4 {
			fmt.Println("From tommorow holiday")
			break
		}

		if j == 3 {
			fmt.Println("No need to print Thursday")
			j++
			continue
		}

		fmt.Println(days[j])
		j++
	}

lco:
	fmt.Println("Jump Now")

}
