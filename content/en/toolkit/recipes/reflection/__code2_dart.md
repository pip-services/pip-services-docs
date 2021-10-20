
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassA = ClassA();
  // Obtain all properties in ClassA

  var properties = ObjectReader.getPropertyNames(myClassA);
  print('The properties in myClassA are: $properties');

  // Obtain the value of a property in classA
  var value1 = ObjectReader.getProperty(myClassA, 'param1');
  print('The value of param1 is: $value1');

  var value2 = ObjectReader.getProperties(myClassA);
  print('The properties and values in myClassA are: $value2');
}

class ClassA {
  String param1 = 'hello';
  int param2 = 123;

  int methodA() {
    return 123;
  }
}

```
