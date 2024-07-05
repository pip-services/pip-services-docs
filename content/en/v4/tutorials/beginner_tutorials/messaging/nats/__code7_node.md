
```ts
import { ConfigParams } from "pip-services4-components-node";
import { MessageEnvelope } from "pip-services4-messaging-node";
import { NatsMessageQueue } from 'pip-services4-nats-node';

export async function main() {

    // Create and configure a component
    let queue = new NatsMessageQueue(); 

    queue.configure(ConfigParams.fromTuples(
        "topic", "mytopic",
        "connection.protocol", "nats",
        "connection.host", "localhost",
        "connection.port", 4222,
        'options.autosubscribe', true 
    ));

    // Connect
    await queue.open(ctx);

    // Send a message
    await queue.send(ctx, new MessageEnvelope(ctx, "mymessage", "ABC"));

    // Receive a message
    let message = await queue.receive(ctx, 10000); 
    console.log('my message is: ' + message)

    // Close the connection
    await queue.close(ctx)
    console.log('Program executed');
}
```
