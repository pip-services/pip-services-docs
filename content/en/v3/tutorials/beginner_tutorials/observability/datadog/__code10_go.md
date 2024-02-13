
```go
import (
	"fmt"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	dlog "github.com/pip-services3-gox/pip-services3-datadog-gox/log"
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

func (c *MyComponentA) Open(ctx context.Context, correlationId string) error {
	return c.logger.Open(ctx, correlationId)
}

func (c *MyComponentA) Close(ctx context.Context, correlationId string) error {
	return c.logger.Close(ctx, correlationId)
}

func (c *MyComponentA) MyMethod(ctx context.Context) {
	defer c.logger.Info(ctx, "123", "Finally reached.")

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
		c.logger.Info(ctx, "123", "Greetings created.")
	}
}
```
