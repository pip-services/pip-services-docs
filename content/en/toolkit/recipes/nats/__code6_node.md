
```ts
// Pre-requisites
import { ConfigParams } from 'pip-services3-commons-nodex';
import { NatsMessageQueue } from 'pip-services3-nats-nodex';

import { MessageEnvelope } from 'pip-services3-messaging-nodex';

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
    await queue.open("123");

    // Send a message
    await queue.send("123", new MessageEnvelope("123", "mymessage", "ABC"));

    // Receive a message
    let message = await queue.receive("123", 10000); 
    console.log('my message is: ' + message)

    // Close the connection
    await queue.close(null)
    console.log('Program executed');
}
```
