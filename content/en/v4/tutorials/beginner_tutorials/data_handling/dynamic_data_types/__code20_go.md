
```go
value := data.NewAnyValueMap(map[string]interface{}{"key1": 1, "key2": "123.456", "key3": "2018-01-01"})
value.Remove("key1") /// Returns value = {"key2": "123.456", "key3": "2018-01-01"}
```
