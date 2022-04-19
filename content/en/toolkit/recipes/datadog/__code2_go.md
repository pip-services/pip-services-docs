
```go
import (
	"fmt"

	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
	dcount "github.com/pip-services3-go/pip-services3-datadog-go/count"
)

type MyComponentA struct {
	consoleLog bool
	counters   *dcount.DataDogCounters
}

func NewMyComponentA(counters *dcount.DataDogCounters) *MyComponentA {
	c := &MyComponentA{
		consoleLog: true,
		counters:   counters,
	}

	if c.consoleLog {
		fmt.Println("MyComponentA has been created.")
	}
	return c
}

func (c *MyComponentA) MyMethod() {
	c.counters.Increment("mycomponent.mymethod.calls", 1)
	timing := c.counters.BeginTiming("mycomponent.mymethod.exec_time")

	defer timing.EndTiming()

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
	}

	c.counters.Dump()
}
```
