
```go
// Obtain properties from a map (dictionary)
myMap := map[string]interface{}{"key1": 123, "key2": "ABC"}

hasProperty1 := creflect.ObjectReader.HasProperty(myMap, "key1")
value1 := creflect.ObjectReader.GetProperty(myMap, "key1")
fmt.Println("MyMap contains key1: ", hasProperty1)
fmt.Println("The value of key1 is : ", value1)

// Obtain properties from an array
myArray := []int{1, 2, 3}
hasProperty2 := creflect.ObjectReader.HasProperty(myArray, "5")
hasProperty3 := creflect.ObjectReader.HasProperty(myArray, "0")
value2 := creflect.ObjectReader.GetProperty(myArray, "0")

fmt.Println("myArray contains an element with index 5: ", hasProperty2)
fmt.Println("myArray contains an element with index 0: ", hasProperty3)
fmt.Println("The value stored at postion 0 is: ", value2)
```
