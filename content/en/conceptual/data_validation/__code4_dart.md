
```dart
// Comparing 1 <= x <= 10 by using a list of rules
var myRules = [ValueComparisonRule('LTE', 10), ValueComparisonRule('GTE', 1)];
var schema = Schema(false, myRules);

// Case 1: bad value
var validation = schema.validate(0);

if (validation.isNotEmpty) {
  // Case: bad value
  print(validation[0].getMessage());
  print(validation[0].getCode());
} else {
  // Case: good value
  print('Value within range');
}

// Case 2: good value
validation = schema.validate(5);

if (validation.isNotEmpty) {
  // Case: bad value
  print(validation[0].getMessage());
  print(validation[0].getCode());
} else {
  // Case: good value
  print('Value within range');
}

```
