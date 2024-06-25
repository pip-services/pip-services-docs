
```go
import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	pcontroller "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/controllers"
	pcount "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/count"
)


controller := pcontroller.NewPrometheusMetricsController()
service.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

counters := pcount.NewPrometheusCounters()
counters.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8081,
))
```
