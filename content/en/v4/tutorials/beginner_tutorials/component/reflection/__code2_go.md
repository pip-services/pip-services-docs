
```go
// Object reader

package main

import (
	"fmt"

	creflect "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/reflect"
)

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

	// Obtain all properties in ObjectA
	properties := creflect.ObjectReader.GetPropertyNames(myObjectA)
	fmt.Println("The properties in myObjectA are: ", properties)

	// Obtain the value of a property in myObjectA
	value1 := creflect.ObjectReader.GetProperty(myObjectA, "Param1")
	fmt.Println("The value of Param1 is: ", value1)

	value2 := creflect.ObjectReader.GetProperties(myObjectA)
	fmt.Println("The properties and values in myObjectA are: ", value2)
}
```
