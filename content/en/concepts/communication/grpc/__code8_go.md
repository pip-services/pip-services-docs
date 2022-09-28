
```go
import (
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

service := NewMyGrpcService()
service.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))

service.SetReferences(cref.NewEmptyReferences())

```
