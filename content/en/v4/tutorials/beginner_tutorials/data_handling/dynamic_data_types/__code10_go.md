
```go
// Constructor
value1 := data.NewAnyValueArray([]interface{}{1, 2, 3})

// String
myString := "1.2.3"
value2 := data.NewAnyValueArrayFromString(myString, ".", false)

// List
myList := []int{1, 2, 3}
value := data.NewAnyValueArrayFromValues(myList)

// Cloning
value3 := value.Clone() // Returns value2 as AnyValueArry with values 1,2,3
```
