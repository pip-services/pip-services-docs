---
type: docs
title: "IMessageReceiver"
linkTitle: "IMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-messaging-dart"
description: >
  Callback interface to receive incoming messages.
---

### Description

The IMessageReceiver interface is used to receive incoming messages. 

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.

See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> Future receiveMessage([MessageEnvelope](../message_envelope) envelope, [IMessageQueue](../imessage_queue) queue)

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from

### Examples

```dart
import 'package:pip_services3_messaging/pip_services3_messaging.dart';

void main(List<String> argument) async {
  var messageQueue = MemoryMessageQueue();
  messageQueue.listen('123', MyMessageReceiver());
  await messageQueue.open('123');
  await messageQueue.send('123',
      MessageEnvelope(null, 'mymessage', 'ABC')); // Output in console: "ABC"
  await Future.delayed(Duration(milliseconds: 500));
  await messageQueue.close('123');
}

class MyMessageReceiver implements IMessageReceiver {
  @override
  Future receiveMessage(MessageEnvelope envelope, IMessageQueue queue) async {
    print('Received message: ' + envelope.getMessageAsString());
  }
}

```
