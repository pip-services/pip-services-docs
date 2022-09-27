
```cs
// Or rule - Case x < 1 OR x > 10
var schema = new Schema().WithRule(new OrRule(new ValueComparisonRule("LT", 1), new ValueComparisonRule("GT", 10)));

// Case 1: good value
var validation = schema.Validate(0);

if (validation.Count == 0)
{
    Console.WriteLine("No errors");
} else
{
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
}


// Case 2: bad value
validation = schema.Validate(5);

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
