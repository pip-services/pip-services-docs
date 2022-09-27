
```dart
// NotRule - Case: value different from 1
var schema = Schema().withRule(NotRule(ValueComparisonRule('EQ', 1)));

// Case 1: good value
var validation = schema.validate(2);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

// Case 2: bad value
validation = schema.validate(1);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

```
