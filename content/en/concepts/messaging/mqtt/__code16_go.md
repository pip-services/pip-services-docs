
```go
import (
	"fmt"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	msgqueues "github.com/pip-services3-go/pip-services3-messaging-go/queues"
	mqttqueue "github.com/pip-services3-go/pip-services3-mqtt-go/queues"
)

func main() {
	// Component creation and configuration
	queue := mqttqueue.NewMqttMessageQueue("")

	queue.Configure(conf.NewConfigParamsFromTuples(
		"topic", "mytopic", // set topic
		"connection.protocol", "mqtt",
		"connection.host", "localhost",
		"connection.port", 1883,
		"options.autosubscribe", true, // autosubscription on the topic
		"options.serialize_envelope", true, // converts object into musquitto values
	))

	// Connection
	queue.Open("123")

	// Send a message
	queue.Send("123", msgqueues.NewMessageEnvelope("", "mymessage", []byte("ABC1234")))

	// Receive a message
	message, _ := queue.Receive("123", 10000)
	fmt.Println(message.GetMessageAsString())

	// Close the connection
	queue.Close("123")
}

```
