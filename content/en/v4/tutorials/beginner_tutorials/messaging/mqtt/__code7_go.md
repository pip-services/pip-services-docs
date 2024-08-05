
```go
import msgqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"

queue.Send(context.Background(), msgqueues.NewMessageEnvelope("", "mymessage", []byte("ABC123")))
```
