
```dart
// Comparing 1 < x < 10 by using the AND rule
var mySchema2 = Schema().withRule(AndRule([ValueComparisonRule('GTE', 1), ValueComparisonRule('LTE', 10)]));
```
