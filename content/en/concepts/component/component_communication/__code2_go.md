
```go
import (
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
    pservice "github.com/pip-services3-gox/pip-services3-prometheus-gox/services"
)

service := pservice.NewPrometheusMetricsService()

service.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))
```
