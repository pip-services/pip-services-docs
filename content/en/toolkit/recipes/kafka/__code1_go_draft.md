
```go
import (
	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
	kafkaconn "github.com/pip-services3-go/pip-services3-kafka-go/connect"
)

kc := kafkaconn.NewKafkaConnection()
config := conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 9092,
)

kc.Configure(config)

kc.Open("")

```
