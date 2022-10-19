
```go
import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	rqueues "github.com/pip-services3-gox/pip-services3-rabbitmq-gox/queues"
)

queue.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"exchange", "myqueue", // rabbitmq exchange type
	"queue", "myqueue", // queue name
	"options.auto_create", true, // autocreate queue
	"connection.host", "localhost",
	"connection.port", 5672,
	// if need credentials
	//"credential.username", "user",
	//"credential.password", "pass123"
))
```
