
```ts
import { ConfigParams, ICleanable } from "pip-services3-commons-nodex";
import { KafkaMessageQueue } from "pip-services3-kafka-nodex";
import { IMessageQueue, IMessageReceiver, MessageEnvelope } from "pip-services3-messaging-nodex";

class MyMessageReceiver implements IMessageReceiver, ICleanable {
    private _messages: MessageEnvelope[] = [];

    constructor() { }

    public get messages(): MessageEnvelope[] {
        return this._messages;
    }

    public get messageCount(): number {
        return this._messages.length;
    }

    public async receiveMessage(envelope: MessageEnvelope, queue: IMessageQueue): Promise<void> {
        this._messages.push(envelope);
    }

    public async clear(correlationId: string): Promise<void> {
        this._messages = [];
    }
}
                      
export async function main() {

    let queue = new KafkaMessageQueue();
    queue.configure(ConfigParams.fromTuples(
        "topic", "mytopic2",
        'connection.protocol', 'tcp',
        "connection.host", "localhost",
        "connection.port", 9092,
        "options.autosubscribe", true
    ));

    await queue.open(null);

    let messageReceiver = new MyMessageReceiver();
    await queue.beginListen(null, messageReceiver);

    let envelope1 = new MessageEnvelope('123', 'Test', 'Test message');
    await queue.send(null, envelope1);

    // await message
    for (let i = 0; i < 15; i++) {
        if (messageReceiver.messages.length > 0) {
            break;
        }
        await new Promise<void>((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    }

    let envelope2 = messageReceiver.messages[0];
    console.log(envelope1.getMessageAsString() == envelope2.getMessageAsString());

    await queue.endListen(null);
    await queue.close(null);
}

```
