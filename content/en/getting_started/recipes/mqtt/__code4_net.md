
```cs
using PipServices3.Commons.Config;

queue.Configure(ConfigParams.FromTuples(
    "topic", "mytopic",                 // set topic
    "connection.protocol", "mqtt",
    "connection.host", "localhost",
    "connection.port", 1883,
    "options.qos", "1",                 // sets the qos level to "At least once"
    "options.autosubscribe", true,      // autosubscription on the topic
    "options.serialize_envelope", true  // converts object into mosquitto values 
));

```
