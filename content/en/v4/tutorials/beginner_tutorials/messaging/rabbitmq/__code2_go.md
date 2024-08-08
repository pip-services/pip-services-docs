
```go
import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	nqueues "github.com/pip-services4/pip-services4-go/pip-services4-nats-go/queues"
)

queue := nqueues.NewNatsMessageQueue("mytopic")

queue.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	// "topic", "mytopic",
	"connection.protocol", "nats",
	"connection.host", "localhost",
	"connection.port", 4222,
	"options.autosubscribe", true,
))
```
