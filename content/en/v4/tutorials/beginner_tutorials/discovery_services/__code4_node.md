
```ts
await discovery.register(ctx, "key3", ConnectionParams.fromTuples(
    "host", "localhost",
    "port", "8000"
)); // Returns {"host": "localhost", "port": "8000"}
```
