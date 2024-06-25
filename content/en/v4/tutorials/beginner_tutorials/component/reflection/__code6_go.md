
```go
// Recursive Object Reader

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
	myObjectA := NewObjectA()
	myObjectB := NewObjectB()

	value1 := creflect.RecursiveObjectReader.GetPropertyNames(myObjectA)
	fmt.Println("The property names of myObjectA are: ", value1)

	value2 := creflect.RecursiveObjectReader.HasProperty(myObjectB, "param5")
	fmt.Println("myObjectB contains param5: ", value2)

	value3 := creflect.RecursiveObjectReader.GetProperties(myObjectB)
	fmt.Println("The properties of myObjectB are: ", value3)

	value4 := creflect.RecursiveObjectReader.GetProperty(myObjectB, "Param4")
	fmt.Println("The value of param4 is: ", value4)
}

```
