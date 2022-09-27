
```dart
// Pre-requisites
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_messaging/pip_services3_messaging.dart';
import 'package:pip_services3_mqtt/pip_services3_mqtt.dart';

void main(List<String> arguments) async {
  // Component creation and configuration
  var queue = MqttMessageQueue();

  queue.configure(ConfigParams.fromTuples([
    'topic', 'mytopic', // set topic
    'connection.protocol', 'mqtt',
    'connection.host', 'localhost',
    'connection.port', 1883,
    'options.autosubscribe', true, // autosubscription on the topic
    'options.serialize_envelope', true // converts object into musquitto values
  ]));

  // Connection
  await queue.open('123');

  // Send a message
  await queue.send('123', MessageEnvelope(null, 'mymessage', 'ABC1234'));

  // Receive a message
  var message = await queue.receive('123', 10000);
  print(message?.getMessageAsString()); // Prints 'ABC1234'

  // Close the connection
  await queue.close('123');
}

```
