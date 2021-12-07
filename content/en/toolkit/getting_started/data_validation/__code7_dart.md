
```dart
// Or rule - Case x < 1 OR x > 10
var schema = Schema().withRule(OrRule([ValueComparisonRule('LT', 1), ValueComparisonRule('GT', 10)]));

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
