
```go
/// TypeDescriptor

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
	// Create type descriptors
	type1 := creflect.NewTypeDescriptor("ObjectA", "library1")
	type2 := creflect.NewTypeDescriptor("ObjectB", "library1")

	// equals
	result1 := type1.Equals(type2)
	fmt.Println("type1 equals type2:", result1)

	// get_library
	library1 := type1.Package()
	fmt.Println("The library of type1:", library1)

	// get_name
	name1 := type1.Name()
	fmt.Println("The name of type1 is:", name1)

	// from_string
	typeDescriptor, _ := creflect.ParseTypeDescriptorFromString("ObjectA,library1")
	fmt.Println("Type descriptor:", typeDescriptor)
}

```
