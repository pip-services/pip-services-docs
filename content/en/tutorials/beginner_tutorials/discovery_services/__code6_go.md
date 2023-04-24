
```go
discovery.Register("123", "key1", cconn.NewConnectionParamsFromTuples(
	"param1", "val1",
	"param2", "val2",
))

connection, _ := discovery.ResolveAll("123", "key1") 
// Returns [{'host': '10.1.1.100', 'port': '8080'}, {'param1': 'val1', 'param2': 'val2'}]
```
