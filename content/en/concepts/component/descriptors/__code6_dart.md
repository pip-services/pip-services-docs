
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var locator1 = Descriptor('mygroup', 'connector', 'aws', 'default', '1.0');
  var locator2 = Descriptor.fromString('mygroup:connector:*:*:1.0');
  var locator3 = Descriptor.fromString('mygroup:connector:aws:default:1.0');

  locator1.match(locator2!); // returns True
  locator1.exactMatch(locator2); // returns False
  locator1.equals(locator3); // returns True
}

```
