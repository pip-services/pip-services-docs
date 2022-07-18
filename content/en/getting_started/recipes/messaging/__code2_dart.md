
```dart
import 'package:pip_services3_messaging/pip_services3_messaging.dart';

class MyMessageReceiver implements IMessageReceiver {
  @override
  Future receiveMessage(MessageEnvelope envelope, IMessageQueue queue) async {
    print('Received message: ' + envelope.getMessageAsString());
  }
}
```
