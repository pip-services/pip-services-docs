
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"
	nqueues "github.com/pip-services4/pip-services4-go/pip-services4-nats-go/queues"
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
	err := queue.Open(context.Background())
	if err != nil {
		panic(err)
	}

	// Send a message
	err = queue.Send(context.Background(), cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
	if err != nil {
		panic(err)
	}

	// Receive a message
	message, err := queue.Receive(context.Background(), 10000)
	if err != nil {
		panic(err)
	}

	fmt.Printf("my message is: %s", message)

	// Close the connection
	err = queue.Close(context.Background())
	if err != nil {
		panic(err)
	}

	fmt.Println("Program executed")
}
```
