
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	kafkaqueue "github.com/pip-services4/pip-services4-go/pip-services4-kafka-go/queues"
)


ctx := context.Background()

queue := kafkaqueue.NewKafkaMessageQueue("")
queue.Configure(ctx, conf.NewConfigParamsFromTuples(
	"topic", "mytopic",
	"connection.protocol", "tcp",
	"connection.host", "localhost",
	"connection.port", 9092,
	"options.autosubscribe", true,
))

queue.Open(ctx)
```
