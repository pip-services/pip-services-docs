
```go
import (
	"context"
	"fmt"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	msgqueues "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"
	mqttqueue "github.com/pip-services4/pip-services4-go/pip-services4-mqtt-go/queues"
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
	queue.Open(context.Background())

	// Send a message
	queue.Send(context.Background(), msgqueues.NewMessageEnvelope("", "mymessage", []byte("ABC1234")))

	// Receive a message
	message, _ := queue.Receive(context.Background(), 10000)
	fmt.Println(message.GetMessageAsString())

	// Close the connection
	queue.Close(context.Background())
}
```
