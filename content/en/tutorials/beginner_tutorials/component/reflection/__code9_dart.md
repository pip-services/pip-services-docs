
```dart
// TypeMatcher

import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var objectA1 = ClassA();

  // expected type: Object, actual type: classA, actualvalue: objectA1
  var type1 = TypeMatcher.matchType('Object', TypeCode.Object, objectA1);
  print('classA is an object: $type1');

  // expected type: Object, actual type: String
  var type2 = TypeMatcher.matchTypeByName('Object', TypeCode.String);
  print('String is an object: $type2');

  // expected type: classA, expected value: objectA1
  var type3 = TypeMatcher.matchValueType(TypeCode.Object, objectA1);
  print('objectA1 is of type classA: $type3');

  // expected type: Object, actual value: objectA1
  var type4 = TypeMatcher.matchValueTypeByName('Object', objectA1);
  print('ObjectA1 is of type Object: $type4');

  var string1 = 'Hello World';
  var type5 = TypeMatcher.matchValueTypeByName('String', string1);
  print('string1 is of type String: $type5');
}

class ClassA {
  String param1 = 'hello';
  int param2 = 123;

  int methodA() {
    return 123;
  }
}

```
