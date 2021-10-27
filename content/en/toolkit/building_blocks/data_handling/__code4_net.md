
```cs
using PipServices3.Commons.Data;

var paging = new PagingParams(0, 100, true);

var page = await client.getMyObjects(filter, sorting, paging);

```
