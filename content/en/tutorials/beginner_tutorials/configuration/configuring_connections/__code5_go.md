
```go
connection := conn.NewConnectionParamsFromTuples(
	"protocol", "http", 
	"host", "localhost", 
	"port", "8080", 
	"cluster", "mycluster",
)
// Returns {'protocol': 'http', 'host': 'localhost', 'port': '8080', 'cluster': 'mycluster'}
```
