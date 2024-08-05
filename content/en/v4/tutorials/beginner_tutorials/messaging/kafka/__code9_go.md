
```go
import (
	"fmt"
	"sync"

	kafka "github.com/Shopify/sarama"
)

type MyListener struct {
	ready chan bool
	Lock  sync.Mutex
}

func NewMyListener() *MyListener {
	c := &MyListener{}
	c.ready = make(chan bool)
	return c
}

// Setup is run at the beginning of a new session, before ConsumeClaim.
func (c *MyListener) Setup(kafka.ConsumerGroupSession) error {
	// Mark the consumer as ready
	c.ready <- true
	close(c.ready)
	return nil
}

// Cleanup is run at the end of a session, once all ConsumeClaim goroutines have exited
// but before the offsets are committed for the very last time.
func (c *MyListener) Cleanup(kafka.ConsumerGroupSession) error {
	return nil
}

// ConsumeClaim must start a consumer loop of ConsumerGroupClaim's Messages().
// Once the Messages() channel is closed, the Handler must finish its processing
// loop and exit.
func (c *MyListener) ConsumeClaim(session kafka.ConsumerGroupSession, claim kafka.ConsumerGroupClaim) error {
	for {
		// if len(c.readablePartitions) == 0 || slices.Contains(c.readablePartitions, claim.Partition()) {
		select {
		case msg := <-claim.Messages():
			if msg != nil {
				fmt.Printf("%s, %s", msg.Topic, msg.Value)
			}
		// Should return when `session.Context()` is done.
		// If not, will raise `ErrRebalanceInProgress` or `read tcp <ip>:<port>: i/o timeout` when kafka rebalance. see:
		// https://github.com/Shopify/sarama/issues/1192
		case <-session.Context().Done():
			return nil
		}
		// }
	}
}

func (c *MyListener) SetReady(chFlag chan bool) {
	c.Lock.Lock()
	defer c.Lock.Unlock()
	c.ready = chFlag
}

// Returns: channel with bool flag ready
func (c *MyListener) Ready() chan bool {
	return c.ready
}

myListener := NewMyListener()

kc.Subscribe(context.Background(), "my_topicA", "", kafka.NewConfig(), myListener)
```
