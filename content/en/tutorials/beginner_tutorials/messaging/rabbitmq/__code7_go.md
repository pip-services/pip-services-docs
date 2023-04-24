
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
	rqueues "github.com/pip-services3-gox/pip-services3-rabbitmq-gox/queues"
)

func main() {
	// Create and configure a component
	queue := rqueues.NewEmptyRabbitMQMessageQueue("my_topic")

	queue.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"exchange", "myqueue", // rabbitmq exchange type
		"queue", "myqueue", // queue name
		"options.auto_create", true, // autocreate queue
		"connection.host", "localhost",
		"connection.port", 5672,
		// if need credentials
		"credential.username", "user",
		"credential.password", "password",
	))

	err := queue.Open(context.Background(), "123")
	if err != nil {
		panic(err)
	}

	err = queue.Send(context.Background(), "123", cqueues.NewMessageEnvelope("123", "mymessage", []byte("ABC")))
	if err != nil {
		panic(err)
	}

	received, err := queue.Receive(context.Background(), "123", 10000)
	if err != nil {
		panic(err)
	}

	fmt.Println(received.GetMessageAsString())
	fmt.Println("Task completed")
}
```
