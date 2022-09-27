
```cs
var message = new Message<byte[], byte[]>();
message.Value = Encoding.ASCII.GetBytes("message 1");

await kc.PublishAsync("my_topicA", message);
```
