
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassA = ClassA();

  // Obtain all property names
  var properties = PropertyReflector.getPropertyNames(myClassA);
  print('The properties of myClassA are: $properties');

  // Find out whether an object has a property or not
  var has_param1 = PropertyReflector.hasProperty(myClassA, 'param1');
  print('ClassA contains param1: $has_param1');

  // Obtain all property names and their values
  var value3 = PropertyReflector.getProperties(myClassA);
  print('The properties of myClassA are: $value3');

  // Change the value of a parameter
  var value1 = PropertyReflector.getProperty(myClassA, 'param2');
  PropertyReflector.setProperty(myClassA, 'param2', 14785);
  var value2 = PropertyReflector.getProperty(myClassA, 'param2');
  print('The value of param2 is: $value1');
  print('The new value of param2 is: $value2');
}

class ClassA {
  String param1 = 'hello';
  int param2 = 123;

  int methodA() {
    return 123;
  }
}

```
