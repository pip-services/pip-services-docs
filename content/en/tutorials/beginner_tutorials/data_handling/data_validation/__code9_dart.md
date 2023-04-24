
```dart
// Excluded rule - Case: excluded values are 1, 2 3
var schema = Schema().withRule(ExcludedRule([1, 2, 3]));

// Case 1: good value
var validation = schema.validate(10);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

// Case 2: bad value
validation = schema.validate(2);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

```
