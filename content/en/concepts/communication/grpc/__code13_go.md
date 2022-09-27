
```go
import (
    cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
    cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

client := NewMyGrpcClient()
client.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))
client.SetReferences(cref.NewEmptyReferences())
```
