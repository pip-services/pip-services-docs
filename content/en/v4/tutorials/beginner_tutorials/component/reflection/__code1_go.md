
```go
// Method Reflector

package main

import (
	"fmt"

	creflect "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/reflect"
)

type ObjectA struct {
}

func (c *ObjectA) MethodA() int {
	return 123
}

func (c *ObjectA) MethodB() {
	fmt.Println("hello world b")
}

func main() {
	myObjectA := &ObjectA{}

	// Obtain all methods in ObjectA
	methods1 := creflect.MethodReflector.GetMethodNames(myObjectA)
	fmt.Println("The methods in myObjectA are: ", methods1)

	// Ask whether a specific method exists or not
	methods2 := creflect.MethodReflector.HasMethod(myObjectA, "methodA")
	fmt.Println("methodA belongs to myObjectA: ", methods2)

	methods3 := creflect.MethodReflector.HasMethod(myObjectA, "methodC")
	fmt.Println("methodC belongs to myObjectA: ", methods3)

	// Invoke a method in ObjectA
	methods4 := creflect.MethodReflector.InvokeMethod(myObjectA, "methodA")
	fmt.Println("After running methodA the result is: ", methods4)

}
```
