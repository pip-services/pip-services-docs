
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  // Obtain properties from a map(dictionary)
  var myMap = {'key1': 123, 'key2': 'ABC'};

  var hasProperty1 = ObjectReader.hasProperty(myMap, 'key1');
  var value1 = ObjectReader.getProperty(myMap, 'key1');
  print('MyMap contains key1: $hasProperty1');
  print('The value of key1 is : $value1');

  // Obtain properties from an array
  var myArray = [1, 2, 3];
  var hasProperty2 = ObjectReader.hasProperty(myArray, '5');
  var hasProperty3 = ObjectReader.hasProperty(myArray, '0');
  var value2 = ObjectReader.getProperty(myArray, '0');

  print('myArray contains an element with index 5: $hasProperty2');
  print('myArray contains an element with index 0: $hasProperty3');
  print('The value stored at postion 0 is: $value2');
}
```
