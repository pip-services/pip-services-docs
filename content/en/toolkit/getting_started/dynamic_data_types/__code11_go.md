
```go
// Find out if it contains a value
value := data.NewAnyValueArray([]interface{}{1, "123.456", "2018-01-01"})

value.Contains(1) // Returns True
result := value.ContainsAsType(convert.Integer, 1) // Returns True
```
