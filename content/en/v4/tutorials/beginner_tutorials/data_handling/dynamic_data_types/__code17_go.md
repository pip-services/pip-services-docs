
```go
// Constructor
value := data.NewAnyValueMap(map[string]interface{}{"key1": 1, "key2": "123.456", "key3": "2018-01-01"}) // Returns{"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Cloning
value2 := value.Clone() // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Maps
myMap1 := map[string]interface{}{"key1": 1, "key2": "123.456", "key3": "2018-01-01"}
myMap2 := map[string]interface{}{"key4": 2, "key5": 3, "key6": 4}

value = data.NewAnyValueMapFromMaps(myMap1, myMap2) // Returns {"key1": 1,"key2": "123.456","key3": "2018-01-01","key4": 2,"key5": 3,"key6": 4}

// Tuples
value = data.NewAnyValueMapFromTuples("key1", 1, "key2", "123.456", "key3", "2018-01-01") // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Array of tuples
myTuple := []interface{}{"key1", 1, "key2", "123.456", "key3", "2018-01-01"}
value = data.NewAnyValueMapFromTuplesArray(myTuple) // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Values
myValue := []int{1, 2}
value = data.NewAnyValueMapFromValue(myValue) // Returns {"0": 1, "1": 2}
```
