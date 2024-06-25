
```go
// Object writer - Setting property values

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

	value1 := creflect.ObjectReader.GetProperty(myObjectA, "Param1")
	fmt.Println("The value of param1 is: ", value1)

	creflect.ObjectWriter.SetProperty(myObjectA, "Param1", "hello 2")
	value2 := creflect.ObjectReader.GetProperty(myObjectA, "Param1")
	fmt.Println("The new value of param1 is: ", value2)

	// Map (dictionary)
	myMap := map[string]interface{}{"key1": 123, "key2": "ABC"}
	creflect.ObjectWriter.SetProperties(myMap, map[string]interface{}{"key1": 15422, "key2": "ab"})
	value4 := creflect.ObjectReader.GetProperties(myMap)
	fmt.Println("The new values in the map are : ", value4)

	myMap = map[string]interface{}{"key1": 123, "key2": "ABC"}
	creflect.ObjectWriter.SetProperty(myMap, "key1", "XYZ")
	value2 = creflect.ObjectReader.GetProperty(myMap, "key1")
	fmt.Println("The new value in the map is : ", value2)

	// Array
	myArray := []int{1, 2, 3}
	creflect.ObjectWriter.SetProperty(myArray, "0", 123)
	value3 := creflect.ObjectReader.GetProperty(myArray, "0")
	fmt.Println("The new value in the array is : ", value3)
}

```
