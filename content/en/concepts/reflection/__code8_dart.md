
```dart
// TypeDescriptor

import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  // Create type descriptors
  var type1 = TypeDescriptor('ClassA', 'library1');
  var type2 = TypeDescriptor('ClassB', 'library1');

  // equals
  var result1 = type1.equals(type2);
  print('type1 equals type2: $result1');

  // get_library
  var library1 = type1.getLibrary();
  print('The library of type1: $library1');

  // get_name
  var name1 = type1.getName();
  print('The name of type1 is: $name1');

  // from_string
  var typeDescriptor = TypeDescriptor.fromString('classA,library1');
  print('Type descriptor: $typeDescriptor');
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
