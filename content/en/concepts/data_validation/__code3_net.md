
```cs
// Comparing 1 < x < 10 by using the AND rule
var mySchema2 = new Schema().WithRule(new AndRule(new ValueComparisonRule("GTE", 1), new ValueComparisonRule("LTE", 10)));
```
