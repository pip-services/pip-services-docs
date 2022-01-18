
```cs
using PipServices3.Commons.Config;
using PipServices3.Kafka.Queues;

var queue = new KafkaMessageQueue();
queue.Configure(ConfigParams.FromTuples(
    "topic", "mytopic",
    "connection.protocol", "tcp",
    "connection.host", "localhost",
    "connection.port", 9092,
    "options.autosubscribe", true
));

await queue.OpenAsync(null);

```
