
```go
import (
	conn "github.com/pip-services3-go/pip-services3-components-go/connect"
)

config := conn.NewConnectionParamsFromTuples(
	"protocol", "http34343", "host", "host123", "uri", "uri321",
)

connection := conn.NewConnectionParams(config.Value()) // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
