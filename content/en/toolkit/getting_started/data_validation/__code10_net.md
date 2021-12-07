
```cs
// Rule At least one exists - Case: field1, field2
var schema = new Schema().WithRule(new AtLeastOneExistsRule("field1", "field2"));

// Case 1: good value
var validation = schema.Validate(new Dictionary<string, dynamic> { { "field1", 1 }, { "field2", "A"} });

if (validation.Count == 0)
{
    Console.WriteLine("No errors");
} else
{
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
}


// Case 2: bad value
validation = schema.Validate(2);

if (validation.Count == 0)
{
    Console.WriteLine("No errors");
}
else
{
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
}

```