
```dart
// AndRule - Case:  1<= x <= 10
var schema = Schema().withRule(AndRule([ValueComparisonRule('GTE', 1), ValueComparisonRule('LTE', 10)]));

// Case 1: good value
var validation = schema.validate(1);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

// Case 2: bad value
validation = schema.validate(12);

if (validation.isEmpty) {
  print('No errors');
} else {
  print(validation[0].getMessage());
  print(validation[0].getCode());
}

```
