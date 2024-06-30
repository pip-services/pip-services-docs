
```go

// Replace a value
value := data.NewAnyValueArray([]interface{}{1, 2, 3})
value.Put(0, "ABC") // Returns ABC,2,3

// Append a value
myList := []interface{}{1, 3, 4}
value.Append(myList) // Returns ABC,2,3,1,3,4
```
