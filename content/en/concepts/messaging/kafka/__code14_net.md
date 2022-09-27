
```cs
using System.Threading;
using PipServices3.Messaging.Queues;

ThreadPool.QueueUserWorkItem(async delegate {
    Thread.Sleep(500);
    await queue.SendAsync(null, new MessageEnvelope("123", "mymessage", "ABC"));
});
```
