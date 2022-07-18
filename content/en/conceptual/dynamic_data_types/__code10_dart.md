
```dart
// Constructor
var value1 = AnyValueArray([1, 2, 3]);

// String
var myString = '1.2.3';
var value2 = AnyValueArray.fromString(myString, '.');

// List
var myList = [1, 2, 3];
var value = AnyValueArray.fromValue(myList);

// Cloning
value2 = value.clone(); // Returns value2 as AnyValueArry with values 1,2,3
```
