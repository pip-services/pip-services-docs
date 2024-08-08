
```go
import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	rqueues "github.com/pip-services4/pip-services4-go/pip-services4-rabbitmq-go/queues"
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
