---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
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
messageQueue.Listen("123", new MyMessageReceiver());

messageQueue.Open("123");
messageQueue.Send("123", new MessageEnvelop(null, "mymessage", "ABC")); // Output in console: "ABC"
```
