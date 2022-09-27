
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassA = ClassA();

  var value1 = ObjectReader.getProperty(myClassA, 'param1');
  print('The value of param1 is: $value1');

  ObjectWriter.setProperty(myClassA, 'param1', 'hello 2');
  var value2 = ObjectReader.getProperty(myClassA, 'param1');
  print('The new value of param1 is: $value2');

  var myMap1 = {'param1': 123, 'param2': 'ABC'};
  ObjectWriter.setProperties(myClassA, myMap1);
  var value3 = ObjectReader.getProperties(myClassA);
  print('The new parameter values are: $value3');

  // Map(dictionary)
  var myMap2 = {'key1': 123, 'key2': 'ABC'};
  ObjectWriter.setProperties(myMap2, {'key1': 15422, 'key2': 'ab'});
  var value4 = ObjectReader.getProperties(myMap2);
  print('The new values in the map are : $value4');

  var myMap3 = {'key1': 123, 'key2': 'ABC'};
  ObjectWriter.setProperty(myMap3, 'key1', 'XYZ');
  value2 = ObjectReader.getProperty(myMap3, 'key1');
  print('The new value in the map is : $value2');

  // Array
  var myArray = [1, 2, 3];
  ObjectWriter.setProperty(myArray, '0', 123);
  var value5 = ObjectReader.getProperty(myArray, '0');
  print('The new value in the array is : $value5');
}

class ClassA {
  String param1 = 'hello';
  int param2 = 123;

  int methodA() {
    return 123;
  }
}

```
