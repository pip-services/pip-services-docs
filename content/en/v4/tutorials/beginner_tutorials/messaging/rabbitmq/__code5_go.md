
```go
import cqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"

err = queue.Send(context.Background(), cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
```
