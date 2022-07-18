
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) {
  var value1 = RandomText.adjective(); // Possible result: Small
  var value2 = RandomText.color(); // Possible result: White
  var value3 = RandomText.email(); // Possible result: NickStay @Hotel.com
  var value4 = RandomText.fullName(); // Possible result; Dr.Pamela Smith
  var value5 = RandomText.noun(); // Possible result: Car
  var value6 = RandomText.phone(); // Possible result: (147) 371 - 7084
  var value7 = RandomText.phrase(3); // Possible result: Large
  var value8 = RandomText.word(); // Possible result: Hurry
  var value9 = RandomText.verb(); // Possible result: Lay
  var value10 = RandomText.text(5, 20); // Possible result: Small carmack large
}

```
