
```go
// RecursiveObjectWriter

package main

import (
	"fmt"

	creflect "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/reflect"
)

// Object
type ObjectA struct {
	ObjectAa

	Param1 string
	Param2 int
}

type ObjectAa struct {
	Param5 string
}

func (c *ObjectA) MethodA() int {
	return 123
}

type ObjectB struct {
	*ObjectA
	Param4 string
}

func NewObjectB() *ObjectB {
	return &ObjectB{
		ObjectA: NewObjectA(),
		Param4:  "inside 2",
	}
}

func NewObjectA() *ObjectA {
	return &ObjectA{
		Param1: "hello",
		Param2: 123,
		ObjectAa: ObjectAa{
			Param5: "hello aa",
		},
	}
}

func main() {
	myObjectB := NewObjectB()
	myObjectC := NewObjectB()

	// set_property
	creflect.RecursiveObjectWriter.SetProperty(myObjectB, "Param2", "new value")
	value1 := creflect.RecursiveObjectReader.GetProperty(myObjectB, "Param2")
	fmt.Println("The new values for the myObjectB object are:", value1)

	// set_properties
	myMap := map[string]interface{}{"Param1": 789456, "Param2": "ABCaccc"}
	creflect.RecursiveObjectWriter.SetProperties(myObjectB, myMap)
	value2 := creflect.RecursiveObjectReader.GetProperties(myObjectB)
	fmt.Println("The new values for the myObjectB object are:", value2)

	// copy_proerties
	value3 := creflect.RecursiveObjectReader.GetProperties(myObjectC)
	fmt.Println("The properties of myObjectC and their values are:", value3)
	creflect.RecursiveObjectWriter.CopyProperties(myObjectC, myObjectB)
	value4 := creflect.RecursiveObjectReader.GetProperties(myObjectC)
	fmt.Println("The new properties of myObjectC and their values are:", value4)
}

```
