
```go
value := data.NewAnyValueMap(map[string]interface{}{"key1": 1, "key2": "123.456", "key3": "2018-01-01"})

value1 := value.GetAsBoolean("key1")               // Returns: true
value2 := value.GetAsInteger("key2")               // Returns: 123
value3 := value.GetAsIntegerWithDefault("key3", 0) // Returns 0
value4 := value.GetAsFloat("key2")                 // Returns: 123.456
value5 := value.GetAsDateTime("key3")              // Returns 0001-01-01
valueA := data.NewAnyValueMap(map[string]interface{}{"key1": 1, "key2": map[string]string{"key": "123.456"}, "key3": "2018-01-01"})
value6 := valueA.GetAsMap("key2")                  // Returns {"key": "123.456"}
value7 := value.GetAsNullableDateTime("key2")      // Returns nil
value8 := value.GetAsNullableDateTime("key3")      // Returns nil
value9 := value.GetAsString("key1")                // Returns "1"
value10 := value.GetAsType(convert.String, "key1") // Returns "1"
value11 := value.GetAsValue("key1")
```
