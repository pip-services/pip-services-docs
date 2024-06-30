
```go
schema := validate.NewSchema().WithRule(validate.NewValueComparisonRule("LT", 1))

// Case 1: good value
validation := schema.Validate(0)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}

// Case 2: bad value
validation = schema.Validate(5)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}
```
