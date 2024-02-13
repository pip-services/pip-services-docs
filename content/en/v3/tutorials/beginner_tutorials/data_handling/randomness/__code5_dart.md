
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) {
  // Random value between 5 and 10
  var value1 =
      RandomFloat.nextFloat(5, 10); // Possible result: 8.109282778264653

  // Random value lower than 10
  var value2 = RandomFloat.nextFloat(10); // Possible result: 5.281760648272185

  // Random value
  var value3 =
      RandomFloat.updateFloat(10, 3); // Possible result: 7.731874405844179
}


```
