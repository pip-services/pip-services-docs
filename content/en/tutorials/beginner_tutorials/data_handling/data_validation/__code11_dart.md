
```dart
var schema = Schema().withRule(ValueComparisonRule('LT', 1));

// Case 1: good value
var validation = schema.validate(0);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

// Case 2: bad value
validation = schema.validate(5);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

```
