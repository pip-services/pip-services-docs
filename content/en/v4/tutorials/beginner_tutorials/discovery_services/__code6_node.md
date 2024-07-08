
```ts
await discovery.register(ctx, "key1", ConnectionParams.fromTuples(
    "param1", "val1",
    "param2", "val2"
));

let connection = await discovery.resolveAll(ctx, "key1"); // Returns {'host': '10.1.1.100', 'port': '8080'}
// Returns [{'host': '10.1.1.100', 'port': '8080'}, {'param1': 'val1', 'param2': 'val2'}]

```
