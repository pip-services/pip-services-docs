
```go
import (
	"context"
	"fmt"
	"sync"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	kafkaqueue "github.com/pip-services3-gox/pip-services3-kafka-gox/queues"
)

ctx := context.Background()

queue := kafkaqueue.NewKafkaMessageQueue()
queue.Configure(ctx, conf.NewConfigParamsFromTuples(
	"topic", "mytopic",
	"connection.protocol", "tcp",
	"connection.host", "localhost",
	"connection.port", 9092,
	"options.autosubscribe", true,
))

queue.Open(ctx, "123")
```
