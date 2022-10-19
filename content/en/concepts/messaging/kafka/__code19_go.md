
```go
import (
	"context"
	"fmt"
	"sync"
	"time"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	kafkaqueue "github.com/pip-services3-gox/pip-services3-kafka-gox/queues"
	cqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
)

func main() {
	ctx := context.Background()

	queue := kafkaqueue.NewKafkaMessageQueue("my_queue")
	queue.Configure(ctx, conf.NewConfigParamsFromTuples(
		// "topic", "my_queue",
		"connection.protocol", "tcp",
		"connection.host", "localhost",
		"connection.port", 9092,
		"options.autosubscribe", true,
	))

	err := queue.Open(ctx, "123")
	if err != nil {
		panic(err)
	}

	messageReceiver := NewMyMessageReceiver()
	queue.BeginListen(ctx, "123", messageReceiver)

	envelope1 := cqueues.NewMessageEnvelope("123", "Test", []byte("Test message"))
	err = queue.Send(ctx, "123", envelope1)
	if err != nil {
		panic(err)
	}

	// wait message
	for i := 0; i < 15; i++ {
		if messageReceiver.MessageCount() > 0 {
			fmt.Println(messageReceiver.MessageCount())
			break
		}
		<-time.After(500 * time.Millisecond)
	}

	envelope2 := messageReceiver.Messages()[0]
	fmt.Println(envelope1.GetMessageAsString() == envelope2.GetMessageAsString())

	queue.EndListen(ctx, "123")
	err = queue.Close(ctx, "123")
	if err != nil {
		panic(err)
	}
}

type MyMessageReceiver struct {
	_messages []*cqueues.MessageEnvelope
	lock      sync.Mutex
}

func NewMyMessageReceiver() *MyMessageReceiver {
	c := &MyMessageReceiver{
		_messages: make([]*cqueues.MessageEnvelope, 0),
	}
	return c
}

func (c *MyMessageReceiver) Messages() []*cqueues.MessageEnvelope {
	c.lock.Lock()
	defer c.lock.Unlock()
	return c._messages
}

func (c *MyMessageReceiver) MessageCount() int {
	c.lock.Lock()
	defer c.lock.Unlock()
	return len(c._messages)
}

func (c *MyMessageReceiver) Clear(ctx context.Context, correlationId string) error {
	c.lock.Lock()
	defer c.lock.Unlock()
	c._messages = make([]*cqueues.MessageEnvelope, 0)
	return nil
}

func (c *MyMessageReceiver) ReceiveMessage(ctx context.Context, envelope *cqueues.MessageEnvelope, queue cqueues.IMessageQueue) (err error) {
	c.lock.Lock()
	defer c.lock.Unlock()
	c._messages = append(c._messages, envelope)
	return nil
}

```
