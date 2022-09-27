
```go
// Comparing 1 <= x <= 10 by using a list of rules
myRules := []validate.IValidationRule{
	validate.NewValueComparisonRule("LTE", 10),
	validate.NewValueComparisonRule("GTE", 1),
}

mySchema := validate.NewSchemaWithRules(false, myRules)

// Case 1: bad value
validation := mySchema.Validate(0)

if len(validation) > 0 {
	// Case: bad value
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
} else {
	// Case: good value
	fmt.Println("Value within range")
}

// Case 2: good value
validation = mySchema.Validate(5)

if len(validation) > 0 {
	// Case: bad value
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
} else {
	// Case: good value
	fmt.Println("Value within range")
}
```
