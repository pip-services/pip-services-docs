
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var locator = Descriptor('mygroup', 'connector', 'aws', 'default', '1.0');

  print(locator.getGroup()); // returns "my_group"
  print(locator.getKind()); // returns "aws"
  print(locator.getName()); // returns "default"
  print(locator.getVersion()); // returns "1.0"
}

```
