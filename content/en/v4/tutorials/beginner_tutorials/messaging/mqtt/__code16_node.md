
```ts
import { ConfigParams } from "pip-services4-components-node";
import { MqttMessageQueue } from "pip-services4-mqtt-node";
import { MessageEnvelope } from "pip-services4-messaging-node";

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
    await queue.open(ctx);

    // Send a message
    await queue.send(ctx, new MessageEnvelope(null, "mymessage", "ABC1234"));

    // Receive a message
    var message = await queue.receive(ctx, 10000);
    console.log(message.getMessageAsString()); // Prints 'ABC1234'

    // Close the connection
    await queue.close(ctx);
}
```
