
```go
import (
	"context"
	"fmt"
	"time"

	cqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"
)

func main() {
	// Message queue
	messageQueue := cqueues.NewMemoryMessageQueue("my_queue")
	err := messageQueue.Open(context.Background())
	if err != nil {
		panic(err)
	}

	// Listener
	go messageQueue.Listen(context.Background(), NewMyMessageReceiver())

	// Send message
	err = messageQueue.Send(context.Background(), cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
	if err != nil {
		panic(err)
	}

	<-time.After(100 * time.Millisecond)

	// Close message queue
	err = messageQueue.Close(context.Background())
	if err != nil {
		panic(err)
	}
}

// Message receiver
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
