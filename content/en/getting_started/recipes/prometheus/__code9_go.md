
```go
package main

import (
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	pcount "github.com/pip-services3-gox/pip-services3-prometheus-gox/count"
)

func main() {
	counters := pcount.NewPrometheusCounters()
	counters.Configure(cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	err := counters.Open("123")

	if err != nil {
		fmt.Println(err)
	}

	myComponentA := NewMyComponentA(counters)
}

type MyComponentA struct {
	counters *pcount.PrometheusCounters

	ConsoleLog bool
}

func NewMyComponentA(counter *pcount.PrometheusCounters) *MyComponentA {
	c := MyComponentA{
		counters:   counter,
		ConsoleLog: true,
	}
	if c.ConsoleLog {
		fmt.Println("MyComponentA has been created.")
	}
	return &c
}

func (c *MyComponentA) MyMethod() {
	c.counters.Increment("mycomponent.mymethod.calls", 1)
	timing := c.counters.BeginTiming("mycomponent.mymethod.exec_time")

	defer timing.EndTiming()

	if c.ConsoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}

	c.counters.Dump()
}

```
