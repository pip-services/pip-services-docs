
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_messaging/pip_services3_messaging.dart';
import 'package:pip_services3_rabbitmq/pip_services3_rabbitmq.dart';

/// Running the container
void main(List<String> argument) async {
  var queue = RabbitMQMessageQueue('my_test');

  queue.configure(ConfigParams.fromTuples([
    'exchange',
    'myqueue', // rabbitmq exchange type
    'queue',
    'myqueue', // queue name
    'options.auto_create',
    true, // autocreate queue
    'connection.host',
    'localhost',
    'connection.port',
    5672,
    // if need credentials
    'credential.username', 'user',
    'credential.password', 'pass123'
  ]));

  await queue.open('123');

  await queue.send('123', MessageEnvelope(null, 'mymessage', 'ABC'));

  var received = await queue.receive('123', 10000); // receive is not supported in dart

  print(received.getMessageAsString());
  print('Task completed');
}

```
