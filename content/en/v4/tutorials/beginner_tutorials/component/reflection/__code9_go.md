
```go
// TypeMatcher

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

func (c *ObjectA) MethodA() int {
	return 123
}

func NewObjectA() *ObjectA {
	return &ObjectA{
		Param1: "hello",
		Param2: 123,
	}
}

func main() {
	objectA1 := NewObjectA()

	// expected type: Object, actual type: objectA1, actualvalue: objectA1
	type1 := creflect.TypeMatcher.MatchType("Object", refl.TypeOf(objectA1))
	fmt.Println("objectA1 is an object:", type1)

	// expected type: Object, actual type: String
	type2 := creflect.TypeMatcher.MatchTypeByName("Object", refl.TypeOf("string"))
	fmt.Println("String is an object:", type2)

	// expected type: objectA1, expected value: objectA1
	type3 := creflect.TypeMatcher.MatchValue(refl.TypeOf(objectA1), objectA1)
	fmt.Println("objectA1 is of type objectA1:", type3)

	// expected type: Object, actual value: objectA1
	type4 := creflect.TypeMatcher.MatchValueByName("Object", objectA1)
	fmt.Println("ObjectA1 is of type Object:", type4)

	string1 := "Hello World"
	type5 := creflect.TypeMatcher.MatchValueByName("String", string1)
	fmt.Println("string1 is of type String:", type5)
}

```
