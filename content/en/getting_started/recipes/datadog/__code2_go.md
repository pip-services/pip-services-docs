
```go
import (
	"fmt"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	dcount "github.com/pip-services3-gox/pip-services3-datadog-gox/count"
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

func (c *MyComponentA) MyMethod(ctx context.Context) {
	c.counters.Increment(ctx, "mycomponent.mymethod.calls", 1)
	timing := c.counters.BeginTiming(ctx, "mycomponent.mymethod.exec_time")

	defer timing.EndTiming(ctx)

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
	}

	c.counters.Dump(ctx)
}
```
