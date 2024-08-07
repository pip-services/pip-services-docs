
```go
import (
	"context"
	"fmt"

	ellog "github.com/pip-services4/pip-services4-go/pip-services4-elasticsearch-go/log"
	clog "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/log"
)

type MyComponentA struct {
	_logger      clog.ILogger
	_console_log bool
}

func NewMyComponentA(logger *ellog.ElasticSearchLogger) *MyComponentA {
	c := &MyComponentA{}
	c._logger = logger

	c._logger.Info(context.Background(), "MyComponentA has been created.")
	return c
}

func (c *MyComponentA) MyMethod() {
	if c._console_log {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
	c._logger.Info(context.Background(), "Greetings created.")
}

```
