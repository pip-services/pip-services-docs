
```ts
import { IKafkaMessageListener } from "pip-services3-kafka-nodex";

class MyListener implements IKafkaMessageListener {

    public async onMessage(topic: string, partition: number, message: any): Promise<void> {
        console.log(`${topic}, ${message}`);
    }
    
}

let myListener = new MyListener();

await kc.subscribe("my_topicA", null, {}, myListener);
```
