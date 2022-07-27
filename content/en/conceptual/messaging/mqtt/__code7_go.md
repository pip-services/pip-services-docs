
```go
import (
	msgqueues "github.com/pip-services3-go/pip-services3-messaging-go/queues"
)

queue.Send("123", msgqueues.NewMessageEnvelope("", "mymessage", []byte("ABC123")))
```
