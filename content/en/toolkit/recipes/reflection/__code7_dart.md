
```dart
// RecursiveObjectWriter

import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassB = ClassB();
  var myClassC = ClassB();

  // set_property
  RecursiveObjectWriter.setProperty(myClassB, 'param2', 'new value');
  var value1 = RecursiveObjectReader.getProperty(myClassB, 'param2');
  print('The new values for the myClassB object are: $value1');

  // set_properties
  var myMap = {'param1': 789456, 'param2': 'ABCaccc'};
  RecursiveObjectWriter.setProperties(myClassB, myMap);
  var value2 = RecursiveObjectReader.getProperties(myClassB);
  print('The new values for the myClassB object are: $value2');

  // copy_proerties
  var value3 = RecursiveObjectReader.getProperties(myClassC);
  print('The properties of myClassC and their values are: $value3');
  RecursiveObjectWriter.copyProperties(myClassC, myClassB);
  var value4 = RecursiveObjectReader.getProperties(myClassC);
  print('The new properties of myClassC and their values are: $value4');
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
