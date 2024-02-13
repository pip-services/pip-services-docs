
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) {
  var value1 =
      RandomString.distort('hello John'); // Possible result: Hello john
  var value2 = RandomString.nextAlphaChar(); // Possible result: C
  var value3 = RandomString.nextString(5, 10); // Possible result .h*_N9}
  var value4 =
      RandomString.pick(['A', 'B', 'C', 'D', 'E']); // Possible result: c
}


```
