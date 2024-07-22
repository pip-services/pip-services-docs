
```go
import (
	conn "github.com/pip-services4/pip-services4-go/pip-services4-config-go/connect"
)

config := conn.NewConnectionParamsFromTuples(
	"protocol", "http34343", "host", "host123", "uri", "uri321",
)

connection := conn.NewConnectionParams(config.Value()) // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

``
