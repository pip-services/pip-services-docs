
```go
import (
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

client := NewMyGrpcClient()
client.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))
client.SetReferences(cref.NewEmptyReferences())
```
