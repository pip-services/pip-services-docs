
```dart
var value = AnyValue('123.456');
var value2 = value.clone();

var result1 = value.equals(value2); // Returns True

var result2 = value.equalsAsType(TypeCode.Object, value2); // Returns True
```
