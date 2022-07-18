
```go
import (
	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
	conn "github.com/pip-services3-go/pip-services3-components-go/connect"
)

config := conf.NewConfigParamsFromTuples(
	"connection.protocol", "http34343",
	"connection.host", "host123",
	"connection.uri", "uri321",
)
connection := conn.NewConnectionParamsFromConfig(config) // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

```
