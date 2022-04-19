
```go
import (
    dlog "github.com/pip-services3-go/pip-services3-datadog-go/log"
)

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

func (c *MyComponentA) MyMethod() {
	defer c.logger.Info("123", "Finally reached.")

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
		c.logger.Info("123", "Greetings created.")
	}
}
```
