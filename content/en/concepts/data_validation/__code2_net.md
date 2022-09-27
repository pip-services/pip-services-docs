
```cs
// Comparing 1 < x < 10 by using a list of rules
var myRules = new List<IValidationRule>() { new ValueComparisonRule("LTE", 10), new ValueComparisonRule("GTE", 1) };
var mySchema1 = new Schema(false, myRules);


```
