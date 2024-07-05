
```ts
import { ConfigParams } from "pip-services4-components-node";
import { RabbitMQMessageQueue } from 'pip-services4-rabbitmq-node'
import { MessageEnvelope } from 'pip-services4-messaging-node';

export async function main() {

    let queue = new RabbitMQMessageQueue();

    queue.configure(ConfigParams.fromTuples(
        "exchange", "myqueue", // rabbitmq exchange type
        "queue", "myqueue", // queue name
        "options.auto_create", true, // autocreate queue

        "connection.host", "localhost",
        "connection.port", 5672
        // if need credentials
        //"credential.username", "user",
        //"credential.password", "pass123"
    ));

    await queue.open(ctx);

    await queue.send(ctx, new MessageEnvelope(null, "mymessage", "ABC"));

    let received = await queue.receive(ctx, 10000);

    console.log(received.getMessageAsString());
    console.log("Task Completed");
}
```
