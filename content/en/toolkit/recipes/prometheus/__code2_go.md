
```go
import (
	"fmt"

	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	pcount "github.com/pip-services3-go/pip-services3-prometheus-go/count"
)

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
