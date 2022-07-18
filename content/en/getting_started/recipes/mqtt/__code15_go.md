
```cs
queue.Configure(conf.NewConfigParamsFromTuples(
	"topic", "mytopic",                 // set topic
	"connection.protocol", "mqtt",
	"connection.host", "localhost",
	"connection.port", 1883,
	"options.autosubscribe", true,     	// autosubscription on the topic
	"options.serialize_envelope", true, // converts object into musquitto values 
))

```
