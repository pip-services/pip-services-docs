
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) {
  // Random value between 5 and 10
  var value1 =
      RandomDouble.nextDouble(5, 10); // Possible result: 7.3252274575446155

  // Random value lower than 10
  var value2 =
      RandomDouble.nextDouble(10); // Possible result: 8.104104435251225

  // Random value
  var value3 =
      RandomDouble.updateDouble(10, 5); // Possible result: 8.051623143638789
}


```
