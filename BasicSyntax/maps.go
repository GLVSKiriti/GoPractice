package main

import "fmt"

func main() {
	fmt.Println("Maps concept")

	var a = make(map[string]string)
	a["a"] = "A"
	a["b"] = "B"
	a["c"] = "C"

	fmt.Println("Map is ", a)
	delete(a, "a")
	fmt.Println("After performing delete operartion map is ", a)

	//looping a map
	for key, value := range a {
		fmt.Printf("For key %v value is %v\n", key, value)
	}

	//structures concept
	me := User{"Kiriti", "Kiriti@email.com", true, 19}
	fmt.Println(me)
	fmt.Printf("Detaisl are %v", me)  //only prints vaues
	fmt.Printf("Details are %+v", me) //also print names of that particular values
	fmt.Printf("Name is %v and email is %v.\n", me.Name, me.Email)
	me.GetStatus()
	me.NewMail()
	fmt.Printf("Name is %v and email is %v.\n", me.Name, me.Email)
}

//here first letter is capital because as sometimes we exportu classes so thats why.
type User struct {
	Name   string
	Email  string
	Status bool
	Age    int
}

//Methods concept

func (u User) GetStatus() {
	fmt.Println("Is User active: ", u.Status)
}

func (u User) NewMail() {
	//Here it manipulates Email but not changes as it is changing only in the copy
	u.Email = "test@go.dev"
	fmt.Println("Email of this user is: ", u.Email)
}
