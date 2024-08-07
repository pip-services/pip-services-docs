
```go
import (
	"context"
	"fmt"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	dcount "github.com/pip-services4/pip-services4-go/pip-services4-datadog-go/count"
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

func (c *MyComponentA) Configure(ctx context.Context, config *conf.ConfigParams) {
	c.counters.Configure(ctx, config)
}

func (c *MyComponentA) GetCounters() *dcount.DataDogCounters {
	return c.counters
}

func (c *MyComponentA) IsOpen() bool {
	return c.counters.IsOpen()
}

func (c *MyComponentA) Open(ctx context.Context) error {
	return c.counters.Open(ctx)
}

func (c *MyComponentA) Close(ctx context.Context) error {
	return c.counters.Close(ctx)
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
