---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-messaging-dotnet"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> Task ReceiveMessageAsync([MessageEnvelope](../message_envelope) envelope, [IMessageQueue](../imessage_queue) queue)

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from

### Examples

```cs
class MyMessageReceiver: IMessageReceiver 
{
    public void ReceiveMessage(MessageEnvelop envelop, IMessageQueue queue)
    {
        Console.Out.WriteLine("Received message: " + envelop.getMessageAsString());
        ...
    }
}

var messageQueue = new MemoryMessageQueue();

Task.Run(() => messageQueue.ListenAsync("123", new MyMessageReceiver()));

await messageQueue.OpenAsync("123");
await messageQueue.SendAsync("123", new MessageEnvelope(null, "mymessage", "ABC")); // Output in console: "ABC"

Thread.Sleep(500);

await messageQueue.CloseAsync("123");
```
