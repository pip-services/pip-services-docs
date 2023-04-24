
```go
discovery.Register("123", "key3", cconn.NewConnectionParamsFromTuples(
	"host", "localhost",
	"port", "8000",
)) // Returns {"host": "localhost", "port": "8000"}

```
