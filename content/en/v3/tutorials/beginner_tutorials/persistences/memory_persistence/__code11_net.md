
```cs
// get all items 
var page = await persistence.GetPageByFilterAsync(null,
    FilterParams.FromTuples("id", "1"),
    new PagingParams(0, null, true));

Console.WriteLine($"Has {page.Total} items");
```
