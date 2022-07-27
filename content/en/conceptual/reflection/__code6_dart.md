
```dart
// Property reflector

import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassA = ClassA();
  var myClassB = ClassB();

  var value1 = RecursiveObjectReader.getPropertyNames(myClassA);
  print('The property names of myClassA are: $value1');

  var value2 = RecursiveObjectReader.hasProperty(myClassB, 'param5');
  print('myClassB contains param5: $value2');

  var value3 = RecursiveObjectReader.getProperties(myClassB);
  print('The properties of myClassB are: $value3');

  var value4 = RecursiveObjectReader.getProperty(myClassB, 'param4');
  print('The value of param4 is: $value4');
}

class ClassA {
  String param1 = 'hello';
  int param2 = 123;

  int methodA() {
    return 123;
  }
}

class ClassAa {
  String param5 = 'hello aa';
}

class ClassB extends ClassA {
  String param4 = 'inside 2';
}

```
