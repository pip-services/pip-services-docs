
```cs
var messageQueue = new MemoryMessageQueue();
await messageQueue.OpenAsync("123");   // correlationId = "123"

```
