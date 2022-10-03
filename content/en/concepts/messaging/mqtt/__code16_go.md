
```go
import (
	"fmt"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	msgqueues "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
	mqttqueue "github.com/pip-services3-go/pip-services3-mqtt-go/queues"
)

func main() {
	// Component creation and configuration
	queue := mqttqueue.NewMqttMessageQueue("")

	queue.Configure(context.Background(), conf.NewConfigParamsFromTuples(
		"topic", "mytopic", // set topic
		"connection.protocol", "mqtt",
		"connection.host", "localhost",
		"connection.port", 1883,
		"options.autosubscribe", true, // autosubscription on the topic
		"options.serialize_envelope", true, // converts object into musquitto values
	))

	// Connection
	queue.Open(context.Background(), "123")

	// Send a message
	queue.Send(context.Background(), "123", msgqueues.NewMessageEnvelope("", "mymessage", []byte("ABC1234")))

	// Receive a message
	message, _ := queue.Receive(context.Background(), "123", 10000)
	fmt.Println(message.GetMessageAsString())

	// Close the connection
	queue.Close(context.Background(), "123")
}

```
