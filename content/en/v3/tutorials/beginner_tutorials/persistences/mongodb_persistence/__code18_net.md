
```cs
var count = await persistence.GetCountByFilterAsync(null, FilterParams.FromTuples("key", "key 3"), null); // Returns 1
```
