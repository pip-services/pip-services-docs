
```go
import (
	"context"
	"fmt"

	ccount "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/count"
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

	defer timing.EndTiming(context.Background())
	if c._consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
}
```
