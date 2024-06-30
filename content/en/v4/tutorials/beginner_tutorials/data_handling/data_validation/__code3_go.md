
```go
// Comparing 1 < x < 10 by using the AND rule
mySchema2 := validate.NewSchema().WithRule(
	validate.NewAndRule(
		validate.NewValueComparisonRule("GTE", 1),
		validate.NewValueComparisonRule("LTE", 10),
))
```
