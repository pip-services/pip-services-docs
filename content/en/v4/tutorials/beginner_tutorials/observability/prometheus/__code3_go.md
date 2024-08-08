
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	pcount "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/count"
)

func main() {
	counters := pcount.NewPrometheusCounters()
	counters.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	_ = counters.Open(context.Background())

	myComponentA := NewMyComponentA(counters)
}
```
