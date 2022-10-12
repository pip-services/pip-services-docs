
```go
import cqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"

err = queue.Send(context.Background(), "123", cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
```
