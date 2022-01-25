
```go
import (
    cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
    cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

service := NewMyGrpcService()
service.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))

service.SetReferences(cref.NewEmptyReferences())

```
