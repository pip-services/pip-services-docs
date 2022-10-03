
```go
import (
	msgqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
)

queue.Send(context.Background(), "123", msgqueues.NewMessageEnvelope("", "mymessage", []byte("ABC123")))
```
