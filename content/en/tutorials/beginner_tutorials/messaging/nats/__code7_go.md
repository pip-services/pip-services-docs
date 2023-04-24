
```go
// Pre-requisites
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
	nqueues "github.com/pip-services3-gox/pip-services3-nats-gox/queues"
)

func main() {
	// Create and configure a component
	queue := nqueues.NewNatsMessageQueue("mytopic")

	queue.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		// "topic", "mytopic",
		"connection.protocol", "nats",
		"connection.host", "localhost",
		"connection.port", 4222,
		"options.autosubscribe", true,
	))

	// Connect
	err := queue.Open(context.Background(), "123")
	if err != nil {
		panic(err)
	}

	// Send a message
	err = queue.Send(context.Background(), "123", cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
	if err != nil {
		panic(err)
	}

	// Receive a message
	message, err := queue.Receive(context.Background(), "123", 10000)
	if err != nil {
		panic(err)
	}

	fmt.Printf("my message is: %s", message)

	// Close the connection
	err = queue.Close(context.Background(), "123")
	if err != nil {
		panic(err)
	}

	fmt.Println("Program executed")
}
```
