
```ts
import { ConfigParams } from 'pip-services3-commons-nodex';
import { MessageEnvelope } from 'pip-services3-messaging-nodex';
import { RabbitMQMessageQueue } from 'pip-services3-rbbitmq-nodex'

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

    await queue.open("123");

    await queue.send("123", new MessageEnvelope(null, "mymessage", "ABC"));

    let received = await queue.receive("123", 10000);

    console.log(received.getMessageAsString());
    console.log("Task Completed");
}
```
