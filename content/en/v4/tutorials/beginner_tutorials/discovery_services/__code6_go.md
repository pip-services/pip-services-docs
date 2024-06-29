
```go
discovery.Register(context.Background(), "key1", cconn.NewConnectionParamsFromTuples(
	"param1", "val1",
	"param2", "val2",
))

connection, _ := discovery.ResolveAll(context.Background(), "key1")
// Returns [{'host': '10.1.1.100', 'port': '8080'}, {'param1': 'val1', 'param2': 'val2'}]
```
