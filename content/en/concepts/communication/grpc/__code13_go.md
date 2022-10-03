
```go
import (
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

client := NewMyGrpcClient()
client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))
client.SetReferences(context.Background(), cref.NewEmptyReferences())
```
