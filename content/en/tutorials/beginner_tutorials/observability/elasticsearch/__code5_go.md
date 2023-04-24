
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	ellog "github.com/pip-services3-gox/pip-services3-elasticsearch-gox/log"
)

func main() {
	logger := ellog.NewElasticSearchLogger()

	logger.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 9200,
	))

	err := logger.Open(context.Background(), "123")
	if err != nil {
		panic(err)
	}

	mycomponent := NewMyComponentA(logger)
	for i := 0; i < 10; i++ {
		mycomponent.MyMethod(context.Background())
	}

}

type MyComponentA struct {
	_logger      *ellog.ElasticSearchLogger
	_console_log bool
}

func NewMyComponentA(logger *ellog.ElasticSearchLogger) *MyComponentA {
	c := &MyComponentA{}
	c._logger = logger
	c._console_log = true

	c._logger.Info(context.Background(), "123", "MyComponentA has been created.")
	return c
}

func (c *MyComponentA) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c._logger.Configure(ctx, config)
}

func (c *MyComponentA) IsOpen() bool {
	return c._logger.IsOpen()
}

func (c *MyComponentA) Open(ctx context.Context, correlationId string) (err error) {
	return c._logger.Open(ctx, correlationId)
}

func (c *MyComponentA) Close(ctx context.Context, correlationId string) (err error) {
	return c._logger.Close(ctx, correlationId)
}

func (c *MyComponentA) MyMethod(ctx context.Context) {
	if c._console_log {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}
	c._logger.Info(context.Background(), "123", "Greetings created.")

	defer c._logger.Info(ctx, "123", "Finally reached.")
}
```
