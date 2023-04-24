
```go
import (
	"context"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	kafkaconn "github.com/pip-services3-gox/pip-services3-kafka-gox/connect"
)

func main() {
	kc := kafkaconn.NewKafkaConnection()
	config := conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 9092,
	)

	kc.Configure(context.Background(), config)

	kc.Open(context.Background(), "")
}

```
