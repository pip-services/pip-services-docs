
```cs

var result = await persistence.CreateAsync(null, dummy1);
Console.WriteLine($"Created Dummy with ID: {result.Id}");

result = await persistence.CreateAsync(null, dummy2);
Console.WriteLine($"Created Dummy with ID: {result.Id}");

result = await persistence.CreateAsync(null, dummy3);
Console.WriteLine($"Created Dummy with ID: {result.Id}");
```
