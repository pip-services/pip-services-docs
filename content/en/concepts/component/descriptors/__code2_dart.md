
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  // Locate all connectors(match by type)
  var locator = Descriptor.fromString('*:connector:*:*:*');

  // Locate all connectors for a specific microservice(match by group and type)
  locator = Descriptor.fromString('mygroup:connector:*:*:*');

  // Locate a specific component(match by name)
  locator = Descriptor.fromString('*:*:*:my_name:*');
}


```
