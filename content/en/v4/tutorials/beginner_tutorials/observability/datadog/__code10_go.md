
```go
import (
	"context"
	"fmt"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	dlog "github.com/pip-services4/pip-services4-go/pip-services4-datadog-go/log"
)

type MyComponentA struct {
	consoleLog bool
	logger     *dlog.DataDogLogger
}

func NewMyComponentA(logger *dlog.DataDogLogger) *MyComponentA {
	c := &MyComponentA{
		consoleLog: true,
		logger:     logger,
	}

	if c.consoleLog {
		logger.Info(context.Background(), "123", "MyComponentA has been created.")
	}
	return c
}

func (c *MyComponentA) Configure(ctx context.Context, config *conf.ConfigParams) {
	c.logger.Configure(ctx, config)
}

func (c *MyComponentA) GetCounters() *dlog.DataDogLogger {
	return c.logger
}

func (c *MyComponentA) IsOpen() bool {
	return c.logger.IsOpen()
}

func (c *MyComponentA) Open(ctx context.Context) error {
	return c.logger.Open(ctx)
}

func (c *MyComponentA) Close(ctx context.Context) error {
	return c.logger.Close(ctx)
}

func (c *MyComponentA) MyMethod(ctx context.Context) {
	defer c.logger.Info(ctx, "Finally reached.")

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
		c.logger.Info(ctx, "Greetings created.")
	}
}
```
