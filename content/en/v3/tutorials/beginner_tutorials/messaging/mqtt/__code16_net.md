
```cs
// Pre-requisites
using System;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Messaging.Queues;
using PipServices3.Mqtt.Queues;

// Component creation and configuration
var queue = new MqttMessageQueue();

queue.Configure(ConfigParams.FromTuples(
    "topic", "mytopic",                 // set topic
    "connection.protocol", "mqtt",
    "connection.host", "localhost",
    "connection.port", 1883,
    "options.autosubscribe", true,      // autosubscription on the topic
    "options.serialize_envelope", true  // converts object into musquitto values 
));

// Connection
await queue.OpenAsync("123");

// Send a message
await queue.SendAsync("123", new MessageEnvelope(null, "mymessage", "ABC1234"));

// Receive a message
var message = await queue.ReceiveAsync("123", 10000);
Console.WriteLine(message.GetMessageAsString()); // Prints 'ABC1234'

// Close the connection
await queue.CloseAsync("123");

```
