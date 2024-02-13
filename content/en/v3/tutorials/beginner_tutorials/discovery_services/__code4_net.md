
```cs
discovery.RegisterAsync("123", "key3", ConnectionParams.FromTuples(
    "host", "localhost", 
    "port", "8000"
)).Wait(); // Returns {"host": "localhost", "port": "8000"}

```
