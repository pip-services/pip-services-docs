
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	kafkaconn "github.com/pip-services4/pip-services4-go/pip-services4-kafka-go/connect"
)

func main() {
	kc := kafkaconn.NewKafkaConnection()
	config := conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 9092,
	)

	kc.Configure(context.Background(), config)

	kc.Open(context.Background())
}
```
