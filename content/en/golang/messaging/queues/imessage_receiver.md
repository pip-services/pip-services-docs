---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-messaging-go"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Methods

#### ReceiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> ReceiveMessage(envelope [*MessageEnvelope](../message_envelope), queue IMessageQueue) (err error)

- **envelope**: [*MessageEnvelope](../message_envelope) - incoming message,
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from.
- **returns**: (err error) -  error or nil no errors occured.

### Examples

```go
type MyMessageReceiver struct {
  func (c*MyMessageReceiver) ReceiveMessage(envelop MessageEnvelop, queue IMessageQueue) {
      fmt.Println("Received message: " + envelop.GetMessageAsString());
  }
}
messageQueue := NewMemoryMessageQueue();
messageQueue.Listen("123", NewMyMessageReceiver());
opnErr := messageQueue.Open("123")
if opnErr == nil{
   messageQueue.Send("123", NewMessageEnvelop("", "mymessage", "ABC")); // Output in console: "Received message: ABC"
}
```
