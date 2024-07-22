
```go
import (
	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	conn "github.com/pip-services4/pip-services4-go/pip-services4-config-go/connect"
)


config := conf.NewConfigParamsFromTuples(
	"connection.protocol", "http34343",
	"connection.host", "host123",
	"connection.uri", "uri321",
)
connection := conn.NewConnectionParamsFromConfig(config) // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

```
