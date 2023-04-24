
```cs
using PipServices3.Commons.Data;

var filter = FilterParams.FromTuples(
    "key1", "ABC",
    "key2", 123
);

var values = await client.getMyObjects(filter);

```
