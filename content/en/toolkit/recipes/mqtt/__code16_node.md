
```ts
// Pre-requisites
import { ConfigParams } from "pip-services3-commons-nodex";
import { MessageEnvelope } from "pip-services3-messaging-nodex";
import { MqttMessageQueue } from "pip-services3-mqtt-nodex";

export async function main() { 
    // Component creation and configuration
    var queue = new MqttMessageQueue();

    queue.configure(ConfigParams.fromTuples(
        "topic", "mytopic",                 // set topic
        "connection.protocol", "mqtt",
        "connection.host", "localhost",
        "connection.port", 1883,
        "options.autosubscribe", true,      // autosubscription on the topic
        "options.serialize_envelope", true  // converts object into musquitto values 
    ));

    // Connection
    await queue.open("123");

    // Send a message
    await queue.send("123", new MessageEnvelope(null, "mymessage", "ABC1234"));

    // Receive a message
    var message = await queue.receive("123", 10000);
    console.log(message.getMessageAsString()); // Prints 'ABC1234'

    // Close the connection
    await queue.close("123");
}
```
