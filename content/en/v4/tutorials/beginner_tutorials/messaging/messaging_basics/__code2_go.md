
```go
import (
	"context"
	"fmt"

	cqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"
)

type MyMessageReceiver struct {
}

func NewMyMessageReceiver() *MyMessageReceiver {
	c := &MyMessageReceiver{}
	return c
}

func (c *MyMessageReceiver) ReceiveMessage(ctx context.Context, envelope *cqueues.MessageEnvelope, queue cqueues.IMessageQueue) (err error) {
	fmt.Println("Received message: " + envelope.GetMessageAsString())
	return nil
}
```
