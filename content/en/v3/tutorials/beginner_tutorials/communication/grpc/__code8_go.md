
```go
import (
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

service := NewMyGrpcService()
service.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))

service.SetReferences(context.Background(), cref.NewEmptyReferences())

```
