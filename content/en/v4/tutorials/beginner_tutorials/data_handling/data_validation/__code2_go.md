
```go
// Comparing 1 < x < 10 by using a list of rules
myRules := []validate.IValidationRule{validate.NewValueComparisonRule("LTE", 10), validate.NewValueComparisonRule("GTE", 1)}
mySchema := validate.NewSchemaWithRules(false, myRules)
```
