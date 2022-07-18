
```go
import (
	"fmt"

	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
	dlog "github.com/pip-services3-go/pip-services3-datadog-go/log"
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
		logger.Info("123", "MyComponentA has been created.")
	}
	return c
}

func (c *MyComponentA) Configure(config *conf.ConfigParams) {
	c.logger.Configure(config)
}

func (c *MyComponentA) GetCounters() *dlog.DataDogLogger {
	return c.logger
}

func (c *MyComponentA) IsOpen() bool {
	return c.logger.IsOpen()
}

func (c *MyComponentA) Open(correlationId string) error {
	return c.logger.Open(correlationId)
}

func (c *MyComponentA) Close(correlationId string) error {
	return c.logger.Close(correlationId)
}

func (c *MyComponentA) MyMethod() {
	defer c.logger.Info("123", "Finally reached.")

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
		c.logger.Info("123", "Greetings created.")
	}
}
```
