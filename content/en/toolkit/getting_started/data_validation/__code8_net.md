
```cs
// Included rule - Case: include 1, 2, 3
var schema = new Schema().WithRule(new IncludedRule(1, 2, 3));

// Case 1: good value
var validation = schema.Validate(2);

if (validation.Count == 0)
{
    Console.WriteLine("No errors");
} else
{
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
}


// Case 2: bad value
validation = schema.Validate(10);

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
