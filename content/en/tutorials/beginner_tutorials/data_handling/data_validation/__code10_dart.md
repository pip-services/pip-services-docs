
```dart
// Rule At least one exists - Case: field1, field2
var schema = Schema().withRule(AtLeastOneExistsRule(['field1', 'field2']));

// Case 1: good value
var validation = schema.validate({'field1': 1, 'field2': 'A'});

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
