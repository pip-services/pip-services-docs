
```dart
// Find out if it contains a value
var value = AnyValueArray([1, '123.456', '2018-01-01']);

var res = value.contains(1); // Returns True

var result = value.containsAsType(TypeCode.Integer, 1); // Returns True
```
