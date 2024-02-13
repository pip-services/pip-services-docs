---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceive interface is used to receive incoming messages. 

### Methods

#### ReceiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> ReceiveMessage(ctx context.Context, envelope [*MessageEnvelope](../message_envelope), queue IMessageQueue) (err error)

- **ctx**: context.Context - operation context.
- **envelope**: [*MessageEnvelope](../message_envelope) - incoming message,
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from.
- **returns**: (err error) -  error or nil no errors occured.

### Examples

```go
type MyMessageReceiver struct {
	func (c*MyMessageReceiver) ReceiveMessage(ctx context.Context, envelop MessageEnvelop, queue IMessageQueue) {
		fmt.Println("Received message: " + envelop.GetMessageAsString())
	}
}

messageQueue := NewMemoryMessageQueue()
messageQueue.Listen("123", NewMyMessageReceiver())

opnErr := messageQueue.Open("123")
if opnErr == nil{
	messageQueue.Send("123", NewMessageEnvelope("", "mymessage", "ABC")) // Output in console: "Received message: ABC"
}
```

