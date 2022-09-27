
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var locator1 = Descriptor('mygroup', 'connector', 'aws', 'default', '1.0');
  var locator2 = Descriptor.fromString('mygroup:connector:*:*:1.0');

  locator1.isComplete(); // returns True
  locator2!.isComplete(); // returns False
}


```
