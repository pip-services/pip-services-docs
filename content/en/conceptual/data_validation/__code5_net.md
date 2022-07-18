
```cs
// NotRule - Case: value different from 1
var schema = new Schema().WithRule(new NotRule(new ValueComparisonRule("EQ", 1)));

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
validation = schema.Validate(1);

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
