
```go
// Property reflector

package main

import (
	"fmt"

	creflect "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/reflect"
)

// Object
type ObjectA struct {
	Param1 string
	Param2 int
}

func NewObjectA() *ObjectA {
	return &ObjectA{
		Param1: "hello",
		Param2: 123,
	}
}

func (c *ObjectA) MethodA() int {
	return 123
}

func main() {
	myObjectA := NewObjectA()

	// Obtain all property names
	properties := creflect.PropertyReflector.GetPropertyNames(myObjectA)
	fmt.Println("The properties of myObjectA are: ", properties)

	// Find out whether an object has a property or not
	hasParam1 := creflect.PropertyReflector.HasProperty(myObjectA, "Param1")
	fmt.Println("ClassA contains param1: ", hasParam1)

	// Obtain all property names and their values
	value3 := creflect.PropertyReflector.GetProperties(myObjectA)
	fmt.Println("The properties of myObjectA are: ", value3)

	// Change the value of a parameter
	value1 := creflect.PropertyReflector.GetProperty(myObjectA, "Param2")
	creflect.PropertyReflector.SetProperty(myObjectA, "param2", 14785)
	value2 := creflect.PropertyReflector.GetProperty(myObjectA, "Param2")
	fmt.Println("The value of param2 is: ", value1)
	fmt.Println("The new value of param2 is: ", value2)

}

```
