
```go
import (
	"fmt"

	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	pcount "github.com/pip-services3-go/pip-services3-prometheus-go/count"
)

func main() {
	counters := pcount.NewPrometheusCounters()
	counters.Configure(cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	_ := counters.Open("123")

	myComponentA := NewMyComponentA(counters)
}
```
