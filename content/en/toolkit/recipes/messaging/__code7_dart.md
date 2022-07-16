
```dart
import 'package:pip_services3_messaging/pip_services3_messaging.dart';

void main(List<String> argument) async {
  // Message queue
  var messageQueue = MemoryMessageQueue();
  await messageQueue.open('123');

  // Listener
  // ignore: unawaited_futures
  Future(() {
    messageQueue.listen('123', MyMessageReceiver());
  });

  // Send message
  await messageQueue.send('123', MessageEnvelope(null, 'mymessage', 'ABC'));

  // Close message queue
  await messageQueue.close('123');
}

// Message receiver
class MyMessageReceiver implements IMessageReceiver {
  @override
  Future receiveMessage(MessageEnvelope envelope, IMessageQueue queue) async {
    print('Received message: ' + envelope.getMessageAsString());
  }
}

```
