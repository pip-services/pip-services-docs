
```go
import (
	"context"
	"fmt"

	ccount "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/count"
)

func main() {
	countersNull := ccount.NewNullCounters()

	mycomponentNull := NewMyComponent(countersNull)

	countExec := 2

	for i := 0; i < countExec; i++ {
		mycomponentNull.Mymethod(context.Background())
	}
}

type MyComponent struct {
	_consoleLog bool
	_counters   ccount.ICounters
}

func NewMyComponent(counters ccount.ICounters) *MyComponent {
	c := &MyComponent{}
	c._counters = counters

	if c._consoleLog {
		fmt.Println("MyComponent has been created.")
	}

	return c
}

func (c *MyComponent) Mymethod(ctx context.Context) {
	c._counters.Increment(context.Background(), "mycomponent.mymethod.calls", 1)
	timing := c._counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")

	defer timing.EndTiming(ctx)
	if c._consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
}
```
