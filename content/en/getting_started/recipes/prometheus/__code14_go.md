
```go
package main

import (
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cinfo "github.com/pip-services3-go/pip-services3-components-go/info"
	pcount "github.com/pip-services3-go/pip-services3-prometheus-go/count"
	pservice "github.com/pip-services3-go/pip-services3-prometheus-go/services"
)

func main() {

	myComponentA := NewMyComponentA()

	// Create an instance of PrometheusCounters and configure it
	counters := pcount.NewPrometheusCounters()
	counters.Configure(cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	// Create an instance of PrometheusMetricsService and configure it
	service := pservice.NewPrometheusMetricsService()
	service.Configure(cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	// Create the references
	contextInfo := cinfo.NewContextInfo()
	contextInfo.Name = "Test"
	contextInfo.Description = "This is a test container"

	references := refer.NewReferencesFromTuples(
		refer.NewDescriptor("pip-services", "context-info", "default", "default", "1.0"), contextInfo,
		refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
		refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service,
	)

	service.SetReferences(references)
	counters.SetReferences(references)
	myComponentA.SetReferences(references)

	// Connect the service and counters objects
	err := service.Open("123")
	if err != nil {
		fmt.Println(err)
	}

	err = counters.Open("123")
	if err != nil {
		fmt.Println(err)
	}

	//  Run "mymethod"
	countExec := 2

	for i := 0; i < countExec; i++ {
		myComponentA.MyMethod()
	}

	// Get the counters
	result := counters.GetAll()
	fmt.Println(result)

	// close counter, for closing Http client for prometheus
	err = counters.Close("123")
	if err != nil {
		fmt.Println(err)
	}

	// close service for closing Http server
	err = service.Close("123")
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

func (c *MyComponentA) SetReferences(references refer.IReferences) {
	p, err := references.GetOneRequired(
		refer.NewDescriptor("*", "counters", "prometheus", "*", "*"),
	)

	if p != nil && err == nil {
		c.counters = p.(*pcount.PrometheusCounters)
	}
}

func (c *MyComponentA) MyMethod() {

	// Count the number of calls to this method
	c.counters.Increment("mycomponent.mymethod.calls", 1)

	// Measure execution time
	timing := c.counters.BeginTiming("mycomponent.mymethod.exec_time")

	defer timing.EndTiming()

	// Task for this method: print greetings in two languages.
	if c.ConsoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}

	// Save the values of counters
	c.counters.Dump()
}
```
