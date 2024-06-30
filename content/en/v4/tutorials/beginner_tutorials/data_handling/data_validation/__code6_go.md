
```go

// AndRule - Case:  1<= x <= 10
schema := validate.NewSchema().WithRule(validate.NewAndRule(
	validate.NewValueComparisonRule("GTE", 1),
	validate.NewValueComparisonRule("LTE", 10),
))

// Case 1: good value
validation := schema.Validate(1)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}

// Case 2: bad value
validation = schema.Validate(12)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}
```
