
```cs
using PipServices3.Commons.Config;
using PipServices3.Kafka.Connect;

var kc = new KafkaConnection();
var config = ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 9092
);

kc.Configure(config);

await kc.OpenAsync(null);

```
