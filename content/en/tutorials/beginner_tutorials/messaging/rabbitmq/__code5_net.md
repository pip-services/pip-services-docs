
```cs
using PipServices3.Messaging.Queues;

await queue.SendAsync("123", new MessageEnvelope(null, "mymessage", "ABC"));
```
