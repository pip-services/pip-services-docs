
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	ccount "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/count"
	clog "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/log"
	pcount "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/count"
)

func main() {
	countersLog := ccount.NewLogCounters()

	countersProm := pcount.NewPrometheusCounters()
	countersProm.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	myComponent := NewMyComponent()

	myComponent.SetReferences(context.Background(), cref.NewReferencesFromTuples(context.Background(),
		cref.NewDescriptor("pip-services", "counters", "logger", "default3", "1.0"), countersLog,
		cref.NewDescriptor("pip-services", "counters", "prometheus", "default4", "1.0"), countersProm,
		cref.NewDescriptor("pip-services", "logger", "cached", "default2", "1.0"), NewMyCachedLogger(),
	))

	err := countersProm.Open(context.Background())
	if err != nil {
		panic(err)
	}

	countExec := 2

	for i := 0; i < countExec; i++ {
		myComponent.Mymethod(context.Background())
	}

	results := countersLog.GetAll()
	counters := make([]ccount.Counter, 0)

	for _, val := range results {
		counters = append(counters, val.GetCounter())
	}

	fmt.Println("Metrics to logger")
	PrintResults(counters)

	results = countersProm.GetAll()

	for _, val := range results {
		counters = append(counters, val.GetCounter())
	}

	fmt.Println("Metrics to Prometheus")
	PrintResults(counters)
}

func PrintResults(results []ccount.Counter) {
	for _, res := range results {
		fmt.Printf("Count: %d\n", res.Count)
		fmt.Printf("Min: %02f\n", res.Min)
		fmt.Printf("Max: %02f\n", res.Max)
		fmt.Printf("Average: %02f\n", res.Average)
		fmt.Printf("Time: %s\n", res.Time)
		fmt.Printf("Name: %s\n", res.Name)
		fmt.Printf("Type: %d\n", res.Type)
		fmt.Printf("-----------------")
	}
}

type MyComponent struct {
	_consoleLog bool
	counters    *ccount.CompositeCounters
}

func NewMyComponent() *MyComponent {
	c := &MyComponent{
		counters: ccount.NewCompositeCounters(),
	}

	if c._consoleLog {
		fmt.Println("MyComponent has been created.")
	}

	return c
}

func (c *MyComponent) SetReferences(ctx context.Context, references cref.IReferences) {
	c.counters.SetReferences(ctx, references)
}

func (c *MyComponent) Mymethod(ctx context.Context) {
	c.counters.Increment(context.Background(), "mycomponent.mymethod.calls", 1)
	timing := c.counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")

	defer timing.EndTiming(ctx)
	if c._consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
}

type MyCachedLogger struct {
	*clog.CachedLogger
}

func NewMyCachedLogger() *MyCachedLogger {
	c := &MyCachedLogger{}
	c.CachedLogger = clog.InheritCachedLogger(c)
	return c
}

func (c *MyCachedLogger) Save(ctx context.Context, messages []clog.LogMessage) error {
	fmt.Println("Saving somewhere")
	return nil
}

```
