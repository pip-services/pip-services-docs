
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) {
  // Random value between 5 and 10
  var value1 = RandomInteger.nextInteger(5, 10); // Possible result: 5

  // Random value lower than 10
  var value2 = RandomInteger.nextInteger(10); // Possible result: 4

  // Random value
  var value3 = RandomInteger.updateInteger(10, 3); // Possible result: 12
}

```
