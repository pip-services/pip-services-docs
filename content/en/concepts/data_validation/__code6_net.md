
```cs
// AndRule - Case:  1<= x <= 10
var schema = new Schema().WithRule(new AndRule(new ValueComparisonRule("GTE", 1), new ValueComparisonRule("LTE", 10)));

// Case 1: good value
var validation = schema.Validate(1);

if (validation.Count == 0)
{
    Console.WriteLine("No errors");
} else
{
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
}


// Case 2: bad value
validation = schema.Validate(12);

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
