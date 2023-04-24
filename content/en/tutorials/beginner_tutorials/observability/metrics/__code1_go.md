
```go
import (
	"context"
	"fmt"

	ccount "github.com/pip-services3-gox/pip-services3-components-gox/count"
)

type MyComponent struct {
	_consoleLog bool
	_counters   ccount.ICounters
}

func NewMyComponentA(counters ccount.ICounters) *MyComponent {
	c := &MyComponent{}
	c._counters = counters

	if c._consoleLog {
		fmt.Println("MyComponent has been created.")
	}

	return c
}

func (c *MyComponent) Mymethod() {
	c._counters.Increment(context.Background(), "mycomponent.mymethod.calls", 1)
	timing := c._counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")

	defer timing.EndTiming()
	if c._consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
}
```
