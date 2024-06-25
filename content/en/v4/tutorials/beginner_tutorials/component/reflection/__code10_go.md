
```go
// TypeReflector

package main

import (
	"fmt"
	refl "reflect"

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

func main() {
	myObjectA, _ := creflect.TypeReflector.CreateInstanceByType(refl.TypeOf(ObjectA{})) // Constructors with arguments are not supported

	myObjectA.(*ObjectA).Param1 = "hello"
	myObjectA.(*ObjectA).Param2 = 123

	fmt.Println("The values of param1 and param2 are", myObjectA.(*ObjectA).Param1, "and", myObjectA.(*ObjectA).Param2)
}

```
