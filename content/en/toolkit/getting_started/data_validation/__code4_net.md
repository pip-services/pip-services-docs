
```cs
// Comparing 1 <= x <= 10 by using a list of rules
var myRules = new List<IValidationRule> { new ValueComparisonRule("LTE", 10), new ValueComparisonRule("GTE", 1) };
var schema = new Schema(false, myRules);

// Case 1: bad value
var validation = schema.Validate(0);

if (validation.Count > 0)
{
    // Case: bad value
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
} else
{
    // Case: good value
    Console.WriteLine("Value within range");
}


// Case 2: good value   
validation = schema.Validate(5);

if (validation.Count > 0)
{
    // Case: bad value
    Console.WriteLine(validation[0].Message);
    Console.WriteLine(validation[0].Code);
}
else
{
    // Case: good value
    Console.WriteLine("Value within range");
}

```
