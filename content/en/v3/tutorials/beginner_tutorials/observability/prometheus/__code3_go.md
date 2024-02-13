
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	pcount "github.com/pip-services3-gox/pip-services3-prometheus-gox/count"
)

func main() {
	counters := pcount.NewPrometheusCounters()
	counters.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	_ = counters.Open(context.Background(), "123")

	myComponentA := NewMyComponentA(counters)
}
```
