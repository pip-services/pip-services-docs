
```go
// NotRule - Case: value different from 1
schema := validate.NewSchema().WithRule(validate.NewNotRule(validate.NewValueComparisonRule("EQ", 1)))

// Case 1: good value
validation := schema.Validate(2)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}

// Case 2: bad value
validation = schema.Validate(1)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}
```
