
```go
import (
	"context"
	"fmt"

	clog "github.com/pip-services3-gox/pip-services3-components-gox/log"
	ellog "github.com/pip-services3-gox/pip-services3-elasticsearch-gox/log"
)

type MyComponentA struct {
	_logger      clog.ILogger
	_console_log bool
}

func NewMyComponentA(logger *ellog.ElasticSearchLogger) *MyComponentA {
	c := &MyComponentA{}
	c._logger = logger

	c._logger.Info(context.Background(), "123", "MyComponentA has been created.")
	return c
}

func (c *MyComponentA) MyMethod() {
	if c._console_log {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
	c._logger.Info(context.Background(), "123", "Greetings created.")
}
```
