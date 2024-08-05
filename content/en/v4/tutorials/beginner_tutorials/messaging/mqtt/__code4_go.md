
```go
import conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"

queue := mqttqueue.NewMqttMessageQueue("")
queue.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"topic", "mytopic", // set topic
	"connection.protocol", "mqtt",
	"connection.host", "localhost",
	"connection.port", 1883,
	"options.qos", "1", // sets the qos level to "At least once"
	"options.autosubscribe", true, // autosubscription on the topic
	"options.serialize_envelope", true, // converts object into mosquitto values
))
```
