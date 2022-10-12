
```go
queue := nqueues.NewNatsMessageQueue("mytopic")

queue.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	// "topic", "mytopic",
	"connection.protocol", "nats",
	"connection.host", "localhost",
	"connection.port", 4222,
	"options.autosubscribe", true,
))
```
