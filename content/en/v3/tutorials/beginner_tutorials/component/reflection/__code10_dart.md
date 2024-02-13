
```dart
// TypeReflector

import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassA =
      TypeReflector.createInstanceByType(ClassA().runtimeType, []) as ClassA;
  print(
      'The values of param1 and param2 are ${myClassA.param1} and ${myClassA.param2}');
}

class ClassA {
  String param1 = 'hello';
  int param2 = 123;

  int methodA() {
    return 123;
  }
}

```
