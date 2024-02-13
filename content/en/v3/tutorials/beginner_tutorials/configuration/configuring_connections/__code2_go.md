
```go
import (
	conn "github.com/pip-services3-gox/pip-services3-components-gox/connect"
)

config := conn.NewConnectionParamsFromTuples(
	"protocol", "http34343", "host", "host123", "uri", "uri321",
)

connection := conn.NewConnectionParams(config.Value()) // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
