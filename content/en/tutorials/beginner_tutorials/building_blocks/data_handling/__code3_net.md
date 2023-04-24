
```cs
using PipServices3.Commons.Data;

var sorting = SortParams.FromTuples("key1", true, "key2", false );

var values = await client.getMyObjects(filter, sorting);


```
