
```cs
var queue = new NatsMessageQueue();

queue.Configure(ConfigParams.FromTuples(
    "topic", "mytopic",
    "connection.protocol", "nats",
    "connection.host", "localhost",
    "connection.port", 4222,
    "options.autosubscribe", true
));

```
