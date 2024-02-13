
```ts
let queue = new NatsMessageQueue(); 

queue.configure(ConfigParams.fromTuples(
    "topic", "mytopic",
    "connection.protocol", "nats",
    "connection.host", "localhost",
    "connection.port", 4222,
    "options.autosubscribe", true 
    ));
```
