
```cs

// get one item
var page = await persistence.GetPageByFilterAsync(null,
    FilterParams.FromTuples("key", "key 2"),
    new PagingParams(0, null, true));

Console.WriteLine($"Has {page.Total} items");

foreach (var item in page.Data)
{
    Console.WriteLine($"{item.Id}, {item.Key}, {item.Content}");
}
```
