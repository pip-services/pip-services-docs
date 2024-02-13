
```cs
using PipServices3.Messaging.Queues;

class MyMessageReceiver : IMessageReceiver
{
    public async Task ReceiveMessageAsync(MessageEnvelope envelope, IMessageQueue queue)
    {
        Console.WriteLine("Received message: " + envelope.GetMessageAsString());
    }
}

```
