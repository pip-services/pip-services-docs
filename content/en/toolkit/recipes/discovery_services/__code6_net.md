
```cs
await discovery.RegisterAsync("123", "key1", ConnectionParams.FromTuples(
    "param1", "val1",
    "param2", "val2"
));

var connections = await discovery.ResolveAllAsync(null, "key1");
// Returns [{'host': '10.1.1.100', 'port': '8080'}, {'param1': 'val1', 'param2': 'val2'}]
```
