
```go
import (
	"context"
	"fmt"

	cqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
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
