
```go
discovery.Register(context.Background(), "key3", cconn.NewConnectionParamsFromTuples(
	"host", "localhost",
	"port", "8000",
)) // Returns {"host": "localhost", "port": "8000"}
```
