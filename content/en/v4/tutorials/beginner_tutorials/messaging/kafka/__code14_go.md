
```go
import cqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"

err := queue.Send(ctx, cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
```
