
```go
// Rule At least one exists - Case: field1, field2
schema := validate.NewSchema().WithRule(validate.NewAtLeastOneExistsRule("field1", "field2"))

// Case 1: good value
validation := schema.Validate(map[string]interface{}{"field1": 1, "field2": "A"})

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}

// Case 2: bad value
validation = schema.Validate(map[string]interface{}{})

if len(validation) == 0 {
	fmt.Println("No errors")
} else {
	fmt.Println(validation[0].Message())
	fmt.Println(validation[0].Code())
}

```
