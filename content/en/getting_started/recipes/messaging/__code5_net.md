
```cs
using PipServices3.Messaging.Queues;

await messageQueue.SendAsync("123", new MessageEnvelope(null, "mymessage", "ABC"));
```
