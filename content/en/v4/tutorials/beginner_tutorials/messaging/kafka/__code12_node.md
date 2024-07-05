
```ts
import { ConfigParams } from "pip-services4-components-node";
import { IKafkaMessageListener, KafkaConnection } from "pip-services4-kafka-node";

export async function main() {
    let kc = new KafkaConnection();
    let config = ConfigParams.fromTuples(
        'connection.host', 'localhost',
        'connection.port', 9092
    )

    kc.configure(config);

    await kc.open(null);

    await kc.createQueue("my_queueA");
    await kc.createQueue("my_queueB");
    await kc.createQueue("my_queueC");

    let listOfMessages1 = [{ value: "message 1" }, { value: "message 2" }];
    let listOfMessages2 = [{ value: "message 3" }, { value: "message 4" }];
    let listOfMessages3 = [{ value: "message 5" }, { value: "message 6" }];

    await kc.publish("my_topicA", listOfMessages1, null);
    await kc.publish("my_topicB", listOfMessages2, null);
    await kc.publish("my_topicC", listOfMessages3, null);

    let myListener = new MyListener();

    await kc.subscribe("my_topicA", null, null, myListener);
    await kc.subscribe("my_topicB", null, null, myListener);
    await kc.subscribe("my_topicC", null, null, myListener);

    await kc.close(null);

    console.log('Execution completed!');
}

class MyListener implements IKafkaMessageListener {

    public async onMessage(topic: string, partition: number, message: any): Promise<void> {
        console.log(`${topic}, ${message}`);
    }
}
```
