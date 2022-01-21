
```cs
using PipServices3.Commons.Data;

var item = await persistence.GetOneRandomAsync(null, FilterParams.FromTuples("key", "key 2"));
```
