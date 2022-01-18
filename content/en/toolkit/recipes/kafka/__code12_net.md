
```cs
using Confluent.Kafka;

using PipServices3.Commons.Config;
using PipServices3.Kafka.Connect;


var kc = new KafkaConnection();
var config = ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 9092
);

kc.Configure(config);
await kc.OpenAsync(null);

await kc.CreateQueueAsync("my_queueA");
await kc.CreateQueueAsync("my_queueB");
await kc.CreateQueueAsync("my_queueC");

var messages = new List<Message<byte[], byte[]>>();
for (var i = 0; i < 3; i++)
{
    var message = new Message<byte[], byte[]>();
    message.Value = Encoding.ASCII.GetBytes("message " + i.ToString());
    messages.Add(message);
}

await kc.PublishAsync("my_topicA", messages[0]);
await kc.PublishAsync("my_topicB", messages[1]);
await kc.PublishAsync("my_topicC", messages[2]);

var myListener = new MyListener();

await kc.SubscribeAsync("my_topicA", "My Computer", null, myListener);
await kc.SubscribeAsync("my_topicB", "My Computer", null, myListener);
await kc.SubscribeAsync("my_topicC", "My Computer", null, myListener);

await kc.CloseAsync(null);


public class MyListener : IKafkaMessageListener
{
    public void OnMessage(KafkaMessage msg)
    {
        Console.WriteLine(Encoding.ASCII.GetString(msg.Message.Value));
    }
}

```
