
```cs
using PipServices3.Commons.Data;

var projection = new ProjectionParams(new string[] { "field1", "field2" });

var page = await client.getMyObjects(filter, sorting, paging, projection);

```
