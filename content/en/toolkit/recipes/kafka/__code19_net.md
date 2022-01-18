
```cs
var queue = new KafkaMessageQueue();
queue.Configure(ConfigParams.FromTuples(
    "topic", "mytopic2",
    "connection.protocol", "tcp",
    "connection.host", "localhost",
    "connection.port", 9092,
    "options.autosubscribe", true
));

await queue.OpenAsync(null);

var messageReceiver = new MyMessageReceiver();
queue.BeginListen(null, messageReceiver);

var envelope1 = new MessageEnvelope("123", "Test", "Test message");
await queue.SendAsync(null, envelope1);

// await message
for (var i = 0; i < 15; i++)
{
    if (messageReceiver.MessageCount > 0)
        break;

    await Task.Delay(1000);
}

var envelope2 = messageReceiver.Messages[0];

Console.WriteLine(envelope1.GetMessageAsString() == envelope2.GetMessageAsString());

queue.EndListen(null);
await queue.CloseAsync(null);

```
