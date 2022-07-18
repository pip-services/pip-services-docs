
```cs
var result2 = mySet.Commands;

foreach (var command in result2)
{
    Console.WriteLine(command.Name);
}

// Returns    
// command1
// command2
// command3
// command1B
```
