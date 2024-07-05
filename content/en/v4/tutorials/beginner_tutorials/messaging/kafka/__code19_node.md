
```ts
import { ConfigParams, ICleanable, Context } from "pip-services4-components-node";
import { KafkaMessageQueue } from "pip-services4-kafka-node";
import { IMessageQueue, IMessageReceiver, MessageEnvelope } from "pip-services4-messaging-node";

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

    public async clear(ctx: Context): Promise<void> {
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

    let envelope1 = new MessageEnvelope(null, 'Test', 'Test message');
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
