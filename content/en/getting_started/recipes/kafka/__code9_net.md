
```cs
using PipServices3.Kafka.Connect;

public class MyListener : IKafkaMessageListener
{
    public void OnMessage(KafkaMessage msg)
    {
        Console.WriteLine(Encoding.ASCII.GetString(msg.Message.Value));
    }
}


var myListener = new MyListener();

kc.SubscribeAsync("my_topicA", "My Computer", null, myListener).Wait();

```
