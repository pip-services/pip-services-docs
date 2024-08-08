
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cinfo "github.com/pip-services4/pip-services4-go/pip-services4-components-go/context"
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	pcontroller "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/controllers"
	pcount "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/count"
)

func main() {
	myComponentA := NewMyComponentA()

	// Create an instance of PrometheusCounters and configure it
	counters := pcount.NewPrometheusCounters()
	counters.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	// Create an instance of PrometheusMetricsService and configure it
	controller := pcontroller.NewPrometheusMetricsController()
	controller.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	// Create the references
	contextInfo := cinfo.NewContextInfo()
	contextInfo.Name = "Test"
	contextInfo.Description = "This is a test container"

	references := refer.NewReferencesFromTuples(context.Background(),
		refer.NewDescriptor("pip-services", "context-info", "default", "default", "1.0"), contextInfo,
		refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
		refer.NewDescriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller,
	)

	controller.SetReferences(context.Background(), references)
	counters.SetReferences(context.Background(), references)
	myComponentA.SetReferences(context.Background(), references)

	// Connect the service and counters objects
	err := controller.Open(context.Background())
	if err != nil {
		fmt.Println(err)
	}

	err = counters.Open(context.Background())
	if err != nil {
		fmt.Println(err)
	}

	//  Run "mymethod"
	countExec := 2

	for i := 0; i < countExec; i++ {
		myComponentA.MyMethod(context.Background())
	}

	// Get the counters
	result := counters.GetAll()
	fmt.Println(result)

	// close counter, for closing Http client for prometheus
	err = counters.Close(context.Background())
	if err != nil {
		fmt.Println(err)
	}

	// close service for closing Http server
	err = controller.Close(context.Background())
	if err != nil {
		fmt.Println(err)
	}
}

type MyComponentA struct {
	counters *pcount.PrometheusCounters

	ConsoleLog bool // console log flag
}

func NewMyComponentA() *MyComponentA {
	c := MyComponentA{
		ConsoleLog: true,
	}
	if c.ConsoleLog {
		fmt.Println("MyComponentA has been created.")
	}
	return &c
}

func (c *MyComponentA) SetReferences(ctx context.Context, references refer.IReferences) {
	p, err := references.GetOneRequired(
		refer.NewDescriptor("*", "counters", "prometheus", "*", "*"),
	)

	if p != nil && err == nil {
		c.counters = p.(*pcount.PrometheusCounters)
	}
}

func (c *MyComponentA) MyMethod(ctx context.Context) {

	// Count the number of calls to this method
	c.counters.Increment(context.Background(), "mycomponent.mymethod.calls", 1)

	// Measure execution time
	timing := c.counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")

	defer timing.EndTiming(context.Background())

	// Task for this method: print greetings in two languages.
	if c.ConsoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}

	// Save the values of counters
	c.counters.Dump(context.Background())
}
```
