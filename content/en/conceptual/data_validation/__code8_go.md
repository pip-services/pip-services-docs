
```go
// Included rule - Case: include 1, 2, 3
schema := validate.NewSchema().WithRule(validate.NewIncludedRule(1, 2, 3))

// Case 1: good value
validation := schema.Validate(2)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}

// Case 2: bad value
validation = schema.Validate(10)

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}
```
